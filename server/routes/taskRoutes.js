import express from "express"
import { addTask, deleteTask, getTasks, markDone } from "../controllers/taskController.js";

const router = express.Router();

router.get('/', getTasks);
router.post('/', addTask);
router.patch('/:id/done', markDone);
router.delete('/:id', deleteTask);

export default router;