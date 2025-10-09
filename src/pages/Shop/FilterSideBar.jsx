import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints.jsx";
import { useImageUrl } from "../../utils/getSettingsValue.jsx";

const FilterSideBar = ({ onFilterChange, selectedFilters = {} }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentView, setCurrentView] = useState("main"); // 'main', 'subcat', 'subsubcat'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcat, setSelectedSubcat] = useState(null);
  const [selectedSubsubcat, setSelectedSubsubcat] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [productCounts, setProductCounts] = useState({
    main: {},
    subcat: {},
    subsubcat: {},
  });

  const location = useLocation();
  const navigate = useNavigate();
  const getImageUrl = useImageUrl();

  const params = new URLSearchParams(location.search);
  const urlSeller = params.get("seller");
  const urlCategory = params.get("category");
  const urlSubCat = params.get("subCategory");
  const urlSubSubCat = params.get("subSubCategory");

  // Fetch categories
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    get(ENDPOINTS.CATEGORIES)
      .then((res) => {
        if (!isMounted) return;
        setCategories(res.data?.result || []);
        setError(null);
      })
      .catch(() => {
        if (!isMounted) return;
        setError("Failed to load categories");
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch counts based on current filter / URL
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const qs = new URLSearchParams();
        if (urlSeller) qs.append("seller", urlSeller);
        if (urlCategory) qs.append("category", urlCategory);
        if (urlSubCat) qs.append("subCategory", urlSubCat);
        if (urlSubSubCat) qs.append("subSubCategory", urlSubSubCat);

        const url = `${ENDPOINTS.PRODUCTS_COUNT}&${qs.toString()}`;
        const resp = await get(url);
        const counts = resp.data.counts || {
          main: {},
          subcat: {},
          subsubcat: {},
        };
        setProductCounts(counts);
      } catch (err) {
        console.error("Failed to load filter counts:", err);
      }
    };

    fetchCounts();
  }, [urlCategory]);

  const getProductCount = (id, level) => {
    return productCounts[level]?.[id] || 0;
  };

  // sync view based on selectedFilters or URL
  useEffect(() => {
    if (categories.length === 0) return;

    if (selectedFilters.category && selectedFilters.category.length > 0) {
      const catId = selectedFilters.category[0];
      const catObj = categories.find((c) => c._id === catId);
      if (catObj) {
        setSelectedCategory(catObj);

        if (
          selectedFilters.subSubCategory &&
          selectedFilters.subSubCategory.length > 0
        ) {
          const subArr = catObj.subcat || [];
          const subObj = subArr.find(
            (s) => s._id === selectedFilters.subCategory?.[0]
          );
          if (subObj) {
            setSelectedSubcat(subObj);
            setCurrentView("subsubcat");
            setBreadcrumb([
              { name: catObj.name, id: catObj._id, level: "main" },
              { name: subObj.name, id: subObj._id, level: "subcat" },
            ]);
          }
        } else if (
          selectedFilters.subCategory &&
          selectedFilters.subCategory.length > 0
        ) {
          setCurrentView("subcat");
          setBreadcrumb([{ name: catObj.name, id: catObj._id, level: "main" }]);
        } else {
          setCurrentView("subcat");
          setBreadcrumb([{ name: catObj.name, id: catObj._id, level: "main" }]);
        }
      }
    } else if (urlCategory) {
      const catObj = categories.find((c) => c._id === urlCategory);
      if (catObj) {
        setSelectedCategory(catObj);
        setCurrentView("subcat");
        setBreadcrumb([{ name: catObj.name, id: catObj._id, level: "main" }]);
        if (onFilterChange) onFilterChange({ category: [urlCategory] });
      }
    } else {
      setCurrentView("main");
      setSelectedCategory(null);
      setSelectedSubcat(null);
      setSelectedSubsubcat(null);
      setBreadcrumb([]);
    }
  }, [categories, selectedFilters, urlCategory]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubcat(null);
    setSelectedSubsubcat(null);
    setCurrentView("subcat");
    setBreadcrumb([{ name: cat.name, id: cat._id, level: "main" }]);
    if (onFilterChange) {
      onFilterChange({ category: [cat._id] });
    }
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("category", cat._id);
    navigate(`/Shop?${searchParams.toString()}`);
  };

  const handleSubcatClick = (sub) => {
    setSelectedSubcat(sub);
    setSelectedSubsubcat(null);

    if (sub.subsubcat && sub.subsubcat.length > 0) {
      setCurrentView("subsubcat");
      setBreadcrumb([
        {
          name: selectedCategory.name,
          id: selectedCategory._id,
          level: "main",
        },
        { name: sub.name, id: sub._id, level: "subcat" },
      ]);
    } else {
      if (onFilterChange) {
        onFilterChange({
          category: [selectedCategory._id],
          subCategory: [sub._id],
        });
      }
    }
  };

  const handleSubsubcatClick = (subsub) => {
    setSelectedSubsubcat(subsub);
    if (onFilterChange) {
      onFilterChange({
        category: [selectedCategory._id],
        subCategory: [selectedSubcat._id],
        subSubCategory: [subsub._id],
      });
    }
  };

  const handleBreadcrumbClick = (item) => {
    if (item.level === "main") {
      setCurrentView("main");
      setSelectedCategory(null);
      setSelectedSubcat(null);
      setSelectedSubsubcat(null);
      setBreadcrumb([]);
      if (onFilterChange) onFilterChange({});
      navigate("/Shop");
    } else if (item.level === "subcat") {
      setCurrentView("subcat");
      setSelectedSubcat(null);
      setSelectedSubsubcat(null);
      setBreadcrumb([
        {
          name: selectedCategory.name,
          id: selectedCategory._id,
          level: "main",
        },
      ]);
      if (onFilterChange) onFilterChange({ category: [selectedCategory._id] });
    }
  };

  const handleBackStep = () => {
    if (currentView === "subsubcat") {
      setCurrentView("subcat");
      setSelectedSubsubcat(null);
      setBreadcrumb([
        {
          name: selectedCategory.name,
          id: selectedCategory._id,
          level: "main",
        },
      ]);
      if (onFilterChange) {
        onFilterChange({
          category: [selectedCategory._id],
          subCategory: [selectedSubcat._id],
        });
      }
    } else if (currentView === "subcat") {
      setCurrentView("main");
      setSelectedCategory(null);
      setSelectedSubcat(null);
      setSelectedSubsubcat(null);
      setBreadcrumb([]);
      if (onFilterChange) onFilterChange({});
      navigate("/Shop");
    }
  };

  const renderMainCategories = () => (
    <div className="category-grid">
      {categories.map((cat) => {
        const productCount = getProductCount(cat._id, "main");
        return (
          <div
            key={cat._id}
            className="category-item"
            onClick={() => handleCategoryClick(cat)}
          >
            <div className="category-content">
              <img
                src={getImageUrl(cat.image)}
                alt={cat.name}
                className="category-image"
                onError={(e) => handleImageError?.(e)}
              />
              <div className="category-info">
                <span className="category-name">{cat.name}</span>
                <span className="category-count">
                  {productCount} {productCount === 1 ? "product" : "products"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderSubcategories = () => (
    <div className="subcat-container">
      <div className="breadcrumb-nav">
        <div className="back-link" onClick={handleBackStep}>
          <i className="fa fa-arrow-left"></i> Back
        </div>
        <div className="breadcrumb">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              <span
                className="breadcrumb-item"
                onClick={() => handleBreadcrumbClick(item)}
              >
                {item.name}
              </span>
              {index < breadcrumb.length - 1 && (
                <span className="breadcrumb-separator">{">"}</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="subcat-grid">
        {selectedCategory?.subcat?.map((sub) => {
          const isSelected = selectedSubcat?._id === sub._id;
          const productCount = getProductCount(sub._id, "subcat");
          return (
            <div
              key={sub._id}
              className={`subcat-item${isSelected ? " selected" : ""}`}
              onClick={() => handleSubcatClick(sub)}
            >
              <div className="subcat-content">
                <img
                  src={getImageUrl(sub.image)}
                  alt={sub.name}
                  className="subcat-image"
                  onError={(e) => handleImageError?.(e)}
                />
                <div className="subcat-info">
                  <span className="subcat-name">{sub.name}</span>
                  <span className="subcat-count">
                    {productCount} {productCount === 1 ? "product" : "products"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderSubsubcategories = () => (
    <div className="subsubcat-container">
      <div className="breadcrumb-nav">
        <div className="back-link" onClick={handleBackStep}>
          <i className="fa fa-arrow-left"></i> Back
        </div>
        <div className="breadcrumb">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              <span
                className="breadcrumb-item"
                onClick={() => handleBreadcrumbClick(item)}
              >
                {item.name}
              </span>
              {index < breadcrumb.length - 1 && (
                <span className="breadcrumb-separator">{">"}</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="subsubcat-grid">
        {selectedSubcat?.subsubcat?.map((subsub) => {
          const isSelected = selectedSubsubcat?._id === subsub._id;
          const productCount = getProductCount(subsub._id, "subsubcat");
          return (
            <div
              key={subsub._id}
              className={`subsubcat-item${isSelected ? " selected" : ""}`}
              onClick={() => handleSubsubcatClick(subsub)}
            >
              <div className="subsubcat-content">
                <img
                  src={getImageUrl(subsub.image)}
                  alt={subsub.name}
                  className="subsubcat-image"
                  onError={(e) => handleImageError?.(e)}
                />
                <div className="subsubcat-info">
                  <span className="subsubcat-name">{subsub.name}</span>
                  <span className="subsubcat-count">
                    {productCount} {productCount === 1 ? "product" : "products"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="col-md-3 sidebar-categories-container">
      <h5 className="mb-3 mt-8">Categories</h5>
      {loading && (
        <div className="loading-container">
          <div
            className="shimmer-title shimmer-bg"
            style={{
              width: "100%",
              height: 70,
              margin: "24px 0 18px 0",
              borderRadius: 6,
            }}
          />
          <div className="category-grid">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="category-item shimmer" key={idx}>
                <div className="shimmer-content">
                  <div
                    className="shimmer-image shimmer-bg"
                    style={{ width: 60, height: 60, borderRadius: 8 }}
                  />
                  <div className="shimmer-info">
                    <div
                      className="shimmer-text shimmer-bg"
                      style={{
                        width: "70%",
                        height: 18,
                        borderRadius: 4,
                      }}
                    />
                    <div
                      className="shimmer-text shimmer-bg"
                      style={{
                        width: "50%",
                        height: 14,
                        marginTop: 6,
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <div className="text-danger py-3">{error}</div>}
      {!loading && !error && categories.length === 0 && (
        <div className="text-center py-3">No categories found.</div>
      )}
      {!loading && !error && currentView === "main" && renderMainCategories()}
      {!loading && !error && currentView === "subcat" && renderSubcategories()}
      {!loading &&
        !error &&
        currentView === "subsubcat" &&
        renderSubsubcategories()}
      <style>{`
        .sidebar-categories-container {
          background: none !important;
          box-shadow: none !important;
          padding: 0;
        }
        .category-grid, .subcat-grid, .subsubcat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .category-item, .subcat-item, .subsubcat-item {
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 12px;
          transition: all 0.2s ease;
          cursor: pointer;
          background: #fff;
        }
        .category-item:hover, .subcat-item:hover, .subsubcat-item:hover {
           border-color: #0aad0a;
           box-shadow: 0 4px 8px rgba(10, 173, 10, 0.15);
           transform: translateY(-2px);
         }
         .subcat-item.selected, .subsubcat-item.selected {
           border-color: #0aad0a;
           background: #e8f5e8;
           box-shadow: 0 2px 8px rgba(10, 173, 10, 0.2);
         }
        .category-content, .subcat-content, .subsubcat-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .category-image {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        .subcat-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        .subsubcat-image {
          width: 45px;
          height: 45px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        .category-info, .subcat-info, .subsubcat-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .category-name, .subcat-name, .subsubcat-name {
          font-weight: 600;
          font-size: 1rem;
          color: #333;
        }
        .category-count, .subcat-count, .subsubcat-count {
          font-size: 0.85rem;
          color: #666;
        }
        .breadcrumb-nav {
           margin-bottom: 16px;
           padding: 12px;
           background: #f8f9fa;
           border-radius: 8px;
           border: 1px solid #e0e0e0;
         }
         .back-link {
           color: #0aad0a;
           cursor: pointer;
           font-weight: 500;
           margin-bottom: 8px;
           display: flex;
           align-items: center;
           gap: 6px;
           font-size: 0.9rem;
         }
         .back-link:hover {
           color: #088a08;
         }
         .breadcrumb {
           font-size: 0.9rem;
           color: #666;
           display: flex;
           align-items: center;
           flex-wrap: wrap;
           margin-bottom: 0;
         }
         .breadcrumb-item {
           color: #0aad0a;
           cursor: pointer;
           text-decoration: underline;
         }
         .breadcrumb-item:hover {
           color: #088a08;
         }
         .breadcrumb-separator {
           margin: 0 6px;
           color: #999;
         }
         .loading-container {
           margin-bottom: 20px;
         }
         .shimmer-content {
           display: flex;
           align-items: center;
           gap: 12px;
         }
         .shimmer-info {
           flex: 1;
           display: flex;
           flex-direction: column;
           gap: 4px;
         }
        .shimmer-bg {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
          background-size: 400% 100%;
          animation: shimmer 1.2s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
         @media (max-width: 768px) {
           .category-image {
             width: 50px;
             height: 50px;
           }
           .subcat-image {
             width: 45px;
             height: 45px;
           }
           .subsubcat-image {
             width: 40px;
             height: 40px;
           }
           .category-name, .subcat-name, .subsubcat-name {
             font-size: 0.9rem;
           }
           .category-count, .subcat-count, .subsubcat-count {
             font-size: 0.8rem;
           }
           .breadcrumb-nav {
              padding: 10px;
            }
            .back-link {
              font-size: 0.85rem;
            }
           .breadcrumb {
             font-size: 0.9rem;
           }
           .breadcrumb-item {
             padding: 3px 6px;
           }
         }
         @media (max-width: 576px) {
          .category-item, .subcat-item, .subsubcat-item {
            padding: 10px;
          }
          .category-content, .subcat-content, .subsubcat-content {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterSideBar;
