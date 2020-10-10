import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";


function Home(){
    const history=useHistory()
    const [data,setData]=useState([]);
    useEffect(()=>{
     fetch('/posts')
     .then(res=>res.json())
     .then(result=>{
         
         setData(result.reverse())}
         )
     .catch(err=>{
         history.push("/");
     })
    },[])

 return (
    <div className="home">
      {
          data.map(item=>{
              return(
    <div className="card home-card" key={item._id}>
    <div className="card-title"><h5>{item.postedBy.name}</h5></div>
    <div className="card-image"><img src={item.photo} alt="img"/></div>
    <div className="card-content input-field">
    <i className="material-icons">favorite</i>
        <h6>{item.caption}</h6>
        <input type="text" placeholder="Add a comment"/>
    </div>
    </div>)
          })
      }
    </div>
    )
}

export default Home;