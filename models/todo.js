const mongoose = require('mongoose');

const todoschema = mongoose.Schema({
    srno: {type:Number},
    title: {type:String},
    descp: {type:String},
    datetime:{ type:Date,
        default: Date.now}
});

module.exports = mongoose.model('todo',todoschema);