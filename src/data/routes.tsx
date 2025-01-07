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
    { path: '/login', element: <Login />, isPrivate: false, layout: false },
    { path: '/register', element: <SignUp />, isPrivate: false, layout: false },
    { path: '/', element: <Home />, isPrivate: true, layout: true },
    { path: '/product/:id', element: <ProductDetails />, isPrivate: true, layout: true },
    { path: '/cart', element: <Cart />, isPrivate: true, layout: true },
    { path: '/checkout', element: <Checkout />, isPrivate: true, layout: true },
    { path: '/place-order', element: <PlaceOrder />, isPrivate: true, layout: true },
    { path: '/payment', element: <ProceedPayment />, isPrivate: true, layout: true },
    { path: '/payment-success', element: <SuccessPayment />, isPrivate: true, layout: true },
    { path: '/transaction-error', element: <TransactionError />, isPrivate: true, layout: true },
  ];
  
export default routes;
