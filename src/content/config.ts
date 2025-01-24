import { defineCollection, z } from "astro:content";

const homeworks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: z.enum([
      "Vie de classe",
      "Français",
      "Maths",
      "Histoire-Géo",
      "Anglais",
      "Physique-Chimie",
    ]),
    date: z.date(),
    lessons: z.array(z.string()).optional(),
  }),
});

const lessons = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { homeworks, lessons };
