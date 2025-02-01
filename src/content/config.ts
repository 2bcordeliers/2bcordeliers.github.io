import { defineCollection, z } from "astro:content";

const subjects = z.enum([
  "Vie de classe",
  "Français",
  "Maths",
  "Histoire-Géo",
  "Anglais",
  "Espagnol",
  "Physique-Chimie",
  "SVT",
  "SNT",
  "Sport",
  "AP Maths",
  "AP Français",
  "Euro",
  "DNL",
  "Cambridge",
]);

const groups = z.enum(["Groupe 1", "Groupe 2"]);

const tests = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: subjects,
    date: z.date(),
    finished: z.boolean().default(false),
  }),
});

const homework = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subject: subjects,
    date: z.date(),
    group: groups.optional(),
  }),
});

const agenda = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { homework, tests, agenda };
