
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";
import { ClientPostgresRepository } from "../../repositories/implementations/ClientPostgresRepositories";

const clientsRepository = new ClientPostgresRepository();
const createClientUseCase = new CreateClientUseCase(clientsRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientController };
