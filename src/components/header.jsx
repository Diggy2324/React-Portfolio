import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1a2a6c, #2a438a); /* Gradient background */
  color: #fff;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow */
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #b3c2f2; /* Lighter color on hover */
  }
`;

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

    &:hover {
      color: #b3c2f2;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">MyLogo</Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;