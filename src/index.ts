import fastify from 'fastify';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
import { env } from './config/env';
import { registerRoutes } from './routes';

async function main() {

  const app = fastify();

  try {
    //await AppDataSource.initialize()
    await registerRoutes(app)
    await app.listen({
      port: Number(env.PORT),
      host: '0.0.0.0'
    });
    app.log.info(`Server running on port ${env.PORT}`);
 
  } catch (error) {
      console.error(error)
  }
}
main();
