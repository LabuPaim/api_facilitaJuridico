import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
    constructor(private createClientUseCase: CreateClientUseCase) {}
    async handle(request: Request, response: Response) {
        try {
            const { name, email, telefone, coordenadax, coordenaday } = request.body;

            await this.createClientUseCase.execute({ name, email, telefone, coordenadax, coordenaday });

            return response.send();
        } catch (error) {
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export { CreateClientController };
