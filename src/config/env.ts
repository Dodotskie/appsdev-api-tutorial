import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  APP_NAME: z.string().default("AppsDev API Tutorial"),
  PORT: z.coerce.number().default(7000),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  JWT_SECRET: z.string().default("fallback_secret_change_me"),
  BACKEND_URL: z.string().default("http://localhost:7000"),
  FRONTEND_URL: z.string().default("http://localhost:3000"),
  DATABASE_URL: z.string().default("")
});

export const env = envSchema.parse(process.env);