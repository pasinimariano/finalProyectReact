import React, { Component } from 'react';
import Products from '../Components/Products'



class Shop extends Component {

    constructor (props) {
        super (props)
        this.state= {
            products : [],
            loading : true
        }
    }

    componentDidMount () {
        fetch ('https://jsonfy.com/items')
        .then (res => res.json())
        .then ((data) => {
            this.setState ({
                products : data,
                loading : false
            })
        })
    }

    render () {
        if (this.state.loading) {
            return (
                <h3> Loading ... </h3>
            )
        }

        else {
            return (
                <div>
                    {this.state.products.map (products =>
                        <div>
                            <Products data= {products} />
                        </div>    
                    )}
                </div>
            )
        }
    }
}

export default Shop;