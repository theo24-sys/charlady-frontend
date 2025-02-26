// src/components/AnalyticsDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AnalyticsDashboard = () => {
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/analytics/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setAnalytics(response.data);
            } catch (error) {
                console.error('Failed to fetch analytics:', error.response.data);
            }
        };
        fetchAnalytics();
    }, []);

    return (
        <div>
            <h1>Platform Analytics</h1>
            <p>Total Jobs: {analytics.total_jobs}</p>
            <p>Total Applications: {analytics.total_applications}</p>
            <p>Total Ratings: {analytics.total_ratings}</p>
        </div>
    );
};

export default AnalyticsDashboard;