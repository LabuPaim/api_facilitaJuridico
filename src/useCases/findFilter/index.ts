

import { ClientPostgresRepository } from "../../repositories/implementations/ClientPostgresRepositories";
import { FindFilterClientController } from "./FindFilterClientController";
import { FindFilterClientUseCase } from "./FindFilterClientUseCase";

const clientsRepository = new ClientPostgresRepository();
const findFilterClientUseCase = new FindFilterClientUseCase(clientsRepository);
const findFilterClientController = new FindFilterClientController(findFilterClientUseCase);

export { findFilterClientController };
