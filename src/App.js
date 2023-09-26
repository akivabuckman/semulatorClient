import React from 'react';
import './App.css';
import { Routes, Link, Route, Router, Switch } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import InfoAndForm from './components/InfoAndForm';
import InfoPane from './components/InfoPane';
import Form from './components/Form';
import LoginRegister from './components/login/LoginRegister';
import Homepage from './components/Homepage';
import dotenv from "dotenv"
import {gapi} from "gapi-script"

export const AppContext = createContext(null);

function App() {
  const [token, setToken] = useState(null);
  
  

  return (
    <AppContext.Provider value={{ token, setToken }}>
      <div id="everything">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercise" element={<InfoAndForm />} />
          <Route path="/register" element={<LoginRegister title="Register" />} />
          <Route path="/login" element={<LoginRegister title="Login" />} />
        </Routes>
          
      </div>
      
    </AppContext.Provider>
      
    
  );
}

export default App;




