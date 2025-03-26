import express from "express";
import { createMenu, getMenus } from "../controllers/menuController.js";

const router = express.Router();

router.post("/", createMenu);
router.get("/", getMenus);

export default router;
