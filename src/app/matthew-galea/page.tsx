import { getCVContent } from '@/lib/cv';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Metadata } from 'next';
import KeyCareerHighlights from '@/components/key-career-highlights';
import ProfessionalCertifications from '@/components/professional-certifications';
import Image from 'next/image';
import Disclaimer from '@/components/disclaimer';

export const metadata: Metadata = {
    title: 'Professional Biography | Matthew Galea',
    description: "A strategic and results-oriented Operations Manager with 18+ years of experience leading manufacturing and operations teams.",
};

const HIGHLIGHTS_PLACEHOLDER = '<!-- key-career-highlights-placeholder -->';
const CERTIFICATIONS_PLACEHOLDER = '<!-- professional-certifications-placeholder -->';

export default function MatthewGaleaPage() {
  const { content } = getCVContent();
  
  const [contentBeforeHighlights, tempContentAfterHighlights] = content.split(HIGHLIGHTS_PLACEHOLDER);
  const [contentBeforeCertifications, contentAfterCertifications] = (tempContentAfterHighlights || '').split(CERTIFICATIONS_PLACEHOLDER);

  // Group the original Markdown for reading; paragraph text and order stay intact.
  const biographyTitle = contentBeforeHighlights.match(/^#\s+(.+)$/m)?.[1] || 'Professional Biography';
  const paragraphs = contentBeforeHighlights.replace(/^#\s+.+\r?\n/, '').trim().split(/\r?\n\s*\r?\n/);
  const [introduction, ...bodyParagraphs] = paragraphs;
  const sections: { title: string; paragraphs: string[] }[] = [];
  for (const paragraph of bodyParagraphs) {
    const title = paragraph.startsWith("Matthew's professional journey") ? 'Career journey'
      : paragraph.startsWith('Alongside his industry leadership') ? 'Teaching and professional development'
      : paragraph.startsWith('Driven by a philosophy') ? 'From Gemba to Growth'
      : null;
    if (title || sections.length === 0) sections.push({ title: title || 'Career journey', paragraphs: [] });
    sections[sections.length - 1].paragraphs.push(paragraph);
  }

  return (
    <div className="biography-surface">
      <section id="about" className="biography-content">
        <div className="biography-inner">
          
          <div className="biography-introduction">
            <div className="biography-prose reading-copy">
              <header className="biography-heading">
                <h1>Matthew Galea</h1>
                <p className="biography-descriptor">{biographyTitle}</p>
              </header>
              <div className="biography-lead">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{introduction}</ReactMarkdown>
              </div>
              {sections.map(section => (
                <section className="biography-chapter" key={section.title}>
                  <h2>{section.title}</h2>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{section.paragraphs.join('\n\n')}</ReactMarkdown>
                </section>
              ))}
            </div>
            <div className="biography-portrait">
              <Image
                  src="/profile.JPG"
                  alt="Matthew Galea"
                  width={200}
                  height={256}
                  className="biography-photo"
                  priority
              />
            </div>
          </div>

          <KeyCareerHighlights />

          <div className="reading-copy">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentBeforeCertifications || ''}</ReactMarkdown>
          </div>

          <ProfessionalCertifications />

          <div className="reading-copy">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentAfterCertifications || ''}</ReactMarkdown>
          </div>
        </div>
      </section>
      <Disclaimer />
    </div>
  );
}
