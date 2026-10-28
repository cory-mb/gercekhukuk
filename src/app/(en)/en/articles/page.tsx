import BlogIndexView, { articlesIndexMetadata } from "@/components/views/BlogIndexView";

export const metadata = articlesIndexMetadata("en");

export default function Page() {
  return <BlogIndexView lang="en" />;
}
