const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
         unique:true
    },
    password:{
        type:String
        }
});
userSchema.plugin(passportLocalMongoose);
module.exports=mongoose.model("User",userSchema);