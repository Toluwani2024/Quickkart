import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Get to Know Us</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press Releases</a></li>
          <li><a href="#">Investor Relations</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Let Us Help You</h4>
        <ul>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Returns Centre</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Shipping Rates</a></li>
          <li><a href="#">Accessibility</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Payment & Security</h4>
        <ul>
          <li><a href="#">Amazon Wallet</a></li>
          <li><a href="#">Credit/Debit Cards</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">EMI Payment Options</a></li>
          <li><a href="#">Security</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Connect with Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
