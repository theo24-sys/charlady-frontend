import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterForm from './components/RegisterForm'; // Import RegisterForm
import WorkerDashboard from './pages/WorkerDashboard';
import EmployerDashboard from './pages/EmployerDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register-worker" element={<RegisterForm role="worker" />} />
                <Route path="/register-employer" element={<RegisterForm role="employer" />} />
                <Route path="/worker-dashboard" element={<WorkerDashboard />} />
                <Route path="/employer-dashboard" element={<EmployerDashboard />} />
            </Routes>
        </Router>
    );
}

// Example: Login and store token
const login = async (email, password) => {
    try {
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        
        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access); // Store token
    } catch (error) {
        console.error('Error during login:', error);
    }
};

// Example: Authenticated API request
const fetchWorkers = async () => {
    const token = localStorage.getItem('access_token');
    try {
        const response = await fetch('http://localhost:8000/api/workers/', {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch workers');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching workers:', error);
    }
};

export default App;