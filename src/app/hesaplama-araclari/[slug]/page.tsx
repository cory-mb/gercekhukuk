import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import Calculator, { type ToolKey } from "@/components/Calculators";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/schema";
import { getService, getTools } from "@/lib/content";
import { GUNCELLEME } from "@/lib/hesaplama/parametreler.ts";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getTools().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTools().find((x) => x.slug === slug);
  if (!t) return {};
  return buildMetadata({ title: t.seoTitle ?? t.title, description: t.description, path: `/hesaplama-araclari/${slug}` });
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const t = getTools().find((x) => x.slug === slug);
  if (!t) notFound();
  const service = t.service ? getService(t.service) : null;

  return (
    <>
      {t.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(t.faqs.map((f) => ({ question: f.q, answer: f.a })))) }}
        />
      )}

      <div className="page-header">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Hesaplama Araçları", href: "/hesaplama-araclari" }, { label: t.title, href: `/hesaplama-araclari/${slug}` }]} />
          <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", fontWeight: 500, color: "var(--text)", marginTop: "1.5rem", lineHeight: 1.15 }}>
            {t.title}
          </h1>
          <p style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--text-muted)" }}>Parametreler: {GUNCELLEME}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-14">
        <Calculator tool={t.tool as ToolKey} />
        <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
          Sonuçlar bilgilendirme amaçlı bir tahmindir ve hukuki görüş yerine geçmez.
        </p>

        <div className="prose-content" style={{ marginTop: "3rem" }}>
          <MDXRemote source={t.content} />

          {t.faqs.length > 0 && (
            <>
              <h2>Sık Sorulan Sorular</h2>
              {t.faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>{f.q}</summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              ))}
            </>
          )}
        </div>

        <div style={{ marginTop: "3rem", background: "var(--stone-2)", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
              Sonucu kendi durumunuza göre değerlendirmek ister misiniz?
            </p>
            {service && (
              <Link href={`/hizmetler/${service.slug}`} style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                İlgili hizmet: {service.title}
              </Link>
            )}
          </div>
          <Link href="/iletisim" className="btn-primary">
            Randevu Talep Et
          </Link>
        </div>
      </div>
    </>
  );
}
