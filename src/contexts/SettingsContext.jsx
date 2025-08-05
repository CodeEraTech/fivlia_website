// src/contexts/SettingsContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { get } from "../apis/apiClient.jsx";
import { ENDPOINTS } from '../apis/endpoints.jsx';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await get(ENDPOINTS.GET_SETTINGS);
//        const imagePath = res.data?.settings?.imageLink;
// console.log("Image base path:", imagePath); 
           console.log("Fetched settings:", res?.data?.settings);
        setSettings(res?.data?.settings || {});
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
