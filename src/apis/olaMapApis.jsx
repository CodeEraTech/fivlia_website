const OLA_MAPS_API_KEY = 'YHGoHrZHMgUpEeCA1CNKTg4iUePHYU2T8Upv6xdM';
const BASE_URL = 'https://api.olamaps.io';
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";

const callOlaApi = async (endpoint, params = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  params.api_key = OLA_MAPS_API_KEY;
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url);
  if (!response.ok) throw new Error(`Ola Maps API error: ${response.status}`);
  return response.json();
};

// 1. Get current location from browser
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => resolve({ lat: coords.latitude, lng: coords.longitude }),
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('Location permission denied'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('Location unavailable'));
            break;
          case error.TIMEOUT:
            reject(new Error('Location request timed out'));
            break;
          default:
            reject(new Error('Unknown geolocation error'));
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  });
};

// 2. Autocomplete / place suggestions
export const getPlaceSuggestions = async (input) => {
  try {
    const result = await callOlaApi('/places/v1/autocomplete', {
        input: input
    });
    return result.predictions || [];
  } catch (error) {
    // console.error('Autocomplete error:', error);
    return [];
  }
};

// 3. Get place details using Ola’s place_id
export const getPlaceDetails = async (placeId) => {
  try {
    const result = await callOlaApi('/places/v1/details', {
        place_id: placeId
    });
    const location = result.result.geometry.location;
    return {
      lat: location?.lat,
      lng: location?.lng,
      address: result.result.formatted_address,
      name: result.result.name
    };
  } catch (error) {
    // console.error('Place details error:', error);
    throw new Error('Failed to get place details');
  }
};

// 4. Reverse geocoding (coords -> address)
export const getAddressFromCoords = async (lat, lng) => {
  try {
    const result = await callOlaApi('/places/v1/reverse-geocode', {
        latlng: `${lat},${lng}`
    });
    const first = result.results?.[0];
    return {
      address: first?.formatted_address || '',
      components: first?.address_components || []
    };
  } catch (error) {
    // console.error('Reverse geocoding error:', error);
    throw new Error('Failed to get address from coordinates');
  }
};

// 5. Delivery time function
export const calculateDeliveryTime = async (lat, lng) => {
  try {
    const response = await get(
      `${ENDPOINTS.GET_DELIVERY_ESTIMATE}?lat=${lat}&lng=${lng}`
    );

    //console.log("Full response:", response.data);

    if (response.data?.status && response.data.filtered?.length) {
      const duration = response.data.filtered[0].duration || "Unavailable";
      location.reload();
      //console.log("🚚 Delivery Duration:", duration); // 👈 Console output
      return duration;
    } else {
      //sconsole.warn("⚠️ No delivery data available");
      return "Unavailable";
    }
  } catch (error) {
    console.error("❌ Error fetching delivery time:", error);
    return "Error";
  }
};
// 6. Store location in localStorage
export const storeLocation = (locationData) => {
  try {
    localStorage.setItem('userLocation', JSON.stringify({
      ...locationData,
      timestamp: Date.now()
    }));
    return true;
  } catch (error) {
    // console.error('Error storing location:', error);
    return false;
  }
};

// 7. Retrieve location from localStorage
export const getStoredLocation = () => {
  try {
    const stored = localStorage.getItem('userLocation');
    if (stored) {
      const locationData = JSON.parse(stored);
      const isExpired = Date.now() - locationData.timestamp > 24 * 60 * 60 * 1000;
      if (!isExpired) return locationData;
    }
    return null;
  } catch (error) {
    // console.error('Error retrieving location:', error);
    return null;
  }
};