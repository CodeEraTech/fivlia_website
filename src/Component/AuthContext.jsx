import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log('AuthContext: useEffect - storedToken found:', !!storedToken);
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      console.log('AuthContext: Token loaded from localStorage, user logged in');
    } else {
      console.log('AuthContext: No token found in localStorage');
    }
  }, []);

  const login = (newToken) => {
    console.log('AuthContext: login called with token:', !!newToken);
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setIsLoggedIn(true);
    console.log('AuthContext: Token stored in localStorage and state updated');
  };

  const logout = () => {
    console.log('AuthContext: logout called');
    localStorage.removeItem("token");
    setToken(null);
    setIsLoggedIn(false);
    console.log('AuthContext: Token removed from localStorage and state cleared');
  };

  // Common authentication check function
  const checkAuth = () => {
    const storedToken = localStorage.getItem("token");
    const isAuthenticated = isLoggedIn && storedToken;
    
    console.log('AuthContext: checkAuth called - isLoggedIn:', isLoggedIn, 'storedToken:', !!storedToken, 'isAuthenticated:', isAuthenticated);
    
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
