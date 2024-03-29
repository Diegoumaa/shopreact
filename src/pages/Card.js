import React from 'react';

function Card({ product }) {
    return ( <
        div className = "card" >
        <
        img src = { product.image }
        alt = { product.title }
        /> <
        div className = "card-body" >
        <
        h5 className = "card-title" > { product.title } < /h5> <
        p className = "card-text" > $ { product.price } < /p> <
        /div> <
        /div>
    );
}

export default Card;