
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { getSortedPostsData } from '@/lib/posts';
import HeroSection from '@/components/hero-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Disclaimer from '@/components/disclaimer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const featuredPosts = getSortedPostsData().slice(0, 4);

  return (
    <>
      {/* Hero and About Section */}
      <HeroSection />
      
      {/* Featured Blog Posts */}
      <section id="blog" className="pt-8 pb-16 sm:pt-12 sm:pb-24 mb-16">
        <div className="bg-transparent rounded-lg">
          <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-headline text-4xl font-bold text-primary">Latest Insights</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Thoughts and learnings from my journey in continuous improvement.
              </p>
            </div>
            <div className="mt-12">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {featuredPosts.map(post => (
                     <CarouselItem key={post.slug} className="md:basis-1/2">
                      <div className="p-4 h-full">
                        <Link href={`/blog/${post.slug}`} className="block h-full group">
                            <Card className="flex flex-col h-full overflow-hidden">
                                {post.coverImage && (
                                <div className="flex-shrink-0 overflow-hidden">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        className="h-56 w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-105"
                                    />
                                </div>
                                )}
                                <div className="flex flex-1 flex-col justify-between">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl leading-tight text-primary">
                                        <span className="group-hover:text-accent transition-colors">
                                            {post.title}
                                        </span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                                </CardContent>
                                <CardFooter className="flex-col items-start gap-4">
                                    {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2">
                                        {post.tags.slice(0, 3).map((tag) => (
                                        <Badge key={tag} variant="secondary" className="font-semibold">
                                            {tag}
                                        </Badge>
                                        ))}
                                    </div>
                                    )}
                                    <div className="w-full flex justify-between items-center text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                                    </div>
                                    <div className="text-accent font-semibold flex items-center">
                                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                                    </div>
                                    </div>
                                </CardFooter>
                                </div>
                            </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <Disclaimer />
    </>
  );
}
