import BlogCard from '@/components/blog-card';
import type { PostData } from '@/lib/types';

export default function BlogList({ allPosts }: { allPosts: Omit<PostData, 'content'>[] }) {
  return (
    <div className="blog-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {allPosts.map(post => <BlogCard key={post.slug} post={post} />)}
    </div>
  );
}
