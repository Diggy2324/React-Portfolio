import React from 'react';
import './CSS/home.css';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Home</h1>
          <p>Discover a space crafted with passion and purpose.</p>
          <button className="cta-button">Explore More</button>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Highlights</h2>
        <div className="featured-items">
          <article className="featured-item">
            <h3>Project-Trippit</h3>
            <a href="https://github.com/abelgtzrs/Project-Trippit.git" className="read-more">Read More</a>
          </article>

          <article className="featured-item">
            <h3>SQL Challenge</h3>
            <a href="https://github.com/Diggy2324/SQL-Challenge.git" className="read-more">Read More</a>
          </article>

          <article className="featured-item">
            <h3>React-Portfolio</h3>
            <a href="https://github.com/Diggy2324/React-Portfolio.git" className="read-more">Read More</a>
          </article>
        </div>
      </section>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Here, you'll find information about who I am and what drives me.
        </p>
        <a href="/about" className="learn-more">Learn More</a>
      </section>
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Feel free to reach out with any questions or inquiries.</p>
        <a href="/contact" className="contact-link">Contact Me</a>
      </section>
    </main>
  );
};

export default Home;