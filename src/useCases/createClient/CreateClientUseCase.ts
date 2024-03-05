import { Client } from "../../entities/Client";
import { IClientRepositories } from "../../repositories/IClientRepositories";


class CreateClientUseCase {
	constructor(private clientRepository: IClientRepositories) {}

	async execute({ name, email, telefone, coordenadax, coordenaday }: Omit<Client, "id">) {
		let client = new Client();
		client = Object.assign({ ...client, name, email, telefone, coordenadax, coordenaday });

		await this.clientRepository.create(client);
	}
}

export { CreateClientUseCase };
