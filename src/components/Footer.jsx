
import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Expertise", path: "/Expertise" },
  { name: "Partnerships", path: "/partnerships" },
  { name: "Programs", path: "/programs" },
  { name: "Our Placement Network", path: "/placement" },
  { name: "Our Gallery", path: "/Gallery" },
];

function Footer() {
  return (
    <footer className="sr-footer">
      <div className="sr-footer-container">

        {/* Company Information */}
        <div className="sr-footer-brand">
          <Link to="/" className="sr-footer-logo">
            SR <span>TECH</span>
            <small>SOLUTIONS</small>
          </Link>

          <p>
            Empowering students with industry-oriented training,
            technical education and practical skills to build
            successful careers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="sr-footer-links">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="sr-footer-contact">
          <h3>Contact Us</h3>

          <div className="sr-footer-contact-item">
            <strong>Office Address</strong>
            <p> beside arundelpet police station, above paramount studio, Brodipet, Guntur, Andhra Pradesh 522002</p>
          </div>

          <div className="sr-footer-contact-item">
            <strong>Phone</strong>
            <a href="tel:+918143767679">
              +918143767679
            </a>
          </div>

          <div className="sr-footer-contact-item">
            <strong>Email</strong>
            <a href="mailto:srtechsolutions204@gmail.com">
              srtechsolutions204@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="sr-footer-bottom">
        <p>
          © {new Date().getFullYear()} SR Tech Solutions.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
