
import { useState } from "react";
import PaymentWarningMarquee from "./PaymentWarningMarquee";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import "./Navbar.css";

const navigation = [
  { label: "Home", href: "/" },

  { label: "About Us", href: "/about" },

  { label: "Our Expertise", href: "/expertise" },

  {
    label: "Academic & Corporate Partnerships",
     href: "/partnerships"
    
  },

  {
    label: "Programs",
    href: "/programs",
    items: [
      { label: "Industrial Training", href: "/programs#industrial-training" },
      { label: "Internship Programs", href: "/programs#internships" },
      { label: "Mini & Major Projects", href: "/programs#projects" },
      { label: "Workshops & FDPs", href: "/programs#workshops" },
      { label: "Research & Publications", href: "/programs#research" },
      { label: "Future-Ready Engineering Programs", href: "/programs" },
    ],
  },

  {
    label: "Our Placement Network",
    href: "/placement"
  },
  {
    label: "Our Gallary",
    href: "/Gallery"
  }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Brand */}
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          <div className="brand-symbol">SR</div>

          <div className="brand-text">
            <span>SR TECH</span>
            <small>SOLUTIONS</small>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              <Link to={item.href} className="nav-link">
                {item.label}

                {item.items && <ChevronDown size={14} />}
              </Link>

              {item.items && (
                <div className="dropdown-menu">
                  {item.label === "Programs" && (
                    <Link
                      to="/programs"
                      className="dropdown-link dropdown-overview"
                    >
                      Explore All Programs
                      <ArrowUpRight size={14} />
                    </Link>
                  )}

                  {item.items.map((subItem) => (
                    <Link
                      to={subItem.href}
                      key={subItem.label}
                      className="dropdown-link"
                    >
                      {subItem.label}
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Enquiry Button */}
        <Link to="/enquiry" className="nav-cta">
          Enquire Now
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
      >
        {navigation.map((item) => (
          <div className="mobile-nav-item" key={item.label}>
            {item.items ? (
              <>
                <button
                  className="mobile-nav-link"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.label
                        ? null
                        : item.label
                    )
                  }
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}

                  <ChevronDown
                    size={17}
                    className={
                      activeDropdown === item.label ? "rotated" : ""
                    }
                  />
                </button>

                <div
                  className={`mobile-dropdown ${
                    activeDropdown === item.label ? "show" : ""
                  }`}
                >
                  {item.label === "Programs" && (
                    <Link to="/programs" onClick={closeMenu}>
                      Explore All Programs
                    </Link>
                  )}

                  {item.items.map((subItem) => (
                    <Link
                      to={subItem.href}
                      key={subItem.label}
                      onClick={closeMenu}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={item.href}
                className="mobile-nav-link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        {/* Mobile Enquiry Button */}
        <Link
          to="/enquiry"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Enquire Now
          <ArrowUpRight size={17} />
        </Link>
      </div>
      <PaymentWarningMarquee />
    </header>
  );
}

export default Navbar;
