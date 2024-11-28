import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-content">
          <h2 className="contact-title">Get in touch.</h2>
          <p className="contact-description">
            Drop me a line, give me a call and send me a message
            <br />
            by submitting the form.
          </p>
          <div className="contact-item">nimratariq2106@gmail.com</div>
          <div className="contact-item">0370 3144900</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
