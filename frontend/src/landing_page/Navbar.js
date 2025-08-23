import React, { useState, useEffect } from "react";

function Navbar() {
  // Step 1: Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Step 2: Check localStorage when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Step 3: Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img
            src="images/kisaan.png"
            className="img-fluid"
            style={{ width: "50px" }}
            alt="Logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">

            {/* ✅ Dynamic Signin/Signup/Signout */}
            <li className="nav-item">
              {isAuthenticated ? (
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={handleLogout}
                >
                  Signout
                </button>
              ) : (
                <a className="btn btn-outline-success me-2" href="/signup">
                  Signup
                </a>
              )}
            </li>

              <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="/product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/pricing">
                Market
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/support">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
