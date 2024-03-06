import { Client } from "../entities/Client";

interface IClientRepositories {
	create(client: Client): Promise<void>;
	findAll(): Promise<Client[]>;
	findFilter(filter: string): Promise<Client[]>;
	findClientsFromOrigin(): Promise<Client[]>;
}

export { IClientRepositories };
