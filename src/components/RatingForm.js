// src/components/RatingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RatingForm = ({ workerId, employerId }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8000/api/ratings/create/',
                { worker: workerId, employer: employerId, rating, review },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );
            console.log('Rating submitted:', response.data);
            alert('Rating submitted successfully!');
        } catch (error) {
            console.error('Rating submission failed:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
            />
            <textarea
                placeholder="Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
            <button type="submit">Submit Rating</button>
        </form>
    );
};

export default RatingForm;