import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter.js";
import { workflowRouter } from "./routes/workFlowRouter.js";
import { triggerRouter } from "./routes/triggerRouter.js";
import { actionRouter } from "./routes/actions.js";
import { credentialRouter } from "./routes/credentialsRouter.js";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/v1/users",userRouter)

app.use("/api/v1/workflow",workflowRouter)

app.use("/api/v1/avaialbleTriggers",triggerRouter)

app.use("/api/v1/avaialbleActions",actionRouter)

app.use("/api/v1/credentials",credentialRouter)




app.listen(3000, () => {   
    console.log("Server is running on port 3000");   
});