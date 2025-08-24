import React, { useEffect, useState } from "react";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

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
    }, 7000); // change slide every 7s
    return () => clearInterval(interval);
  }, [groupedBanners]);

  if (!loading && !error && banners.length === 0) return null;

  return (
    <section className="offer-banner-section py-3">
      <div className="container">
        {loading && (
          <div className="text-center shimmer-bg" style={{ minHeight: bannerHeight }} />
        )}
        {error && <div className="text-danger text-center py-2">{error}</div>}

        {!loading && !error && groupedBanners.length > 0 && (
          <div className="row">
            {groupedBanners[activeIndex].map((banner, idx) => (
              <div className="col-12 col-lg-6 mb-3 fade-in-left" key={banner._id || idx}>
                <Slide direction={idx % 2 === 0 ? "left" : "right"}>
                  <Link
                    to={`/Shop?category=${banner.mainCategory?._id || banner.mainCategory || ""}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      borderRadius: '10px',
                      overflow: 'hidden',
                      width: '100%',
                      maxWidth: '600px',
                    }}>
                      <img
                        src={getImageUrl(banner.image)}
                        alt=""
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                  </Link>
                </Slide>
              </div>
            ))}
          </div>
        )}
      </div>

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
    </section>
  );
};

export default OfferBannerSection;