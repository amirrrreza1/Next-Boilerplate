import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Server-side variables. These will never be exposed to the browser.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    // Example: DATABASE_URL: z.string().url(),
  },

  /*
   * Client-side variables. You MUST prefix these with NEXT_PUBLIC_.
   */
  client: {
    // Example: NEXT_PUBLIC_API_URL: z.string().url(),
  },

  /*
   * You must manually route the variables here to ensure Next.js 
   * bundles them correctly for edge environments and client components.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // DATABASE_URL: process.env.DATABASE_URL,
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  
  // Treat empty strings as undefined to trigger Zod validation errors
  emptyStringAsUndefined: true,
});