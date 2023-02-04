import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
import './Header.css'

const Header = () => {
    
      let ClassName = 'link'
      let activeClassName = 'active-link'
    return (
        <div className='header'>
            <h3 className='logo'>Spider-<span className='spider-man'>Man</span></h3>
            <div>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : ClassName} to='/'>HOME</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : ClassName} to='/Reviews' >REVIEWS</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : ClassName} to='/DASHBOARD'>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : ClassName} to='/BLOGS'>BLOGS</NavLink>
                <NavLink className={({ isActive }) =>
              isActive ? activeClassName : ClassName} to='/ABOUT'>ABOUT</NavLink>
            </div>
            
        </div>
    );
};

export default Header;