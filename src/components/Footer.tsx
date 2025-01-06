import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between">
          <span>Email: support@example.com | Phone: +1 234 567 890</span>
          <span className="float-end">© {new Date().getFullYear()} My E-commerce Site. All Rights Reserved.</span>
        </div>
      </footer>
    );
};

export default Footer;
