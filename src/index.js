import express from 'express';

import { createHistory,listHistory, deleteHistory, updateHistory, vizualizeHistory } from './history/controller.js';
import { createUser,listUser, deleteUser, updateUser, vizualizeUser } from './user/controller.js';
import { createReport,listReport, deleteReport, updateReport, vizualizeReport } from './report/controller.js';



const app = express()
const port = 8080;

app.use(express.json());

app.post("/history", createHistory);
app.get("/history", listHistory);
app.get("/history/:id",vizualizeHistory);
app.put("history",updateHistory);
app.delete("/history",deleteHistory);

app.post("/report", createReport);
app.get("/report", listReport);
app.get("/report/:id",vizualizeReport);
app.put("report",updateReport);
app.delete("/report",deleteReport);

app.post("/user", createUser);
app.get("/user", listUser);
app.get("/user/:id",vizualizeUser);
app.put("user",updateUser);
app.delete("/user",deleteUser);


app.listen(port, ()=> console.log("api ok :)"));