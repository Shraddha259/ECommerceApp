import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import PlaceOrder from './pages/PlaceOrder';
import ProceedPayment from './pages/ProceedPayment';
import SuccessPayment from './pages/SuccessPayment';
import TransactionError from './pages/TransactionError';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import routes from './data/routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes>
            {routes.map(({ path, element, isPrivate }, index) => (
              <Route
                key={index}
                path={path}
                element={isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
