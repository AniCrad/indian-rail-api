import { Router } from "express";

const router = Router();

router.get("/", (req, resp) => {
  resp.json({
    success: true,
    time_stamp: Date.now(),
    data: "please refer our doc for more details('https://github.com/AniCrad/indian-rail-api')",
  });
});

export default router;
