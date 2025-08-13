import { createClient, Client } from "@libsql/client";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { appendTrailingSlash } from "hono/trailing-slash";

const app = new Hono();

// Define global typing for Turso client
declare global {
  var tursoClient: Client | undefined;
}

app.use(
  cors({
    origin: ["https://keshav.is-a.dev"],
    allowMethods: ["GET"],
  }),
);
app.use(appendTrailingSlash());

app.get("*", async ({ env }, next) => {
  if (!globalThis.tursoClient) {
    if (!env.TURSO_AUTH_TOKEN || !env.TURSO_DATABASE_URL) {
      throw new Error("Turso API Keys Required");
    }
    globalThis.tursoClient = createClient({
      url: env.TURSO_DATABASE_URL,
      authToken: env.TURSO_AUTH_TOKEN,
    });
  }
  await next();
});

app.get("/track/", async (c) => {
  try {
    const turso = globalThis.tursoClient;
    if (!turso) throw new Error("Turso Client is not Initialized");
    await turso.execute(`
      UPDATE Analytics
      SET views = views + 1
      WHERE rowid = 1;
    `);
  } catch (error) {
    console.error("Database error:", error);
    return c.text("Database query failed", 500);
  }
  return c.text("Succesfully Incremented");
});

export default app;
