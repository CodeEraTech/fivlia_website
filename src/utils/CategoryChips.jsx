import React, { useState, useRef, useEffect } from "react";
import { useImageUrl } from "./getSettingsValue";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "20px",
  },
  rowWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  scrollRow: {
    display: "flex",
    gap: "12px",
    overflowX: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    scrollBehavior: "smooth",
    padding: "6px 40px",
    "&::WebkitScrollbar": {
      display: "none",
    },
  },
  chip: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "4px 10px",
    borderRadius: "9999px",
    border: "2px solid #0aad0a",
    backgroundColor: "white",
    color: "#0aad0a",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  chipSelected: { backgroundColor: "#0aad0a", color: "white" },
  chipImage: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "rgba(10, 173, 10, 0.1)",
    color: "#0aad0a",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  leftBtn: { left: "0" },
  rightBtn: { right: "0" },
  breadcrumbWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
    gap: "6px",
    fontSize: "14px",
    fontWeight: "500",
  },
  breadcrumb: { color: "#0aad0a", cursor: "pointer" },
  breadcrumbSeparator: { color: "#0aad0a" },
  navBtnWrapperLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "40px",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },

  navBtnWrapperRight: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "40px",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
  },
};

const ScrollableRow = ({ items, selectedId, onSelect }) => {
  const rowRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const getImageUrl = useImageUrl();

  const checkOverflow = () => {
    const el = rowRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  // Always scroll to start when new items appear
  useEffect(() => {
    if (rowRef.current) {
      rowRef.current.scrollLeft = 0;
      checkOverflow();
    }
  }, [items]);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkOverflow);
    window.addEventListener("resize", checkOverflow);
    return () => {
      el.removeEventListener("scroll", checkOverflow);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div style={styles.rowWrapper}>
      {showLeft && (
        <div style={styles.navBtnWrapperLeft}>
          <button
            style={{ ...styles.navBtn, ...styles.leftBtn }}
            onClick={() => scroll("left")}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
      )}

      <div ref={rowRef} style={styles.scrollRow}>
        {items.map((item) => (
          <div
            key={item._id}
            onClick={() => onSelect(item)}
            style={{
              ...styles.chip,
              ...(selectedId === item._id ? styles.chipSelected : {}),
            }}
          >
            {item.image && (
              <img
                src={getImageUrl(item.image)}
                alt={item.name}
                style={styles.chipImage}
              />
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {showRight && (
        <div style={styles.navBtnWrapperRight}>
          <button
            style={{ ...styles.navBtn, ...styles.rightBtn }}
            onClick={() => scroll("right")}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

const CategoryChips = ({ data, onSelectCategory }) => {
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const [selectedSubSub, setSelectedSubSub] = useState(null);
  const [currentLevel, setCurrentLevel] = useState("main");

  const handleSelectMain = (cat) => {
    setSelectedCat(cat);
    setSelectedSub(null);
    setSelectedSubSub(null);
    const subcats = cat.subcat || [];
    onSelectCategory?.(cat, "category");
    if (subcats.length > 0) {
      setCurrentLevel("sub");
    } else {
      setCurrentLevel("main");
    }
  };

  const handleSelectSub = (sub) => {
    setSelectedSub(sub);
    setSelectedSubSub(null);
    const subsubcats = sub.subsubcat || [];
    onSelectCategory?.(sub, "subcategory");
    if (subsubcats.length > 0) {
      setCurrentLevel("subsub");
    } else {
      setCurrentLevel("sub");
    }
  };

  const handleSelectSubSub = (subsub) => {
    setSelectedSubSub(subsub);
    onSelectCategory?.(subsub, "subsubcategory");
  };

  const handleBreadcrumbClick = (level) => {
    if (level === "main") {
      setCurrentLevel("main");
      setSelectedCat(null);
      setSelectedSub(null);
      setSelectedSubSub(null);
    } else if (level === "sub") {
      setCurrentLevel("sub");
      setSelectedSub(null);
      setSelectedSubSub(null);
    }
  };

  const subcats = selectedCat?.subcat || [];
  const subsubcats = selectedSub?.subsubcat || [];

  return (
    <div style={styles.container}>
      {(currentLevel === "sub" || currentLevel === "subsub") && (
        <div style={styles.breadcrumbWrapper}>
          <span
            style={styles.breadcrumb}
            onClick={() => handleBreadcrumbClick("main")}
          >
            Category
          </span>
          {selectedSub && (
            <>
              <span style={styles.breadcrumbSeparator}>&gt;</span>
              <span
                style={styles.breadcrumb}
                onClick={() => handleBreadcrumbClick("sub")}
              >
                Subcategory
              </span>
            </>
          )}
        </div>
      )}

      {currentLevel === "main" && (
        <ScrollableRow
          items={data}
          selectedId={selectedCat?._id}
          onSelect={handleSelectMain}
        />
      )}

      {currentLevel === "sub" && subcats.length > 0 && (
        <ScrollableRow
          items={subcats}
          selectedId={selectedSub?._id}
          onSelect={handleSelectSub}
        />
      )}

      {currentLevel === "subsub" && subsubcats.length > 0 && (
        <ScrollableRow
          items={subsubcats}
          selectedId={selectedSubSub?._id}
          onSelect={handleSelectSubSub}
        />
      )}
    </div>
  );
};

export default CategoryChips;
