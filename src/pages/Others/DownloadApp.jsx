import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";

import googleplay from "../../images/googleplay-btn.svg";
import appstore from "../../images/appstore-btn.svg";

import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";

const DownloadApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImageUrl = useImageUrl();

  useEffect(() => {
    get(ENDPOINTS.APPDOWNLOAD)
      .then((res) => {
        const formatted = res.data.map((app) => ({
          name: app.appName,
          subtitle: app.description,
          image: getImageUrl(app.appImage), // API image with frame already included
          playStore: app.stream === "android" ? app.appLink : null,
          ios: app.stream === "ios" ? app.appLink : null,
          type: app.stream,
        }));

        setApps(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching app pages:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-4">Loading...</h2>;

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9fafb",
        padding: "60px 20px",
      }}
    >
      <style>{`
        .app-card {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 25px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1.5rem;
          gap: 2rem;
          transition: 0.3s ease;
          height: 100%;
        }
        .app-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.12);
        }
        .app-image-section {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .app-image {
          width: 100%;
          max-width: 240px;
          border-radius: 12px;
          object-fit: contain;
        }
        .app-content {
          flex: 1.2;
          text-align: left;
        }
        .app-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #198754;
        }
        .app-subtitle {
          color: #6c757d;
          margin-bottom: 1rem;
        }
        .store-badges img {
          width: 140px;
          margin-right: 10px;
          transition: 0.3s;
        }
        .store-badges img:hover {
          transform: scale(1.05);
        }
        .qr-box {
          background: #f8f9fa;
          padding: 10px;
          border-radius: 12px;
          display: inline-block;
          margin-top: 10px;
        }
        @media (max-width: 992px) {
          .app-card {
            flex-direction: column;
            text-align: center;
          }
          .app-content {
            text-align: center;
          }
          .app-image {
            max-width: 200px;
          }
        }
      `}</style>

      <div className="hero-section text-center mb-5">
        <h1 style={{ color: "#198754", fontSize: "2.5rem" }}>
          Download Our Apps
        </h1>
        <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
          Whether you're shopping, selling, or delivering — Fivlia has the app
          for you.
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {apps.map((app, index) => (
            <div key={index} className="col-lg-6 col-md-10 col-12">
              <div className="app-card">

                {/* LEFT: JUST IMAGE */}
                <div className="app-image-section">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="app-image"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="app-content">
                  <h3 className="app-title">{app.name}</h3>
                  <p className="app-subtitle">{app.subtitle}</p>

                  <div className="store-badges">
                    {app.playStore && (
                      <a href={app.playStore} target="_blank">
                        <img src={googleplay} alt="Google Play" />
                      </a>
                    )}
                    {app.ios && (
                      <a href={app.ios} target="_blank">
                        <img src={appstore} alt="App Store" />
                      </a>
                    )}
                  </div>

                  <div className="qr-box">
                    {(app.playStore || app.ios) ? (
                      <QRCode
                        value={app.playStore || app.ios}
                        size={80}
                        fgColor="#198754"
                      />
                    ) : (
                      <p className="text-danger small">No Link Available</p>
                    )}
                  </div>

                  <p className="small text-muted mt-2">Scan to download</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
