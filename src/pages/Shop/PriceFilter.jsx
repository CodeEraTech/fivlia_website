import React, { useState, useEffect, useCallback, useRef } from 'react';

const PriceFilter = ({
  onPriceChange,
  maxPrice = 10000,
  currentPriceRange = [0, 10000],
}) => {
  const [priceRange, setPriceRange] = useState(currentPriceRange);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [displayRange, setDisplayRange] = useState(currentPriceRange);

  const popupRef = useRef(null);
  const timeoutRef = useRef(null);
  const updateTimeoutRef = useRef(null);
  const currentRangeRef = useRef(currentPriceRange);

  useEffect(() => {
    setPriceRange(currentPriceRange);
    setDisplayRange(currentPriceRange);
    currentRangeRef.current = currentPriceRange;
  }, [currentPriceRange]);

  const debounce = useCallback((func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }, []);

  const debouncedPriceChange = useCallback(
    debounce((range) => {
      onPriceChange(range);
    }, 300),
    [onPriceChange]
  );

  const handleSliderChange = useCallback(
    (e, index) => {
      const newValue = parseInt(e.target.value);
      const currentRange = currentRangeRef.current;
      const newRange = [...currentRange];

      if (index === 0) {
        newRange[0] = Math.min(newValue, newRange[1]);
      } else {
        newRange[1] = Math.max(newValue, newRange[0]);
      }

      currentRangeRef.current = newRange;
      setPriceRange(newRange);
      setDisplayRange(newRange);

      if (updateTimeoutRef.current) {
        clearTimeout(updateTimeoutRef.current);
      }

      if (!isDragging) {
        updateTimeoutRef.current = setTimeout(() => {
          debouncedPriceChange(newRange);
        }, 100);
      }
    },
    [isDragging, debouncedPriceChange]
  );

  const handleSliderMouseUp = useCallback(() => {
    setIsDragging(false);
    if (updateTimeoutRef.current) {
      clearTimeout(updateTimeoutRef.current);
    }
    debouncedPriceChange(currentRangeRef.current);
  }, [debouncedPriceChange]);

  const handleSliderMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleReset = useCallback(() => {
    const newRange = [0, maxPrice];
    setPriceRange(newRange);
    setDisplayRange(newRange);
    currentRangeRef.current = newRange;
    onPriceChange(newRange);
  }, [maxPrice, onPriceChange]);

  const getSliderBackground = useCallback(() => {
    const currentRange = currentRangeRef.current;
    const minPercent = (currentRange[0] / maxPrice) * 100;
    const maxPercent = (currentRange[1] / maxPrice) * 100;
    return `linear-gradient(to right, #e0e0e0 0%, #e0e0e0 ${minPercent}%, #0aad0a ${minPercent}%, #0aad0a ${maxPercent}%, #e0e0e0 ${maxPercent}%, #e0e0e0 100%)`;
  }, [maxPrice]);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsPopupOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsPopupOpen(false);
    }, 200);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (updateTimeoutRef.current) clearTimeout(updateTimeoutRef.current);
    };
  }, [isPopupOpen]);

  return (
    <div
      className="price-filter-wrapper"
      ref={popupRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="price-filter-btn"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        type="button"
      >
        <i className="fa fa-filter me-2"></i>
        Filter by Price
        <span className="price-badge">
          ₹{displayRange[0].toLocaleString()} - ₹{displayRange[1].toLocaleString()}
        </span>
        <i className="fa fa-chevron-down ms-2"></i>
      </button>

      {isPopupOpen && (
        <div className="price-popup">
          <div className="price-popup-header">
            <h6 className="mb-0">Price Range</h6>
            <button
              className="btn btn-sm btn-outline-secondary reset-btn"
              onClick={handleReset}
              type="button"
            >
              Reset
            </button>
          </div>

          <div className="price-range-display mb-3">
            <div className="price-range-text">
              ₹{displayRange[0].toLocaleString()} - ₹{displayRange[1].toLocaleString()}
            </div>
          </div>

          <div className="price-slider-container">
            <div
              className="price-slider-track"
              style={{ background: getSliderBackground() }}
            >
              <input
                type="range"
                className="price-slider price-slider-min"
                min="0"
                max={maxPrice}
                value={priceRange[0]}
                onChange={(e) => handleSliderChange(e, 0)}
                onMouseDown={handleSliderMouseDown}
                onMouseUp={handleSliderMouseUp}
                onTouchStart={handleSliderMouseDown}
                onTouchEnd={handleSliderMouseUp}
                step="100"
              />
              <input
                type="range"
                className="price-slider price-slider-max"
                min="0"
                max={maxPrice}
                value={priceRange[1]}
                onChange={(e) => handleSliderChange(e, 1)}
                onMouseDown={handleSliderMouseDown}
                onMouseUp={handleSliderMouseUp}
                onTouchStart={handleSliderMouseDown}
                onTouchEnd={handleSliderMouseUp}
                step="100"
              />
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .price-filter-wrapper {
          position: relative;
          display: inline-block;
        }

        .price-filter-btn {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          transition: all 0.2s ease;
          min-width: 280px;
        }

        .price-filter-btn:hover {
          border-color: #0aad0a;
          box-shadow: 0 2px 4px rgba(10, 173, 10, 0.15);
        }

        .price-badge {
          background: #0aad0a;
          color: #fff;
          padding: 0.125rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          min-width: 120px;
          text-align: center;
          display: inline-block;
        }

        .price-popup {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          min-width: 280px;
        }

        .price-popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .reset-btn {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-color: #0aad0a;
          color: #0aad0a;
        }

        .reset-btn:hover {
          background-color: #0aad0a;
          color: #fff;
        }

        .price-range-text {
          text-align: center;
          font-weight: 600;
          color: #0aad0a;
          font-size: 1rem;
          min-width: 200px;
        }

        .price-slider-container {
          position: relative;
          height: 40px;
          display: flex;
          align-items: center;
        }

        .price-slider-track {
          position: relative;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background: #e0e0e0;
        }

        .price-slider {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          height: 4px;
          background: transparent;
          pointer-events: none;
          -webkit-appearance: none;
        }

        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0aad0a;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          pointer-events: auto;
        }

        .price-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0aad0a;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          pointer-events: auto;
        }

        .price-slider::-webkit-slider-track,
        .price-slider::-moz-range-track {
          background: transparent;
        }

        .price-slider-min {
          z-index: 2;
        }

        .price-slider-max {
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .price-popup {
            min-width: 250px;
            right: -50px;
          }

          .price-badge {
            min-width: 100px;
            font-size: 0.7rem;
          }

          .price-range-text {
            min-width: 180px;
          }
        }

        @media (max-width: 576px) {
          .price-filter-btn {
            padding: 0.375rem 0.75rem;
            font-size: 0.8rem;
          }

          .price-popup {
            min-width: 220px;
            right: -30px;
          }

          .price-range-text {
            min-width: 160px;
            font-size: 0.9rem;
          }

          .price-badge {
            min-width: 90px;
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PriceFilter;