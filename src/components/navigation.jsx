import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

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
      font-weight: 700;
      text-decoration: underline;
    }

    &:hover {
      color:rgb(255, 255, 255);
    }
  }
`;

function Navigation() {
  const location = useLocation();

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
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