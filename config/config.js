const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.url;
const config = async(req,res)=>{
try{
    await mongoose.connect;
    console.log("mongoose connected successfully");
}
catch{
    console.error({error:message.error});
}


}
 module.exports = config;