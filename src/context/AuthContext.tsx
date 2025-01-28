import React, { createContext, useContext, useEffect, useState } from 'react';
import { IUser } from '../types/User';

// Define the Auth Context Type
interface AuthContextType {
  user: string | null;
  userId: string | null;
  login: (user: IUser) => void;
  logout: () => void;
}

// Create the Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Initialize user and userId from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedUserId = localStorage.getItem('userId');
    if (storedUser && storedUserId) {
      setUser(storedUser);
      setUserId(storedUserId);
    }
  }, []);

  const login = (user: IUser) => {
    setUser(user.email);
    setUserId(user.userId.toString());
    localStorage.setItem('user', user.email); // Save user to local storage
    localStorage.setItem('userId', user.userId.toString()); // Save user to local storage
  };

  const logout = () => {
    setUser(null);
    setUserId(null);
    localStorage.removeItem('user'); // Remove user from local storage
    localStorage.removeItem('userId'); // Remove user from local storage
  };

  return (
    <AuthContext.Provider value={{ user, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
