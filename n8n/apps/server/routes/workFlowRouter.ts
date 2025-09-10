import { Router } from "express";
import type { Request,Response } from "express";
import { createWorkflow, getAllWorkflows, getWorkflowById, updateWorkflow } from "../controllers/workflowRouter.js";

const router = Router()

router.post("/create",createWorkflow)

router.get("/",getAllWorkflows)

router.get("/:id",getWorkflowById)

router.put("/:id",updateWorkflow)

export const workflowRouter = router
