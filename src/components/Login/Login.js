import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>This is LogIn</h2>
                <form action="">
                    <div className='from-input'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name='email' />

                    </div>
                    <div className="from-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' />
                    </div>

                    <input className='from-submit' type="submit" value='Login' />
                </form>
                <p>
                    New to Ema-John? <Link to='/signUp'>Create an Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;