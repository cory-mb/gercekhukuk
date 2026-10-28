import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumb from "@/components/Breadcrumb";
import { formatDate, getBlogPost, getBlogSlugs, getService } from "@/lib/content";
import { articleSchema, SITE_URL } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/yazilar/${slug}` },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Av. Kazım Onur Gerçek LL.M"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const service = post.service ? getService(post.service) : null;

  const schema = articleSchema({
    title: post.title,
    description: post.description,
    url: `${SITE_URL}/yazilar/${slug}`,
    datePublished: post.date,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="page-header">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Breadcrumb
            items={[
              { label: "Yazılar", href: "/yazilar" },
              { label: post.title, href: `/yazilar/${slug}` },
            ]}
          />
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 lg:px-12 py-14">
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.5625rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>
          {post.category}
        </p>
        <h1 style={{ fontFamily: "'EB Garamond', serif", fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 500, color: "var(--text)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", fontSize: "0.8125rem", color: "var(--text-muted)", marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
          <Link href="/hakkimda" rel="author" style={{ color: "inherit" }}>Av. Kazım Onur Gerçek LL.M</Link>
          <span style={{ color: "var(--border)" }}>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span style={{ color: "var(--border)" }}>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose-content">
          <MDXRemote source={post.content} />
        </div>

        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1px solid var(--border)" }}>
          <div style={{ marginBottom: "2rem", fontSize: "0.875rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
            <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: "0.25rem" }}>Yazar hakkında</p>
            <p>
              Av. Kazım Onur Gerçek LL.M, 2014–2020 yılları arasında Yeditepe Üniversitesi&apos;nde kıdemli avukat olarak kurumun dava,
              sözleşme ve KVKK uyum süreçlerini yürüttü. Ekim 2020&apos;den bu yana serbest avukat, 2023&apos;ten bu yana arabulucudur.{" "}
              <Link href="/hakkimda">Özgeçmiş</Link>
            </p>
          </div>
          <div style={{ background: "var(--stone-2)", padding: "2rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.25rem", fontWeight: 500, color: "var(--text)" }}>
                Bu konuda hukuki destek almak ister misiniz?
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
          <div style={{ marginTop: "1.5rem" }}>
            <Link href="/yazilar" style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none" }}>
              ← Tüm Yazılar
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
