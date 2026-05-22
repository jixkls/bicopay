import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().default('3010'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
});

export const env = schema.parse(process.env);
  