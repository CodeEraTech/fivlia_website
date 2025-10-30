import React, { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon,
} from "react-share";

const ShareButtons = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = `https://fivlia.com/product/${product.slug}`;
  const title = `${product.productName || product.name}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Main Share Button */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "18px",
          color: "#333",
        }}
      >
        <i className="fa fa-share" style={{ fontSize: "20px" }}></i> Share
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
          onClick={() => setIsOpen(false)}
        >
          {/* Popup Box */}
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "20px",
              width: "320px",
              position: "relative",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
                color: "#444",
              }}
            >
              <i className="fa fa-times"></i>
            </button>

            {/* Title */}
            <h3
              style={{
                textAlign: "center",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              Share on
            </h3>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                marginBottom: "20px",
              }}
            >
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={40} round />
              </WhatsappShareButton>

              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={40} round />
              </FacebookShareButton>

              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={40} round />
              </TwitterShareButton>

              <TelegramShareButton url={shareUrl} title={title}>
                <TelegramIcon size={40} round />
              </TelegramShareButton>

              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
            </div>

            {/* Copy Link */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#f2f2f2",
                borderRadius: "6px",
                padding: "8px 10px",
                justifyContent: "space-between",
              }}
            >
              <input
                type="text"
                value={shareUrl}
                readOnly
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "14px",
                  width: "80%",
                  outline: "none",
                  color: "#555",
                }}
              />
              <button
                onClick={handleCopy}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: copied ? "green" : "#333",
                }}
                title="Copy Link"
              >
                <i className="fa fa-copy"></i>
              </button>
            </div>

            {/* Copy Feedback */}
            {copied && (
              <p
                style={{
                  textAlign: "center",
                  color: "green",
                  fontSize: "13px",
                  marginTop: "8px",
                }}
              >
                Link copied!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
