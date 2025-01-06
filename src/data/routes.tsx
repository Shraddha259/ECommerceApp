import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import PlaceOrder from '../pages/PlaceOrder';
import ProceedPayment from '../pages/ProceedPayment';
import SuccessPayment from '../pages/SuccessPayment';
import TransactionError from '../pages/TransactionError';

const routes = [
  { path: '/login', element: <Login />, isPrivate: false },
  { path: '/register', element: <SignUp />, isPrivate: false },
  { path: '/', element: <Home />, isPrivate: true },
  { path: '/product/:id', element: <ProductDetails />, isPrivate: true },
  { path: '/cart', element: <Cart />, isPrivate: true },
  { path: '/checkout', element: <Checkout />, isPrivate: true },
  { path: '/place-order', element: <PlaceOrder />, isPrivate: true },
  { path: '/payment', element: <ProceedPayment />, isPrivate: true },
  { path: '/payment-success', element: <SuccessPayment />, isPrivate: true },
  { path: '/transaction-error', element: <TransactionError />, isPrivate: true },
];

export default routes;
