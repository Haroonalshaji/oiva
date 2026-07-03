import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JournalPost } from "@/components/journal/JournalPost";
import { getPost, posts } from "@/data/posts";
import { createPageMetadata } from "@/lib/seo";
import { postImage } from "@/lib/images";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    image: postImage(post.slug),
    type: "article",
  });
}

export default function JournalPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <JournalPost post={post} />;
}
