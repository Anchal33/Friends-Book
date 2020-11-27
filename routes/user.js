const express=require('express');
const router=express.Router();
const passport=require('passport');
const Post=require("../models/post");
const User=require("../models/user");

router.get("/user/:userId",passport.checkAuthentication,function(req,res){
 
 User.findOne({_id:req.params.userId}).select("-password").then(user=>{
        Post.find({postedBy:req.params.userid}).populate("postedBy","_id name").exec((err,posts)=>{
            if(err){
                res.json({error:err});
            }
            else{
                res.json({user,posts});
            }
        })
    }).catch(err=>{
     res.status(404).json({error:"user not found"});
    })
});

module.exports=router;