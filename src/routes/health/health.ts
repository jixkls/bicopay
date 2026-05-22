import { FastifyInstance } from "fastify";
import { HealthController } from "../../controllers/health/health";

export async function healthRoute(app: FastifyInstance) {
  app.get("/health", HealthController.healthCheck);
}
