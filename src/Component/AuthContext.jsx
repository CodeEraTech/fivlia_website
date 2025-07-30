import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// Default token for testing purposes
const DEFAULT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODYyN2I3OTAyYzgxOGFiOTlkZGMyM2QiLCJpYXQiOjE3NTE0MzUzMzd9.cC2wtcL6MjfMbhUXkUdk-kGjPJKTFD6IgKyyFDuQy20";

// Utility function for authentication check (can be used outside React components)
export const getAuthStatus = () => {
  const storedToken = localStorage.getItem("token") || DEFAULT_TOKEN;
  return {
    isAuthenticated: !!storedToken,
    token: storedToken,
    isLoggedIn: !!storedToken
  };
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token") || DEFAULT_TOKEN;
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsLoggedIn(false);
  };

  // Common authentication check function
  const checkAuth = () => {
    const storedToken = localStorage.getItem("token") || DEFAULT_TOKEN;
    const isAuthenticated = isLoggedIn && storedToken;
    
    return {
      isAuthenticated,
      token: storedToken,
      isLoggedIn
    };
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
