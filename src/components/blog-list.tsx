
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { PostData } from '@/lib/types';


type BlogListProps = {
    allPosts: Omit<PostData, 'content'>[];
}

export default function BlogList({ allPosts }: BlogListProps) {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {allPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full group">
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
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </CardFooter>
                  </div>
              </Card>
            </Link>
          ))}
        </div>
    </>
  );
}
