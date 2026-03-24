import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

import googleplay from "../../images/googleplay-btn.svg";
import appstore from "../../images/appstore-btn.svg";

import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";

const SECTION_BACKGROUNDS = [
  "linear-gradient(180deg, #f8fafc 0%, #f3f7f4 100%)",
  "linear-gradient(180deg, #f4f8f4 0%, #eef5ef 100%)",
];

const FALLBACK_COPY =
  "Whether you're shopping, selling, or delivering, Fivlia has an app built for the moment you need it.";
const DESCRIPTION_PREVIEW_LENGTH = 150;

const slugify = (value) =>
  (value || "app")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const formatApps = (items, getImageUrl) => {
  const groupedApps = new Map();

  (items || []).forEach((app, index) => {
    const appName = app.appName?.trim() || `App ${index + 1}`;
    const key = appName.toLowerCase();
    const existingApp = groupedApps.get(key) || {
      id: slugify(appName) || `app-${index + 1}`,
      name: appName,
      subtitle: "",
      image: "",
      playStore: null,
      ios: null,
    };

    if (!existingApp.subtitle && app.description?.trim()) {
      existingApp.subtitle = app.description.trim();
    }

    if (!existingApp.image && app.appImage) {
      existingApp.image = getImageUrl(app.appImage);
    }

    if (app.stream === "android" && app.appLink) {
      existingApp.playStore = app.appLink;
    }

    if (app.stream === "ios" && app.appLink) {
      existingApp.ios = app.appLink;
    }

    groupedApps.set(key, existingApp);
  });

  return Array.from(groupedApps.values());
};

const DownloadApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [headerHeight, setHeaderHeight] = useState(88);
  const [sectionHeight, setSectionHeight] = useState(720);
  const getImageUrl = useImageUrl();

  useEffect(() => {
    get(ENDPOINTS.APPDOWNLOAD)
      .then((res) => {
        setApps(formatApps(res.data, getImageUrl));
        setActiveIndex(0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching app pages:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let resizeObserver;

    const updateLayoutMetrics = () => {
      const stickyHeader = document.querySelector(".navbar.sticky-top");
      const nextHeaderHeight = Math.round(
        stickyHeader?.getBoundingClientRect().height || 0
      );
      const nextViewportHeight = window.innerHeight || 900;

      setHeaderHeight(nextHeaderHeight);
      setSectionHeight(Math.max(nextViewportHeight - nextHeaderHeight, 520));
      document.documentElement.style.setProperty(
        "--download-app-header-height",
        `${nextHeaderHeight}px`
      );
    };

    updateLayoutMetrics();
    document.documentElement.classList.add("download-app-scroll-mode");
    document.body.classList.add("download-app-scroll-mode");

    if (typeof ResizeObserver !== "undefined") {
      const stickyHeader = document.querySelector(".navbar.sticky-top");

      if (stickyHeader) {
        resizeObserver = new ResizeObserver(updateLayoutMetrics);
        resizeObserver.observe(stickyHeader);
      }
    }

    window.addEventListener("resize", updateLayoutMetrics);

    return () => {
      window.removeEventListener("resize", updateLayoutMetrics);
      resizeObserver?.disconnect();
      document.documentElement.classList.remove("download-app-scroll-mode");
      document.body.classList.remove("download-app-scroll-mode");
      document.documentElement.style.removeProperty(
        "--download-app-header-height"
      );
    };
  }, []);

  useEffect(() => {
    if (!apps.length) {
      return undefined;
    }

    const sections = Array.from(
      document.querySelectorAll("[data-download-section='true']")
    );

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => {
            return secondEntry.intersectionRatio - firstEntry.intersectionRatio;
          });

        if (!visibleSections.length) {
          return;
        }

        const nextIndex = Number(
          visibleSections[0].target.getAttribute("data-index")
        );

        if (!Number.isNaN(nextIndex)) {
          setActiveIndex(nextIndex);
        }
      },
      {
        threshold: [0.35, 0.55, 0.75],
        rootMargin: `-${Math.floor(headerHeight * 0.25)}px 0px -18% 0px`,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [apps, headerHeight]);

  const jumpToSection = (sectionId) => {
    const nextSection = document.getElementById(sectionId);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleDescription = (appId) => {
    setExpandedDescriptions((previousState) => ({
      ...previousState,
      [appId]: !previousState[appId],
    }));
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          color: "#30574e",
          background: "#f4f8f4",
        }}
      >
        <h2 className="mb-0">Loading app showcase...</h2>
      </div>
    );
  }

  if (!apps.length) {
    return (
      <div
        style={{
          minHeight: `calc(100vh - ${headerHeight}px)`,
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          background: "#f4f8f4",
        }}
      >
        <div className="text-center">
          <h2 style={{ color: "#30574e", fontWeight: 700 }}>
            No apps available right now
          </h2>
          <p className="mb-0" style={{ color: "#60706a" }}>
            Please check back soon for the latest Fivlia app downloads.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="download-app-page">
      <style>{`
        html.download-app-scroll-mode,
        body.download-app-scroll-mode {
          scroll-snap-type: y proximity;
          scroll-padding-top: calc(var(--download-app-header-height, 0px) + 16px);
        }

        .download-app-page {
          --fivlia-heading: #30574e;
          --fivlia-primary: #0aad0a;
          --fivlia-secondary: #198754;
          --fivlia-text: #667085;
          --fivlia-soft: #f4f8f4;
          --fivlia-border: rgba(48, 87, 78, 0.12);
          background: #f8fafc;
          position: relative;
          padding: 0 0 2rem;
          isolation: isolate;
        }

        .download-app-page::before {
          content: "";
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at 14% 10%, rgba(10, 173, 10, 0.07), transparent 34%),
            radial-gradient(circle at 86% 86%, rgba(48, 87, 78, 0.06), transparent 30%);
          pointer-events: none;
          z-index: 0;
        }

        .download-app-rail {
          position: fixed;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          z-index: 30;
        }

        .download-app-dot {
          width: 12px;
          height: 12px;
          border: 2px solid rgba(48, 87, 78, 0.18);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, background-color 0.3s ease;
          padding: 0;
        }

        .download-app-dot:hover,
        .download-app-dot.is-active {
          border-color: var(--fivlia-primary);
          background: var(--fivlia-primary);
          transform: scale(1.25);
        }

        .download-app-section {
          position: relative;
          display: flex;
          align-items: stretch;
          justify-content: center;
          padding: clamp(1rem, 2vw, 1.75rem);
          scroll-snap-align: start;
          background: var(--section-background);
        }

        .download-app-frame {
          width: min(1240px, 100%);
          min-height: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
          align-items: center;
          gap: clamp(1.5rem, 4vw, 4rem);
          padding: clamp(1.5rem, 4vw, 3.75rem);
          border-radius: 28px;
          border: 1px solid var(--fivlia-border);
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.09);
          overflow: hidden;
          position: relative;
          opacity: 0.78;
          transform: scale(0.985);
          transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .download-app-frame::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--fivlia-heading), var(--fivlia-primary));
          pointer-events: none;
        }

        .download-app-section.is-active .download-app-frame {
          opacity: 1;
          transform: scale(1);
          border-color: rgba(10, 173, 10, 0.18);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.1);
        }

        .download-app-frame.is-reversed .download-app-copy {
          order: 2;
        }

        .download-app-frame.is-reversed .download-app-visual {
          order: 1;
        }

        .download-app-copy,
        .download-app-visual {
          position: relative;
          z-index: 1;
        }

        .download-app-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.2rem;
          max-width: 560px;
        }

        .download-app-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .download-app-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          background: var(--fivlia-soft);
          color: var(--fivlia-heading);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          border: 1px solid rgba(48, 87, 78, 0.08);
        }

        .download-app-count {
          color: #5c6c75;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .download-app-title {
          margin: 0;
          color: var(--fivlia-heading);
          font-size: clamp(2.1rem, 4vw, 3.6rem);
          line-height: 1.08;
          letter-spacing: -0.02em;
          font-weight: 700;
        }

        .download-app-subtitle {
          margin: 0;
          max-width: 52ch;
          color: var(--fivlia-text);
          font-size: clamp(1rem, 1.6vw, 1.18rem);
          line-height: 1.75;
          white-space: pre-line;
        }

        .download-app-read-more {
          align-self: flex-start;
          padding: 0;
          border: 0;
          background: transparent;
          color: var(--fivlia-secondary);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .download-app-read-more:hover {
          color: var(--fivlia-primary);
        }

        .download-app-availability {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          align-self: flex-start;
          padding: 0.65rem 0.95rem;
          border-radius: 16px;
          background: #f8fbf8;
          color: var(--fivlia-heading);
          font-weight: 600;
          border: 1px solid rgba(10, 173, 10, 0.14);
        }

        .download-app-availability span {
          color: var(--fivlia-secondary);
          font-weight: 700;
        }

        .download-app-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 1rem;
        }

        .download-app-store-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .download-app-store-badges a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid rgba(48, 87, 78, 0.08);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .download-app-store-badges a:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
        }

        .download-app-store-badges img {
          display: block;
          width: 150px;
          max-width: 100%;
        }

        .download-app-qr-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.95rem 1rem;
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid rgba(48, 87, 78, 0.08);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }

        .download-app-qr-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: inset 0 0 0 1px rgba(10, 173, 10, 0.12);
        }

        .download-app-qr-copy {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .download-app-qr-copy strong {
          color: var(--fivlia-heading);
          font-size: 0.98rem;
        }

        .download-app-qr-copy span {
          color: var(--fivlia-text);
          font-size: 0.9rem;
        }

        .download-app-scroll-hint {
          margin: auto 0 0;
          color: var(--fivlia-secondary);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .download-app-visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: clamp(420px, 60vh, 680px);
        }

        .download-app-device-glow {
          display: none;
        }

        .download-app-device-shell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0;
          background: transparent;
          border: 0;
          box-shadow: none;
        }

        .download-app-device-shell::before {
          display: none;
        }

        .download-app-image {
          position: relative;
          z-index: 1;
          width: auto;
          max-width: min(100%, 440px);
          max-height: min(78vh, 720px);
          object-fit: contain;
          filter: none;
          transform: translateY(10px);
          transition: transform 0.35s ease;
        }

        .download-app-section.is-active .download-app-image {
          transform: translateY(0);
          filter: none;
        }

        .download-app-image-fallback {
          width: min(100%, 320px);
          aspect-ratio: 0.72;
          display: grid;
          place-items: center;
          border-radius: 32px;
          background: linear-gradient(180deg, #ffffff 0%, #f6faf7 100%);
          color: var(--fivlia-heading);
          font-size: 1.1rem;
          font-weight: 700;
          text-align: center;
          padding: 1.5rem;
          box-shadow: inset 0 0 0 1px rgba(48, 87, 78, 0.08);
        }

        @media (max-width: 991.98px) {
          .download-app-page {
            padding-bottom: 1rem;
          }

          .download-app-rail {
            display: none;
          }

          .download-app-section {
            padding: 0.9rem;
          }

          .download-app-frame,
          .download-app-frame.is-reversed {
            grid-template-columns: 1fr;
          }

          .download-app-frame.is-reversed .download-app-copy,
          .download-app-frame.is-reversed .download-app-visual {
            order: initial;
          }

          .download-app-copy {
            max-width: none;
            text-align: center;
          }

          .download-app-availability {
            align-self: center;
          }

          .download-app-read-more {
            align-self: center;
          }

          .download-app-actions {
            justify-content: center;
          }

          .download-app-qr-card {
            justify-content: center;
          }

          .download-app-visual {
            min-height: 360px;
          }
        }

        @media (max-width: 767.98px) {
          .download-app-frame {
            padding: 1.25rem;
            border-radius: 24px;
          }

          .download-app-title {
            font-size: clamp(2.2rem, 10vw, 3.4rem);
          }

          .download-app-subtitle {
            font-size: 0.98rem;
            line-height: 1.7;
          }

          .download-app-meta-row {
            justify-content: center;
          }

          .download-app-availability {
            width: 100%;
            justify-content: center;
          }

          .download-app-qr-card {
            width: 100%;
            flex-direction: column;
            text-align: center;
          }

          .download-app-store-badges {
            justify-content: center;
          }

          .download-app-store-badges img {
            width: 138px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html.download-app-scroll-mode,
          body.download-app-scroll-mode {
            scroll-behavior: auto;
          }

          .download-app-dot,
          .download-app-frame,
          .download-app-store-badges a,
          .download-app-image {
            transition: none;
          }
        }
      `}</style>

      {apps.length > 1 && (
        <div className="download-app-rail" aria-label="App section navigation">
          {apps.map((app, index) => (
            <button
              key={app.id}
              type="button"
              className={`download-app-dot ${
                index === activeIndex ? "is-active" : ""
              }`}
              onClick={() => jumpToSection(app.id)}
              aria-label={`Jump to ${app.name}`}
            />
          ))}
        </div>
      )}

      {apps.map((app, index) => {
        const sectionTitleTag = index === 0 ? "h1" : "h2";
        const downloadLink = app.playStore || app.ios;
        const sectionBackground =
          SECTION_BACKGROUNDS[index % SECTION_BACKGROUNDS.length];
        const descriptionText = app.subtitle || FALLBACK_COPY;
        const isExpanded = Boolean(expandedDescriptions[app.id]);
        const shouldShowReadMore =
          descriptionText.length > DESCRIPTION_PREVIEW_LENGTH;
        const previewText = shouldShowReadMore
          ? `${descriptionText.slice(0, DESCRIPTION_PREVIEW_LENGTH).trimEnd()}...`
          : descriptionText;
        const platformList = [
          app.playStore ? "Android" : null,
          app.ios ? "iPhone" : null,
        ]
          .filter(Boolean)
          .join(" and ");
        const TitleTag = sectionTitleTag;

        return (
          <section
            id={app.id}
            key={app.id}
            data-download-section="true"
            data-index={index}
            className={`download-app-section ${
              index === activeIndex ? "is-active" : ""
            }`}
            style={{
              minHeight: `${sectionHeight}px`,
              scrollMarginTop: `${headerHeight + 16}px`,
              "--section-background": sectionBackground,
            }}
          >
            <div
              className={`download-app-frame ${
                index % 2 === 1 ? "is-reversed" : ""
              }`}
            >
              <div className="download-app-copy">
                <div className="download-app-meta-row">
                  <span className="download-app-eyebrow">Fivlia Apps</span>
                  <span className="download-app-count">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(apps.length).padStart(2, "0")}
                  </span>
                </div>

                <TitleTag className="download-app-title">{app.name}</TitleTag>

                <p className="download-app-subtitle">
                  {isExpanded ? descriptionText : previewText}
                </p>

                {shouldShowReadMore && (
                  <button
                    type="button"
                    className="download-app-read-more"
                    onClick={() => toggleDescription(app.id)}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}

                <div className="download-app-availability">
                  Available on
                  <span>{platformList || "coming soon"}</span>
                </div>

                <div className="download-app-actions">
                  <div className="download-app-store-badges">
                    {app.playStore && (
                      <a
                        href={app.playStore}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Download ${app.name} from Google Play`}
                      >
                        <img src={googleplay} alt="Google Play" />
                      </a>
                    )}

                    {app.ios && (
                      <a
                        href={app.ios}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Download ${app.name} from the App Store`}
                      >
                        <img src={appstore} alt="App Store" />
                      </a>
                    )}
                  </div>

                  <div className="download-app-qr-card">
                    <div className="download-app-qr-box">
                      {downloadLink ? (
                        <QRCode
                          value={downloadLink}
                          size={88}
                          fgColor="#0aad0a"
                          bgColor="#ffffff"
                        />
                      ) : (
                        <p className="text-danger small mb-0">No link available</p>
                      )}
                    </div>

                    <div className="download-app-qr-copy">
                      <strong>Scan to download</strong>
                      <span>
                        Open the QR code on your phone and install {app.name}.
                      </span>
                    </div>
                  </div>
                </div>

                {index < apps.length - 1 && (
                  <p className="download-app-scroll-hint">Scroll for the next app</p>
                )}
              </div>

              <div className="download-app-visual">
                <div className="download-app-device-glow" />

                <div className="download-app-device-shell">
                  {app.image ? (
                    <img
                      src={app.image}
                      alt={`${app.name} app preview`}
                      className="download-app-image"
                    />
                  ) : (
                    <div className="download-app-image-fallback">
                      {app.name} preview coming soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default DownloadApp;
