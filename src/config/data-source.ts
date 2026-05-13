import { DataSource } from 'typeorm';
import { env } from './env';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: env.DATABASE_URL,
  entities: ['src/entities/**/*.ts'],
  synchronize: env.NODE_ENV === 'development',
  logging: env.NODE_ENV === 'development'
});
