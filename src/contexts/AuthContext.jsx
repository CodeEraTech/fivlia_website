import { createContext, useContext, useEffect, useState } from "react";
import { post } from "../apis/apiClient";
import { getCurrentLocation } from "../apis/olaMapApis";
import { ENDPOINTS } from "../apis/endpoints";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true);
      updateLocation();
    } else {
      // console.log('AuthContext: No token found in localStorage');
    }
  }, []);

  const updateLocation = async () => {
    const coords = await getCurrentLocation();
    if (coords.lat && coords.lng) {
      await post(
        ENDPOINTS.UPDATE_LOCATION,
        {
          latitude: coords.lat,
          longitude: coords.lng,
        },
        { authRequired: true }
      );
    }
  };

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
    const storedToken = localStorage.getItem("token");
    const isAuthenticated = isLoggedIn && storedToken;
    return {
      isAuthenticated,
      token: storedToken,
      isLoggedIn,
    };
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, login, logout, checkAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
