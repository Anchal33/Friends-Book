require('dotenv').config();
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./models/user');

app.use(require("./routes/auth"))

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected',function(){
    console.log("mongo db is connected");
})
mongoose.connection.on('error',function(err){
    console.log("error in mongo db while connecting",err);
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running");
})



