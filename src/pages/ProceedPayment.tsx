import React, { useState } from 'react';

const ProceedPayment: React.FC = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform payment logic here (e.g., integrate with payment gateway)
    console.log('Payment Details:', paymentDetails);
    alert('Payment successful!');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded bg-light">
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">
            Name on Card
          </label>
          <input
            type="text"
            className="form-control"
            id="cardName"
            name="cardName"
            value={paymentDetails.cardName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="expiryDate" className="form-label">
              Expiry Date
            </label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cvv" className="form-label">
              CVV
            </label>
            <input
              type="password"
              className="form-control"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              placeholder="123"
              maxLength={3}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default ProceedPayment;
