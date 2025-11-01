import React, { useState, useEffect, useRef } from "react";
import {
  getCurrentLocation,
  getPlaceSuggestions,
  getPlaceDetails,
  getAddressFromCoords,
  calculateDeliveryTime,
  storeLocation,
  getStoredLocation,
} from "../apis/olaMapApis";
import { post } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";

const LocationDeliveryInfo = () => {
  const [location, setLocation] = useState("Mumbai, Maharashtra");
  const [deliveryTime, setDeliveryTime] = useState("2-3 hours");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [isInitialSetup, setIsInitialSetup] = useState(true);
  const searchTimeoutRef = useRef(null);
  const searchInputRef = useRef(null);

  // Check for stored location on component mount
  useEffect(() => {
    const storedLocation = getStoredLocation();
    if (storedLocation) {
      setLocation(storedLocation.address);
      setDeliveryTime(`${storedLocation.deliveryTime}`);
      setIsInitialSetup(false);
    } else {
      // Show modal if no stored location
      setShowModal(true);
      setIsInitialSetup(true);
    }
  }, []);

  // Handle search input with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchInput.length > 2) {
      //setIsSearching(true);
      setError("");
      searchTimeoutRef.current = setTimeout(async () => {
        try {
          await post(ENDPOINTS.TRACK_MAP_USAGE, {
            source: "web",
            callType: "autocomplete",
            subCallType: "LocationDeliveryInfo",
          });
          // Try Google Maps API first
          let results = await getPlaceSuggestions(searchInput);

          // If no results from Google Maps, try fallback
          if (!results || results.length === 0) {
            results = getFallbackSuggestions(searchInput);
          }

          setSuggestions(results || []);
        } catch (error) {
          console.error("Error getting suggestions:", error);
          // Use fallback suggestions on error
          const fallbackResults = getFallbackSuggestions(searchInput);
          setSuggestions(fallbackResults);
          setError("Using offline suggestions");
        } finally {
          setIsSearching(false);
        }
      }, 300);
    } else {
      setSuggestions([]);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchInput]);

  // Fallback suggestions function
  const getFallbackSuggestions = (input) => {
    const commonCities = [
      "Mumbai, Maharashtra, India",
      "Delhi, India",
      "Bangalore, Karnataka, India",
      "Hyderabad, Telangana, India",
      "Chennai, Tamil Nadu, India",
      "Kolkata, West Bengal, India",
      "Pune, Maharashtra, India",
      "Ahmedabad, Gujarat, India",
      "Jaipur, Rajasthan, India",
      "Surat, Gujarat, India",
    ];

    const filtered = commonCities.filter((city) =>
      city.toLowerCase().includes(input.toLowerCase())
    );

    return filtered.map((city, index) => ({
      place_id: `fallback_${index}`,
      description: city,
      structured_formatting: {
        main_text: city.split(",")[0],
        secondary_text: city.split(",").slice(1).join(",").trim(),
      },
    }));
  };

  // Handle location detection
  const handleDetectLocation = async () => {
    setIsDetectingLocation(true);
    setError("");

    try {
      const coords = await getCurrentLocation();
      await post(ENDPOINTS.TRACK_MAP_USAGE, {
        source: "web",
        callType: "reverseGeocode",
        subCallType: "handleDetectLocation_LocationDeliveryInfo",
      });
      const addressData = await getAddressFromCoords(coords.lat, coords.lng);
      const deliveryTime = await calculateDeliveryTime(coords.lat, coords.lng);
      //console.log("deliveryTime",deliveryTime);

      const locationData = {
        lat: coords.lat,
        lng: coords.lng,
        address: addressData.address,
        deliveryTime: deliveryTime,
      };

      storeLocation(locationData);
      setLocation(addressData.address);
      setDeliveryTime(`${deliveryTime}`);
      setShowModal(false);
      setIsInitialSetup(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsDetectingLocation(false);
    }
  };

  // Handle place selection
  const handlePlaceSelect = async (placeId) => {
    setIsSearching(true);
    setError("");

    try {
      let placeDetails;

      if (placeId.startsWith("fallback_")) {
        // Handle fallback selection
        const index = parseInt(placeId.split("_")[1]);
        const fallbackCities = getFallbackSuggestions("");
        const selectedCity = fallbackCities[index];

        placeDetails = {
          lat: 19.076 + (Math.random() - 0.5) * 0.1, // Mock coordinates around Mumbai
          lng: 72.8777 + (Math.random() - 0.5) * 0.1,
          address: selectedCity.description,
          name: selectedCity.structured_formatting.main_text,
        };
      } else {
        // Handle Google Maps selection
        await post(ENDPOINTS.TRACK_MAP_USAGE, {
          source: "web",
          callType: "placedetails",
          subCallType: "handlePlaceSelect_LocationDeliveryInfo",
        });
        placeDetails = await getPlaceDetails(placeId);
      }

      const deliveryTime = await calculateDeliveryTime(
        placeDetails.lat,
        placeDetails.lng
      );

      const locationData = {
        lat: placeDetails.lat,
        lng: placeDetails.lng,
        address: placeDetails.address,
        deliveryTime: deliveryTime,
      };

      storeLocation(locationData);
      setLocation(placeDetails.address);
      setDeliveryTime(`${deliveryTime} `);
      setShowModal(false);
      setSearchInput("");
      setSuggestions([]);
      setIsInitialSetup(false);
    } catch (error) {
      setError("Failed to get location details");
    } finally {
      setIsSearching(false);
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    if (!isInitialSetup) {
      setShowModal(false);
      setSearchInput("");
      setSuggestions([]);
      setError("");
    }
  };

  // Handle click on location info
  const handleLocationClick = () => {
    setShowModal(true);
    setIsInitialSetup(false);
  };

  // Focus input when modal opens
  useEffect(() => {
    if (showModal && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [showModal]);

  return (
    <>
      <div className="location-delivery-info" onClick={handleLocationClick}>
        <style>{`
          .location-delivery-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            min-width: 200px;
            max-width: 300px;
            font-size: 0.9rem;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .location-delivery-info:hover {
            background-color: rgba(48, 87, 78, 0.05);
            transform: translateY(-1px);
          }
          
          .location-icon {
            color: #30574e;
            flex-shrink: 0;
          }
          
          .location-content {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
          }
          
          .delivery-text {
            font-weight: bold;
            font-size: 1.1rem;
            color: #000000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: -5px;
          }
          
          .location-text {
            font-size: 0.8rem;
            color: #6c757d;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
          }
          
          .chevron-icon {
            color: #6c757d;
            flex-shrink: 0;
            transition: transform 0.3s ease;
          }
          
          .location-delivery-info:hover .chevron-icon {
            transform: translateX(2px);
          }
          
          /* Modal Styles */
          .location-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            z-index: 9999;
            backdrop-filter: blur(5px);
            padding: 1rem;
          }
          
          .modal-content {
            background: white;
            border-radius: 16px;
            padding: 1.25rem;
            width: 450px;
            height: auto;
            max-height: ${suggestions.length > 0 ? "600px" : "400px"};
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
            animation: modalSlideIn 0.3s ease-out;
            margin-top: 20px;
            margin-left: 2rem;
            position: relative;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateX(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
          
          .modal-header {
            text-align: center;
            margin-bottom: 1.25rem;
            position: relative;
          }
          
          .modal-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #30574e;
            margin-bottom: 0.5rem;
          }
          
          .modal-subtitle {
            color: #6c757d;
            font-size: 0.85rem;
          }
          
          .close-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #fff;
            border: 2px solid #e9ecef;
            border-radius: 50%;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
            color: #6c757d;
            z-index: 10;
          }
          
          .close-btn:hover {
            border-color: #30574e;
            color: #30574e;
            transform: scale(1.1);
          }
          
          .location-options {
            display: flex;
            flex-direction: column;
            gap: 0.875rem;
            margin-bottom: ${suggestions.length > 0 ? "0" : "1.25rem"};
          }
          
          .detect-location-btn {
            background: linear-gradient(135deg, #0AAD0A, #0B8A0B);
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-shadow: 0 4px 12px rgba(10, 173, 10, 0.3);
          }
          
          .detect-location-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(10, 173, 10, 0.4);
          }
          
          .detect-location-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }
          
          .search-section {
            border-top: 1px solid #e9ecef;
            padding-top: 0.875rem;
            position: relative;
          }
          
          .search-label {
            font-weight: 600;
            color: #30574e;
            margin-bottom: 0.5rem;
            display: block;
            font-size: 0.85rem;
          }
          
          .search-input {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            margin-bottom: 0.5rem;
            background: #f8f9fa;
          }
          
          .search-input:focus {
            outline: none;
            border-color: #30574e;
            background: white;
            box-shadow: 0 0 0 3px rgba(48, 87, 78, 0.1);
          }
          
          .error-message {
            color: #dc3545;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            text-align: center;
            padding: 0.5rem;
            background: #f8d7da;
            border-radius: 8px;
            border: 1px solid #f5c6cb;
          }
          
          .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* Integrated Suggestions Container */
          .suggestions-container {
            border-top: 1px solid #e9ecef;
            margin-top: 0.5rem;
            max-height: 200px;
            overflow-y: auto;
            background: #f8f9fa;
            border-radius: 8px;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
            padding: 0.5rem;
          }
          
          .suggestion-item {
            padding: 0.75rem;
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s ease;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.25rem;
          }
          
          .suggestion-item:hover {
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transform: translateX(4px);
          }
          
          .suggestion-item:last-child {
            margin-bottom: 0;
          }
          
          .suggestion-icon {
            color: #0AAD0A;
            flex-shrink: 0;
          }
          
          .suggestion-text {
            flex: 1;
            color: #333;
            font-weight: 500;
          }
          
          .suggestion-subtext {
            font-size: 0.8rem;
            color: #6c757d;
            margin-top: 0.25rem;
          }
          
          /* Responsive styles */
          @media (max-width: 991.98px) {
            .location-delivery-info {
              display: flex;
              min-width: 200px;
              max-width: 300px;
              margin: 0 auto;
            }
            
            .location-modal {
              align-items: center;
              justify-content: center;
            }
            
            .modal-content {
              margin: 0;
              width: 90%;
              max-width: 450px;
            }
          }
          
          @media (max-width: 576px) {
            .location-delivery-info {
              display: flex;
              min-width: 150px;
              max-width: 250px;
              font-size: 0.8rem;
            }
            
            .delivery-text {
              font-size: 1rem;
            }
            
            .location-text {
              font-size: 0.75rem;
            }
            
            .modal-content {
              padding: 1rem;
              margin: 0.5rem;
              width: 95%;
            }
            
            .modal-title {
              font-size: 1rem;
            }
          }
        `}</style>

        <div className="location-icon">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <div className="location-content">
          <div className="delivery-text">
            {isLoading ? "Loading..." : `Delivery in ${deliveryTime}`}
          </div>
          <div className="location-text">
            {isLoading ? "Getting location..." : location}
          </div>
        </div>

        <div className="chevron-icon">
          <svg
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Location Modal */}
      {showModal && (
        <div className="location-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {!isInitialSetup && (
              <button className="close-btn" onClick={handleCloseModal}>
                ×
              </button>
            )}

            <div className="modal-header">
              <h2 className="modal-title">
                {isInitialSetup ? "Welcome to FIVLIA! 🎉" : "Change Location"}
              </h2>
              <p className="modal-subtitle" style={{ marginTop: 10 }}>
                {isInitialSetup
                  ? "Please set your delivery location to get started"
                  : "Update your delivery location"}
              </p>
            </div>

            <div className="location-options">
              <button
                className="detect-location-btn"
                onClick={handleDetectLocation}
                disabled={isDetectingLocation}
              >
                {isDetectingLocation ? (
                  <>
                    <div className="loading-spinner"></div>
                    Detecting...
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Detect My Location
                  </>
                )}
              </button>

              <div className="search-section">
                <label className="search-label">
                  Or enter your location manually:
                </label>
                <input
                  ref={searchInputRef}
                  type="text"
                  className="search-input"
                  placeholder="Enter your address, city, or landmark..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  disabled={isSearching}
                />

                {isSearching && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "0.5rem",
                      color: "#6c757d",
                    }}
                  >
                    <div
                      className="loading-spinner"
                      style={{
                        borderColor: "#0AAD0A",
                        borderTopColor: "transparent",
                      }}
                    ></div>
                    Searching...
                  </div>
                )}
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            {/* Integrated Suggestions */}
            {suggestions.length > 0 && (
              <div className="suggestions-container">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion.place_id || index}
                    className="suggestion-item"
                    onClick={() => handlePlaceSelect(suggestion.place_id)}
                  >
                    <div className="suggestion-icon">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="suggestion-text">
                        {suggestion.structured_formatting?.main_text ||
                          suggestion.description.split(",")[0]}
                      </div>
                      <div className="suggestion-subtext">
                        {suggestion.structured_formatting?.secondary_text ||
                          suggestion.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LocationDeliveryInfo;
