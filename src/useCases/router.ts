import { Router } from "express";
import { createClientController } from "./createClient";
import { findAllClientController } from "./findAllClient";
import { findFilterClientController } from "./findFilter";
import { findClientsFromOriginController } from "./findClientsFromOrigin";

const router = Router();

router.post("/client", (req, res) => {
	return createClientController.handle(req, res);
});

router.get("/client", (req, res) => {
	return findAllClientController.handle(req, res);
});

router.get("/client/filter", (req, res) => {
	return findFilterClientController.handle(req, res);
});

router.get("/client/fromOrigin", (req, res) => {
    return findClientsFromOriginController.handle(req, res);
});

export { router };
