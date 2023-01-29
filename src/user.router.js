const Router  = require("express");
const User = require("./user.model");

const router = Router();

// creating a user
router.post('/users', async (req,res)=>{
    const newUser = new User(req.body);
    
    try{
        await newUser.save();
        res.status(201).send({newUser});
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;