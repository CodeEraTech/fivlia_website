import { useSettings } from '../contexts/SettingsContext.jsx';

// Non-hook version for utility functions (used internally)
const getSettingsValueSync = (settings, key, fallback = null) => {
  try {
    // If no settings available, return fallback
    if (!settings) {
      console.warn(`Settings not available, using fallback for key: ${key}`);
      return fallback;
    }

    // Get the value from settings
    const value = settings[key];

    // If value is undefined or null, return fallback
    if (value === undefined || value === null) {
      console.warn(`Key "${key}" not found in settings, using fallback`);
      return fallback;
    }

    return value;
  } catch (error) {
    console.error(`Error getting value for key "${key}":`, error);
    return fallback;
  }
};

// Hook-based image URL function for use inside components
export const useImageUrl = () => {
  const { settings } = useSettings();
  
  const getImageUrl = (path) => {
    const fallbackUrl = "/assets/img/no_image.jpg"; 
    if (!path) return fallbackUrl;
    const base = getSettingsValueSync(settings, 'imageLink', "");
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  return getImageUrl;
};