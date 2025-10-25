import React, { useEffect, useState } from "react";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
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
  const [height, setHeight] = useState(500);
  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 480) setHeight(180);
      else if (window.innerWidth < 600) setHeight(220);
      else if (window.innerWidth < 768) setHeight(300);
      else if (window.innerWidth < 900) setHeight(350);
      else if (window.innerWidth < 1200) setHeight(400);
      else setHeight(500);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return height;
};

const TopBannerSection = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const bannerHeight = useResponsiveBannerHeight();
  const getImageUrl = useImageUrl();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const BannerEndpoint = `${ENDPOINTS.BANNERS}&type=normal`;
    get(BannerEndpoint)
      .then((res) => {
        // console.log(ENDPOINTS.BANNERS, res);
        if (isMounted) {
          // The response structure is: { message, count, data: [...] }
          setBanners(res?.data?.data || []);
          setError(null);
        }
      })
      .catch(() => {
        if (isMounted) setError("Failed to load banners");
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
  const goToPrev = () =>
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % banners.length);

  return (
    <section className="hero-section">
      <div className="container mt-8">
        {loading && (
          <div className="banner-shimmer-wrapper text-center py-5">
            <div
              className="banner-shimmer shimmer-bg"
              style={{
                width: "100%",
                minHeight: bannerHeight,
                borderRadius: ".5rem",
                margin: "0 auto",
                maxWidth: "100%",
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
        {error && <div className="text-center text-danger py-5">{error}</div>}
        {!loading && !error && banners.length > 0 && (
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {banners.map((banner, idx) => (
                <div
                  className={`carousel-item${
                    idx === activeIndex ? " active" : ""
                  }`}
                  key={banner._id || idx}
                >
                  <Link
                    to={
                      banner.type2 === "Store"
                        ? `/Shop?seller=${banner.storeId || ""}`
                        : banner.type2 === "Brand"
                        ? `/brand?id=${banner.brand._id || ""}`
                        : `/Shop?category=${banner.mainCategory?._id || ""}`
                    }
                    aria-label={`Go to ${banner.title} banner`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: `url(${getImageUrl(
                          banner.image
                        )}) no-repeat`,
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
            <button
              className="carousel-control-prev"
              onClick={goToPrev}
              type="button"
              aria-label="Previous"
              style={{ background: "none", border: "none" }}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              onClick={goToNext}
              type="button"
              aria-label="Next"
              style={{ background: "none", border: "none" }}
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators">
              {banners.map((banner, idx) => (
                <button
                  key={banner._id || idx}
                  type="button"
                  className={idx === activeIndex ? "active" : ""}
                  aria-current={idx === activeIndex}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  style={{
                    border: 0,
                    background: idx === activeIndex ? "#0aad0a" : "#888",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    margin: 2,
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopBannerSection;
