import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints.jsx";
import assortment from "../../images/assortment-citrus-fruits.png";

const FilterSideBar = ({ onFilterChange }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcats, setSelectedSubcats] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Get selected main category from URL
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category");

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
      .catch(() => {
        if (isMounted) setError("Failed to load categories");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Expand the selected main category by default
  useEffect(() => {
    if (categories.length > 0 && selectedCategory) {
      const idx = categories.findIndex(
        (cat) => String(cat._id || cat.id) === String(selectedCategory)
      );
      if (idx !== -1 && !openDropdowns.includes(idx)) {
        setOpenDropdowns((prev) => [...prev, idx]);
      }
    }
    // eslint-disable-next-line
  }, [categories, selectedCategory]);

  // Handle main category checkbox change
  const handleCategoryChange = (catId, checked) => {
    let updated = checked
      ? [...selectedCategories, catId]
      : selectedCategories.filter((id) => id !== catId);
    setSelectedCategories(updated);
    // Call parent with new filter state
    if (onFilterChange) onFilterChange({ category: updated, subCategory: selectedSubcats });
  };

  // Handle subcategory checkbox change
  const handleSubcatChange = (subcatId, checked) => {
    let updated = checked
      ? [...selectedSubcats, subcatId]
      : selectedSubcats.filter((id) => id !== subcatId);
    setSelectedSubcats(updated);
    if (onFilterChange) onFilterChange({ category: selectedCategories, subCategory: updated });
  };

  const toggleDropdown = (index) => {
    if (openDropdowns.includes(index)) {
      setOpenDropdowns([]); // Collapse all if clicking the open one
    } else {
      setOpenDropdowns([index]); // Only one open at a time
    }
  };

  return (
    <div className="col-md-3 sidebar-categories-container">
      <h5 className="mb-3 mt-8">Categories</h5>
      {loading && (
        <div className="sidebar-categories-container">
          <div className="shimmer-title shimmer-bg" style={{ width: '60%', height: 24, margin: '24px 0 18px 0', borderRadius: 6 }} />
          <div className="sidebar-main-box">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="sidebar-category-row" key={idx} style={{ borderBottom: idx !== 5 ? '1px solid #e0e0e0' : 'none', borderRadius: idx === 0 ? '10px 10px 0 0' : idx === 5 ? '0 0 10px 10px' : '0' }}>
                <div className="sidebar-category-header d-flex align-items-center justify-content-between">
                  <div className="shimmer-line shimmer-bg" style={{ width: '70%', height: 18, borderRadius: 4 }} />
                  <div className="shimmer-circle shimmer-bg" style={{ width: 18, height: 18, borderRadius: '50%' }} />
                </div>
                <div className="sidebar-subcat-list show">
                  <ul className="nav flex-column ms-2 mb-2">
                    {Array.from({ length: 2 }).map((_, subIdx) => (
                      <li className="nav-item sidebar-subcat-item d-flex align-items-center justify-content-between" key={subIdx}>
                        <div className="shimmer-line shimmer-bg" style={{ width: '60%', height: 14, borderRadius: 4 }} />
                        <div className="shimmer-circle shimmer-bg" style={{ width: 14, height: 14, borderRadius: '50%' }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
        </div>
      )}
      {error && <div className="text-danger py-3">{error}</div>}
      {!loading && !error && categories.length === 0 && (
        <div className="text-center py-3">No categories found.</div>
      )}
      {!loading && !error && (
        <div className="sidebar-main-box">
          {categories.map((cat, index) => {
            const expanded = openDropdowns.includes(index);
            return (
              <div
                className={`sidebar-category-row${expanded ? " expanded" : ""}`}
                key={cat._id || cat.id || index}
                style={{
                  borderBottom:
                    index !== categories.length - 1 ? "1px solid #e0e0e0" : "none",
                  borderRadius:
                    index === 0
                      ? "10px 10px 0 0"
                      : index === categories.length - 1
                      ? "0 0 10px 10px"
                      : "0",
                }}
              >
                <div
                  className="sidebar-category-header d-flex align-items-center justify-content-between"
                  onClick={() => toggleDropdown(index)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="sidebar-category-title">{cat.name}</span>
                  <span
                    className={`sidebar-chevron${expanded ? " rotated" : ""}`}
                    aria-label="Expand category"
                  >
                    <i className="fa fa-chevron-down" />
                  </span>
                </div>
                {Array.isArray(cat.subcat) && cat.subcat.length > 0 && (
                  <div
                    className={`sidebar-subcat-list${expanded ? " show" : ""}`}
                  >
                    <ul className="nav flex-column ms-2 mb-2">
                      {cat.subcat.map((sub, subIdx) => (
                        <li
                          className="nav-item sidebar-subcat-item d-flex align-items-center justify-content-between"
                          key={sub._id || sub.id || subIdx}
                        >
                          <span className="sidebar-subcat-name">{sub.name}</span>
                          <input
                            type="checkbox"
                            className="form-check-input sidebar-subcat-checkbox"
                            id={`subcat-${sub._id || sub.id}`}
                            checked={selectedSubcats.includes(sub._id || sub.id)}
                            onChange={e => handleSubcatChange(sub._id || sub.id, e.target.checked)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* If no subcategories, link directly to category */}
                {(!cat.subcat || cat.subcat.length === 0) && (
                  <div className="ms-3 mb-2">
                    <Link
                      className="nav-link sidebar-viewall-link"
                      to={`/Shop?category=${cat._id || cat.id || index}`}
                    >
                      View All
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {/* Bottom image section */}
      {/* <div className="py-4 position-relative">
        <img src={assortment} alt="assortment" className="img-fluid rounded-3" />
      </div> */}
      {/* Custom styles for sidebar */}
      <style>{`
        .sidebar-categories-container {
          background: none !important;
          box-shadow: none !important;
          padding: 0;
        }
        .sidebar-main-box {
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          background: #fff;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
          margin-bottom: 18px;
          overflow: hidden;
        }
        .sidebar-category-row {
          background: #fff;
          transition: background 0.2s;
          margin: 0;
          border-left: none;
          border-right: none;
        }
        .sidebar-category-row.expanded {
          background: #f8f9fa;
        }
        .sidebar-category-header {
          padding: 12px 18px;
          font-weight: 600;
          font-size: 1rem;
          user-select: none;
        }
        .sidebar-category-title {
          flex: 1;
        }
        .sidebar-chevron {
          transition: transform 0.2s;
          display: flex;
          align-items: center;
        }
        .sidebar-chevron.rotated {
          transform: rotate(180deg);
        }
        .sidebar-subcat-list {
          padding: 0 12px 8px 12px;
          display: none;
        }
        .sidebar-subcat-list.show {
          display: block;
        }
        .sidebar-subcat-item {
          padding: 7px 0 7px 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.97rem;
          background: none;
        }
        .sidebar-subcat-item:last-child {
          border-bottom: none;
        }
        .sidebar-subcat-name {
          flex: 1;
          margin-right: 10px;
        }
        .sidebar-subcat-checkbox {
          margin-left: 0;
        }
        .sidebar-viewall-link {
          color: #0aad0a;
          font-weight: 500;
          padding-left: 0;
        }
        .sidebar-category-row:hover {
          background: #f1f3f6;
        }
        .sidebar-category-header:hover {
          background: #f1f3f6;
        }
      `}</style>
    </div>
  );
};

export default FilterSideBar; 