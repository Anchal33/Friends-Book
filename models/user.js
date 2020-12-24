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
    pic:{
        type:String,
        default:"https://res.cloudinary.com/mern-dev/image/upload/v1608826485/default_hqykkc.jpg"
    }
});

module.exports=mongoose.model("User",userSchema);