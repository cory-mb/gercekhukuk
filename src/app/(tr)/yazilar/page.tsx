import BlogIndexView, { articlesIndexMetadata } from "@/components/views/BlogIndexView";

export const metadata = articlesIndexMetadata("tr");

export default function Page() {
  return <BlogIndexView lang="tr" />;
}
