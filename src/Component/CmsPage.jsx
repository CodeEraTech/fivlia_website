import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../apis/apiClient";
import { ENDPOINTS } from "../apis/endpoints";

function CmsPage() {
  const { pageSlug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to decode HTML entities
  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    setLoading(true);

    get(ENDPOINTS.PAGES)
      .then(res => {
        const allPages = Array.isArray(res.data?.getPage)
          ? res.data.getPage
          : [res.data?.getPage].filter(Boolean);

        const matched = allPages.find(p => p.pageSlug === pageSlug);

        if (!matched) {
          setError("Page not found");
          setLoading(false);
          return;
        }

        return get(`${ENDPOINTS.PAGES}?id=${matched._id}`);
      })
      .then(res => {
        if (res?.data?.getPage) {
          // Decode before setting state
          const decodedContent = decodeHTML(res.data.getPage.pageContent);
          setPage({ ...res.data.getPage, pageContent: decodedContent });
        } else {
          setError("Page content not found");
        }
      })
      .catch(() => setError("Error loading page"))
      .finally(() => setLoading(false));
  }, [pageSlug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div className="container py-5">
      <h1>{page.pageTitle}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.pageContent }} />
    </div>
  );
}

export default CmsPage;
