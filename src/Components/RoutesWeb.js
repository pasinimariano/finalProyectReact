import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Shop from '../Pages/Shop';
import Login from '../Pages/Login';
import Account from '../Pages/Account';
import ProductDetails from '../Pages/ProductDetails';


function RoutesWeb () {

    return (
        <>
            <Route path= '/' exact component= {Home} />
            <Route path= '/contact' exact component= {Contact} />
            <Route path= '/shop' exact component= {Shop} />
            <Route path= '/shop/:id' exact component= {ProductDetails} />
            <Route path= '/login' exact component= {Login} />
            <Route path= '/account' exact component= {Account} />
        </>
    );
}

export default RoutesWeb;