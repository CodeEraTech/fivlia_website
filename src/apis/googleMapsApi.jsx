const GOOGLE_MAPS_API_KEY = '';

// Load Google Maps API script
export const loadGoogleMapsAPI = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps) {
      resolve(window.google.maps);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (window.google && window.google.maps) {
        resolve(window.google.maps);
      } else {
        reject(new Error('Google Maps API failed to load'));
      }
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Google Maps API'));
    };

    document.head.appendChild(script);
  });
};

// Get current location using browser geolocation
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ lat: latitude, lng: longitude });
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            reject(new Error('Location permission denied'));
            break;
          case error.POSITION_UNAVAILABLE:
            reject(new Error('Location information unavailable'));
            break;
          case error.TIMEOUT:
            reject(new Error('Location request timed out'));
            break;
          default:
            reject(new Error('An unknown error occurred'));
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
};

// Get place suggestions from Google Places API
export const getPlaceSuggestions = async (input) => {
  try {
    const maps = await loadGoogleMapsAPI();
    
    return new Promise((resolve, reject) => {
      const service = new maps.places.AutocompleteService();
      
      service.getPlacePredictions(
        {
          input: input,
          componentRestrictions: { country: 'IN' }, // Restrict to India
          types: ['geocode', 'establishment']
        },
        (predictions, status) => {
          if (status === maps.places.PlacesServiceStatus.OK && predictions) {
            resolve(predictions);
          } else {
            resolve([]);
          }
        }
      );
    });
  } catch (error) {
    console.error('Error getting place suggestions:', error);
    return [];
  }
};

// Get place details and coordinates
export const getPlaceDetails = async (placeId) => {
  try {
    const maps = await loadGoogleMapsAPI();
    
    return new Promise((resolve, reject) => {
      const service = new maps.places.PlacesService(document.createElement('div'));
      
      service.getDetails(
        {
          placeId: placeId,
          fields: ['geometry', 'formatted_address', 'name']
        },
        (place, status) => {
          if (status === maps.places.PlacesServiceStatus.OK && place) {
            const { lat, lng } = place.geometry.location;
            resolve({
              lat: lat(),
              lng: lng(),
              address: place.formatted_address,
              name: place.name
            });
          } else {
            reject(new Error('Failed to get place details'));
          }
        }
      );
    });
  } catch (error) {
    console.error('Error getting place details:', error);
    throw error;
  }
};

// Reverse geocoding - get address from coordinates
export const getAddressFromCoords = async (lat, lng) => {
  try {
    const maps = await loadGoogleMapsAPI();
    
    return new Promise((resolve, reject) => {
      const geocoder = new maps.Geocoder();
      
      geocoder.geocode(
        { location: { lat, lng } },
        (results, status) => {
          if (status === maps.GeocoderStatus.OK && results[0]) {
            resolve({
              address: results[0].formatted_address,
              components: results[0].address_components
            });
          } else {
            reject(new Error('Failed to get address from coordinates'));
          }
        }
      );
    });
  } catch (error) {
    console.error('Error getting address from coordinates:', error);
    throw error;
  }
};

// Calculate delivery time based on distance (mock function)
export const calculateDeliveryTime = (lat, lng) => {
  // This is a mock function - in real app, you'd calculate based on actual distance
  // For now, return a random time between 15-45 minutes
  const baseTime = 15;
  const randomTime = Math.floor(Math.random() * 30);
  return baseTime + randomTime;
};

// Store location in localStorage
export const storeLocation = (locationData) => {
  try {
    localStorage.setItem('userLocation', JSON.stringify({
      ...locationData,
      timestamp: Date.now()
    }));
    return true;
  } catch (error) {
    console.error('Error storing location:', error);
    return false;
  }
};

// Get stored location from localStorage
export const getStoredLocation = () => {
  try {
    const stored = localStorage.getItem('userLocation');
    if (stored) {
      const locationData = JSON.parse(stored);
      // Check if location is not older than 24 hours
      const isExpired = Date.now() - locationData.timestamp > 24 * 60 * 60 * 1000;
      if (!isExpired) {
        return locationData;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting stored location:', error);
    return null;
  }
}; 