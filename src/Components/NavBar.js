import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from './img/logo.png';



function NavBar (props) {

    return(
        <div className= 'NavBarContainer'> 
            <img src= {logo} alt= '' />
            {props.data1.map (option =>
                <Link to={option.path}> 
                    <li className= 'Nav1'> {option.label} </li>
                </Link>
            )}
            {props.data.map (option =>
                <Link to={option.path}> 
                    <li className= 'Nav2'> {option.label} </li>
                </Link>
            )}
        </div>
    );

}

export default NavBar;