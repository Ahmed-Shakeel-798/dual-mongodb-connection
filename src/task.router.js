const  Router = require("express");
const Task = require("./task.model");

const router = Router();

// creating a task
router.post('/tasks', async(req,res)=>{

    const newTask = new Task(req.body); 

    try{
        await newTask.save();
        res.status(200).send(newTask);
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;

