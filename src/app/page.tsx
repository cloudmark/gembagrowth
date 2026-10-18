import { getSortedPostsData } from '@/lib/posts';
import HeroSection from '@/components/hero-section';
import PersonalStory from '@/components/personal-story';
import BlogCard from '@/components/blog-card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Disclaimer from '@/components/disclaimer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const featuredPosts = getSortedPostsData().slice(0, 4);

  return (
    <div className="blog-surface home-blog">
      <HeroSection />
      <section id="blog" className="home-posts" aria-labelledby="latest-posts-heading">
        <div className="blog-section-heading">
          <h2 id="latest-posts-heading">Latest Insights</h2>
          <p>Thoughts and learnings from my journey in continuous improvement.</p>
        </div>
        <Carousel opts={{ align: 'start', loop: true }} className="home-carousel">
          <CarouselContent>
            {featuredPosts.map(post => (
              <CarouselItem key={post.slug} className="md:basis-1/2">
                <BlogCard post={post} imageSizes="(min-width: 1280px) 592px, (min-width: 768px) 50vw, 100vw" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="home-carousel-controls">
            <CarouselPrevious className="blog-filter-button" />
            <CarouselNext className="blog-filter-button" />
          </div>
        </Carousel>
      </section>
      <PersonalStory />
      <Disclaimer />
    </div>
  );
}
