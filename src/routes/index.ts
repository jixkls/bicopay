import { FastifyInstance } from "fastify";
import { healthRoute } from "./health/health";


export async function registerRoutes(app:FastifyInstance){
    app.register(healthRoute , {prefix:'/api'})
}
