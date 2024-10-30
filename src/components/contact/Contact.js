
        import React from 'react';
        import './Contact.css'

        function Contact1() {
            const handleSubmit = (e) => {
                e.preventDefault();
                // Handle form submission logic here
              };
            return (
                <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you! Please fill out the form below.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: 1234 Street Name, City, Country</p>
        <p>Phone: <a href="tel:+123456789">+1 234 567 89</a></p>
        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
        <div className="social-media">
          <a href="">Facebook</a>
          <a href="">Twitter</a>
          <a href="">Instagram</a>
        </div>
      </div>

   
    </div>
                
            );
        }
        
        
        
export default Contact1
