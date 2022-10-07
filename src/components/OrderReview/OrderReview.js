import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './OrderReview.css';

const OrderReview = ({ item, handleRemoveItem }) => {
    const { name, id, img, price, quantity, shipping } = item;
    return (
        <div className='item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review'>
                <div className='info'>
                    <p className='product-name'>{name}</p>
                    <p><small>Price: <span>{price}</span>$</small></p>
                    <p><small>Shipping: <span>{shipping}</span>$</small></p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                </div>
                <div>
                    <button onClick={() => handleRemoveItem(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;