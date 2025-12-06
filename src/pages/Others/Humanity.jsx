import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";

const CharityList = () => {
  const [categories, setCategories] = useState([]);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [openDonate, setOpenDonate] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);

  const getImageUrl = useImageUrl();
  // Fetch categories
  useEffect(() => {
    get(ENDPOINTS.GET_CHARITY)
      .then((res) => setCategories(res?.data.data || []))
      .catch(() => {});
  }, []);

  // Fetch content
  useEffect(() => {
    setLoading(true);
    get(ENDPOINTS.GET_CHARITY_CONTENT)
      .then((res) => {
        setContents(res?.data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter
  const filteredList =
    filter === "All"
      ? contents
      : contents.filter((c) => c.categoryId?.title === filter);

  if (loading)
    return <p style={{ textAlign: "center", padding: 40 }}>Loading...</p>;

  return (
    <>
      <style>{`
        .charity-header { text-align:center; padding:40px 10px; }
        .charity-header h1 { font-size:2.3rem; font-weight:700; }
        .charity-header p { color:#666; max-width:650px; margin:10px auto; }

        .category-bar { display:flex; justify-content:center; margin:20px 0; flex-wrap:wrap; }
        .category-bar button {
          padding:8px 18px; border-radius:20px; border:1px solid #ccc;
          margin:5px; background:white; cursor:pointer; transition:0.2s;
        }
        .category-bar button.active,
        .category-bar button:hover {
          background:#0aad0a; color:#fff; border-color:#0aad0a;
        }

        .charity-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:25px; }
        @media(max-width:600px){ .charity-grid{grid-template-columns:1fr;} }

        .charity-card {
          border:1px solid #e0e0e0; border-radius:14px; overflow:hidden;
          transition:0.25s; cursor:pointer;
        }
        .charity-card:hover {
          transform:translateY(-6px);
          box-shadow:0 8px 25px rgba(0,0,0,0.12);
        }
        .charity-img { width:100%; height:200px; object-fit:cover; }
      `}</style>

      {/* HEADER */}
      <div className="charity-header">
        <h1>Humanity & Charity</h1>
        <p>Explore charity programs powered by community support.</p>
      </div>

      {/* CATEGORY FILTER */}
      <div className="category-bar">
        <button
          className={filter === "All" ? "active" : ""}
          onClick={() => setFilter("All")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat._id}
            className={filter === cat.title ? "active" : ""}
            onClick={() => setFilter(cat.title)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="charity-grid">
          {filteredList.map((c) => (
            <Link
              to={`/charities/${c.slug}`}
              key={c._id}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="charity-card">
                <img
                  src={getImageUrl(c.image)}
                  className="charity-img"
                  alt=""
                />

                <div style={{ padding: 14 }}>
                  <div
                    style={{
                      background: "#e8f5e9",
                      display: "inline-block",
                      padding: "4px 12px",
                      borderRadius: 8,
                      color: "#0a8d0a",
                      fontSize: 12,
                    }}
                  >
                    {c.categoryId?.title}
                  </div>

                  <h3 style={{ marginTop: 10, fontSize: "1.2rem" }}>
                    {c.title}
                  </h3>

                  <p style={{ color: "#555", marginTop: 6 }}>
                    {c.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* DONATE BUTTON + POPUP ANIMATION */}
      <style>{`
  /* SMALLER Donate Button */
  .donate-float-btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #0aad0a;
    color: #fff;
    padding: 12px 22px;  /* smaller */
    border-radius: 45px;
    font-size: 16px;     /* smaller */
    font-weight: 600;
    border: none;
    cursor: pointer;
    z-index: 9999;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0px 6px 18px rgba(0,0,0,0.22);
    transition: all 0.3s ease;
  }

  /* Wrapper (Position of expanding popup) */
  .donate-popup-wrapper {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 10000;
    width: 55px;
    height: 55px;
    transition: all 0.35s ease;
  }

  /* When opened — popup size reduced */
  /* Popup wrapper (expanded) */
.donate-popup-wrapper.open {
  width: 350px;
  bottom: 30px;
  right: 30px;
  height: auto;               /* FIXED */
  max-height: 90vh;           /* FIXED */
}

/* Popup box styling */
.donate-popup-box {
  background: #fff;
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.25);
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.25s ease;
  position: relative;
  max-height: 80vh;           /* FIXED */
  overflow-y: auto;           /* FIXED — popup shows on small screens */
}


  .donate-popup-box.show {
    opacity: 1;
    transform: scale(1);
  }

  /* RESPONSIVE FIXES */
  @media (max-width: 600px) {
    .donate-popup-wrapper,
    .donate-popup-wrapper.open {
      right: 15px;
      bottom: 20px;
      width: 90%;
      max-width: 90%;
    }

    .donate-popup-box {
      width: 100%;
      padding: 14px;
    }

    .donate-float-btn {
      right: 15px;
      bottom: 20px;
      padding: 10px 18px;
      font-size: 15px;
    }
  }
`}</style>

      {/* FLOATING BUTTON + POPUP */}
      <div className={`donate-popup-wrapper ${openDonate ? "open" : ""}`}>
        {!openDonate && (
          <button
            className="donate-float-btn"
            onClick={() => {
              setOpenDonate(true);
              setTimeout(() => setAnimatePopup(true), 100);
            }}
          >
            ❤️ Donate
          </button>
        )}

        {openDonate && (
          <div className={`donate-popup-box ${animatePopup ? "show" : ""}`}>
            <h2 style={{ fontWeight: 700 }}>Support Humanity</h2>

            <button
              onClick={() => {
                setAnimatePopup(false);
                setTimeout(() => setOpenDonate(false), 200);
              }}
              style={{
                position: "absolute",
                right: 30,
                top: 30,
                fontSize: 22,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              ✕
            </button>

            <input
              type="text"
              placeholder="Full Name"
              className="form-control mt-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control mt-3"
            />

            <label className="mt-3" style={{ fontWeight: 600 }}>
              Select Donation Category
            </label>
            <select className="form-select mt-1">
              <option>Choose Category</option>
            </select>

            <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
              {[100, 500, 1000, 2000].map((amt) => (
                <button
                  key={amt}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 14px",
                    borderRadius: 10,
                    background: "#fff",
                  }}
                >
                  ₹{amt}
                </button>
              ))}
            </div>

            <input
              type="number"
              placeholder="Enter Amount (₹)"
              className="form-control mt-3"
            />

            <button
              style={{
                background: "#0aad0a",
                width: "100%",
                padding: "12px",
                borderRadius: 10,
                color: "#fff",
                marginTop: 20,
                fontSize: 18,
                fontWeight: 600,
                border: "none",
              }}
            >
              ❤️ Donate Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CharityList;
