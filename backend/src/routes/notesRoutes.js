import express from "express";
import {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
} from "../controllers/notseController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);

export default router;
