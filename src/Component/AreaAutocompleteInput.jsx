import React, { useState, useEffect, useRef } from "react";
import { getPlaceSuggestions, getPlaceDetails } from "../apis/olaMapApis";
import { post } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";

const AreaAutocompleteInput = ({ formData, setFormData }) => {
  const [searchInput, setSearchInput] = useState(formData.area || "");
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");
  const [hasSelected, setHasSelected] = useState(false); // New flag
  const searchTimeoutRef = useRef(null);

  useEffect(() => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    // Don't fetch suggestions if user just selected one and hasn't typed new input
    if (hasSelected) {
      setSuggestions([]);
      return;
    }

    if (searchInput.length > 2) {
      setIsSearching(true);
      setError("");
      searchTimeoutRef.current = setTimeout(async () => {
        try {
          await post(ENDPOINTS.TRACK_MAP_USAGE, {
            source: "web",
            callType: "autocomplete",
            subCallType: "AreaAutocompleteInput",
          });
          let results = await getPlaceSuggestions(searchInput);
          if (!results?.length) {
            results = [];
          }
          setSuggestions(results);
        } catch (_) {
          setError("Error fetching suggestions");
          setSuggestions([]);
        } finally {
          setIsSearching(false);
        }
      }, 300);
    } else {
      setSuggestions([]);
    }

    return () => clearTimeout(searchTimeoutRef.current);
  }, [searchInput, hasSelected]);

  const handleSelect = async (placeId) => {
    setIsSearching(true);
    setError("");
    try {
      await post(ENDPOINTS.TRACK_MAP_USAGE, {
        source: "web",
        callType: "placedetails",
        subCallType: "handleSelect_AreaAutocompleteInput",
      });
      const placeDetails = await getPlaceDetails(placeId);
      setFormData((prev) => ({
        ...prev,
        area: placeDetails.address,
      }));
      setSearchInput(placeDetails.address);
      setSuggestions([]);
      setHasSelected(true); // Block further fetch until user types again
    } catch {
      setError("Failed to fetch place details");
    } finally {
      setIsSearching(false);
    }
  };

  // Reset hasSelected when user types manually
  const onInputChange = (value) => {
    setSearchInput(value);
    setFormData((prev) => ({ ...prev, area: value }));
    if (hasSelected) setHasSelected(false);
  };

  return (
    <div className="mb-3 position-relative">
      <input
        type="text"
        className="form-control"
        name="area"
        placeholder="Area *"
        value={searchInput}
        onChange={(e) => onInputChange(e.target.value)}
        autoComplete="off"
      />

      {isSearching && (
        <div style={{ padding: "0.5rem", color: "#6c757d" }}>Searching...</div>
      )}
      {error && (
        <div
          style={{
            color: "#dc3545",
            fontSize: "0.8rem",
            marginTop: "0.25rem",
          }}
        >
          {error}
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((s, idx) => (
            <div
              key={s.place_id || idx}
              className="suggestion-item"
              onClick={() => handleSelect(s.place_id)}
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
                  {s.structured_formatting?.main_text ||
                    s.description.split(",")[0]}
                </div>
                {/* <div className="suggestion-subtext">
                  {s.structured_formatting?.secondary_text || s.description}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Embedded Styles */}
      <style>{`
        .suggestions-container {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          max-height: 250px;
          overflow-y: auto;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 0 0 8px 8px;
          padding: 0.5rem;
          margin-top: -1px;
          z-index: 1000;
        }
        .suggestion-item {
          padding: 0.75rem;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
          background: transparent;
        }
        .suggestion-item:last-child {
          margin-bottom: 0;
        }
        .suggestion-item:hover {
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transform: translateX(4px);
        }
        .suggestion-icon {
          color: #0aad0a;
          flex-shrink: 0;
        }
        .suggestion-text {
          flex: 1;
          color: #333;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .suggestion-subtext {
          font-size: 0.8rem;
          color: #6c757d;
          margin-top: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default AreaAutocompleteInput;
