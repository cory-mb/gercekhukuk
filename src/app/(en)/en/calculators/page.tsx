import ToolsIndexView, { toolsIndexMetadata } from "@/components/views/ToolsIndexView";

export const metadata = toolsIndexMetadata("en");

export default function Page() {
  return <ToolsIndexView lang="en" />;
}
