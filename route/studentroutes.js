const express = require('express');
const student = require('./model/models.js');
const route= express.Router();


route.post("/",(req,res)=>{
    try{
const {name,age,level}= req.body;
const newStudent = await student.create

    }
    catch{

        console.error({error:  message.error
        });
    }
})
module.exports = route;
