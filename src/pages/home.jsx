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
            <img src="/images/feature1.jpg" alt="Feature 1" className="featured-image" />
            <h3>Feature 1 Title</h3>
            <p>Brief description of Feature 1.</p>
            <a href="/feature1" className="read-more">Read More</a>
          </article>

          <article className="featured-item">
            <img src="/images/feature2.jpg" alt="Feature 2" className="featured-image" />
            <h3>Feature 2 Title</h3>
            <p>Brief description of Feature 2.</p>
            <a href="/feature2" className="read-more">Read More</a>
          </article>

          <article className="featured-item">
            <img src="/images/feature3.jpg" alt="Feature 3" className="featured-image" />
            <h3>Feature 3 Title</h3>
            <p>Brief description of Feature 3.</p>
            <a href="/feature3" className="read-more">Read More</a>
          </article>
        </div>
      </section>

      <section className="about-section">
        <h2>About Me/Us</h2>
        <p>
          Here, you'll find information about who I am and what drives me.
        </p>
        <a href="/about" className="learn-more">Learn More</a>
      </section>
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Feel free to reach out with any questions or inquiries.</p>
        <a href="/contact" className="contact-link">Contact Us</a>
      </section>
    </main>
  );
};

export default Home;