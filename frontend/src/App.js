import React, { useEffect } from 'react';
import './App.css';
import { getUsersSessions } from './api/index';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/routes';



function App() {

useEffect(()=>{
  getUsersSessions('/user').then((response)=>{
    console.log(response);
  });
},[]);

  return (
    <Router>
        <Routes/>
    </Router>
  );
}

export default App;
