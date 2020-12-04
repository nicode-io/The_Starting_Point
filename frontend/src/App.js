import React, { useState, useEffect } from 'react';
import './App.css';
import { getUsersSessions } from './api/index';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/routes';


function App() {
const [user, setUser] = useState({
  loggedIn: false,
  data: {}
}); 
useEffect(()=>{
  
  getUsersSessions('/user').then((response)=>{
    if (response.data.loggedIn && !user.loggedIn) {
      setUser({
        loggedIn: true, 
        data: response.data.user
      });

    }
    else if(!response.data.loggedIn && user.loggedIn) {
      setUser({
        loggedIn: false,
        user: {}
      });
    }
  });
},[]);

  return (
    <Router>
        <Routes user={user} />
    </Router>
  );
}

export default App;
