require('dotenv').config();
const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/user');



router.post("/register",function(req,res){
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(422).json({error:"please add all the fields"})
    }else{
    const user=new User({username:req.body.email,name:req.body.name});
    User.register(user,req.body.password,function(err,user){
        if(err){
            console.log(err);
          return res.status(422).json({error:"User already exists"});
        }else{
        res.json({message:"saved successfully"})
        passport.authenticate('local', req, res, function(){
            console.log("authenticated");
                   res.redirect('/');                     
           });
        }
    })
}
})

router.post('/login', function(req, res, next) {
    const {email,password}=req.body;
    if( !email || !password){
        return res.status(422).json({error:"please add all the fields"})
    }
  passport.authenticate('local', function(err, user, info) {
    if (err) { console.log(err); return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/users/' + user.username);
    });
  })(req, res, next);
});

module.exports=router;