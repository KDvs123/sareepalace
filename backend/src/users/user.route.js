const express = require('express');
const user = require('./user.model')

const router = express.Router();

// Register endpoint

router.post('/register', async (req, res) => {
    try{
        const {username , email , password} =req.body;
        const user = new User({username , email , password});
        await user.save();
        res.status(201).send({message: 'User registered successfully'});
        

    }catch (error){

    }
})

router.get("/", async (req, res) => {
    res.send("Registation routes");

})

module.exports = router;