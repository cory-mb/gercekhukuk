"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

// Tek dinleyici: sitedeki tüm WhatsApp bağlantıları (buton, ana sayfa, iletişim) için.
export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href*='whatsapp.com']");
      if (a) track("whatsapp_click", { page_path: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
