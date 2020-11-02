import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Nav} from './components';
import Routes from './routes/routes';


function App() {

  return (
    <Router>
        <Header/>
        <Routes/>
        <Nav />
    </Router>
  );
}

export default App;
