const mongoose=require('mongoose');
const Task = require('./task');

const User=mongoose.model('users', new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    tasks:{
       type: [Task]
    }
 
}));
module.exports=User;
