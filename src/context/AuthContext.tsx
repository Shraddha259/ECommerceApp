import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the Auth Context Type
interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

// Create the Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(() => {
    // Get the user from local storage on initial load
    return localStorage.getItem('user');
  });

  const login = (user: string) => {
    setUser(user);
    localStorage.setItem('user', user); // Save user to local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
