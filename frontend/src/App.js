import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { getUsersSessions } from './api/index';
import Routes from './routes/routes';
import { Header, Nav } from './components/commons';
import './App.css';


function App() {

useEffect(()=>{
  getUsersSessions('/user').then((response)=>{
    console.log(response);
  });
},[]);

  return (
    <Router>
        <Header />
        <Routes />
        <Nav />
    </Router>
  );
}

export default App;
