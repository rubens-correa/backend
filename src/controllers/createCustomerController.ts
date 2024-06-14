import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";

class CreateCustomerController {
  async execute(request: FastifyRequest, reply: FastifyReply) {

    const {name, email} = request.body as {name: String, email: String};
    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({name,email});

    reply.send(customer);
  }
}

export { CreateCustomerController };
