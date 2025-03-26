import express from "express";
import { createMenuItem, getMenuItems } from "../controllers/menuItemController.js";

const router = express.Router();

router.post("/", createMenuItem);
router.get("/menu/:menuId", getMenuItems);

export default router;
