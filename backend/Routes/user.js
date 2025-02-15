import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from "../Controllers/userController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/:id", authenticate, restrict(["patient"]), updateUser);
router.get("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/", getAllUser);

export default router;
