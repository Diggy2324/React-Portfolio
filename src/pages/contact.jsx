import React from 'react';
import './Contact.css'; // Optional: Create a separate CSS file for styling

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2 className="contact-title">Contact Dylan White</h2>

        <div className="contact-details">
          <p><strong>Name:</strong> Dylan White</p>
          <p><strong>Phone:</strong> 802.296.1394</p>
          <p><strong>Email:</strong> jacob.dwhite23@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Diggy2324" target="_blank" rel="noopener noreferrer">Diggy2324</a></p>
          <p><strong>LinkedIn:</strong> <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">YOUR_LINKEDIN_URL</a></p> {/* Replace with your actual LinkedIn URL */}
          <p><strong>Discord:</strong> YOUR_DISCORD_USERNAME#YOUR_DISCORD_TAG</p> {/* Replace with your Discord username and tag */}
          {/* Add more contact methods as needed */}
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;