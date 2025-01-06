import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPayment: React.FC = () => {
  return (
    <div className="container text-center my-5">
      <div className="card shadow-sm p-4 bg-light">
        <div className="card-body">
          <h1 className="text-success mb-3">
            <i className="bi bi-check-circle-fill"></i>
          </h1>
          <h2 className="card-title">Payment Successful!</h2>
          <p className="card-text mt-3">
            Thank you for your order. Your payment was successfully processed. You will receive a confirmation email with your order details shortly.
          </p>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary me-2">
              Go to Homepage
            </Link>
            <Link to="/orders" className="btn btn-secondary">
              View My Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
