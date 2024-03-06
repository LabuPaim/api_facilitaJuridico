import { Client } from "../../entities/Client";
import { IClientRepositories } from "../../repositories/IClientRepositories";

class FindClientsFromOriginUseCase {
    constructor(private clientRepository: IClientRepositories) {}

    async execute(): Promise<Client[]> {
        try {
            const allClients = await this.clientRepository.findAll();

            const clientsWithDistance = allClients.map((client) => ({
                ...client,
                distanceToOrigin: Math.sqrt(Math.pow(client.coordenadax, 2) + Math.pow(client.coordenaday, 2)),
            }));

            const sortedClients = clientsWithDistance.sort((a, b) => a.distanceToOrigin - b.distanceToOrigin);

            return sortedClients;
        } catch (error) {
            console.error("Error in FindClientsFromOriginUseCase:", error);
            throw new Error("Failed to retrieve clients from the origin.");
        }
    }
}

export { FindClientsFromOriginUseCase };
