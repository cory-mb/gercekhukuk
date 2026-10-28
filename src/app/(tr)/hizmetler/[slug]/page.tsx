import type { Metadata } from "next";
import ServiceView, { serviceMetadata } from "@/components/views/ServiceView";
import { getServices } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => getServices("tr").map((s) => ({ slug: s.slug }));
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => serviceMetadata("tr", (await params).slug);

export default async function Page({ params }: Props) {
  return <ServiceView lang="tr" slug={(await params).slug} />;
}
