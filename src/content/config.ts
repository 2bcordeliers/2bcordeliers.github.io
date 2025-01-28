import { defineCollection, reference, z } from "astro:content";

const subjects = z.enum([
  "Vie de classe",
  "Français",
  "Maths",
  "Histoire-Géo",
  "Anglais",
  "Physique-Chimie",
  "SVT",
  "SNT",
  "Euro",
  "DNL",
  "Cambridge",
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

const tests = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: subjects,
    date: z.date(),
    finished: z.boolean().default(false),
  }),
});

export const collections = { homework, tests };
