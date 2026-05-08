
import Image from 'next/image';
import { getAboutContent } from '@/lib/about';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import HeroButtons from './hero-buttons';

export default function HeroSection() {

  const { content } = getAboutContent();
  
  const contentParts = content.split('\n\n');
  const introBlock = contentParts.slice(0, 1).join('\n\n');
  const mainContent = contentParts.slice(1).join('\n\n');

  return (
    <section id="about" className="bg-transparent pt-12 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-[750px] mx-auto">
        
        <div className="flex justify-between items-center mb-8 flex-col-reverse sm:flex-row gap-8">
            <div className="flex-grow prose prose-lg max-w-none">
                 <ReactMarkdown remarkPlugins={[remarkGfm]}>{introBlock}</ReactMarkdown>
            </div>
            <div className="flex-shrink-0">
                <Image
                    src="/profile.JPG"
                    alt="Matthew Galea"
                    width={120}
                    height={120}
                    className="rounded-full object-cover shadow-lg border-4 border-card"
                    priority
                />
            </div>
        </div>

        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary clear-both">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{mainContent}</ReactMarkdown>
        </div>

        <div className="mt-12">
          <HeroButtons />
        </div>
        
      </div>
    </section>
  );
}
