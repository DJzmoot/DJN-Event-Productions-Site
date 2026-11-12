import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { CATEGORY_IDS } from './lib/categories';

// One Markdown file per project in src/content/projects. The Markdown body is
// the project overview. See README → "Adding a project".
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-line summary used on cards and in meta descriptions. */
      summary: z.string(),
      /** First entry is the primary category. */
      categories: z.array(z.enum(CATEGORY_IDS)).min(1),
      /** Optional override for the small label above the title on the carousel. */
      eyebrow: z.string().optional(),
      /** Nick's disciplines on this project, e.g. "Lighting Design". */
      services: z.array(z.string()).default([]),
      location: z.string().optional(),
      year: z.union([z.number(), z.string()]).optional(),
      /** Nick's specific contribution — kept distinct from the overall production. */
      role: z.string(),
      scope: z.array(z.string()).default([]),
      equipment: z.array(z.string()).optional(),
      /** Only publish once attribution has been approved by the partner. */
      productionPartner: z.string().optional(),
      client: z.string().optional(),
      cover: z
        .object({
          src: image(),
          alt: z.string(),
          /** CSS object-position for cropping, e.g. "50% 40%". */
          position: z.string().default('50% 50%'),
        })
        .optional(),
      gallery: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            credit: z.string().optional(),
            wide: z.boolean().default(false),
          }),
        )
        .default([]),
      /** Animated image or video stored in /public. */
      media: z
        .array(
          z.object({
            kind: z.enum(['animation', 'video']),
            src: z.string(),
            alt: z.string(),
            poster: z.string().optional(),
            width: z.number(),
            height: z.number(),
          }),
        )
        .default([]),
      /** Embedded video URL (YouTube/Vimeo embed URL). */
      videoEmbed: z.url().optional(),
      photoCredit: z.string().optional(),
      /** No approved photography yet — renders a clearly marked placeholder. */
      placeholder: z.boolean().default(false),
      /** Show in the homepage Selected Work carousel. */
      featured: z.boolean().default(false),
      /** Lower numbers sort first. */
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
