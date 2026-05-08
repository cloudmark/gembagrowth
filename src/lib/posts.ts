
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostData } from '@/lib/types';

const postsDirectory = path.join(process.cwd(), '_posts');

type GetPostsOptions = {
  preview?: boolean;
};

export function getSortedPostsData(options: GetPostsOptions = {}): Omit<PostData, 'content'>[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data } = matter(fileContents);
    
    const slug = data.slug || fileName.replace(/\.md$/, '');

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      coverImage: data.coverImage || '',
      author: data.author || 'Anonymous',
      tags: data.tags || [],
      published: data.published === true,
    };
  });

  if (options.preview) {
    // In preview mode, return all posts sorted by date
    return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  }

  const now = new Date();
  const publishedPosts = allPostsData.filter(post => {
    const postDate = new Date(post.date);
    return post.published && postDate <= now;
  });

  return publishedPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string, options: GetPostsOptions = {}): PostData | null {
  if (!fs.existsSync(postsDirectory)) {
    return null;
  }
  const fileNames = fs.readdirSync(postsDirectory);
  
  let foundPost: PostData | null = null;

  for (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const postSlug = data.slug || fileName.replace(/\.md$/, '');

    if (postSlug === slug) {
      foundPost = {
        slug,
        content,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        author: data.author || 'Anonymous',
        tags: data.tags || [],
        published: data.published === true,
      };
      // If we found the post, we can stop looking
      break; 
    }
  }

  if (!foundPost) {
    // Post with the given slug doesn't exist
    return null;
  }
  
  // In preview mode, always return the found post.
  if (options.preview) {
    return foundPost;
  }
  
  // For non-preview mode, check if the post is published and its date is not in the future.
  const isVisible = foundPost.published && new Date(foundPost.date) <= new Date();
  if (isVisible) {
    return foundPost;
  }

  // If not in preview and post is not visible, return null.
  return null;
}
