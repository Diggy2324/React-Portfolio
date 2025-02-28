import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeaderContainer = styled.header`
  color: #fff;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}`;

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
      color:rgb(0, 255, 255);
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
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