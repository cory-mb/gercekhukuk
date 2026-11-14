import Script from "next/script";
import AnalyticsEvents from "@/components/AnalyticsEvents";

// GA4. Kimlik yoksa (yerel geliştirme, önizleme) hiçbir şey yüklenmez.
// anonymize_ip GA4'te varsayılandır; reklam sinyalleri kapatıldı (reklam özelliği kullanılmıyor).
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || process.env.NODE_ENV !== "production") return null;
  return (
    <>
      <AnalyticsEvents />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}',{allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
    </>
  );
}
