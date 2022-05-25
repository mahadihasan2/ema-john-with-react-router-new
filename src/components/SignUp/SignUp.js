import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
        console.log(email)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
        console.log(password)
    }

    if (user) {
        navigate('/login');
    }



    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)

    }

    const handleCreateUserOnSubmit = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            error('your to password did not match')
            return;

        }
        if (password.length < 6) {
            setError('please password over the 6 digit')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>Sign Up</h2>
                <form action="" onSubmit={handleCreateUserOnSubmit}>
                    <div className='from-input'>
                        <label htmlFor="email">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />

                    </div>
                    <div className="from-input">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className="from-input">
                        <label htmlFor="confirm-password">Confirm-Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirm-password' />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
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