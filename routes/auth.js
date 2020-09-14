require('dotenv').config();
const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/user');



router.get("/secret",function(req,res){
    if(req.isAuthenticated()){
    res.send("hello you are safe");
    }else{
        res.status(400);
        res.redirect("/login");
    }
});

router.get("/register",function(req,res){
    res.send("register page");
});

router.get("/login",function(req,res){
    res.send("login page");
});

router.post("/register",function(req,res){
    const user=new User({username:req.body.username,email:req.body.email});
    User.register(user,req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }
            passport.authenticate("local")(req,res,function(){
                res.redirect("/secret");
            })
    })
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/secret');
});

module.exports=router;