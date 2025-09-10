import { Router } from "express";
import type { Request,Response } from "express";
import { userSignin, userSignup } from "../controllers/userController.js";

const router = Router()

router.post("/signup",userSignup)

router.post("/signin",userSignin)

export const userRouter = router