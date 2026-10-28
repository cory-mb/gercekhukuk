import type { Metadata } from "next";
import ToolView, { toolMetadata } from "@/components/views/ToolView";
import { getTools } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getTools("tr").map((t) => ({ slug: t.slug }));
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => toolMetadata("tr", (await params).slug);

export default async function Page({ params }: Props) {
  return <ToolView lang="tr" slug={(await params).slug} />;
}
