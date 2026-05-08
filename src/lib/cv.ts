import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const cvFilePath = path.join(process.cwd(), '_cv', 'CV.md');

export function getCVContent(): { content: string } {
  if (!fs.existsSync(cvFilePath)) {
    console.error(`Error: CV content file not found at ${cvFilePath}`);
    return { content: 'CV content not found.' };
  }

  const fileContents = fs.readFileSync(cvFilePath, 'utf8');
  const { content } = matter(fileContents);

  return {
    content,
  };
}
