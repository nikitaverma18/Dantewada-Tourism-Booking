import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>&copy; 2024 Dantewada Homestays. All Rights Reserved.</p>
        <p>
          <a href="/contact" className="text-light">
            Contact Us
          </a>{" "}
          |{" "}
          <a href="/privacy-policy" className="text-light">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-light">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;