import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card.js'; // Asegúrate de que el archivo se llama 'Card.js'

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    return ( <
        div className = "home" >
        <
        div className = "products" > {
            products.map(product => ( <
                Card key = { product.id }
                product = { product }
                />
            ))
        } <
        /div> <
        /div>
    );
}

export default Home;