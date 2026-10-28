import type { Metadata } from "next";
import BlogPostView, { postMetadata } from "@/components/views/BlogPostView";
import { getBlogSlugs } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getBlogSlugs("tr").map((slug) => ({ slug }));
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => postMetadata("tr", (await params).slug);

export default async function Page({ params }: Props) {
  return <BlogPostView lang="tr" slug={(await params).slug} />;
}
