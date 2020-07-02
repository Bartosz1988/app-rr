import React from 'react';
import { Link } from "react-router-dom";
import "../styles/ProductsList.css"

const ListOfProducts = ["Scott", "Cervelo", "Bianchi"]

const ProductsList = () => {

    const products = ListOfProducts.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))
    return (
        <div className="products">
            <h2>Lista naszych produktów</h2>
            <div>
                <ul>{products}</ul>
            </div>


        </div>
    );
}

export default ProductsList;