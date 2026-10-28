import FaqView, { faqMetadata } from "@/components/views/FaqView";

export const metadata = faqMetadata("tr");

export default function Page() {
  return <FaqView lang="tr" />;
}
