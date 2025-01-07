import express from "express";
import {
  deleteNotifications,
  getNotifications,
} from "../controllers/notification.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getNotifications", protectRoute, getNotifications);
router.delete("/deleteNotifications", protectRoute, deleteNotifications);

export default router;
