import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";

const SellersSection = () => {
  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getImageUrl = useImageUrl();

  // Fetch sellers from API
  useEffect(() => {
    const fetchSellers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await get(ENDPOINTS.TOP_SELLERS);
        if (response.data && response.data.storeDetailsWithRatings) {
          setSellers(response.data.storeDetailsWithRatings);
        } else {
          setSellers([]);
        }
      } catch (err) {
        setError("Failed to load sellers");
        setSellers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSellers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0", // Ensure the cards are center aligned
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Loading shimmer component
  const SellerShimmer = () => (
    <div className="seller-list shimmer-container">
      <div className="shimmer-image"></div>
      <div className="shimmer-text"></div>
      <div className="shimmer-text"></div>
    </div>
  );

  // Rating display
  const renderRating = (rating) => {
    // Default to 0 if the rating is invalid (NaN or less than 0)
    if (isNaN(rating) || rating < 0) rating = 0;

    // If the rating is 0, return 5 empty stars
    if (rating === 0) {
      return (
        <>
          {Array(5)
            .fill()
            .map((_, index) => (
              <i key={`empty-${index}`} className="far fa-star" />
            ))}
          <span> (0.0)</span>
        </>
      );
    }

    // Calculate the number of full stars, half stars, and empty stars
    const fullStars = Math.floor(rating); // Full stars
    const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star (if the decimal part is >= 0.5)
    const emptyStars = 5 - fullStars - halfStars; // Empty stars to complete the 5

    return (
      <>
        {/* Full Stars */}
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <i key={`full-${index}`} className="fas fa-star" />
          ))}

        {/* Half Star */}
        {halfStars > 0 && <i key="half" className="fas fa-star-half-alt" />}

        {/* Empty Stars */}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <i key={`empty-${index}`} className="far fa-star" />
          ))}

        {/* Numeric Rating */}
        <span> ({rating})</span>
      </>
    );
  };

  // Function to generate initials (first two letters of the store name)
  const getInitials = (name) => {
    if (!name || typeof name !== "string" || name.trim() === "") {
      return "";
    }

    const words = name.split(" ").filter(Boolean);

    if (words.length === 0) {
      return "";
    }

    const initials = words
      .map((word) => word[0].toUpperCase())
      .join("")
      .slice(0, 2);

    return initials;
  };

  return (
    <div className="container">
      <style>{`
        .sellers-section {
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

        .seller-list {
          background: white;
          border-radius: 16px;
          padding: 1rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 210px;
          width: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          position: relative;
          overflow: hidden;
          margin: 0 10px; /* Added horizontal gap */
        }

        .seller-list:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }

        .seller-list img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: contain;        
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .seller-list img:hover {
          transform: scale(1.1);
        }

        .card-title {
            font-size: 1rem;
            font-weight: 600;
            color: #000;
            margin: 0;
            line-height: 1.3;
            text-align: center;
        }

        .card-title:hover {
          color: #0AAD0A;
        }

        .seller-rating {
          font-size: 1rem;
          color: #FFCC00;
          margin-top: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .seller-rating span {
          color: #000;
          font-size: 0.9rem;
          margin-left: 5px;
          font-weight:700;
        }

        /* Shimmer Loading Styles */
        .shimmer-container {
          position: relative;
          overflow: hidden;
        }

        .shimmer-image {
          width: 100px;
          height: 100px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 50%;
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
          .sellers-section {
            padding: 2rem 0;
          }

          .h3style {
            font-size: 1.8rem;
          }

          .seller-list {
            height: 220px;
            width: 220px;
            padding: 1rem;
          }

          .seller-list img {
            width: 100px;
            height: 100px;
          }

          .card-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .h3style {
            font-size: 1.5rem;
          }

          .seller-list {
            height: 200px;
            width: 180px;
            padding: 0.75rem;
          }

          .seller-list img {
            width: 80px;
            height: 80px;
          }

          .card-title {
            font-size: 0.9rem;
          }
        }

        /* Override Slick Slider Width */
        .sellers-section .slick-list {
          padding: 10px 0 !important;
        }


        .sellers-section .slick-slide {
          width: auto !important; /* Ensure the width of the slide is based on content */
        }

        .slick-track {
          display: flex;
          align-items: stretch;
        }

        .slick-slide > div {
          display: flex;
          justify-content: center;
        }
      `}</style>

      <div className="sellers-section">
        <div className="col-12">
          <div className="mb-6">
            <div className="section-head text-center">
              <h3 className="h3style">Top Sellers</h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>

          {loading ? (
            <div className="row">
              {[...Array(4)].map((_, index) => (
                <SellerShimmer key={index} />
              ))}
            </div>
          ) : error ? (
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <p>{error}</p>
            </div>
          ) : (
            <Slider {...settings}>
              {sellers.map((seller) => {
                const hasImage = seller.image && seller.image.trim() !== "";
                const initials = getInitials(seller.storeName);

                return (
                  <div key={seller.storeId}>
                    <Link to={`/seller-products?id=${seller.storeId}`}>
                      <div className="seller-list">
                        {/* Conditionally render image or initials circle */}
                        {hasImage ? (
                          <img
                            src={getImageUrl(seller.image)}
                            alt={seller.storeName}
                            className="seller-image"
                          />
                        ) : (
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              borderRadius: "50%",
                              backgroundColor: "#30574e",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              color: "#fff",
                              fontSize: "30px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                            }}
                          >
                            {initials}
                          </div>
                        )}
                        <h4 className="card-title">{seller.storeName}</h4>
                        <div className="seller-rating">
                          {renderRating(seller.averageRating)}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellersSection;
