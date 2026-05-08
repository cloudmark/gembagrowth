import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const aboutFilePath = path.join(process.cwd(), '_about', 'about.md');

export function getAboutContent(): { content: string } {
  if (!fs.existsSync(aboutFilePath)) {
    console.error(`Error: About content file not found at ${aboutFilePath}`);
    return { content: 'About content not found.' };
  }

  const fileContents = fs.readFileSync(aboutFilePath, 'utf8');
  const { content } = matter(fileContents);

  return {
    content,
  };
}
