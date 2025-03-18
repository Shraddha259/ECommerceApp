import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UserService } from '../services/UserService';
import { IUser } from '../types/User';
import { IPriceDetails } from '../types/PriceDetails';
import { useAuth } from '../context/AuthContext';
import { ICartItem } from '../types/Cart';
import { OrderService } from '../services/OrderService';

const PlaceOrder: React.FC = () => {
  const [user, setUser] = useState<IUser>();
  const { userId } = useAuth();
  const [address, setAddress] = useState<string>('');
  // const navigate = useNavigate();
  const location = useLocation();
  const {
    subtotal,
    tax,
    total,
    discount,
    shipping,
    products,
    taxRate,
  } = location.state || {};

  useEffect(() => {
    if (userId) {
      UserService.getUserDetails(userId).then((data) => {
        setUser(data.data)
        setAddress(data.data.address || '');
      });
    }
  }, []);

  const handlePlaceOrder = async () => {
    console.log(user);

    const orderDto = {
      orderId: 0,
      userId: userId ? Number(userId) : 0, // Convert to number or default to 0
      address: address,
      MobileNumber: user?.mobileNumber,
      totalAmount: total,
      status: "Pending",
    };

    const orderDetailDto = products.map((product: ICartItem, index: number) => ({
      orderDetailId: 0,
      orderId: 0,
      productId: product.productId,
      quantity: product.quantity,
      unitPrice: product.price,
      totalPrice: product.quantity * product.price,
    }));

    const paymentRequest = {
      amount: total,
      paymentMethodId: "CreditCard",
    };

    const payload = {
      orderDto,
      orderDetailDto,
      paymentRequest,
    };

    console.log("Payload:", payload);

    try {
      const orderId = await OrderService.PlaceOrder(payload); // Await API response
      if (orderId) {
        console.log("Order placed successfully with ID:", orderId);
        checkOrderStatus(orderId); // Start checking status
      } else {
        console.error("Failed to place order. Order ID is null.");
      }
    } catch (error) {
      console.error("Error in handlePlaceOrder:", error);
    }
  }

  const checkOrderStatus = async (orderId: number | undefined) => {
    try {
      const res = await OrderService.getOrder(orderId); // Await API response
      console.log("Checkout URL:", res.data);
      debugger

      if (res.data != null && res.data.checkoutUrl) {
        debugger
        window.location.href = res.data.checkoutUrl;
      }
      else {
        //checkOrderStatus(orderId);
        setTimeout(() => checkOrderStatus(orderId), 2000); // Retry in 2 seconds
      }
    } catch (error) {
      console.error("Error in handlePlaceOrder:", error);
    }
  }

  return (
    <>
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold mb-4">Deliver to:</h2>
        <div className="flex justify-between py-2">
          <span className="text-gray-600">Name: </span>
          <span className="font-semibold">{user?.firstName}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-600">Number: </span>
          <span className="font-semibold text-red-500">{user?.mobileNumber}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-gray-600">Addess: </span>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={5}
            cols={30}
          />
        </div>
        <div className="flex justify-between p-2">
          <button
            className="btn btn-primary btn-lg"
            onClick={handlePlaceOrder}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
