import React, { useState,useEffect } from 'react';


function Details (props) {

    const [products, setProducts] = useState ({});

    const [buystate, setBuystate] = useState ({
        addBuy : ''
    });

    useEffect (
        () => {
            fetch ('https://jsonfy.com/items/' + props.match.params.id)
            .then (res => res.json())
            .then ((data) => {
                setProducts (data [0])
            })
        }, []
    );
    
    const handleClick = () => {
        setBuystate ({
            addBuy : 'THANK YOU!'
        })
    };

    return(
        <div className= 'ContainerDetails'>
            <img src= {products.photo_url}></img>
            <h2> {products.name} </h2>
            <div> 'Price: Us$' {products.price} </div>
            <p> {products.description} </p>
            <button onClick= {handleClick}> Buy Now </button>
            <div> {buystate.addBuy} </div>
        </div>
    );
}

export default Details;