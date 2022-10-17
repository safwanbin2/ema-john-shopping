import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if(password.length < 6){
            setError('Password can not be less than 6 character')
            return;
        }
        if(password !== confirm){
            setError('Password did not matched')
            return;
        }
        setError('');

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => {
            setError(error.message);
        })

    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <h2 className='title'>Sign Up</h2>
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
                <div className="form-control">
                    <label htmlFor="confirm">
                        Conform Password:
                    </label>
                    <input type="password" name='confirm' placeholder='password' required />
                </div>
                {error && <p className='text-error'><small>{error}</small></p>}
                <button className='btn'>Sign Up</button>
                <p><small>Already have an account?<Link to="/login">Login</Link></small></p>
            </form>
        </div>
    );
};

export default SignUp;