import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import PriceDetails from '../components/PriceDetails';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity  } = useContext(CartContext)!;

  const handleQuantityChange = (productId: number, change: number) => {
    const product = cart.find((item) => item.productId === productId);
    if (product) {
      const newQuantity = product.quantity + change;
      if (newQuantity > 0) {
        updateCartQuantity(productId, newQuantity);
      } else {
        removeFromCart(productId);
      }
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.productId}>
                    <td>{item.name}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleQuantityChange(item.productId, -1)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleQuantityChange(item.productId, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PriceDetails products={cart} taxRate={0.5} discount={20} shipping={50} />
        </>
      )}
    </div>
  );
};

export default Cart;
