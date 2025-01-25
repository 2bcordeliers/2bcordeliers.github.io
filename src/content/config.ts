import { defineCollection, z } from "astro:content";

const subjects = z.enum([
  "Vie de classe",
  "Français",
  "Maths",
  "Histoire-Géo",
  "Anglais",
  "Physique-Chimie",
  "SVT",
  "SNT",
]);

const homework = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: subjects,
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

const tests = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: subjects,
    date: z.date(),
    lessons: z.array(z.string()).optional(),
  }),
});

export const collections = { homework, lessons, tests };
