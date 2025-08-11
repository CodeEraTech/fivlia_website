import React, { useEffect, useState } from "react";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import { Link } from "react-router-dom";

// Responsive height hook (inline in this file)
const useResponsiveBannerHeight = () => {
 const [height, setHeight] = useState(140);  // default tall

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 480) setHeight(220);
      else if (window.innerWidth < 600) setHeight(260);
      else if (window.innerWidth < 768) setHeight(300);
      else if (window.innerWidth < 900) setHeight(340);
      else setHeight(380);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return height;
};

const bannerCarouselSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000
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
    const offerBannerEndpoint = `${ENDPOINTS.BANNERS}&type=offer`;
    get(offerBannerEndpoint)
      .then((res) => {
        if (isMounted) {
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

  useEffect(() => {
    if (!banners.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, bannerCarouselSettings.autoplaySpeed);
    return () => clearInterval(interval);
  }, [banners]);

  const goToPrev = () =>
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const goToNext = () =>
    setActiveIndex((prev) => (prev + 1) % banners.length);

  if (!loading && !error && banners.length === 0) return null;

  return (
    <section className="offer-banner-section">
      <div className="container mt-4">
        {loading && (
          <div className="banner-shimmer-wrapper text-center py-3">
            <div
              className="banner-shimmer shimmer-bg"
              style={{
                width: "100%",
                minHeight: bannerHeight,
                borderRadius: ".5rem"
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
          >
            <div className="carousel-inner">
              {banners.map((banner, idx) => (
                <div
                  className={`carousel-item${idx === activeIndex ? " active" : ""}`}
                  key={banner._id || idx}
                >
                  <Link
                    to={`/Shop?category=${banner.mainCategory?._id || banner.mainCategory || ''}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: `url(${getImageUrl(banner.image)}) no-repeat center / cover`,
                        borderRadius: ".5rem",
                        minHeight: bannerHeight,
                        width: "100%"
                      }}
                    />
                  </Link>
                </div>
              ))}
            </div>

            {banners.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={goToPrev}
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  onClick={goToNext}
                >
                  <span className="carousel-control-next-icon"></span>
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
