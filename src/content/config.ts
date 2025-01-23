import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const revisions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
  }),
});

export const collections = { revisions };
