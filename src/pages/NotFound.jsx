import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center bg-dark text-center">
      <div className="container">
        <h1 className="display-1 fw-bold hero-gradient-text mb-4">404</h1>
        <h2 className="display-6 fw-bold text-light mb-4">Oops! Page not found</h2>
        <p className="lead text-muted mb-5">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary btn-lg px-5">
          <i className="bi bi-house me-2"></i> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
