const mongoose = require('mongoose');

var city = mongoose.model('city',{
    name : { type : String},
    code : { type : Number},
    country : { type : String},
})

module.exports = city;