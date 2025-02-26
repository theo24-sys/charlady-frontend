// src/pages/WorkerDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkerDashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/jobs/available/', {
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
            <h1>Available Jobs</h1>
            {jobs.map((job) => (
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <p>Location: {job.location}</p>
                    <p>Salary: {job.salary}</p>
                    <button onClick={() => applyForJob(job.id)}>Apply</button>
                </div>
            ))}
        </div>
    );
};
// src/pages/WorkerDashboard.js
const applyForJob = async (jobId) => {
    try {
        const response = await axios.post(
            `http://localhost:8000/api/jobs/${jobId}/apply/`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            }
        );
        console.log('Application successful:', response.data);
        alert('Applied successfully!');
    } catch (error) {
        console.error('Application failed:', error.response.data);
    }
};
export default WorkerDashboard;