import React from 'react';
import './Header.css';
import logo from '../../Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li><NavLink to="/">Shop</NavLink></li>
                <li><NavLink to="/orders">Orders</NavLink></li>
                <li><NavLink to="/inventory">Inventory</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;