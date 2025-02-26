// src/components/RatingsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RatingsList = ({ userId, type }) => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/ratings/${type}/${userId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                        },
                    }
                );
                setRatings(response.data);
            } catch (error) {
                console.error('Failed to fetch ratings:', error.response.data);
            }
        };
        fetchRatings();
    }, [userId, type]);

    return (
        <div>
            <h2>Ratings and Reviews</h2>
            {ratings.map((rating) => (
                <div key={rating.id}>
                    <p>Rating: {rating.rating}</p>
                    <p>Review: {rating.review}</p>
                </div>
            ))}
        </div>
    );
};

export default RatingsList;