import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number().optional(),
    timeline: z.string(),
    role: z.string(),
    collaborators: z.array(z.string()),
    tools: z.array(z.string()),
    thumbnail: image(),
    desc: z.string(),
  }),
});

export const collections = { projects };