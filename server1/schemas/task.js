const mongoose=require('mongoose');
const Task= new mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    city:{
        type: String,
    },
    street:{
        type: String,
    },
    country:{
        type: String,
    },
    number:{
        type: String,
    },
    desc:{
        type: String,
    },
    audio:{
        type: String,
    },
 
});

module.exports=Task;
