import { Request, Response } from "express";
import { FindAllClientUseCase } from "./FindAllClientUseCase";

class FindAllClientController {
    constructor(private findAllClientUseCase: FindAllClientUseCase) {}

    async handle(request: Request, response: Response) {
        try {
            const clients = await this.findAllClientUseCase.execute();
            return response.json(clients);
        } catch (error) {
            return response.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export { FindAllClientController };
