import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeCart, removeItem } from '../../utilities/lcdb';
import Order from '../Order/Order';
import OrderReview from '../OrderReview/OrderReview';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Orders.css';

const Orders = () => {
    const { oldCart } = useLoaderData();
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
    const handleRemoveAll = () => {
        setCart([]);
        removeCart()
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
                {
                    cart.length === 0 && <h2>You have Nothing in your Cart. plese <Link to="/">Shop More</Link></h2>
                }
            </div>
            <div className='order-container'>
                <Order
                    cart={cart}
                    handleRemoveAll={handleRemoveAll}
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