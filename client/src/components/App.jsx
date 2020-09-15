import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Createpost from "./Createpost";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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
  </BrowserRouter>
  );
}

export default App;
