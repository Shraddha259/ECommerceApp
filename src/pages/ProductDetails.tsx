import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((prod) => prod.id === parseInt(id || ''));
  const { addToCart } = useContext(CartContext)!;

  if (!product) return <div className="container my-5"><p>Product not found</p></div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid fixed-image" alt={product.name} />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button className="btn btn-success" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
