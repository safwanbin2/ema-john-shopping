import React from 'react';
import './Order.css';

const Order = ({cart}) => {
    // adding price 
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const item of cart){
        quantity = quantity + item.quantity;
        totalPrice = totalPrice + item.price * item.quantity;
        totalShipping = totalShipping + item.shipping;
    }
    const totalTax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='order'>
            <h3 className="order-title">Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Chrage: ${totalShipping}</p>
            <p>Tax: ${totalTax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Order;