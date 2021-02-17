const mongoose=require('mongoose');
const User=mongoose.model('users',new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    tasks:{
       type: [{}]
    }
 
}));
module.exports=User;
