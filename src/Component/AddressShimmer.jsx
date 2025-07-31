import React from 'react';

const AddressShimmer = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="border rounded-3 p-4">
            <div className="d-flex align-items-start">
              <div className="shimmer-radio me-3 mt-1"></div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <div className="shimmer-name mb-1"></div>
                    <div className="shimmer-phone"></div>
                  </div>
                  <div className="shimmer-badge"></div>
                </div>
                <div className="shimmer-address"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mb-3">
          <div className="border rounded-3 p-4">
            <div className="d-flex align-items-start">
              <div className="shimmer-radio me-3 mt-1"></div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <div className="shimmer-name mb-1"></div>
                    <div className="shimmer-phone"></div>
                  </div>
                  <div className="shimmer-badge"></div>
                </div>
                <div className="shimmer-address"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .shimmer-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        .shimmer-name {
          height: 24px;
          width: 60%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        
        .shimmer-phone {
          height: 16px;
          width: 40%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        
        .shimmer-badge {
          width: 60px;
          height: 20px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 10px;
        }
        
        .shimmer-address {
          height: 18px;
          width: 90%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

export default AddressShimmer; 