import React from 'react'
// import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let mystyle = { fontWeight: "600", fontSize: "larger", };

    let location = useLocation();
    useEffect(() => {
      // not needed
    //   console.log(location.pathname);
    }, [location]);
  return (
    <nav
      style={{ backgroundColor: "rgb(28, 77, 85)" }}
      className="navbar navbar-expand-lg navbar-dark stiky-navbar"
    >
      <div className="container-fluid navbar-item logo">
        <Link
          className="navbar-brand navbar-link"
          to="/"
          style={{
            fontWeight: "600",
            fontSize: "x-large",
            color: "#29ffd7",
            fontFamily: "Roboto, Kalnia Glaze",
            
          }}
        > SpringDales Public School
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/academics" ? "active" : ""
                }`}
                to="/academics"
              >
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/addmissions" ? "active" : ""
                }`}
                to="/addmissions"
              >
                Addmissions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/faculty" ? "active" : ""
                }`}
                to="/faculty"
              >
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/students" ? "active" : ""
                }`}
                to="/students"
              >
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/gallery" ? "active" : ""
                }`}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={mystyle}
                className={`nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}  
export default Navbar;
