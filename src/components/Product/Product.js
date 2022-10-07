import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {name, price, img, ratings, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price: ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>ratings : *{ratings}</small></p>
            </div>
            <button className='btn-cart' onClick={() => {handleAddToCart(product)}}>
                <h4>Add to Cart</h4>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>   
            </button>
        </div>
    );
};

export default Product;