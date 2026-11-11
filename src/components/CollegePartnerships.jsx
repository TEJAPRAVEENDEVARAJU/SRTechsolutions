
import {
  GraduationCap,
  Target,
  Laptop,
  Presentation,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./CollegePartnerships.css";

const partnershipServices = [
  {
    id: "admission-guidance",
    number: "01",
    title: "College Admission Guidance",
    description:
      "Help students explore higher education opportunities, understand admission processes, choose suitable courses, and plan their academic journey.",
    icon: GraduationCap,
    highlights: [
      "Course Selection",
      "Admission Assistance",
      "Academic Pathways",
    ],
  },
  {
    id: "crt",
    number: "02",
    title: "Campus Recruitment Training (CRT)",
    description:
      "Prepare students for recruitment opportunities through aptitude, reasoning, communication, technical preparation, and mock interviews.",
    icon: Target,
    highlights: [
      "Aptitude & Reasoning",
      "Communication Skills",
      "Mock Interviews",
    ],
  },
  {
    id: "skill-development",
    number: "03",
    title: "Skill Development Programs",
    description:
      "Deliver structured learning programs that help students and professionals develop technical, professional, and industry-relevant skills.",
    icon: Laptop,
    highlights: [
      "Technical Skills",
      "Soft Skills",
      "Practical Learning",
    ],
  },
  {
    id: "seminars-workshops",
    number: "04",
    title: "Seminars & Workshops",
    description:
      "Conduct interactive seminars, technical workshops, expert sessions, and knowledge-sharing events focused on emerging technologies and industry developments.",
    icon: Presentation,
    highlights: [
      "Technical Seminars",
      "Hands-on Workshops",
      "Expert Sessions",
    ],
  },
];

function CollegePartnerships() {
  return (
    <section className="partnership-section" id="partnerships">
      <div className="partnership-container">

        {/* Section Heading */}
        <div className="partnership-heading">
          <span className="partnership-eyebrow">
            INSTITUTIONAL COLLABORATION
          </span>

          <h2>
            College & Business
            <span> Partnerships</span>
          </h2>

          <p>
            Building stronger institutions through collaboration.
            We work with colleges, educational institutions, and
            businesses to create meaningful learning opportunities,
            improve employability, and encourage professional growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="partnership-grid">
          {partnershipServices.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="partnership-card"
                key={item.id}
              >
                <div className="partnership-card-top">
                  <div className="partnership-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="partnership-number">
                    {item.number}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <p className="partnership-description">
                  {item.description}
                </p>

                <div className="partnership-highlights">
                  {item.highlights.map((highlight) => (
                    <div
                      className="partnership-highlight"
                      key={highlight}
                    >
                      <CheckCircle2 size={15} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Navigate to the relevant activity */}
                <Link
                  to={`/partnerships#${item.id}`}
                  className="partnership-card-link"
                >
                  Know More
                  <ArrowUpRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="partnership-cta">
          <div>
            <span>LET'S COLLABORATE</span>

            <h3>
              Have an institution or business partnership in mind?
            </h3>

            <p>
              Let's work together to create valuable learning
              and development opportunities.
            </p>
          </div>

          

{/* <Link to = "/enquiry" className="about-primary-btn">
              Discuss a Partnership
              <ArrowUpRight size={19} />
            </Link> */}
<a href="/enquiry" className="about-primary-btn">
              Discuss a Partnership
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default CollegePartnerships;
