import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = buildMetadata({
  title: "Hukuki Yazılar ve Makaleler",
  description:
    "Yükseköğretim hukuku, doçentlik davaları, iş hukuku ve arabuluculuk konularında güncel hukuki yazılar. Av. Kazım Onur Gerçek LL.M.",
  path: "/yazilar",
});

export default function YazilarPage() {
  const posts = getBlogPosts();

  return (
    <>
      <div className="page-header">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Yazılar", href: "/yazilar" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Hukuki Yazılar
          </h1>
          <p style={{ marginTop: "0.75rem", color: "var(--text-muted)", fontSize: "0.9375rem", maxWidth: "42rem" }}>
            Yükseköğretim hukuku, doçentlik davaları, iş hukuku ve arabuluculuk konularında güncel değerlendirmeler.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-14">
        {posts.length === 0 ? (
          <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem" }}>Henüz yazı eklenmemiş.</p>
        ) : (
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {posts.map((post) => (
              <article key={post.slug} style={{ padding: "2rem 0", borderBottom: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.625rem" }}>
                  {post.category}
                </p>
                <h2 style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.375rem", fontWeight: 500, color: "var(--text)", lineHeight: 1.3, marginBottom: "0.5rem" }}>
                  <Link href={`/yazilar/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1rem" }}>{post.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-light)" }}>{post.date} &nbsp;·&nbsp; {post.readTime}</span>
                  <Link
                    href={`/yazilar/${post.slug}`}
                    style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}
                  >
                    Devamını Oku
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
