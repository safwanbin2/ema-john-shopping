import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeItem } from '../../utilities/lcdb';
import Order from '../Order/Order';
import OrderReview from '../OrderReview/OrderReview';
import './Orders.css';

const Orders = () => {
    const { products, oldCart } = useLoaderData();
    const [cart, setCart] = useState(oldCart);
    const handleRemoveItem = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        removeItem(id);
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(item => <OrderReview
                        key={item.id}
                        item={item}
                        handleRemoveItem={handleRemoveItem}
                    ></OrderReview>)
                }
            </div>
            <div className='order-container'>
                <Order
                    cart={cart}
                ></Order>
            </div>
        </div>
    );
};

export default Orders;