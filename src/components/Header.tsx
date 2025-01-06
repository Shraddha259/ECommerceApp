import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        alert('Logged out successfully!');
    };
    return (
        <header className="bg-primary text-white py-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3">
                    <Link to="/" className="text-white text-decoration-none me-2">
                        My E-Commerce
                    </Link>
                </h1>

                <nav className="d-flex justify-content-start align-items-center flex-grow-1">
                    <Link to="/" className="btn btn-outline-light me-2">Home</Link>
                    <Link to="/cart" className="btn btn-outline-light me-2">Cart</Link>
                </nav>

                <div className="d-flex align-items-center">
                    {user ? (
                        <>
                            <span className="avatar text-bg-secondary avatar-lg" title='Shraddha'>SP</span>
                            <span className="me-2 text-white">Shraddha</span>
                            <button onClick={handleLogout} className="btn btn-outline-light">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <span className="avatar text-bg-secondary me-2 p-1" title='Shraddha'>Shraddha</span>
                            <button onClick={handleLogout} className="btn btn-outline-light">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </header>


    );
};

export default Header;
