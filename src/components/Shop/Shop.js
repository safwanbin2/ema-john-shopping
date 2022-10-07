import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getCart } from '../../utilities/lcdb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const {products} = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect( () => {
        const storedCart = getCart();
        let savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(item => item.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(item => item.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(product.id);
    }
    
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.id}
                        ></Product>)
                }
            </div>
            <div className='order-container'>
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;