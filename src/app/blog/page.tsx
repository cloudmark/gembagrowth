
import { getSortedPostsData } from '@/lib/posts';
import BlogClient from '@/components/blog-client';
import Disclaimer from '@/components/disclaimer';

export const dynamic = 'force-dynamic';

type BlogPageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function BlogPage({ searchParams }: BlogPageProps) {
  const isPreview = searchParams.preview === 'true';
  const allPosts = getSortedPostsData({ preview: isPreview });

  return (
    <div className="bg-transparent">
      <div className="py-8 sm:py-12">
        <div className="text-center mb-8 relative">
          <h1 className="text-5xl font-headline font-bold text-primary tracking-tight">Blog</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Thoughts, ideas and insights gathered over the years..
          </p>
          {isPreview && (
            <div className="absolute top-0 right-0 bg-yellow-200 text-yellow-900 px-3 py-1 rounded-md text-sm font-bold">
              PREVIEW MODE
            </div>
          )}
        </div>
        
        <BlogClient allPosts={allPosts} />
      </div>
      <Disclaimer />
    </div>
  );
}
