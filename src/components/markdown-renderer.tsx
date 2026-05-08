
'use client';

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({node, ...props}) => (
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
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
