import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://2bcordeliers.github.io",
  base: "/",
  markdown: {
    remarkPlugins: ["remark-math"],
    rehypePlugins: [
      [
        "rehype-katex",
        {
          trust: true,
        },
      ],
    ],
  },
});
