import type { Metadata } from "next";
import ToolView, { toolMetadata } from "@/components/views/ToolView";
import { getTools } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getTools("en").map((t) => ({ slug: t.slug }));
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => toolMetadata("en", (await params).slug);

export default async function Page({ params }: Props) {
  return <ToolView lang="en" slug={(await params).slug} />;
}
