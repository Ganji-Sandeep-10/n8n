import { Router } from "express";
import { createCredentials, deleteCredentials, getCredentials, getCredentialsById, updateCredentials } from "../controllers/credentialController.js";

const router = Router()

router.post("/crete",createCredentials)

router.get("/:id",getCredentialsById)

router.get("/",getCredentials)

router.put("/:id",updateCredentials)

router.delete("/:id",deleteCredentials)




export const credentialRouter = router