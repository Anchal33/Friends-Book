import React,{ useEffect,useState,useContext } from "react";
import {UserContext} from "./App";
import {useParams} from 'react-router-dom';
function Profile(){
    const {id}=useParams();
    const [userProfile,setProfile]=useState(null);
     const {state,dispatch}=useContext(UserContext);
     useEffect(()=>{
         async function fetchData(){
       const res= await fetch(`/user/${id}`);
      const result=await res.json(); 
           await setProfile(result);
         }
         fetchData();
    },[])

 return (
     <>
     {userProfile?
 <div style={{maxWidth:"550px",margin:"0px auto"}}>
     <div className="profile">
     <div>
         <img className="profile-img" src="https://images.unsplash.com/photo-1575632312417-71da8ed4992d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profileimage"/>
     </div>
     <div className="profile-content">
     <h4>{userProfile.user.name}</h4>
     <h5>{userProfile.user.email}</h5>
         <div style={{display:"flex",justifyContent:"space-between", width:"108%"}}>
          <h6>{userProfile.posts.length} posts</h6>
          <h6>50 followers</h6>
          <h6>80 following</h6>
         </div>
     </div>
     </div>
     <div className="gallery">
     {
         userProfile.posts.map(item=>{
            return <img className="item" src={item.photo} key={item._id} alt={item.caption}/>
         })
     }
          
     </div>
    
 </div>:<h2>loading...</h2>}
 </>
    )
}

export default Profile;