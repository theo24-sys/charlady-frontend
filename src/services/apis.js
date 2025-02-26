// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Django backend URL

export const getWorkers = async () => {
    const response = await axios.get(`${API_URL}/workers/`);
    return response.data;
};

export const getEmployers = async () => {
    const response = await axios.get(`${API_URL}/employers/`);
    return response.data;
};

export const registerWorker = async (data) => {
    const response = await axios.post(`${API_URL}/workers/`, data);
    return response.data;
};

export const registerEmployer = async (data) => {
    const response = await axios.post(`${API_URL}/employers/`, data);
    return response.data;
};