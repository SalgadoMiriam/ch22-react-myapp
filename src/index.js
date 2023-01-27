import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import { NombreCompleto as Name } from './components/NombreCompleto';
import Mascota from './components/Mascota';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello/>
    <Name name="Sergio" age={30} show={true}/>
    <Mascota name="Solovino" age = {8} show={true} />
    <Name name="Pax" age={25} show={false}/>
    <Name name="Miriam" age={27}  show={false}/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
