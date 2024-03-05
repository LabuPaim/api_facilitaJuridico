

import { ClientPostgresRepository } from "../../repositories/implementations/ClientPostgresRepositories";
import { FindAllClientController } from "./FindAllClientController";
import { FindAllClientUseCase } from "./FindAllClientUseCase";

const clientsRepository = new ClientPostgresRepository();
const findAllClientUseCase = new FindAllClientUseCase(clientsRepository);
const findAllClientController = new FindAllClientController(findAllClientUseCase);

export { findAllClientController };
