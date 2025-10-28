import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const getImageUrl = useImageUrl();

  useEffect(() => {
    get(`${ENDPOINTS.BLOG}?slug=${slug}`)
      .then((res) => {
        setBlog(res.data?.blog);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="center-text">Loading blog...</p>;
  if (!blog) return <p className="center-text">Blog not found.</p>;

  const blogUrl = `https://fivlia.in/blog/${blog.slug}`;
  const blogImage = getImageUrl(blog.image || "/images/default-blog.jpg");
  const publishDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>{blog.metaTitle || `${blog.title} | Fivlia`}</title>
        <meta
          name="description"
          content={blog.metaDescription || "Read this blog from Fivlia."}
        />
        <meta
          name="keywords"
          content={
            (blog.keywords?.join(", ") ||
              blog.tags?.join(", ") ||
              "blog, groceries, recipes, lifestyle, health") +
            ", Fivlia"
          }
        />
        <meta name="author" content={blog.author || "Fivlia Team"} />
        <link rel="canonical" href={blogUrl} />

        {/* ✅ Open Graph (Facebook / WhatsApp / LinkedIn) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || "Read this blog from Fivlia."}
        />
        <meta property="og:image" content={blogImage} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:site_name" content="Fivlia" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta
          name="twitter:description"
          content={blog.metaDescription || "Read this blog from Fivlia."}
        />
        <meta name="twitter:image" content={blogImage} />

        {/* ✅ JSON-LD Schema (Rich Result) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.metaTitle || blog.title,
            image: blogImage,
            author: {
              "@type": "Person",
              name: blog.author || "Fivlia Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Fivlia",
              logo: {
                "@type": "ImageObject",
                url: "https://fivlia.in/logo.png",
              },
            },
            datePublished: blog.createdAt,
            description: blog.metaDescription,
            url: blogUrl,
          })}
        </script>
      </Helmet>

      {/* ✅ Blog Content */}
      <div className="blog-detail-container">
        <div className="blog-detail-header">
          <h1>{blog.title}</h1>
          <p className="blog-meta">
            {blog.category && <span>{blog.category}</span>} • {publishDate}
          </p>
        </div>

        <img
          className="blog-detail-image"
          src={blogImage}
          alt={blog.title}
        />

        <div
          className="blog-detail-body"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="blog-footer">
          {blog.author && <p className="blog-author">By {blog.author}</p>}
          <Link to="/blog" className="back-btn">← Back to Blog</Link>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
