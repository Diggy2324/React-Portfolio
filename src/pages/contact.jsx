import React from 'react';
import './CSS/contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">

        <div className="contact-details">
          <p><strong>Name:</strong> Dylan White</p>
          <p><strong>Phone:</strong> 802.296.1394</p>
          <p><strong>Email:</strong> jacob.dwhite23@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Diggy2324" target="_blank" rel="noopener noreferrer"></a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dylan-white-2571381a5/" target="_blank" rel="noopener noreferrer"></a></p>
          <p><strong>Discord:</strong> <a href="https://discord.com/channels/@me/1101682962078122065/" target="_blank" rel="noopener norefferer"></a> </p>
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