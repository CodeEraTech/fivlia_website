import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";

const CharityDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getImageUrl = useImageUrl();
  // Fetch content by slug
  useEffect(() => {
    setLoading(true);

    get(`${ENDPOINTS.GET_CHARITY_CONTENT}?slug=${slug}`)
      .then((res) => {
        setData(res?.data?.data?.[0] || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading)
    return <p style={{ textAlign: "center", padding: 40 }}>Loading...</p>;

  if (!data)
    return <p style={{ textAlign: "center", padding: 40 }}>Not found</p>;

  const publishDate = new Date(data.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <span
        style={{
          background: "#e8f5e9",
          color: "#0a8d0a",
          padding: "5px 12px",
          borderRadius: "6px",
          fontSize: "13px",
        }}
      >
        {data.categoryId?.title}
      </span>

      <h1 style={{ fontSize: "2.4rem", marginTop: "10px" }}>{data.title}</h1>
      <p style={{ color: "#666", marginBottom: "20px" }}>{publishDate}</p>

      {/* MAIN IMAGE */}
      {data.image && (
        <img
          src={getImageUrl(data.image)}
          alt={data.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "20px",
            height: "350px",
            objectFit: "cover",
          }}
        />
      )}

      {/* GALLERY */}
      {data.gallery?.length > 0 && (
        <div style={{ marginBottom: 20 }}>
          <h3>Gallery</h3>
          <div style={{ display: "flex", gap: 10, overflowX: "auto" }}>
            {data.gallery.map((img, i) => (
              <img
                key={i}
                src={getImageUrl(img)}
                alt=""
                style={{
                  width: 140,
                  height: 120,
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* VIDEO */}
      {data.videoUrl && (
        <div style={{ marginBottom: 20 }}>
          <h3>Video</h3>
          <iframe
            width="100%"
            height="350"
            style={{ borderRadius: 10 }}
            src={data.videoUrl}
            title="video"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* CONTENT */}
      <div
        style={{ fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "25px" }}
        dangerouslySetInnerHTML={{ __html: data.content }}
      />

      <Link
        to="/charity"
        onClick={() => window.scrollTo(0, 0)}
        style={{ fontSize: "14px", fontWeight: "600" }}
      >
        ← Back to Charities
      </Link>
    </div>
  );
};

export default CharityDetail;
