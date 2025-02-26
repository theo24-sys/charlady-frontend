import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = ({ role }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: role, 
        city: '',
        willingToTravel: false,
        jobType: 'full-time',
        skills: '', 
        company: '', // Added for employers
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = formData.role === 'worker' ? '/register-worker/' : '/register-employer/';
            const response = await axios.post(`https://charlady-backend.onrender.com/api${endpoint}`, formData);
            console.log('Registration successful:', response.data);
            
            // Navigate to the respective dashboard
            if (formData.role === 'worker') {
                navigate('/worker-dashboard');
            } else {
                navigate('/employer-dashboard');
            }
        } catch (error) {
            console.error('Registration failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="registration-form">
            <h2>Register as {formData.role === 'worker' ? 'Worker' : 'Employer'}</h2>
            <button onClick={() => setFormData({ ...formData, role: formData.role === 'worker' ? 'employer' : 'worker' })}>
                Switch to {formData.role === 'worker' ? 'Employer' : 'Worker'} Registration
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                {formData.role === 'worker' && (
                    <>
                        <label>
                            Willing to Travel Far:
                            <input
                                type="checkbox"
                                checked={formData.willingToTravel}
                                onChange={(e) => setFormData({ ...formData, willingToTravel: e.target.checked })}
                            />
                        </label>
                        <label>
                            Job Type:
                            <select
                                value={formData.jobType}
                                onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                            >
                                <option value="full-time">Full-Time</option>
                                <option value="part-time">Part-Time</option>
                            </select>
                        </label>
                        <input
                            type="text"
                            placeholder="Skills"
                            value={formData.skills}
                            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        />
                    </>
                )}
                {formData.role === 'employer' && (
                    <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                )}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;