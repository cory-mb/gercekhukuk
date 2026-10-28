import ServicesIndexView, { servicesIndexMetadata } from "@/components/views/ServicesIndexView";

export const metadata = servicesIndexMetadata("en");

export default function Page() {
  return <ServicesIndexView lang="en" />;
}
