import React from 'react';

const Product = (props) => {
    return (
        <article className="product">
            <h3>{props.id}</h3>
        </article>
    );
}

export default Product;
