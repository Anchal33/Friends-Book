import React,{useState} from "react";
import {Link} from "react-router-dom";
import M from "materialize-css";

function Register(){
   const [name,setName]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");

   function postData(){
    fetch("/register",{
       method:"post",
       headers:{
          "Content-Type":"application/json"
       },
       body:JSON.stringify({name,email,password})
    }).then(res => res.json())
    .then(data => {
       if(data.error){M.toast({html:data.error,classes:"red darken-3"})}
       else{M.toast({html:data.message,classes:"green lighten-1"})}
    });
   }
    return (
 <div className="myCard">
<div className="card auth-card input-field">
     <h2>Instagram</h2>
     
     <input
    type="text"
    name="name"
    placeholder="name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
   <input
    type="email"
    name="email"
    placeholder="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
    <input
    type="password"
    name="password"
    placeholder="password"
    autoComplete="new-password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button onClick={postData} className="btn waves-effect waves-light blue darken-1">Sign Up</button>
       <h5>
       <Link to="/login">Already have an account ?</Link>
       </h5>
 </div>
 </div>
 )
}

export default Register;