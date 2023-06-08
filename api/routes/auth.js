const router = require("express").Router();
const User = require("../models/User");

//REGISTER(thats why we use post)
router.post("/register", async(req,res) =>{
    const newUser = newUser({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    });

    try{

        //to save our user in db
        const user = await newUser.save();
        res.status(201),json(user);
    } catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;