// Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 0.9rem;
`;

const SocialIcons = styled.div`
  margin-bottom: 10px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #b3c2f2;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> {/* Font Awesome Twitter icon */}
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i> {/* Font Awesome LinkedIn icon */}
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> {/* Font Awesome Github icon */}
        </a>
      </SocialIcons>
      <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;