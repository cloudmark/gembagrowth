
import { getPostBySlug, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Calendar, User, HelpCircle, ChevronRightCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import FiveStrategies from '@/components/five-strategies';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Disclaimer from '@/components/disclaimer';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug, { preview: true });
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gembagrowth.com';
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.coverImage ? `${siteUrl}${post.coverImage}` : `${siteUrl}/profile.JPG`;

  return {
    title: `${post.title} | GembaGrowth`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

const STRATEGIES_PLACEHOLDER = '<!-- 5-strategies-placeholder -->';

const getNodeText = (node: React.ReactNode): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (node === null || node === undefined) return '';
  if (Array.isArray(node)) return node.map(getNodeText).join('');
  if (React.isValidElement(node) && node.props.children) return getNodeText(node.props.children);
  return '';
};

const renderChildrenWithoutPrefix = (node: React.ReactNode, prefix: string): React.ReactNode => {
  let prefixRemoved = false;
  const processNode = (childNode: React.ReactNode, key: string | number): React.ReactNode => {
    if (prefixRemoved || childNode === null || childNode === undefined) return childNode;
    if (typeof childNode === 'string') {
      if (childNode.trim().startsWith(prefix)) {
        prefixRemoved = true;
        return childNode.replace(prefix, '');
      }
      return childNode;
    }
    if (Array.isArray(childNode)) return React.Children.map(childNode, (child, index) => processNode(child, index));
    if (React.isValidElement(childNode) && (childNode.props as any).children) {
      return React.cloneElement(
        childNode, 
        { ...childNode.props, key: key } as any, 
        React.Children.map((childNode.props as any).children, (child, index) => processNode(child, index))
      );
    }
    return childNode;
  };
  return React.Children.map(node, (child, index) => processNode(child, index));
};

const CustomMarkdown = ({ content }: { content: string }) => {
    const components = {
        img: ({node, ...props}: any) => (
          <span className="block text-center my-6">
            <Image
              src={props.src || ''}
              alt={props.alt || ''}
              width={700}
              height={400}
              className="rounded-lg shadow-lg object-contain w-full inline-block"
            />
          </span>
        ),
        strong: ({node, ...props}: any) => (
            <strong className="text-primary" {...props} />
        ),
        ul: ({ node, ...props }: any) => <ul className="list-none p-0 my-4 space-y-2" {...props} />,
        li: ({ node, children, ...props }: any) => {
            const text = getNodeText(children);
            const trimmedText = text.trim();
            const lineBreakMarker = '||';

            const renderWithLineBreak = (icon: React.ReactNode, content: React.ReactNode, prefix: string) => {
                const processedContent = renderChildrenWithoutPrefix(content, prefix);
                const contentString = getNodeText(processedContent);
                
                if (contentString.includes(lineBreakMarker)) {
                    const [firstLine, ...rest] = contentString.split(lineBreakMarker);
                    const remainingText = rest.join(lineBreakMarker);
                    return (
                         <li className="flex items-start gap-3 my-2" {...props}>
                            {icon}
                            <div className="flex flex-col">
                                <span><ReactMarkdown remarkPlugins={[remarkGfm]} components={{ p: 'span', strong: ({node, ...props}: any) => <strong className="text-primary" {...props}/> }}>{firstLine.trim()}</ReactMarkdown></span>
                                {remainingText && <span className="text-muted-foreground">{remainingText.trim()}</span>}
                            </div>
                        </li>
                    );
                }
                
                return (
                     <li className="flex items-start gap-3 my-2" {...props}>
                        {icon}
                        <span>{processedContent}</span>
                    </li>
                );
            };

            if (trimmedText.startsWith('->-') || trimmedText.startsWith('---')) {
                const prefix = trimmedText.startsWith('->-') ? '->-' : '---';
                const icon = <ChevronRightCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />;
                return renderWithLineBreak(icon, children, prefix);
            }
            
            if (trimmedText.startsWith('-?-')) {
                 const icon = <HelpCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />;
                 return renderWithLineBreak(icon, children, '-?-');
            }
            
            return (
                 <li className="flex items-start gap-3 my-2" {...props}>
                   <span className="text-accent mt-2.5 mr-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                   <span>{children}</span>
                 </li>
            );
        },
    };

    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {content}
        </ReactMarkdown>
    );
};

export default function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = params;
  const isPreview = searchParams.preview === 'true';
  const post = getPostBySlug(slug, { preview: isPreview });

  if (!post) {
    notFound();
  }

  const allPosts = getSortedPostsData({ preview: isPreview });
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug)
    .map(p => {
      const commonTags = p.tags.filter(tag => post.tags.includes(tag)).length;
      return { ...p, score: commonTags };
    })
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  const contentParts = post.content.split(STRATEGIES_PLACEHOLDER);
  const contentBeforeStrategies = contentParts[0];
  const contentAfterStrategies = contentParts.length > 1 ? contentParts[1] : '';

  return (
    <div className="py-12">
      {isPreview && (
        <div className="mb-8 p-4 bg-yellow-200 text-yellow-900 rounded-lg text-center font-bold">
          PREVIEW MODE: This post is currently unpublished or scheduled.
        </div>
      )}
      
      <article className="prose prose-lg max-w-none">
        <h1>{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground not-prose text-base">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>
        </div>

        <div className="mt-8">
            {post.coverImage && (
              <div className="w-full md:w-2/5 md:float-right md:ml-8 mb-6 not-prose">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={500}
                  className="w-full rounded-lg shadow-lg object-cover"
                />
              </div>
            )}
            
            <CustomMarkdown content={contentBeforeStrategies} />
            
            {post.content.includes(STRATEGIES_PLACEHOLDER) && <FiveStrategies />}
            
            <CustomMarkdown content={contentAfterStrategies} />
        </div>

        <div className="mt-12 pt-8 border-t clear-both not-prose">
            {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-8">
                {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-semibold">
                    {tag}
                </Badge>
                ))}
            </div>
            )}
            <Link href="/blog" className="text-accent font-semibold hover:underline">
            &larr; Back to all posts
            </Link>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="mt-16 pt-12 border-t">
          <h2 className="font-headline text-3xl font-bold text-primary mb-8">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group h-full">
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-md border-muted/50">
                  {related.coverImage && (
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader className="p-4 flex-grow">
                    <CardTitle className="font-headline text-lg text-primary line-clamp-2 group-hover:text-accent transition-colors">
                      {related.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0 text-xs text-muted-foreground flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <time dateTime={related.date}>{new Date(related.date).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                    <div className="flex items-center text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Disclaimer />
    </div>
  );
}
