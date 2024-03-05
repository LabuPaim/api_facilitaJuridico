import { Router } from "express";
import { createClientController } from "./createClient";

const router = Router();

router.post("/client", (req, res) => {
	return createClientController.handle(req, res);
});

export { router };
