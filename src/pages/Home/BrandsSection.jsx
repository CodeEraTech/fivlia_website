import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { get } from '../../apis/apiClient';
import { ENDPOINTS } from '../../apis/endpoints';

const BrandsSection = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch brands from API
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await get(ENDPOINTS.BRANDS);
        if (response.data && response.data.featuredBrands) {
          setBrands(response.data.featuredBrands);
        } else {
          setBrands([]);
        }
      } catch (err) {
       // console.error('Error fetching brands:', err);
        setError('Failed to load brands');
        setBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Loading shimmer component
  const BrandShimmer = () => (
    <div className="m-1">
      <div className="partner-list shimmer-container">
        <div className="shimmer-image"></div>
        <div className="shimmer-text"></div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <style>{`
        .brands-section {
          padding: 3rem 0;
        }
        
        .section-head {
          margin-bottom: 2.5rem;
        }
        
        .h3style {
          font-size: 2.5rem;
          font-weight: 700;
          color: #30574e;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .wt-separator {
          height: 3px;
          width: 80px;
          margin: 0 auto 0.5rem;
          border-radius: 2px;
        }
        
        .wt-separator2 {
          height: 1px;
          width: 40px;
          margin: 0 auto;
          border-radius: 1px;
        }
        
        .partner-list {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .partner-list:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .partner-list::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #30574e, #0AAD0A);
          border-radius: 16px 16px 0 0;
        }
        
        .partner-list img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 12px;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }
        
        .partner-list:hover img {
          transform: scale(1.1);
        }
        
        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #30574e;
          margin: 0;
          line-height: 1.3;
          text-align: center;
        }
        
        /* Shimmer Loading Styles */
        .shimmer-container {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-image {
          width: 80px;
          height: 80px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
          margin-bottom: 1rem;
        }
        
        .shimmer-text {
          width: 80%;
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        /* Error State */
        .error-container {
          text-align: center;
          padding: 3rem 1rem;
          color: #dc3545;
        }
        
        .error-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.7;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .h3style {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .brands-section {
            padding: 2rem 0;
          }
          
          .h3style {
            font-size: 1.8rem;
          }
          
          .partner-list {
            height: 180px;
            padding: 1rem;
          }
          
          .partner-list img {
            width: 60px;
            height: 60px;
          }
          
          .card-title {
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 576px) {
          .h3style {
            font-size: 1.5rem;
          }
          
          .partner-list {
            height: 160px;
            padding: 0.75rem;
          }
          
          .partner-list img {
            width: 50px;
            height: 50px;
          }
          
          .card-title {
            font-size: 0.8rem;
          }
        }
        
        /* Slick Slider Customization */
        .slick-slide {
          padding: 0 0.5rem;
        }
        
        .slick-track {
          display: flex;
          align-items: stretch;
        }
        
        .slick-slide > div {
          height: 100%;
        }
        
        .slick-slide > div > div {
          height: 100%;
        }
      `}</style>
      
      <div className="brands-section">
        <div className="col-12">
          <div className="mb-6">
                         <div className="section-head text-center">
               <h3 className="h3style">
                 Top Brands
               </h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>
        
        {loading ? (
          <Slider {...settings2}>
            {[...Array(8)].map((_, index) => (
              <BrandShimmer key={index} />
            ))}
          </Slider>
        ) : error ? (
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h4>Oops! Something went wrong</h4>
            <p>{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-primary mt-3"
            >
              Try Again
            </button>
          </div>
        ) : brands.length === 0 ? (
          <div className="error-container">
            <div className="error-icon">📦</div>
            <h4>No Brands Available</h4>
            <p>We're working on adding more brands. Check back soon!</p>
          </div>
        ) : (
          <Slider {...settings2}>
            {brands.map((brand) => (
              <div className="m-1" key={brand._id}>
                <div className="partner-list">
                  <img
                    src={brand.brandLogo}
                    style={{ objectFit: "contain" }}
                    className="img-fluid"
                    alt={brand.brandName}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/80x80?text=' + encodeURIComponent(brand.brandName.charAt(0));
                    }}
                  />
                  <h6 className="card-title">
                    <div>{brand.brandName}</div>
                  </h6>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default BrandsSection; 