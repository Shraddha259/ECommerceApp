import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import routes from './data/routes';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {routes.map(({ path, element, isPrivate, layout }, index) => {
            const Page = isPrivate ? <PrivateRoute>{element}</PrivateRoute> : element;

            return (
              <Route
                key={index}
                path={path}
                element={
                  layout ? (
                    <Layout>
                      {Page}
                    </Layout>
                  ) : (
                    Page
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <div className="main-content">{children}</div>
    <Footer />
  </>
);

export default App;
