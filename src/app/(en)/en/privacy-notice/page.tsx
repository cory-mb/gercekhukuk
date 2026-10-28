import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { EMAIL } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description: "Privacy notice on the processing of personal data — Gerçek Law and Mediation Office.",
  path: "/en/privacy-notice",
  noIndex: true,
  lang: "en",
});

// Türkçe /kvkk metninin çevirisi; hukuken Türkçe metin esas.
export default function PrivacyNoticePage() {
  return (
    <>
      <div className="page-header">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Breadcrumb lang="en" items={[{ label: "Privacy Notice", href: "/en/privacy-notice" }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            Privacy Notice on the Processing of Personal Data
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-14 prose-content">
        <p>
          <em>This is an English translation of our <a href="/kvkk" lang="tr">Turkish privacy notice</a>. In case of any discrepancy, the Turkish text prevails.</em>
        </p>
        <p>
          As Gerçek Law and Mediation Office (Gerçek Hukuk ve Arabuluculuk Bürosu), we process the personal data obtained when you use our
          website as data controller under Personal Data Protection Law No. 6698 (&quot;KVKK&quot;) and related legislation, as explained below.
          The data controller is Av. Kazım Onur Gerçek.
        </p>

        <h2>How we collect personal data and what we process</h2>
        <p>
          Personal data is collected when you complete and send the electronic form in the Contact section. If you use the form, your first
          and last name, email address, phone number, subject and any personal information in your message may be processed.
        </p>
        <p>
          When you visit the website, the hosting provider&apos;s server logs may record your IP address, connection date and time and browser
          information to keep the site secure and running. The site does not use advertising or tracking cookies.
        </p>

        <h2>Purposes and legal grounds</h2>
        <p>
          Your personal data is processed so that you can benefit from our legal, mediation and advisory services, to answer your request, to
          communicate with you and to comply with legal obligations.
        </p>
        <p>
          Data you share through the contact form is processed on the ground that it is directly related to entering into a contract (KVKK
          Art. 5(2)(c)); server logs are processed on the ground of the controller&apos;s legitimate interest, provided it does not harm your
          fundamental rights and freedoms (KVKK Art. 5(2)(f)).
        </p>

        <h2>To whom and why personal data may be transferred</h2>
        <p>
          Our website hosting and the email service through which form messages are delivered are provided by companies with servers outside
          Turkey. Your personal data is therefore transferred to those providers&apos; servers abroad, only for the purposes above and under the
          conditions set out in Article 9 of the KVKK.
        </p>

        <h2>Your rights under Article 11 of the KVKK</h2>
        <p>Subject to the exceptions in Article 28 of the KVKK, you have the right to apply to us to:</p>
        <ol type="a">
          <li>learn whether your personal data is processed,</li>
          <li>request information if it has been processed,</li>
          <li>learn the purpose of processing and whether it is used accordingly,</li>
          <li>know the third parties in Turkey or abroad to whom it is transferred,</li>
          <li>request correction if it is incomplete or inaccurate,</li>
          <li>request erasure or destruction under the conditions in Article 7 of the Law,</li>
          <li>request that actions under (e) and (f) be notified to third parties to whom the data was transferred,</li>
          <li>object to a result against you arising from analysis exclusively by automated systems,</li>
          <li>claim compensation if you suffer damage due to unlawful processing.</li>
        </ol>
        <p>
          You may send requests with a document proving your identity, or through a notarised power of attorney showing authority to apply,
          with a wet signature to Av. Kazım Onur Gerçek at Erenköy Mah. Sadi Yaver Ataman Sok. No:5/41 Kadıköy/İstanbul, or electronically to
          {" "}{EMAIL} with the subject line &quot;Kişisel Veri Bilgi Talebi&quot; (personal data request).
        </p>
        <p>
          Requests are concluded as soon as possible and within thirty days at the latest, free of charge. If the request involves an
          additional cost, the fee set in Article 7 of the Communiqué on the Procedures and Principles of Applications to the Data Controller
          may be charged.
        </p>

        <p className="text-xs mt-8" style={{ color: "var(--text-light)" }}>Last updated: October 2026</p>
      </div>
    </>
  );
}
