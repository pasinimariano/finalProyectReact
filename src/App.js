import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import RoutesWeb  from  './Components/RoutesWeb';


function App() {

  const options1= [
    {
      path : '/',
      label : 'HOME'
    },
    {
      path : '/contact',
      label : 'ABOUT US'
    },
    {
      path : '/shop',
      label : 'SHOP'
    },
  ];

  const options2= [
    {
      path : '/login',
      label : 'LOGIN'
    },
    {
      path : '/account',
      label : 'CREATE ACCOUNT'
    }
  ];

  return (
    <BrowserRouter className="App">
      <NavBar 
          data=  {options1} 
          data1= {options2} 
      />
      <RoutesWeb />
    </BrowserRouter>
  );
}

export default App;
