import { FastifyRequest, FastifyReply } from "fastify";

export class HealthController {
  static async healthCheck(request: FastifyRequest, reply: FastifyReply) {
    try {
      reply.code(200).send({
        Message: "it works bettin :)",
      });
    } catch (err) {
      const error = err as Error;
      reply.code(500).send({
        message: error.message,
      });
    }
  }
}
