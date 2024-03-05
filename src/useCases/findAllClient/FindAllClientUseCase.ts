import { IClientRepositories } from "../../repositories/IClientRepositories";

class FindAllClientUseCase {
	constructor(private clientRepository: IClientRepositories) {}

	async execute() {
		const clients = await this.clientRepository.findAll();
        return clients
	}
}

export { FindAllClientUseCase };
