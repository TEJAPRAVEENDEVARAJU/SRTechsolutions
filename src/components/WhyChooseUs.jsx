
import {
  BookOpen,
  Users,
  Code2,
  TrendingUp,
  Award,
} from "lucide-react";

import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    icon: BookOpen,
    title: "Practical Learning",
    description:
      "Gain hands-on experience through practical training and real-world learning activities.",
  },
  {
    number: "02",
    icon: Users,
    title: "Expert Trainers",
    description:
      "Learn from trainers with technical knowledge and professional experience.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Live Industry Projects",
    description:
      "Work on practical projects to strengthen your technical skills and build your portfolio.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Career Development",
    description:
      "Improve your career readiness through resume building, interview preparation and guidance.",
  },
  {
    number: "05",
    icon: Award,
    title: "Industry-Ready Skills",
    description:
      "Develop technical and professional skills that help prepare you for workplace expectations.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* Section Heading */}
        <div className="why-heading">
          <span className="why-tag">WHY CHOOSE US</span>

          <h2>
            Growing Skills. <span>Building Futures.</span>
          </h2>

          <p>
            Our programs combine technical expertise, hands-on experience,
            and professional mentorship to prepare students for successful
            careers in today's competitive world.
          </p>
        </div>

        {/* Animated Steps */}
        <div className="why-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                className="why-card"
                key={reason.number}
                style={{ "--step-index": index }}
              >
                <div className="why-card-top">
                  <span className="why-number">{reason.number}</span>

                  <div className="why-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <span className="why-card-line"></span>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
