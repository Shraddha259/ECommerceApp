import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust the path
import { useNavigate } from 'react-router-dom';
import { UserService } from '../services/UserService';

const Login: React.FC = () => {
    const { login, user } = useAuth();
    const [email, setEmail] = useState('shraddha@gmail.com');
    const [password, setPassword] = useState('hashedpassword123');
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [navigate]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        UserService.getUser(email).then((data) => {
            if (data.data !== null && data.data.email === email && data.data.passwordHash === password) {
                login(data.data);
                navigate('/');
            } else {
                alert('Invalid credentials');
            }
        });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
