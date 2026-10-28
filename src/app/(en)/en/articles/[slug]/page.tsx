import type { Metadata } from "next";
import BlogPostView, { postMetadata } from "@/components/views/BlogPostView";
import { getBlogSlugs } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getBlogSlugs("en").map((slug) => ({ slug }));
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => postMetadata("en", (await params).slug);

export default async function Page({ params }: Props) {
  return <BlogPostView lang="en" slug={(await params).slug} />;
}
