// src/components/JobPostForm.js
import React, { useState } from 'react';
import axios from 'axios';

const JobPostForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/jobs/', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            console.log('Job posted successfully:', response.data);
        } catch (error) {
            console.error('Job posting failed:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
            <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <input
                type="number"
                placeholder="Salary"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            />
            <button type="submit">Post Job</button>
        </form>
    );
};

export default JobPostForm;