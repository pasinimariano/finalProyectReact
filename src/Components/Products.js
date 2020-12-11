import React from 'react';


function Products (props) {

    const  image  = props.data.photo_url

    return(
        <div className= 'ContainerProducts'>
            <h2> {props.data.name} </h2>
            <p> {props.data.description} </p>
            <div > {props.data.photo_url} </div>
            <img src= { image } ></img>
            <button> More Info </button>    
        </div>
    );
}

export default Products;