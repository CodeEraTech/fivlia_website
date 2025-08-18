import React, { useEffect, useState } from "react";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // ✅ for fade animations

const useResponsiveBannerHeight = () => {
  const [height, setHeight] = useState(300);
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

// Group banners into chunks of 2
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const OfferBannerSection = () => {
  const [banners, setBanners] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const bannerHeight = useResponsiveBannerHeight();
  const getImageUrl = useImageUrl();

  useEffect(() => {
    let isMounted = true;
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

  const groupedBanners = chunkArray(banners, 2);

  useEffect(() => {
    if (!groupedBanners.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % groupedBanners.length);
    }, 5000); // every 5s
    return () => clearInterval(interval);
  }, [groupedBanners]);

  if (!loading && !error && banners.length === 0) return null;

  return (
    <section className="offer-banner-section py-3">
      <div className="container">
        {loading && (
          <div
            className="text-center shimmer-bg"
            style={{ minHeight: bannerHeight }}
          />
        )}
        {error && <div className="text-danger text-center py-2">{error}</div>}

        {!loading && !error && groupedBanners.length > 0 && (
          <TransitionGroup className="row position-relative">
            <CSSTransition
              key={activeIndex}
              timeout={800}
              classNames="fade-banner"
            >
              <div className="row w-100 m-0">
                {groupedBanners[activeIndex].map((banner, idx) => (
                  <div className="col-12 col-lg-6 mb-3" key={banner._id || idx}>
                    <Link
                      to={`/Shop?category=${
                        banner.mainCategory?._id || banner.mainCategory || ""
                      }`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="py-10 px-8 rounded-3 text-white shadow-lg"
                        style={{
                          backgroundImage: `url(${getImageUrl(banner.image)})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: 200,
                          borderRadius: "1rem",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      </div>

      {/* ✅ CSS inside the same file */}
      <style>{`
      /* modern fade animation for banners */
.fade-banner-enter {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
.fade-banner-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0);
  transition: all 600ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.fade-banner-exit {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.fade-banner-exit-active {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
  transition: all 600ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* shimmer loader */
.shimmer-bg {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}

/* hover effect */
.offer-banner-section .col-lg-6 div {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.offer-banner-section .col-lg-6 div:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 28px rgba(0,0,0,0.15);
}

      `}</style>
    </section>
  );
};

export default OfferBannerSection;
