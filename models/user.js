const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types;
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
       unique: true
    },
    password:{
        type:String
        },
    followers:[{
        type:ObjectId,
        ref:"User"
    }],
    following:[{
        type:ObjectId,
        ref:"User"
    }],
});

module.exports=mongoose.model("User",userSchema);