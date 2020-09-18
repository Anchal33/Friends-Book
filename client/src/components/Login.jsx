import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";
import M from "materialize-css"

function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const history=useHistory();
  function postData(){
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:"invalid email",classes:"red darken-3"});
      return;
   }
 fetch("/login",{
    method:"post",
    headers:{
       "Content-Type":"application/json"
    },
    body:JSON.stringify({email,password})
 }).then(res => res.json())
 .then(data => {
    if(data.error){M.toast({html:data.error,classes:"red darken-3"})}
    else{
       M.toast({html:data.message,classes:"green darken-1"});
       history.push("/");
   }
 });
  }
 return (
 <div className="myCard">
<div className="card auth-card input-field">
     <h2>Instagram</h2>
   <input
    type="email"
    placeholder="email"
    name="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    required
    />
    <input
    type="password"
    placeholder="password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    name="password"
    required
    />
    <button onClick={postData} className="btn waves-effect waves-light blue darken-1">Login</button>
       <h5>
       <Link to="/register">Don't have an account ?</Link>
       </h5>
 </div>
 </div>
 )
}

export default Login;