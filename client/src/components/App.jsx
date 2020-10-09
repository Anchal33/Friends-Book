import React,{useEffect,createContext,useReducer,useContext} from 'react';
import Navbar from './Navbar';
import {BrowserRouter,Route, Switch, useHistory} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Createpost from "./Createpost";
import {initialState,userReducer} from "../reducers/userReducer";
export const UserContext=createContext();

function Routing(){
  const history=useHistory();
  const {state,dispatch}=useContext(UserContext);
  useEffect(()=>{
   const user=JSON.parse(localStorage.getItem("user"));
   if(user){
     dispatch({type:"USER",payload:user})
     history.push("/");
   }
   else{
     history.push("/login");
   }
  },[])
  return(
    <Switch>
     <Route exact path="/">
     <Home />
     </Route>
     <Route path="/register">
    <Register />
    </Route>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/profile">
    <Profile />
    </Route>
    <Route path="/createpost">
    <Createpost />
    </Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(userReducer,initialState);

  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Navbar />
    <Routing />
  </BrowserRouter>
  </UserContext.Provider>
  );
}

export default App;
