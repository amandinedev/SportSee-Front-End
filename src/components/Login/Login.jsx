import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to the dashboard with the provided ID
        navigate(`/dashboard/${id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                User ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;