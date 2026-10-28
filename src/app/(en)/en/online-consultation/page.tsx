import OnlineView, { onlineMetadata } from "@/components/views/OnlineView";

export const metadata = onlineMetadata("en");

export default function Page() {
  return <OnlineView lang="en" />;
}
