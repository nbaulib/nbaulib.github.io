// src/content.config.ts

// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader
import { glob } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.mdx' }),
  schema: z.object({
    title: z.string(),
    timeline: z.string(),
    role: z.string(),
    collaborators: z.array(z.string()),
    tools: z.array(z.string()),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects };