// Navigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './navigation'; // Import Navigation component

const Nav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    transition: color 0.3s ease;

    &.active {
      font-weight: 700; /* Highlight active link */
      text-decoration: underline;
    }

    &:hover {
      color: #b3c2f2;
    }
  }
`;

function Navigation() {
  const location = useLocation(); // Get current location

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/about me" className={location.pathname === '/about me' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;