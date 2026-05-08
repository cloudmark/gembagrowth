
'use server';
/**
 * @fileOverview A flow to generate a cover image for a blog post.
 *
 * - generateBlogImage - A function that generates a cover image based on blog content.
 * - GenerateBlogImageInput - The input type for the generateBlogImage function.
 * - GenerateBlogImageOutput - The return type for the generateBlogImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogImageInputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  content: z.string().describe('The markdown content of the blog post.'),
});
export type GenerateBlogImageInput = z.infer<
  typeof GenerateBlogImageInputSchema
>;

const GenerateBlogImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
  imageDescription: z.string().describe('A description of the generated image.'),
});
export type GenerateBlogImageOutput = z.infer<
  typeof GenerateBlogImageOutputSchema
>;

export async function generateBlogImage(
  input: GenerateBlogImageInput
): Promise<GenerateBlogImageOutput> {
  return generateBlogImageFlow(input);
}

const imagePromptGenerator = ai.definePrompt({
  name: 'blogImagePromptGenerator',
  input: {schema: GenerateBlogImageInputSchema},
  output: {
    schema: z.object({
      prompt: z
        .string()
        .describe(
          'A concise, visually descriptive prompt for a text-to-image model, capturing the essence of the blog post. Focus on creating a professional, symbolic, and high-quality image suitable for a business blog. For example: "A minimalist digital art piece showing a winding path from a factory floor to a green, growing cityscape, symbolizing lean manufacturing principles leading to business growth."'
        ),
      description: z.string().describe('A brief, factual description of the generated image scene.')
    }),
  },
  prompt: `
    You are an expert at creating visually descriptive prompts for text-to-image models.
    Your task is to generate a prompt based on the following blog post title and content.
    The image should be professional, visually appealing, and metaphorically represent the key themes of the blog post. Avoid literal interpretations and instead focus on symbolic imagery.

    Blog Post Title: {{{title}}}

    Blog Post Content:
    ---
    {{{content}}}
    ---

    Generate a concise, single-sentence prompt for a text-to-image model and a short description for the image's alt text.
  `,
});

const generateBlogImageFlow = ai.defineFlow(
  {
    name: 'generateBlogImageFlow',
    inputSchema: GenerateBlogImageInputSchema,
    outputSchema: GenerateBlogImageOutputSchema,
  },
  async input => {
    // 1. Generate a descriptive prompt for the image model.
    const promptGenResponse = await imagePromptGenerator(input);
    const {prompt, description} = promptGenResponse.output!;

    if (!prompt) {
      throw new Error('Could not generate an image prompt.');
    }

    // 2. Generate the image using the correct Imagen model.
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: prompt,
    });
    
    if (!media || !media.url) {
      throw new Error('Image generation failed to return a URL.');
    }

    return {
      imageUrl: media.url,
      imageDescription: description || `An AI-generated image representing: ${input.title}`,
    };
  }
);
