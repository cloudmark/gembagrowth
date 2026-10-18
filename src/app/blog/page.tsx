import { getSortedPostsData } from '@/lib/posts';
import BlogClient from '@/components/blog-client';
import Disclaimer from '@/components/disclaimer';
import HeroSection from '@/components/hero-section';

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
    <div className="blog-surface blog-index">
      <div className="blog-index-content">
        <HeroSection />
        {isPreview && (
          <div className="mb-4 w-fit bg-yellow-200 text-yellow-900 px-3 py-1 rounded-md text-sm font-bold">
            PREVIEW MODE
          </div>
        )}

        <BlogClient allPosts={allPosts} />
      </div>
      <Disclaimer />
    </div>
  );
}
