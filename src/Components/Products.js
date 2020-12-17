import { Link } from 'react-router-dom';
import React from 'react';


function Products (props) {

    const  image  = props.data.photo_url;
    const productId = props.data.id;
    
    return(
        <div className= 'ContainerProducts'>
            <h3> {props.data.name} </h3>
            <img src= { image }  alt= ''></img>
            <Link to= {'/shop/'+ productId}> <button> More Info </button> </Link>
        </div>
    );
}

export default Products;