import React from "react";
import {Link} from "react-router-dom";


function Register(){
    return (
 <div className="myCard">
<div className="card auth-card input-field">
     <h2>Instagram</h2>
     <input
    type="text"
    placeholder="name"
    required
    />
   <input
    type="email"
    placeholder="email"
    required
    />
    <input
    type="password"
    placeholder="password"
    required
    />
    <button className="btn waves-effect waves-light blue darken-1">Sign Up</button>
       <h5>
       <Link to="/login">Already have an account ?</Link>
       </h5>
 </div>
 </div>
 )
}

export default Register;