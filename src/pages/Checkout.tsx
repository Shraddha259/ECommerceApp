import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

const Checkout: React.FC = () => {
  const { cart } = useContext(CartContext)!;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Order placed successfully!');
    console.log('Order Details:', { cart, customer: formData });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return <p className="text-center">Your cart is empty.</p>;
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" id="address" name="address" className="form-control" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" id="city" name="city" className="form-control" value={formData.city} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="postalCode" className="form-label">Postal Code</label>
          <input type="text" id="postalCode" name="postalCode" className="form-control" value={formData.postalCode} onChange={handleInputChange} required />
        </div>
        <h3>Total: ${calculateTotal()}</h3>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
