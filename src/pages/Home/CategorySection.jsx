import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import { get } from "../../apis/apiClient.jsx";
import { ENDPOINTS } from "../../apis/endpoints.jsx";

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
              <div className="text-center py-5">Loading...</div>
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
                  key={cat.id || cat._id || idx}
                >
                  <Zoom>
                    <div className="text-center mb-10">
                      <Link to={`#category-${cat.id || cat._id || idx}`}>
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="card-image rounded-circle"
                          style={{ objectFit: "cover", width: 100, height: 100 }}
                        />
                      </Link>
                      <div className="mt-4">
                        <h5 className="fs-6 mb-0">
                          <Link to={`#category-${cat.id || cat._id || idx}`} className="text-inherit">
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