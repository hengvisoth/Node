const mongoose = require('mongoose');


const dbConn = mongoose.connect('mongodb://localhost:27017/CountryManager',(err)=>{
    if(!err){
        console.log("MongoDB connection Succed")
    }else{
        console.log("Error in DB connection"+JSON.stringify(err))
    }
})

module.exports = dbConn;