import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS, getImageUrl } from '../../apis/endpoints';

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        if (isMounted) {
          setCategories(res.data?.result || []);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setError("Failed to load categories");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="my-lg-14 my-8">
      <style>{`
        /* Responsive grid adjustments */
        @media (max-width: 650px) {
          .col-lg-2 {
            flex: 0 0 33.333% !important;
            max-width: 33.333% !important;
          }
        }
      `}</style>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <div className="mb-6">
              <div className="section-head text-center mt-8">
                <h3 className="h3style" data-title="Shop Popular Categories">
                  Shop Popular Categories
                </h3>
                <div className="wt-separator bg-primarys"></div>
                <div className="wt-separator2 bg-primarys"></div>
              </div>
            </div>
          </div>
          <div className="row ">
            {loading && (
              <>
                {Array.from({ length: 15 }).map((_, idx) => (
                  <div className="col-lg-2 col-md-4 col-6 fade-zoom"  style={{ flex: '0 0 20%', maxWidth: '20%' }} key={idx}>
                    <div className="category-shimmer text-center mb-10">
                      <div className="shimmer-circle shimmer-bg" style={{ width: 100, height: 100, margin: '0 auto', borderRadius: 50 }} />
                      <div className="shimmer-line shimmer-bg" style={{ width: 100, height: 16, margin: '18px auto 0', borderRadius: 6 }} />
                    </div>
                  </div>
                ))}
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
              </>
            )}
            {error && (
              <div className="text-center text-danger py-5">{error}</div>
            )}
            {!loading && !error && categories.length === 0 && (
              <div className="text-center py-5">No categories found.</div>
            )}
            {!loading && !error &&
              categories.map((cat, idx) => (
                <div
                  className="col-lg-2 col-md-4 col-6 fade-zoom"
                  style={{ flex: '0 0 20%', maxWidth: '20%' }}
                  key={cat.id || cat._id || idx}
                >
                  <Zoom>
                    <div className="text-center mb-10">
                      <Link to={`/Shop?category=${cat.id || cat._id || idx}`} aria-label={`Go to ${cat.name} category`}>
                        <img
                        src={getImageUrl(cat.image)}

                          alt={cat.name}
                          className="card-image rounded-circle"
                          style={{ objectFit: "cover", width: 100, height: 100 }}
                        />
                      </Link>
                      <div className="mt-4">
                        <h5 className="fs-6 mb-0">
                          <Link to={`/Shop?category=${cat.id || cat._id || idx}`} className="text-inherit" aria-label={`Go to ${cat.name} category`}>
                            {cat.name}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </Zoom>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 