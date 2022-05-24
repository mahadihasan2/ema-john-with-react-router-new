import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>Sign Up</h2>
                <form action="">
                    <div className='from-input'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name='email' required />

                    </div>
                    <div className="from-input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className="from-input">
                        <label htmlFor="confirm-password">Confirm-Password</label>
                        <input type="password" name='confirm-password' />
                    </div>

                    <input className='from-submit' type="submit" value='Sign Up' />
                </form>
                <p>
                    Already have an account? <Link to='/login'>LogIn</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;