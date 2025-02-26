// src/components/JobSearch.js
import React, { useState } from 'react';
import axios from 'axios';

const JobSearch = () => {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({
        location: '',
        salary: '',
        search: '',
    });

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/jobs/', {
                params: filters,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
            });
            setJobs(response.data);
        } catch (error) {
            console.error('Failed to fetch jobs:', error.response.data);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
            <input
                type="number"
                placeholder="Min Salary"
                value={filters.salary}
                onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
            />
            <input
                type="text"
                placeholder="Search"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
            <button onClick={handleSearch}>Search</button>

            {jobs.map((job) => (
                <div key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <p>Location: {job.location}</p>
                    <p>Salary: {job.salary}</p>
                </div>
            ))}
        </div>
    );
};

export default JobSearch;