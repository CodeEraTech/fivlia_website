import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
        // If you have API → use this
    // get(ENDPOINTS.CAREERS).then((res) => setJobs(res.data));
    // Temporary mock data
    setJobs([
      {
        id: 1,
        title: "Frontend Developer",
        location: "Remote / India",
        type: "Full-time",
        description:
          "Work on React-based web apps, collaborate with designers, and ensure great UX.",
      },
      {
        id: 2,
        title: "Backend Engineer (Node.js)",
        location: "Remote",
        type: "Full-time",
        description:
          "Build scalable APIs using Node.js, Express, and MongoDB. Prior experience preferred.",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        location: "Mumbai, India",
        type: "Hybrid",
        description:
          "Design beautiful, intuitive web interfaces. Figma and responsive design skills required.",
      },
    ]);
  }, []);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Hero Section */}
      <section className="py-10 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #0aad0a, #007bff)",
        }}
      >
        <div className="container">
          <h1 className="display-5 fw-bold mb-2">Join Our Team</h1>
          <p className="lead opacity-75">
            Be part of an ambitious, growing company and make an impact.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-8">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Current Openings</h2>
            <p className="text-muted">Find the role that fits you best.</p>
          </div>

          <div className="row g-4">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className="col-md-4">
                  <Slide direction="up">
                    <div className="card border-0 shadow-sm h-100 rounded-4">
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                          <h5 className="fw-semibold text-success">
                            {job.title}
                          </h5>
                          <p className="text-muted small mb-1">
                            📍 {job.location}
                          </p>
                          <p className="text-muted small mb-3">
                            🕒 {job.type}
                          </p>
                          <p className="text-secondary">{job.description}</p>
                        </div>
                        <div className="mt-3">
                          <Link
                            to={`/apply/${job.id}`}
                            className="btn btn-outline-success w-100 rounded-pill"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
              ))
            ) : (
              <div className="text-center text-muted">No openings right now.</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-10 text-center text-white"
        style={{
          background: "linear-gradient(135deg, #007bff, #0aad0a)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold mb-3">Can’t find a role for you?</h2>
          <p className="mb-4 opacity-75">
            We’re always looking for passionate individuals. Send your resume to{" "}
            <a
              href="mailto:careers@fivlia.com"
              className="text-white fw-semibold text-decoration-underline"
            >
              careers@fivlia.com
            </a>
          </p>
          <Link to="/contact-us" className="btn btn-light rounded-pill px-4 py-2">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
