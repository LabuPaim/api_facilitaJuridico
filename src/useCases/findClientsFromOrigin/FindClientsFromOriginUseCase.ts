import { Client } from "../../entities/Client";
import { IClientRepositories } from "../../repositories/IClientRepositories";

class FindClientsFromOriginUseCase {
    constructor(private clientRepository: IClientRepositories) {}

    async execute(): Promise<Client[]> {
        try {
            const allClients: Client[] = await this.clientRepository.findAll();

            // Inicializar matriz de distâncias com Infinity
            const distances: number[][] = [];
            for (let i = 0; i < allClients.length; i++) {
                distances[i] = [];
                for (let j = 0; j < allClients.length; j++) {
                    distances[i][j] = i === j ? 0 : Infinity;
                }
            }

            // Calcular distâncias entre todos os pares de clientes
            for (let i = 0; i < allClients.length; i++) {
                for (let j = i + 1; j < allClients.length; j++) {
                    const distance = Math.sqrt(
                        Math.pow(allClients[i].coordenadax, allClients[i].coordenaday) -
                            Math.pow(allClients[j].coordenadax, allClients[j].coordenaday)
                    );
                    distances[i][j] = distance;
                    distances[j][i] = distance;
                }
            }

            // Calcular a soma das distâncias de cada cliente para todos os outros clientes
            const totalDistances: number[] = [];
            for (let i = 0; i < allClients.length; i++) {
                totalDistances[i] = distances[i].reduce((acc, cur) => acc + cur, 0);
            }

            // Encontrar o cliente com menor soma total de distâncias
            let minTotalDistanceIndex = 0;
            let minTotalDistance = totalDistances[0];
            for (let i = 1; i < totalDistances.length; i++) {
                if (totalDistances[i] < minTotalDistance) {
                    minTotalDistance = totalDistances[i];
                    minTotalDistanceIndex = i;
                }
            }

            // Reorganizar a ordem dos clientes com base na menor soma total de distâncias
            const sortedClients = allClients
                .slice(minTotalDistanceIndex)
                .concat(allClients.slice(0, minTotalDistanceIndex));

            return sortedClients;
        } catch (error) {
            console.error("Error in FindClientsFromOriginUseCase:", error);
            throw new Error("Failed to find optimal route between clients.");
        }
    }
}

export { FindClientsFromOriginUseCase };
