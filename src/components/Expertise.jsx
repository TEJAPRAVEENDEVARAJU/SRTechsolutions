import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  GraduationCap,
  BriefcaseBusiness,
  MonitorPlay,
  Lightbulb,
  Compass,
} from "lucide-react";

import "./Expertise.css";

const expertiseItems = [
  {
    number: "01",
    category: "DIPLOMA · ALL BRANCHES",
    title: "Stipend-Based Industrial Training",
    description:
      "Practical industrial training opportunities for Diploma students across all engineering branches. Bridge the gap between academic learning and industry exposure through hands-on experience.",
    image: "https://cdn.dnaindia.com/sites/default/files/2017/05/21/577058-560805-iti.jpg?im=FitAndFill=(1200,900)",
    imageAlt: "Diploma engineering students participating in industrial training",
    icon: GraduationCap,
    tags: ["All Diploma Branches", "SBTET AP & TS", "Stipend-Based"],
  },
  {
    number: "02",
    category: "B.TECH · DEGREE · MULTIPLE DISCIPLINES",
    title: "Internship Programs",
    description:
      "Structured internship opportunities for students across relevant B.Tech and Degree disciplines, helping develop practical skills, gain professional exposure, and understand real-world workflows.",
    image: "https://images.forbesindia.com/blog/wp-content/uploads/media/images/2024/Jul/img_237010_.jpg?im=Resize,width=600,aspect=fit,type=normal",
    imageAlt: "Students collaborating during an internship program",
    icon: BriefcaseBusiness,
    tags: ["B.Tech", "Degree", "Multiple Disciplines"],
  },
  {
    number: "03",
    category: "HANDS-ON EXPERIENCE",
    title: "Learn Through Live Projects",
    description:
      "Move beyond textbooks through guided project demonstrations. Explore how ideas become practical solutions through planning, development, implementation, and testing.",
    image: "https://images.openai.com/static-rsc-4/vvNBoihKfBGlWc4lUwUE0mnLwVSbXZJAYPtw8EA6bqs4DvU90hQa5o7EYpKPsXu5lJIYgUV8sOBFW28qCJivVOQabuSd4XS8UCOxykNzmAzFtG1SuhbBX1cmfXISNt8UiwgV_CiIxlbsCR3oQXKNDo40z2t2jvYnJHRMp9KS3H8?purpose=inline",
    imageAlt: "Instructor demonstrating a practical engineering project",
    icon: MonitorPlay,
    tags: ["Live Demonstrations", "Practical Learning"],
  },
  {
    number: "04",
    category: "INNOVATION · DISCOVERY",
    title: "Research & Development",
    description:
      "Explore emerging technologies, experiment with new ideas, and work towards innovative solutions across engineering and technology domains.",
    image: "https://images.openai.com/static-rsc-4/NijCcMOWFE_AGmRU2adqe9rUaQCu5mZ6PkGdi3Qmbb24ZOD74aN9gCoMfMrpkhdqQQwNP6ikb1O6phigwj-LfwuXxZHmF3NoAKsbOF7yph_9f8nZp_h3Hs5vH3UXeyRhBzJEO0lj4CIGcw7TEyz0a0fMgzwx0OebrT49hoAqWfQAolwObh0XbSXNhWvcw-P-?purpose=fullsize",
    imageAlt: "Research and development workspace",
    icon: Lightbulb,
    tags: ["Innovation", "Research", "Development"],
  },
  {
    number: "05",
    category: "PROFESSIONAL GROWTH",
    title: "Career Guidance & Development",
    description:
      "Build confidence for the next stage of your career with guidance on skill development, resume preparation, interview practice, and professional growth.",
    image: "https://i0.wp.com/www.mindgroom.com/wp-content/uploads/2023/02/Online-Career-Guidance-and-Career-Counselling-in-Delhi-e1675786790399.webp",
    imageAlt: "Career mentor guiding students",
    icon: Compass,
    tags: ["Career Guidance", "Resume Building", "Interview Preparation"],
  },
];


function Expertise() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger entrance animations when the section enters the viewport
  useEffect(() => {
    const section = sectionRef.current;

    if (!section || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`expertise-section ${
        isVisible ? "expertise-visible" : ""
      }`}
      id="expertise"
    >
      <div className="expertise-container">

        {/* Section heading */}
        
        <div className="expertise-heading">
          <span className="expertise-eyebrow">
            WHAT WE DO
          </span>

          <h2>
            Our Areas of <span>Expertise</span>
          </h2>

          <p>
            At <strong>SR Tech Solutions</strong>, we are committed to
            empowering students and aspiring professionals through
            <strong>
              {" "}Practical Learning, Industry Exposure, Technical
              Excellence, Innovation, and Career Development
            </strong>{" "}
            across multiple disciplines.
          </p>
        </div>

        {/* Expertise cards */}
        <div className="expertise-grid">
          {expertiseItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                className="expertise-card"
                key={item.number}
              >
                <div className="expertise-image">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                  />

                  <span className="expertise-number">
                    {item.number}
                  </span>

                  <div className="expertise-icon">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <div className="expertise-content">
                  <span className="expertise-category">
                    {item.category}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <div className="expertise-tags">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a href="/enquiry" className="expertise-link">
                    Enquire Now
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom enquiry banner */}
        <div className="expertise-bottom">
          <p>
            Have a specific learning or training requirement?
          </p>

          <a href="/enquiry">
            Let's Discuss <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Expertise;
