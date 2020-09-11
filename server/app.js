require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const session=require('express-session');
const passport=require('passport');
const bodyParser=require('body-parser');
const LocalStrategy=require('passport-local').Strategy;
const User=require('./models/user');


app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))


app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended : false}));

app.use(require("./routes/auth"))

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex",true);


app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running");
})

