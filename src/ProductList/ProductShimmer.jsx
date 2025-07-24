import React from 'react';

const ProductShimmer = ({ count = 5 }) => {
  return (
    <div className="product-flex-wrap">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="col fade-zoom">
          <div className="card card-product shimmer-card">
            <div className="card-body">
              <div className="text-center position-relative">
                <div className="shimmer-img shimmer-bg" />
                <div className="card-product-action" style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                  <div className="shimmer-btn shimmer-bg" />
                  <div className="shimmer-btn shimmer-bg" />
                </div>
              </div>
              <div className="shimmer-line shimmer-bg" style={{ width: '60%', height: 12, margin: '12px 0 6px 0' }} />
              <div className="shimmer-line shimmer-bg" style={{ width: '40%', height: 12, marginBottom: 6 }} />
              <div className="shimmer-line shimmer-bg" style={{ width: '80%', height: 18, marginBottom: 10 }} />
              <div className="shimmer-line shimmer-bg" style={{ width: '50%', height: 14, marginBottom: 10 }} />
              <div className="shimmer-line shimmer-bg" style={{ width: '70%', height: 16, marginBottom: 10 }} />
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="shimmer-line shimmer-bg" style={{ width: 60, height: 18 }} />
                <div className="shimmer-btn shimmer-bg" style={{ width: 40, height: 24 }} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .product-flex-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        .product-flex-wrap .col.fade-zoom {
          flex: 0 0 230px;
          width: 230px;
          max-width: 230px;
          min-width: 230px;
          display: flex;
          margin-bottom: 2rem;
        }
        .product-flex-wrap .card-product {
          min-height: 420px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .product-flex-wrap .card-product .card-body {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          justify-content: space-between;
        }
        .shimmer-bg {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
          background-size: 400% 100%;
          animation: shimmer 1.2s ease-in-out infinite;
        }
        .shimmer-img {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          margin-bottom: 12px;
        }
        .shimmer-line {
          border-radius: 4px;
        }
        .shimmer-btn {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          margin-right: 4px;
        }
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @media (max-width: 1200px) {
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 23vw;
            width: 23vw;
            max-width: 100vw;
            min-width: 160px;
          }
        }
        @media (max-width: 900px) {
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 45vw;
            width: 45vw;
            max-width: 100vw;
            min-width: 140px;
          }
        }
        @media (max-width: 600px) {
          .product-flex-wrap .col.fade-zoom {
            flex: 1 1 100%;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
          .product-flex-wrap {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .product-flex-wrap .card-product {
            min-height: 320px;
          }
          .shimmer-img {
            height: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductShimmer; 