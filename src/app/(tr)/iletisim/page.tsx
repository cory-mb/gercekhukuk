import ContactView, { contactMetadata } from "@/components/views/ContactView";

export const metadata = contactMetadata("tr");

export default function Page() {
  return <ContactView lang="tr" />;
}
