import Link from 'next/link';
import Image from 'next/image';
import { getThumbnailStyle } from '@/lib/thumbnail-framing';
import { ArrowRight } from 'lucide-react';
import type { PostData } from '@/lib/types';

type BlogCardProps = {
  post: Omit<PostData, 'content'>;
  imageSizes?: string;
};

export default function BlogCard({ post, imageSizes = '(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw' }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card-link group" aria-label={`Read ${post.title}`}>
      <article className="blog-card">
        {post.coverImage && (
          <div className="blog-card-cover">
            <Image src={post.coverImage} alt={post.title} width={400} height={250}
              sizes={imageSizes}
              style={getThumbnailStyle(post.coverImage)}
              className="blog-card-image" />
          </div>
        )}
        <div className="blog-card-copy">
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt line-clamp-3">{post.excerpt}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="blog-tags">
              {post.tags.slice(0, 3).map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
            </div>
          )}
        </div>
        <div className="blog-card-actions">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
          <span className="blog-read-more">Read More <ArrowRight aria-hidden="true" /></span>
        </div>
      </article>
    </Link>
  );
}
