#!/usr/bin/env python3
"""Pull GSC + GA4 data for gercekhukuk.com.tr and bake it into dashboard.html.

Usage: python3 dashboard/fetch.py   (writes dashboard/dist/dashboard.html + data.json)
Auth: service account JSON (needs GSC user + GA4 Viewer on the gercekhukuk properties).
Config: ~/.config/claude-seo/google-api.json gives service_account_path and, by default,
default_property / ga4_property_id. That file may hold another site's values, so set
GSC_SITE (e.g. "sc-domain:gercekhukuk.com.tr" or "https://www.gercekhukuk.com.tr/") and
GA4_PROPERTY_ID in the environment to override them for this site.
"""
import base64
import datetime as dt
import json
import os
import re
import warnings
from collections import defaultdict
from pathlib import Path

warnings.filterwarnings("ignore")
from google.auth.transport.requests import AuthorizedSession  # noqa: E402
from google.oauth2 import service_account  # noqa: E402

HERE = Path(__file__).parent
CFG = json.load(open(os.path.expanduser("~/.config/claude-seo/google-api.json")))
SITE = os.environ.get("GSC_SITE") or CFG["default_property"]
GA4 = os.environ.get("GA4_PROPERTY_ID") or CFG["ga4_property_id"]
creds = service_account.Credentials.from_service_account_file(
    os.path.expanduser(CFG["service_account_path"]),
    scopes=["https://www.googleapis.com/auth/webmasters.readonly",
            "https://www.googleapis.com/auth/analytics.readonly"])
S = AuthorizedSession(creds)

LEAD_EVENTS = ["whatsapp_click", "contact_form_sent"]
TRACKING_START = "2026-11-14"  # GA4 + custom lead events added (commits 554e873, e40b358)

# First match wins. Order matters: brand before everything, specific before generic.
GROUPS = [
    ("Marka", r"g[eé]rçek hukuk|gercek hukuk|kaz[iı]m onur|onur gerçek|onur gercek"),
    ("Doçentlik / Yükseköğretim", r"do[cç]entlik|y[uü]kseköğre|yuksekogre|j[uü]ri|vak[iı]f [uü]niversite|[uü]niversite"),
    ("Hesaplama araçları", r"hesapla|k[iı]dem|ihbar|kira art[iı][sş]|yasal faiz|faiz oran"),
    ("Arabuluculuk", r"arabulucu"),
    ("İş hukuku", r"i[sş]e iade|fazla mesai|i[sş] hukuku|i[sş] davas|tazminat"),
    ("İcra hukuku", r"icra|haciz|itiraz"),
    ("Aile hukuku", r"bo[sş]an|nafaka|velayet|aile hukuku"),
    ("Bilişim suçları", r"bili[sş]im|siber|hesap ele ge[cç]ir"),
    ("Şirketler / KVKK", r"kvkk|ki[sş]isel veri|[sş]irket|s[oö]zle[sş]me|uyum"),
]
TRACKED = [
    "docentlik-iptal-davalari", "yuksekogrenim-hukuku", "arabuluculuk", "is-hukuku",
    "kidem-ve-ihbar-tazminati", "kira-artis-orani", "arabuluculuk-ucreti", "yasal-faiz",
    "docentlik-basvurusunun-reddi", "avukatlar-icin-kvkk",
]


def group_of(q):
    for name, rx in GROUPS:
        if re.search(rx, q, re.I):
            return name
    return "Diğer"


def d(x):
    return x.isoformat()


# ---------- date windows ----------
today = dt.date.today()
gsc_end = today - dt.timedelta(days=3)  # GSC data lag
ga_end = today - dt.timedelta(days=1)


def windows(end):
    cur = (end - dt.timedelta(days=27), end)
    prev = (end - dt.timedelta(days=55), end - dt.timedelta(days=28))
    return cur, prev


# ---------- GSC ----------
def gsc(start, end, dims, limit=25000):
    url = f"https://www.googleapis.com/webmasters/v3/sites/{SITE.replace(':', '%3A').replace('/', '%2F')}/searchAnalytics/query"
    r = S.post(url, json={"startDate": d(start), "endDate": d(end), "dimensions": dims, "rowLimit": limit})
    r.raise_for_status()
    return r.json().get("rows", [])


def path_of(url):
    p = re.sub(r"^https?://(www\.)?gercekhukuk\.com\.tr", "", url)
    return p or "/"


def gsc_block():
    cur, prev = windows(gsc_end)
    daily = gsc(gsc_end - dt.timedelta(days=26 * 7 - 1), gsc_end, ["date"])
    weekly = defaultdict(lambda: {"clicks": 0, "impressions": 0, "posw": 0.0})
    for r in daily:
        day = dt.date.fromisoformat(r["keys"][0])
        # bucket = 7-day windows ending at gsc_end, labelled by window start
        idx = (gsc_end - day).days // 7
        wk = d(gsc_end - dt.timedelta(days=idx * 7 + 6))
        w = weekly[wk]
        w["clicks"] += r["clicks"]
        w["impressions"] += r["impressions"]
        w["posw"] += r["position"] * r["impressions"]
    weeks = [{"week": k, "clicks": v["clicks"], "impressions": v["impressions"],
              "position": round(v["posw"] / v["impressions"], 1) if v["impressions"] else None}
             for k, v in sorted(weekly.items())]

    def totals(rows):
        c = sum(r["clicks"] for r in rows)
        i = sum(r["impressions"] for r in rows)
        p = sum(r["position"] * r["impressions"] for r in rows) / i if i else 0
        return {"clicks": c, "impressions": i, "ctr": c / i if i else 0, "position": round(p, 1)}

    kpi = {"cur": totals(gsc(*cur, ["date"])), "prev": totals(gsc(*prev, ["date"]))}

    qc = {r["keys"][0]: r for r in gsc(*cur, ["query"])}
    qp = {r["keys"][0]: r for r in gsc(*prev, ["query"])}

    groups = defaultdict(lambda: {"cur": {"clicks": 0, "impressions": 0, "posw": 0}, "prev": {"clicks": 0, "impressions": 0, "posw": 0}, "top": []})
    for side, src in (("cur", qc), ("prev", qp)):
        for q, r in src.items():
            g = groups[group_of(q)][side]
            g["clicks"] += r["clicks"]
            g["impressions"] += r["impressions"]
            g["posw"] += r["position"] * r["impressions"]
    for q, r in qc.items():
        groups[group_of(q)]["top"].append({"query": q, "clicks": r["clicks"], "impressions": r["impressions"], "position": round(r["position"], 1)})
    group_rows = []
    for name in [g[0] for g in GROUPS] + ["Diğer"]:
        g = groups[name]
        row = {"group": name}
        for side in ("cur", "prev"):
            s = g[side]
            row[side] = {"clicks": s["clicks"], "impressions": s["impressions"],
                         "position": round(s["posw"] / s["impressions"], 1) if s["impressions"] else None}
        row["top"] = sorted(g["top"], key=lambda x: (-x["clicks"], -x["impressions"]))[:8]
        group_rows.append(row)

    # Opportunities: page 1-2 rankings with impressions but weak CTR
    opps = [{"query": q, "clicks": r["clicks"], "impressions": r["impressions"], "ctr": r["ctr"],
             "position": round(r["position"], 1), "group": group_of(q)}
            for q, r in qc.items()
            if r["impressions"] >= 30 and 3 <= r["position"] <= 15 and r["ctr"] < 0.03]
    opps.sort(key=lambda x: -x["impressions"])

    pc = {path_of(r["keys"][0]): r for r in gsc(*cur, ["page"])}
    pp = {path_of(r["keys"][0]): r for r in gsc(*prev, ["page"])}
    pages = []
    for p in set(pc) | set(pp):
        a, b = pc.get(p), pp.get(p)
        pages.append({"page": p,
                      "clicks": a["clicks"] if a else 0, "impressions": a["impressions"] if a else 0,
                      "position": round(a["position"], 1) if a else None,
                      "prevClicks": b["clicks"] if b else 0, "prevImpressions": b["impressions"] if b else 0,
                      "prevPosition": round(b["position"], 1) if b else None})
    pages.sort(key=lambda x: (-x["clicks"], -x["impressions"]))

    tracked = []
    for slug in TRACKED:
        hit = next((p for p in pages if slug in p["page"] and not p["page"].startswith("/en")), None)
        tracked.append(hit or {"page": f"/…{slug}", "clicks": 0, "impressions": 0, "position": None,
                               "prevClicks": 0, "prevImpressions": 0, "prevPosition": None})

    return {"range": {"cur": [d(cur[0]), d(cur[1])], "prev": [d(prev[0]), d(prev[1])]},
            "kpi": kpi, "weekly": weeks, "groups": group_rows, "opportunities": opps[:25],
            "pages": pages[:60], "tracked": tracked}


# ---------- GA4 ----------
def ga(start, end, dims, metrics, flt=None, limit=1000, order=None):
    body = {"dateRanges": [{"startDate": d(start), "endDate": d(end)}],
            "dimensions": [{"name": x} for x in dims], "metrics": [{"name": x} for x in metrics], "limit": limit}
    if flt:
        body["dimensionFilter"] = flt
    if order:
        body["orderBys"] = [{"metric": {"metricName": order}, "desc": True}]
    r = S.post(f"https://analyticsdata.googleapis.com/v1beta/properties/{GA4}:runReport", json=body)
    r.raise_for_status()
    out = []
    for row in r.json().get("rows", []):
        rec = {k: v["value"] for k, v in zip(dims, row.get("dimensionValues", []))}
        for k, v in zip(metrics, row["metricValues"]):
            rec[k] = float(v["value"])
        out.append(rec)
    return out


EV_FILTER = {"filter": {"fieldName": "eventName", "inListFilter": {"values": LEAD_EVENTS}}}
# Site links go to api.whatsapp.com/send; GA4 enhanced measurement records them as outbound "click" events.
WA_FILTER = {"andGroup": {"expressions": [
    {"filter": {"fieldName": "eventName", "stringFilter": {"value": "click"}}},
    {"orGroup": {"expressions": [
        {"filter": {"fieldName": "linkUrl", "stringFilter": {"matchType": "CONTAINS", "value": "whatsapp.com"}}},
        {"filter": {"fieldName": "linkUrl", "stringFilter": {"matchType": "CONTAINS", "value": "wa.me"}}}]}}]}}


def ga_block():
    cur, prev = windows(ga_end)
    base = ["sessions", "totalUsers", "engagedSessions", "averageSessionDuration"]

    def kpi(rng):
        t = ga(*rng, [], base)
        t = t[0] if t else {m: 0 for m in base}
        ev = {r["eventName"]: r["eventCount"] for r in ga(*rng, ["eventName"], ["eventCount"], EV_FILTER)}
        wa_out = sum(r["eventCount"] for r in ga(*rng, [], ["eventCount"], WA_FILTER))
        return {**t, "events": {e: ev.get(e, 0) for e in LEAD_EVENTS}, "waOutbound": wa_out}

    start26 = ga_end - dt.timedelta(days=26 * 7 - 1)
    daily = ga(start26, ga_end, ["date"], ["sessions", "engagedSessions"])
    evd = ga(start26, ga_end, ["date"], ["eventCount"], EV_FILTER)
    wad = ga(start26, ga_end, ["date"], ["eventCount"], WA_FILTER)
    weekly = defaultdict(lambda: {"sessions": 0, "engaged": 0, "leads": 0})

    def bucket(s):
        day = dt.datetime.strptime(s, "%Y%m%d").date()
        return d(ga_end - dt.timedelta(days=((ga_end - day).days // 7) * 7 + 6))

    for r in daily:
        w = weekly[bucket(r["date"])]
        w["sessions"] += r["sessions"]
        w["engaged"] += r["engagedSessions"]
    # shortcut: before TRACKING_START, WhatsApp outbound clicks are the only lead signal; after it, whatsapp_click
    # double-counts them, so only custom events count from then on.
    for r in evd:
        weekly[bucket(r["date"])]["leads"] += r["eventCount"]
    for r in wad:
        if r["date"] < TRACKING_START.replace("-", ""):
            weekly[bucket(r["date"])]["leads"] += r["eventCount"]
    weeks = [{"week": k, **v} for k, v in sorted(weekly.items())]

    channels = {}
    for side, rng in (("cur", cur), ("prev", prev)):
        for r in ga(*rng, ["sessionDefaultChannelGroup"], ["sessions", "engagedSessions"]):
            c = channels.setdefault(r["sessionDefaultChannelGroup"], {"cur": 0, "prev": 0, "engaged": 0})
            c[side] = r["sessions"]
            if side == "cur":
                c["engaged"] = r["engagedSessions"]
    lead_by_ch = defaultdict(float)
    for r in ga(*cur, ["sessionDefaultChannelGroup"], ["eventCount"], EV_FILTER):
        lead_by_ch[r["sessionDefaultChannelGroup"]] += r["eventCount"]
    channel_rows = sorted([{"channel": k, **v, "leads": lead_by_ch.get(k, 0)} for k, v in channels.items()],
                          key=lambda x: -x["cur"])

    landing = ga(*cur, ["landingPage"], ["sessions", "engagedSessions", "averageSessionDuration"], order="sessions", limit=40)
    lead_lp = defaultdict(lambda: defaultdict(float))
    for r in ga(*cur, ["landingPage", "eventName"], ["eventCount"], EV_FILTER):
        lead_lp[r["landingPage"]][r["eventName"]] += r["eventCount"]
    for r in ga(*cur, ["landingPage"], ["eventCount"], WA_FILTER):
        lead_lp[r["landingPage"]]["wa_outbound"] += r["eventCount"]
    lp_rows = []
    for r in landing:
        ev = lead_lp.get(r["landingPage"], {})
        lp_rows.append({"page": r["landingPage"], "sessions": r["sessions"],
                        "engagement": r["engagedSessions"] / r["sessions"] if r["sessions"] else 0,
                        "duration": r["averageSessionDuration"],
                        "leads": sum(v for k, v in ev.items() if k != "wa_outbound"),
                        "waOutbound": ev.get("wa_outbound", 0)})

    city = ga(*cur, ["city"], ["sessions"], order="sessions", limit=8)
    device = ga(*cur, ["deviceCategory"], ["sessions"], order="sessions")

    return {"range": {"cur": [d(cur[0]), d(cur[1])], "prev": [d(prev[0]), d(prev[1])]},
            "trackingStart": TRACKING_START,
            "kpi": {"cur": kpi(cur), "prev": kpi(prev)}, "weekly": weeks, "channels": channel_rows,
            "landing": lp_rows, "city": city, "device": device}


def main():
    data = {"generated": dt.datetime.now().strftime("%Y-%m-%d %H:%M"), "gsc": gsc_block(), "ga": ga_block()}
    (HERE / "dist").mkdir(exist_ok=True)
    (HERE / "dist" / "data.json").write_text(json.dumps(data, ensure_ascii=False, indent=1))
    html = (HERE / "template.html").read_text()
    logo = base64.b64encode((HERE.parent / "public" / "logo.png").read_bytes()).decode()
    html = html.replace("__LOGO__", "data:image/png;base64," + logo)
    marker = "/*__DATA__*/null"
    assert marker in html, "template.html missing data marker"
    out = html.replace(marker, json.dumps(data, ensure_ascii=False).replace("</", "<\\/"))
    (HERE / "dist" / "dashboard.html").write_text(out)
    print("ok", data["generated"], "gsc clicks:", data["gsc"]["kpi"]["cur"]["clicks"],
          "ga sessions:", data["ga"]["kpi"]["cur"]["sessions"])


if __name__ == "__main__":
    main()
