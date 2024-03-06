import { IClientRepositories } from "../../repositories/IClientRepositories";
import { Client } from "../../entities/Client";

class FindFilterClientUseCase {
    constructor(private clientRepository: IClientRepositories) {}

    async execute(filter: string): Promise<Client[]> {
        const clients = await this.clientRepository.findFilter(filter);
        return clients;
    }
}

export { FindFilterClientUseCase };
