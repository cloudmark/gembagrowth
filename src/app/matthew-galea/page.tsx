
import { getCVContent } from '@/lib/cv';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';
import KeyCareerHighlights from '@/components/key-career-highlights';
import ProfessionalCertifications from '@/components/professional-certifications';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import HeroButtons from '@/components/hero-buttons';
import Disclaimer from '@/components/disclaimer';

export const metadata: Metadata = {
    title: 'Professional Biography | Matthew Galea | GembaGrowth',
    description: "A strategic and results-oriented Operations Manager with 18+ years of experience leading manufacturing and operations teams.",
};

const HIGHLIGHTS_PLACEHOLDER = '<!-- key-career-highlights-placeholder -->';
const CERTIFICATIONS_PLACEHOLDER = '<!-- professional-certifications-placeholder -->';

export default function MatthewGaleaPage() {
  const { content } = getCVContent();
  
  const [contentBeforeHighlights, tempContentAfterHighlights] = content.split(HIGHLIGHTS_PLACEHOLDER);
  const [contentBeforeCertifications, contentAfterCertifications] = (tempContentAfterHighlights || '').split(CERTIFICATIONS_PLACEHOLDER);
  
  return (
    <>
      <section id="about" className="bg-transparent pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-screen-xl mx-auto">
          
          <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-8 md:gap-12">
            <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary flex-grow">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentBeforeHighlights}</ReactMarkdown>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto text-center">
              <Image
                  src="/profile.JPG"
                  alt="Matthew Galea"
                  width={200}
                  height={200}
                  className="rounded-full object-cover shadow-lg border-4 border-card inline-block"
                  priority
              />
            </div>
          </div>

          <KeyCareerHighlights />

          <div className="prose prose-lg max-w-none text-foreground prose-headings:font-headline prose-headings:text-primary clear-both">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentBeforeCertifications || ''}</ReactMarkdown>
          </div>

          <ProfessionalCertifications />

          <div className="prose prose-lg max-w-none text-foreground prose-headingsfont-headline prose-headings:text-primary clear-both">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentAfterCertifications || ''}</ReactMarkdown>
          </div>

          <div className="mt-12 text-center">
            <HeroButtons />
          </div>
          
        </div>
      </section>
      <Disclaimer />
    </>
  );
}
