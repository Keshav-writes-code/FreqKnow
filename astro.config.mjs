// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { analytics } from "./src/integrations/analytics";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "FreqKnow",
      expressiveCode: {
        styleOverrides: { borderRadius: "0.5rem" },
      },
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
        {
          label: "Programming Stuff",
          autogenerate: { directory: "programming_stuff" },
        },
      ],
      customCss: [
        "@fontsource/atkinson-hyperlegible/400.css",
        "@fontsource/atkinson-hyperlegible/700.css",
        "./src/styles/custom.css",
      ],
    }),
    analytics(),
  ],
  site: "https://keshav.is-a.dev",
  base: "FreqKnow",
});
