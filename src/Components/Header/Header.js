import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  let ClassName = "link";
  let activeClassName = "active-link";
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <h3 className="logo">
            Spider-<span className="spider-man">Man</span>
          </h3>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : ClassName
              }
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : ClassName
              }
              to="/Reviews"
            >
              REVIEWS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : ClassName
              }
              to="/DASHBOARD"
            >
              DASHBOARD
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : ClassName
              }
              to="/BLOGS"
            >
              BLOGS
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : ClassName
              }
              to="/ABOUT"
            >
              ABOUT
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
