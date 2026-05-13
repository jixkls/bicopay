import fastify from 'fastify';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
import { env } from './config/env';

async function main() {

  const app = fastify();

  try {
    await AppDataSource.initialize()
    await app.listen({
      port: Number(env.PORT),
      host: '0.0.0.0'
    });
  } catch (error) {
      console.error(error)
  }
}
main();
