import React, { useContext } from 'react';
import './Header.css';
import logo from '../../Logo.svg';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user, LogOut} = useContext(AuthContext);
    
    const handleLogOut = () => {
        LogOut()
        .then(() => {
            alert('Signed Out Successfully')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li><NavLink to="/">Shop</NavLink></li>
                <li><NavLink to="/orders">Orders</NavLink></li>
                <li><NavLink to="/inventory">Inventory</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                {user ? <li onClick={handleLogOut}><NavLink>Log Out</NavLink></li>
                : <li><NavLink to="/login">Log in</NavLink></li>}
                <li><NavLink to="/signup">Sign up</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;