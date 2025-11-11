import express from "express";
import { getTrending } from "../controllers/moviesController.js";
const router = express.Router();

router.get("/trending", getTrending);

export default router;
