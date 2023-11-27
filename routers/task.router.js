import { Router } from "express";
import { CreateTask, deleteTask, findOne, getAll, updateTask } from "../controllers/task.controller.js";

const taskRouter = Router()

taskRouter.post("/",CreateTask)
taskRouter.get("/",getAll)
taskRouter.put("/:id",updateTask)
taskRouter.delete("/:id",deleteTask)
taskRouter.get("/:id",findOne)
export default taskRouter