import { Client } from "entities/Client";

interface IClientRepositories {
	create(client: Client): Promise<void>;
}

export { IClientRepositories };
