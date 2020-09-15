import React from "react";


function Profile(){
 return (
 <div style={{maxWidth:"550px",margin:"0px auto"}}>
     <div className="profile">
     <div>
         <img className="profile-img" src="https://images.unsplash.com/photo-1575632312417-71da8ed4992d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="profile image"/>
     </div>
     <div className="profile-content">
         <h4>Jefferey Austin</h4>
         <div style={{display:"flex",justifyContent:"space-between", width:"108%"}}>
          <h6>40 posts</h6>
          <h6>50 followers</h6>
          <h6>80 following</h6>
         </div>
     </div>
     </div>
     <div className="gallery">
           <img className="item" src="https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1500363296005-e92f1f1b5052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1499281851221-5bce936073b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1501871732394-eccc65227089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
           <img className="item" src="https://images.unsplash.com/photo-1501871732394-eccc65227089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images"/>
     </div>
 </div>
    )
}

export default Profile;