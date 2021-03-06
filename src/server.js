import "dotenv/config";

import express from "express";
import userController from "./app/controllers/userController";

import BullBoard from "bull-board";
import Queue from "./app/lib/Queue";

const app = express();

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post("/users", userController.store);

app.use("/admin/queues", BullBoard.UI);  

app.listen(3333, () => {
  console.log("server runing on localhost:3333");
});
