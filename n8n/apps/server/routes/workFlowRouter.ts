import { Router } from "express";
import type{ Request,Response } from "express";
import { createWorkflow, getAllWorkflows, getWorkflowById, updateWorkflow } from "../controllers/workflowRouter.js";
import { userMiddlewares } from "../middlewares/userMiddlewares.js";

const router = Router()

router.post("/create",createWorkflow)

router.get("/",userMiddlewares,getAllWorkflows)

router.get("/:id",userMiddlewares,getWorkflowById)

router.put("/:id",userMiddlewares,updateWorkflow)

export const workflowRouter = router
