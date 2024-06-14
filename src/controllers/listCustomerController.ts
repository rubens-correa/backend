import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/listCustomerService";

class ListCustomerController {
  async execute(reques: FastifyRequest, reply: FastifyReply) {
    const listCustomerServices = new ListCustomerService();

    const customers = await listCustomerServices.execute();

    reply.send(customers);
  }
}

export { ListCustomerController };
