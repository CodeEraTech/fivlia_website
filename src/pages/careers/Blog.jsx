import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { get } from "../../apis/apiClient";
import { ENDPOINTS } from "../../apis/endpoints";
import { useImageUrl } from "../../utils/getSettingsValue";
import "./BlogList.css"; // ✅ import custom CSS

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const getImageUrl = useImageUrl();

  const limit = 6; // ✅ 6 blogs per page (adjust if needed)
  const categories = ["All", "Groceries", "Coffee", "Recipes", "Lifestyle", "Health"];

  useEffect(() => {
    fetchBlogs(1, true); // ✅ load first page
  }, []);

  const fetchBlogs = async (pageNum = 1, reset = false) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setLoadingMore(true);

      const res = await get(`${ENDPOINTS.BLOG}?page=${pageNum}&limit=${limit}`);
      const { blogs: newBlogs, totalPages } = res.data || {};

      if (reset) {
        setBlogs(newBlogs || []);
        setFilteredBlogs(newBlogs || []);
      } else {
        setBlogs((prev) => [...prev, ...(newBlogs || [])]);
        setFilteredBlogs((prev) => [...prev, ...(newBlogs || [])]);
      }

      setTotalPages(totalPages || 1);
      setPage(pageNum);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") setFilteredBlogs(blogs);
    else {
      const filtered = blogs.filter(
        (b) =>
          b.category?.toLowerCase().trim() === category.toLowerCase().trim()
      );
      setFilteredBlogs(filtered);
    }
  };

  const handleLoadMore = () => {
    if (page < totalPages) fetchBlogs(page + 1);
  };

  return (
    <>
      {/* ✅ SEO Tags */}
      <Helmet>
        <title>Our Blog | Fivlia</title>
        <meta
          name="description"
          content="Explore stories, recipes, and grocery insights from Fivlia. Stay inspired with fresh content every week."
        />
        <link rel="canonical" href="https://fivlia.in/blog" />
      </Helmet>

      {/* ✅ Page Header */}
      <div className="blog-header">
        <h1>Fivlia Blog</h1>
        <p>
          Fresh reads, daily tips, and grocery wisdom — straight from the Fivlia team.
        </p>
      </div>

      {/* ✅ Category Menu */}
      <div className="category-menu">
        <div className="category-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Blog Grid */}
      <div className="blog-container">
        {loading ? (
          <p className="center-text">Loading blogs...</p>
        ) : filteredBlogs.length === 0 ? (
          <p className="center-text">No blogs found under "{activeCategory}".</p>
        ) : (
          <>
            <div className="blog-grid">
              {filteredBlogs.map((blog) => (
                <div key={blog._id} className="blog-card">
                  <Link to={`/blog/${blog.slug}`} className="blog-link">
                    <div className="blog-image-wrap">
                      <img
                        src={getImageUrl(blog.image || "/images/default-blog.jpg")}
                        alt={blog.title}
                      />
                      <div className="blog-category">
                        {blog.category || "General"}
                      </div>
                    </div>
                    <div className="blog-content">
                      <h2>{blog.title}</h2>
                      <p>
                        {blog.metaDescription ||
                          "Read the latest grocery tips and lifestyle updates from our team."}
                      </p>
                      <span className="read-more">Read More →</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* ✅ Load More Button */}
            {page < totalPages && (
              <div className="load-more-wrap">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="load-more-btn"
                >
                  {loadingMore ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BlogList;
