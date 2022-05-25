import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleFromSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>This is LogIn</h2>
                <form action="" onSubmit={handleFromSubmit}>
                    <div className='from-input'>
                        <label htmlFor="email">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />

                    </div>
                    <div className="from-input">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>

                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }

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