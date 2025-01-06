import React from 'react';
import { Link } from 'react-router-dom';

const TransactionError: React.FC = () => {
  return (
    <div className="container text-center my-5">
      <div className="card shadow-sm p-4 bg-light">
        <div className="card-body">
          <h1 className="text-danger mb-3">
            <i className="bi bi-x-circle-fill"></i>
          </h1>
          <h2 className="card-title">Transaction Failed</h2>
          <p className="card-text mt-3">
            We're sorry, but your transaction could not be processed at this time. Please check your payment details or try again later.
          </p>
          <div className="mt-4">
            <Link to="/payment" className="btn btn-primary me-2">
              Try Again
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionError;
