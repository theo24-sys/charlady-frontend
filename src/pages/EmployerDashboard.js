// src/pages/EmployerDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const EmployerDashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/jobs/employer/', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                setJobs(response.data);
            } catch (error) {
                console.error('Failed to fetch jobs:', error.response.data);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Your Posted Jobs</h1>
            {jobs.map((job) => (
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <p>Location: {job.location}</p>
                    <p>Salary: {job.salary}</p>
                    <button onClick={() => viewApplications(job.id)}>View Applications</button>
                </div>
            ))}
        </div>
    );
};
// src/pages/EmployerDashboard.js
const viewApplications = async (jobId) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/api/jobs/${jobId}/applications/`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }
        );
        console.log('Applications:', response.data);
        // Display applications in a modal or new page
    } catch (error) {
        console.error('Failed to fetch applications:', error.response.data);
    }
};
export default EmployerDashboard;