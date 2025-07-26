import React, { useState, useEffect } from 'react';

const LocationDeliveryInfo = () => {
  const [location, setLocation] = useState('Mumbai, Maharashtra');
  const [deliveryTime, setDeliveryTime] = useState('2-3 hours');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate getting current location
  const getCurrentLocation = () => {
    setIsLoading(true);
    // Simulate API call or geolocation
    setTimeout(() => {
      setLocation('Mumbai, Maharashtra');
      setDeliveryTime('16 minutes');
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Initialize with default location
    getCurrentLocation();
  }, []);

  return (
    <div className="location-delivery-info">
      <style>{`
        .location-delivery-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0;
          min-width: 200px;
          max-width: 300px;
          font-size: 0.9rem;
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
        }
        
        /* Responsive styles */
        @media (max-width: 991.98px) {
          .location-delivery-info {
            display: flex;
            min-width: 200px;
            max-width: 300px;
            margin: 0 auto;
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
        }
      `}</style>
      
      <div className="location-icon">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      
      <div className="location-content">
        <div className="delivery-text">
          {isLoading ? 'Loading...' : `Delivery in ${deliveryTime}`}
        </div>
        <div className="location-text">
          {isLoading ? 'Getting location...' : location}
        </div>
      </div>
      
      <div className="chevron-icon">
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>
  );
};

export default LocationDeliveryInfo; 