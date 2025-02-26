// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', formData);
            console.log('Login successful:', response.data);
            localStorage.setItem('access_token', response.data.access);
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;