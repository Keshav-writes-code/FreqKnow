import type { AstroIntegration } from "astro";

export function analytics(): AstroIntegration {
  return {
    name: "analytics",
    hooks: {
      "astro:config:setup": ({ injectScript }) => {
        injectScript(
          "page",
          `
const API_URL = "https://freq-know-analytics.dhimankeshav201.workers.dev/track/";

export function trackPageEntry() {
  // Don't track in development
  if (window.location.hostname === "localhost") return;

  const referrer = document.referrer;
  const currentDomain = window.location.hostname;

  // Check if referrer is from a different domain (or no referrer = direct visit)
  const isExternalEntry =
    !referrer || (referrer && new URL(referrer).hostname !== currentDomain);

  if (isExternalEntry) {
    fetch(API_URL, {
      method: "GET",
    }).catch(() => {}); // Silent fail
  }
}
console.log("HELLO")
        `,
        );
      },
    },
  };
}
