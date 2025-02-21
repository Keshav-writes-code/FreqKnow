// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FreqKnow",
      editLink: {
        baseUrl: "https://github.com/Keshav-writes-code/FreqKnow/tree/main",
      },
      social: {
        github: "https://github.com/Keshav-writes-code",
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
      logo: {
        src: "./src/assets/logo.svg",
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
