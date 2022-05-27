import React, { useState } from 'react';

const Shipment = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate();

    const handleCreateUserOnSubmit = event => {
        event.preventDefault()
        if (address !== phone) {
            error('your to password did not match')
            return;

        }
        if (address.length < 6) {
            setError('please password over the 6 digit')
            return;
        }
        // createUserWithEmailAndPassword(email, password)
    }

    const handleNameBlur = event => {
        setName(event.target.value)
        console.log(name)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
        console.log(email)
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value)
        console.log(address)
    }

    const handleAddressPhoneBlur = event => {
        setPhone(event.target.value)

    }


    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>Shipping Information</h2>
                <form action="" onSubmit={handleCreateUserOnSubmit}>
                    <div className='from-input'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name='name' required />

                    </div>
                    <div className='from-input'>
                        <label htmlFor="email">E-mail</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />

                    </div>
                    <div className="from-input">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name='address' required />
                    </div>
                    <div className="from-input">
                        <label htmlFor="address-phone">Address-Phone</label>
                        <input onBlur={handleAddressPhoneBlur} type="number" name='addressPhone' />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='from-submit' type="submit" value='Add Shipping' />
                </form>

            </div>
        </div>
    );
};

export default Shipment;