require('dotenv').config();
const express=require('express');
const router=express.Router();
const passport=require('passport');
const Post=require("../models/post")


router.get("/posts",passport.checkAuthentication,function(req,res){
Post.find().populate("postedBy","_id name").exec(function(err,posts){
    if(err){
        res.json({error:err})
    }else{
  res.json(posts);
    }
})
});

router.post("/createpost",passport.checkAuthentication,function(req,res){
    const {caption,pic}=req.body;
    if(!caption || !pic){
        return res.status(422).json({error:"add all fields"})
    }
    req.user.password=undefined;
    const post=new Post({
        caption,
       photo:pic,
        postedBy:req.user
    });
    post.save(function(err,result){
        if(err){res.json({error:err})}
        else{res.json({post:result})}
    });
});


router.get("/myposts",passport.checkAuthentication,function(req,res){
 Post.find({postedBy:req.user._id}).populate("postedBy","_id name").exec(function(err,posts){
    if(err){
        res.json({error:err})
    }else{
  res.json(posts);
    }
})
});



module.exports=router;