import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const {LogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        LogIn(email, password)
        .then(reuslt => {
            const user = reuslt.user;
            console.log(user)
            navigate('/')
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h2 className='title'>Log in</h2>
                <div className='form-control'>
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input type="email" name="email" placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <button className='btn'>Login</button>
                <p><small>new to ema-john? <Link to="/signup">create new account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;