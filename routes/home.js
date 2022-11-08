import { Router } from "express";

const router = Router();

router.get("/", (req, resp) => {
  resp.send("Welcome to the IRCTC unofficial api");
});

export default router;
