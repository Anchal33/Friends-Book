require('dotenv').config();
const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/user');



router.post("/register",function(req,res){
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        console.log(name);
        console.log(email);
        console.log(password);
        return res.status(422).json({error:"please add all the fields"})
    }else{
    const user=new User({username:req.body.name,email:req.body.email});
    User.register(user,req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }
        console.log(user);
        res.json({message:"saved successfully"})
            passport.authenticate("local")(req,res,function(){
                res.redirect("/login");
            })
    })
}
})

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/secret');
});

module.exports=router;