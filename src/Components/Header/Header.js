import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  let ClassName = "link";
  let activeClassName = "active-link";
  const navRef = useRef();

  const showNavbar =() =>{
    navRef.current.classList.toggle('responsive-nav')
  }
  return (
    <div className="header">
      <NavLink className='logo'  to="/">
            Spider-<span className="spider-man">Man</span>
        </NavLink>
      <nav ref={navRef}>
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
            <XMarkIcon onClick={showNavbar} className="nav-btn nav-close-btn XMarkIcon"></XMarkIcon>
      </nav>
      <Bars4Icon onClick={showNavbar} className="Bars4Icon nav-btn"></Bars4Icon>
    </div>
  );
};

export default Header;
