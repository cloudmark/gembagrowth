import ReactMarkdown from 'react-markdown';
import { getAboutContent } from '@/lib/about';

export default function PersonalStory() {
  const { content } = getAboutContent();
  const sections = content.split(/^## /m).slice(1);

  return (
    <section className="personal-story" aria-label="About Matthew and GembaGrowth">
      {sections.map(section => {
        const [title, ...paragraphs] = section.split('\n');
        return (
          <div className="personal-story-section" key={title}>
            <h2>{title}</h2>
            <div className="reading-copy"><ReactMarkdown>{paragraphs.join('\n')}</ReactMarkdown></div>
          </div>
        );
      })}
    </section>
  );
}
