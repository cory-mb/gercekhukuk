import FaqView, { faqMetadata } from "@/components/views/FaqView";

export const metadata = faqMetadata("en");

export default function Page() {
  return <FaqView lang="en" />;
}
