// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        const fetchWorkers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/admin/workers/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setWorkers(response.data);
            } catch (error) {
                console.error('Failed to fetch workers:', error.response.data);
            }
        };
        fetchWorkers();
    }, []);

    const verifyWorker = async (workerId) => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/admin/workers/${workerId}/verify/`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );
            console.log('Worker verified:', response.data);
            alert('Worker verified successfully!');
        } catch (error) {
            console.error('Verification failed:', error.response.data);
        }
    };

    return (
        <div>
            <h1>Worker Verification</h1>
            {workers.map((worker) => (
                <div key={worker.id}>
                    <h2>{worker.user.username}</h2>
                    <p>Skills: {worker.skills}</p>
                    <button onClick={() => verifyWorker(worker.id)}>Verify</button>
                </div>
            ))}
        </div>
    );
};

export default AdminDashboard;