import React,{useState,useEffect,useContext} from "react";
import { useHistory } from "react-router-dom";
import {UserContext} from "./App"

function Home(){
    const history=useHistory()
    const [data,setData]=useState([]);
    const {state,dispatch}=useContext(UserContext);
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

    function likePost(id){
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify({postId:id})
          }).then(res=>res.json())
            .then(result=>{
                const newData= data.map(function(item){
                    
                    if(item._id===result._id){
                      return result;
                    }
                      else
                      return item;
                    });
                    setData(newData);
            }).catch(err=>{console.log(err);})
    }
    function unlikePost(id){
        fetch('/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify({postId:id})
          }).then(res=>res.json())
            .then(result=>{
              const newData= data.map(function(item){
                if(item._id===result._id){
                   
                  return result;
                }
                  else
                  return item;
                });
                setData(newData);
            }).catch(err=>{console.log(err);})
    }
    function makeComment(id,text){
      fetch('/comment',{
          method:"put",
          headers:{
              "Content-Type":"application/json"
           },
           body:JSON.stringify({postId:id,text})
        }).then(res=>res.json())
          .then(result=>{
            const newData= data.map(function(item){
              if(item._id===result._id){
                return result;
              }
                else
                return item;
              });
              setData(newData);
          }).catch(err=>{console.log(err);})
  }
 return (
    <div className="home">
      {
          data.map(item=>{
              return(
    <div className="card home-card" key={item._id}>
    <div className="card-title"><h5>{item.postedBy.name}</h5></div>
    <div className="card-image"><img src={item.photo} alt="img"/></div>
    <div className="card-content input-field">
     {item.likedBy.includes(state._id)?
    <i className="material-icons" style={{color:"red",cursor:"pointer"}} onClick={()=>unlikePost(item._id)}>favorite</i>:
    <i className="material-icons" style={{cursor:"pointer"}} onClick={()=>likePost(item._id)}>favorite_border</i>
    }
    <h6>{item.likedBy.length} likes</h6>    
        <h6>{item.caption}</h6>
        {
          item.comments.map((record)=>{
            return (
              <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
            )
          })
        }
        <form onSubmit={(e)=>{
          e.preventDefault();
          makeComment(item._id,e.target[0].value);
          e.target[0].value="";
        }}>
        <input type="text" placeholder="Add a comment"/>
        </form>
    </div>
    </div>
    )
  })
      }
    </div>
    )
}

export default Home;