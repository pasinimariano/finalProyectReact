import React, { useState,useEffect } from 'react';
import Products from '../Components/Products';


function Shop () {

    const [items, setItems] = useState ({
        products : [],
        loading : true
    });

    useEffect (
        () => {
            fetch ('https://jsonfy.com/items')
            .then (res => res.json())
            .then ((data) => {
                setItems (
                    {products : data}, 
                    {loading : false})
                })
        }, []
    );

    if (items.loading) {
        return(
            <div className= 'LoadingState'> 
                Loading ...
            </div>
        )
    }
    else {
        return(
            <> 
               {items.products.map (products =>
                    <div>
                        <Products data= {products} />
                    </div>   
                )}
            </>
        )
    };

}

export default Shop;

