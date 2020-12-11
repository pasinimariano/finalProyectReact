import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Login from './Pages/Login'
import Account from './Pages/Account'

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
      <Route exact path= '/' exact component= {Home} />
      <Route exact path= '/contact' exact component= {Contact} />
      <Route exact path= '/shop' exact component= {Shop} />
      <Route exact path= '/login' exact component= {Login} />
      <Route exact path= '/account' exact component= {Account} />
    </BrowserRouter>
  );
}

export default App;
