import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../types/Product';
import { ProductService } from '../services/ProductService';

const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    ProductService.getproducts().then((data) => setProducts(data.data));

  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products && products.map((product, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageURL} className="card-img-top fixed-image" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹ {product.price}</p>
                <Link to={`/product/${product.productId}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
