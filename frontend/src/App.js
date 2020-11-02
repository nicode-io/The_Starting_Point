import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes/routes';
import TemplateGlobal from "./layouts/template-global/template-global";

function App() {
  return (
    <Router>
        <TemplateGlobal />
    </Router>
  );
}

export default App;
