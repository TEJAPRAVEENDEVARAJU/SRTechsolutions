
import { ArrowUpRight, GraduationCap, Laptop, Target } from "lucide-react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">

        {/* Left Image */}
        <div className="welcome-image">
          <img
            src="src/assets/srtech4.webp"
            alt="Students learning and developing technical skills"
          />
        </div>

        {/* Right Content */}
        <div className="welcome-content">
          <span className="welcome-tag">
            ABOUT SR TECH SOLUTIONS
          </span>

          <h2>
            Welcome to <span>SR Tech Solutions</span>
          </h2>

          <p className="welcome-description">
            At SR Tech Solutions, we are committed to empowering
            students and aspiring professionals through industry-oriented
            training, internship opportunities, practical learning,
            and career development.
          </p>

          <p className="welcome-description">
            We focus on connecting academic knowledge with real-world
            skills to help individuals prepare for evolving career
            opportunities.
          </p>

          <div className="welcome-highlights">
            <div>
              <GraduationCap size={22} />
              <span>Skill-Based Learning</span>
            </div>

            <div>
              <Laptop size={22} />
              <span>Practical Experience</span>
            </div>

            <div>
              <Target size={22} />
              <span>Career Development</span>
            </div>
          </div>

          <Link to="/about" className="welcome-btn">
            Know More About Us
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Welcome;
