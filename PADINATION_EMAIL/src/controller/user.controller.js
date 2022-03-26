
const User = require('../models/user.model')
const express = require('express')
const router = express.Router()

router.get("/",async (req,res)=>{
    try{
        const page = req.query.page;
        const pagesize = req.query.pagesize;
        const skip = (page-1) * pagesize;

        const userdata = await User.find()
        .skip(skip)
        .limit(pagesize)
        .lean()
        .exec()
        console.log(userdata)
        return res.status(200).send(userdata)
    }
    catch(err){
        // console.error(err)
        return res.status(400).send({message: err.message})
    }
})

router.post("/",async (req,res)=>{
    try{
        const page = req.query.page;
        const pagesize = req.query.pagesize;
        const skip = (page-1) * pagesize;

        const userdata = await User.create(req.body)
        // .skip(skip)
        // .limit(pagesize)
        // .lean()
        // .exec()
        console.log(userdata)
        return res.status(200).send(userdata)
    }
    catch(err){
        // console.error(err)
        return res.status(400).send({message: err.message})
    }
})


module.exports = router