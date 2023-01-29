require('dotenv').config();
const express = require("express");

const userRouter = require("./user.router");
const taskRouter = require("./task.router");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=>{
    console.log("server running on " + port);
})