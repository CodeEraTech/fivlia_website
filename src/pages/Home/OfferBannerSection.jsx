import React, { useEffect, useState } from "react";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS } from '../../apis/endpoints';
import { useImageUrl } from '../../utils/getSettingsValue';
import { Link } from "react-router-dom";

// Responsive breakpoints/settings for the banner carousel
const bannerCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000, 
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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

const useResponsiveBannerHeight = () => {
  const [height, setHeight] = useState(300);
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 480) setHeight(150);
      else if (window.innerWidth < 600) setHeight(180);
      else if (window.innerWidth < 768) setHeight(200);
      else if (window.innerWidth < 900) setHeight(250);
      else if (window.innerWidth < 1200) setHeight(280);
      else setHeight(300);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return height;
};

const OfferBannerSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerHeight = useResponsiveBannerHeight();
  const getImageUrl = useImageUrl();
  
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    // Add type=offer parameter to get offer banners
    const offerBannerEndpoint = `${ENDPOINTS.BANNERS}&type=offer`;
    get(offerBannerEndpoint)
      .then((res) => {
        console.log('Offer banners response:', res);
        if (isMounted) {
          // The response structure is: { message, count, data: [...] }
          setBanners(res?.data?.data || []);
          setError(null);
        }
      })
      .catch(() => {
        if (isMounted) setError("Failed to load offer banners");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-slide effect (like carousel)
  useEffect(() => {
    if (!banners.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, bannerCarouselSettings.autoplaySpeed);
    return () => clearInterval(interval);
  }, [banners]);

  const goToSlide = (idx) => setActiveIndex(idx);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % banners.length);

  // Don't render anything if no banners
  if (!loading && !error && banners.length === 0) {
    return null;
  }

  return (
    <section className="offer-banner-section">
      <div className="container mt-4">
        {loading && (
          <div className="banner-shimmer-wrapper text-center py-3">
            <div
              className="banner-shimmer shimmer-bg"
              style={{
                width: '100%',
                minHeight: bannerHeight,
                borderRadius: '.5rem',
                margin: '0 auto',
                maxWidth: '100%',
              }}
            />
            <style>{`
              .shimmer-bg {
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
                background-size: 400% 100%;
                animation: shimmer 1.2s ease-in-out infinite;
              }
              @keyframes shimmer {
                0% { background-position: -400px 0; }
                100% { background-position: 400px 0; }
              }
            `}</style>
          </div>
        )}
        {error && <div className="text-center text-danger py-3">{error}</div>}
        {!loading && !error && banners.length > 0 && (
          <div
            id="offerCarouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {banners.map((banner, idx) => (
                <div
                  className={`carousel-item${idx === activeIndex ? " active" : ""}`}
                  key={banner._id || idx}
                >
                  <Link 
                    to={`/Shop?category=${banner.mainCategory?._id || banner.mainCategory || ''}`}
                    aria-label={`Go to ${banner.title} offer`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      style={{
                        background: `url(${getImageUrl(banner.image)}) no-repeat`,
                        backgroundSize: "cover",
                        borderRadius: ".5rem",
                        backgroundPosition: "center",
                        minHeight: bannerHeight,
                        width: "100%",
                        transition: "min-height 0.3s",
                        cursor: "pointer",
                      }}
                    >
                      {/* Only image for now, overlay content can be added later */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {banners.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#offerCarouselExampleFade"
                  data-bs-slide="prev"
                  onClick={goToPrev}
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#offerCarouselExampleFade"
                  data-bs-slide="next"
                  onClick={goToNext}
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default OfferBannerSection;
