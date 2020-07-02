import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Product from "../components/Product"


//match to jeden z obiektów który się tworzy przez Link
const ProductsPage = ({ match }) => {
    // console.log({ match })
    return (
        <div>
            <h4>Pojedynczy product</h4>
            <Product id={match.params.id} />
            <Link to="/products">Wróć do listy produktów</Link>
        </div>
    );
}

export default ProductsPage;