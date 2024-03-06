import { ClientPostgresRepository } from "../../repositories/implementations/ClientPostgresRepositories";
import { FindClientsFromOriginController } from "./FindClientsFromOriginController";
import { FindClientsFromOriginUseCase } from "./FindClientsFromOriginUseCase";

const clientsRepository = new ClientPostgresRepository();
const findClientsFromOriginUseCase = new FindClientsFromOriginUseCase(clientsRepository);
const findClientsFromOriginController = new FindClientsFromOriginController(findClientsFromOriginUseCase);

export { findClientsFromOriginController };
