// src/components/PaymentForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ jobId }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8000/api/payments/initiate-payment/',
                { phone_number: phoneNumber, amount: amount },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );
            console.log('Payment initiated:', response.data);
            alert('Payment initiated successfully!');
        } catch (error) {
            console.error('Payment failed:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Pay</button>
        </form>
    );
};

export default PaymentForm;