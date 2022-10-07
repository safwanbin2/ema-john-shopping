import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeItem } from '../../utilities/lcdb';
import Order from '../Order/Order';
import OrderReview from '../OrderReview/OrderReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Orders.css';

const Orders = () => {
    const { products, oldCart } = useLoaderData();
    const [cart, setCart] = useState(oldCart);
    const handleRemoveItem = (id) => {
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
        removeItem(id);
        toast.success('Removed Successfully', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Orders;