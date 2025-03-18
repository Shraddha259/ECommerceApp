import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { IProduct } from '../types/Product';
import { ICartItem } from '../types/Cart';
import { useAuth } from './AuthContext';
import { CacheService } from '../services/CacheService';

interface CartContextType {
  cart: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  updateCartQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<ICartItem[]>([]);
  const { userId } = useAuth();

  // Fetch cart from Redis on load
  useEffect(() => {
    if(userId != null){
      CacheService.getCart(userId)
      .then(response => {
        if(response !== "string"){
          setCart(response);
        }
      }
      )
      .catch(error => console.error("Error fetching cart:", error));
    }
  }, [userId]);


  // Update cart in Redis
  const syncCartWithRedis = async (newCart: ICartItem[]) => {
    setCart(newCart);
    const newCache = JSON.stringify(newCart);
    await CacheService.setCart(userId, newCache);
  };

  // Add to Cart
  const addToCart = async (product: IProduct) => {
    const existingItem = cart.find(item => item.productId === product.productId);
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    await syncCartWithRedis(updatedCart);
  };

  // Remove from Cart
  const removeFromCart = async (id: number) => {
    const updatedCart = cart.filter(item => item.productId !== id);
    await syncCartWithRedis(updatedCart);
  };

  // Update Quantity
  const updateCartQuantity = async (productId: number, quantity: number) => {
    const updatedCart = cart.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    );
    await syncCartWithRedis(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
