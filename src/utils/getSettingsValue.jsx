import { useSettings } from '../contexts/SettingsContext.jsx';

/**
 * Hook to get a single setting value from context with fallback.
 */
export const useSettingValue = () => {
  const { settings } = useSettings();

  return (key, fallback = null) => {
    try {
      if (!settings) {
        //console.warn(`Settings not available, using fallback for key: ${key}`);
        return fallback;
      }

      const value = settings[key];
      if (value === undefined || value === null) {
        //console.warn(`Key "${key}" not found in settings, using fallback`);
        return fallback;
      }

      return value;
    } catch (error) {
      //console.error(`Error getting setting for key "${key}":`, error);
      return fallback;
    }
  };
};

/**
 * Hook to generate image URLs using base path from settings.
 */
export const useImageUrl = () => {
  const getSettingValue = useSettingValue();

  return (path) => {
    const fallbackUrl = "/assets/img/no_image.jpg";
    if (!path) return fallbackUrl;

    const base = getSettingValue('imageLink', '');
    return path.startsWith("http") ? path : `${base}${path}`;
  };
};
