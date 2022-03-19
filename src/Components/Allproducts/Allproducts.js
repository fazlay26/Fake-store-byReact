import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';
import "./Allproducts.css"

const Allproducts = ({ setCartCount }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1>All Products</h1>
            <div className="container">
                <div className="row">
                    {
                        products.map(product => <Singleproduct key={product.id} product={product} setCartCount={setCartCount}></Singleproduct>)
                    }
                </div>
            </div>

        </div>

    );

};

export default Allproducts;