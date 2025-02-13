// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FreqKnow",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Linux",
          autogenerate: { directory: "linux" },
        },
      ],
      customCss: [
        "@fontsource/atkinson-hyperlegible/400.css",
        "@fontsource/atkinson-hyperlegible/700.css",
        "./src/styles/custom.css",
      ],
    }),
  ],
  site: "https://keshav.is-a.dev",
  base: "FreqKnow",
});
