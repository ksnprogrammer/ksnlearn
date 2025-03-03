import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <div className="footer-brand">
            <span className="brand-text-ksn">KSN</span>
            <span className="brand-text-learn">Learn</span>
          </div>
          <p className="footer-description">
            Your cybernetic gateway to A/L Sciences with the latest learning technology.
          </p>
          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section subjects-section">
          <h3>Our Subjects</h3>
          <ul className="footer-links">
            <li><a href="#" className="biology-link">Biology</a></li>
            <li><a href="#" className="chemistry-link">Chemistry</a></li>
            <li><a href="#" className="physics-link">Physics</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter-section">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates and resources.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KSNLearn by K_Sithara ❤️🖤. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;