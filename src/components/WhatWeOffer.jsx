
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Lightbulb,
  Target,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import "./WhatWeOffer.css";

const services = [
  {
    icon: GraduationCap,
    title: "Stipend-Based Industrial Training",
    description:
      "Gain practical industry exposure through structured training programs designed to develop technical and professional skills.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Internship Programs",
    description:
      "Explore internship opportunities that help students gain practical experience and understand real workplace environments.",
  },
  {
    icon: Code2,
    title: "Learn Through Live Projects",
    description:
      "Apply your knowledge by working on practical projects and strengthen your technical abilities through hands-on learning.",
  },
  {
    icon: Lightbulb,
    title: "Research & Development",
    description:
      "Explore innovative ideas, develop problem-solving abilities and gain exposure to research-oriented learning.",
  },
  {
    icon: Target,
    title: "Career Guidance & Development",
    description:
      "Build career confidence through professional guidance, resume preparation and interview readiness.",
  },
];

function WhatWeOffer() {
  return (
    <section className="offer-section">
      <div className="offer-container">

        {/* Section Heading */}
        <div className="offer-heading">
          <span className="offer-tag">OUR SERVICES</span>

          <h2>
            What We <span>Offer</span>
          </h2>

          <p>
            Discover opportunities designed to strengthen your skills,
            enhance practical knowledge and support your career growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="offer-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                className="offer-card"
                key={service.title}
                style={{ "--card-index": index }}
              >
                <div className="offer-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to="/Expertise" className="offer-link">
                  Know More
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="offer-bottom">
          <Link to="/Expertise" className="offer-main-btn">
            Explore All Expertise
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default WhatWeOffer;
