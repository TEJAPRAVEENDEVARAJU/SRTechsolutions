
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  BookOpen,
  Code2,
  Laptop,
  Rocket,
  GraduationCap,
  BriefcaseBusiness,
  Users,
  CheckCircle2,
  Sparkles,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./AboutPage.css";

const services = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Stipend Based Industrial Training",
    description:
      "Practical and industry-oriented training programs for diploma students.",
  },
  {
    icon: BriefcaseBusiness,
    number: "02",
    title: "Internships",
    description:
      "Learning experiences for B.Tech and degree students to strengthen technical skills.",
  },
  {
    icon: Laptop,
    number: "03",
    title: "Skill Courses",
    description:
      "Focused learning programs to develop relevant technical and professional skills.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Project Development",
    description:
      "Build practical knowledge by working on projects and applying concepts.",
  },
  {
    icon: BookOpen,
    number: "05",
    title: "Paper Publications",
    description:
      "Guidance and support for academic project documentation and paper publication.",
  },
  {
    icon: Building2,
    number: "06",
    title: "Partnerships",
    description:
      "Collaborations with educational institutions and organizations.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Start from zero",
    description:
      "No previous experience? No problem. Begin with the fundamentals and understand the basics.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Learn",
    subtitle: "Build your foundation",
    description:
      "Understand concepts through clear explanations, demonstrations, and guided lessons.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Practice",
    subtitle: "Learn by doing",
    description:
      "Write code, solve problems, experiment, and strengthen your understanding through practice.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Create",
    subtitle: "Build real projects",
    description:
      "Turn your knowledge into practical projects and learn how different concepts work together.",
    icon: Laptop,
  },
  {
    number: "05",
    title: "Elevate",
    subtitle: "Become confident",
    description:
      "Develop technical confidence, problem-solving ability, and the skills to take your next step.",
    icon: Rocket,
  },
];

function AboutPage() {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-glow"></div>

        <div className="about-hero-container">
          
          <div className="about-hero-content">
            <br /><br/>
            <span className="about-eyebrow">
              <Sparkles size={15} />
              GET TO KNOW US
            </span>

            <h1>
              More Than Training.
              <span> A Journey Towards Excellence.</span>
            </h1>

            <p>
              At SR Tech Solutions, we believe every learner has
              the potential to achieve more. We help transform
              curiosity into knowledge, knowledge into skills,
              and skills into confidence.
            </p>

            <Link to="/enquiry" className="about-primary-btn">
              Start Your Journey
              <ArrowUpRight size={19} />
            </Link>
          </div>

          <div className="about-hero-quote">
            <div className="quote-mark">“</div>
            <h2>
              Every expert was once a beginner.
              Every great journey begins with a single step.
            </h2>
            <span>THE SR TECH BELIEF</span>
            <div className="quote-decoration"></div>
          </div>
        </div>

        <div className="about-hero-bottom">
          <span>INNOVATE.</span>
          <span>EDUCATE.</span>
          <span>ELEVATE.</span>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="about-intro section-padding">
        <div className="about-intro-grid">
          <div className="about-intro-content about-reveal">
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>
              Building Skills.
              <span> Shaping Futures.</span>
            </h2>

            <p>
              SR Tech Solutions is focused on technology,
              education, and practical skill development.
              We aim to create meaningful learning experiences
              that help students and aspiring professionals
              understand technology and apply their knowledge.
            </p>

            <p>
              We believe learning should go beyond textbooks.
              It should encourage curiosity, hands-on practice,
              problem-solving, creativity, and continuous growth.
            </p>

            <div className="about-belief">
              <Sparkles size={21} />
              <span>
                We don't just focus on what you learn.
                We focus on what you can do with what you learn.
              </span>
            </div>
          </div>

          <div className="about-intro-visual about-reveal">
            <div className="intro-visual-main">
              <div className="intro-visual-icon">
                <GraduationCap size={48} />
              </div>
              <span>LEARN WITH PURPOSE</span>
              <h3>Knowledge becomes powerful when you put it into practice.</h3>
              <div className="intro-visual-lines"></div>
            </div>
            <div className="intro-visual-small">
              <Code2 size={24} />
              <span>Learn. Practice. Build.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about-services section-padding">
        <div className="about-section-heading about-reveal">
          <span className="section-eyebrow">WHAT WE OFFER</span>
          <h2>
            Opportunities to <span>Learn & Grow.</span>
          </h2>
          <p>
            Learning and development opportunities designed
            to help students and organizations move forward.
          </p>
        </div>

        <div className="about-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="about-service-card about-reveal" key={service.number}>
                <div className="service-card-top">
                  <div className="service-icon">
                    <Icon size={25} />
                  </div>
                  <span>{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-card-arrow">
                  <ArrowUpRight size={20} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TRAINING APPROACH */}
      <section className="about-method section-padding">
        <div className="about-method-grid">
          <div className="about-method-content about-reveal">
            <span className="section-eyebrow">OUR TRAINING APPROACH</span>
            <h2>
              Not Just Learning.
              <span> Learning by Doing.</span>
            </h2>
            <p>
              Our approach is designed to make learning easier
              to understand, practical to apply, and meaningful
              for every learner.
            </p>

            <div className="method-points">
              {[
                "Simple explanations of concepts",
                "Live demonstrations and examples",
                "Guided hands-on practice",
                "Problem-solving exercises",
                "Practical project development",
                "Continuous learning and improvement",
              ].map((point) => (
                <div className="method-point" key={point}>
                  <CheckCircle2 size={19} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-method-visual about-reveal">
            <div className="method-orbit orbit-one"></div>
            <div className="method-orbit orbit-two"></div>

            <div className="method-center">
              <GraduationCap size={45} />
              <strong>LEARN</strong>
              <span>WITH PURPOSE</span>
            </div>

            <div className="method-floating method-float-one">
              <Code2 size={22} />
              <span>Practice</span>
            </div>
            <div className="method-floating method-float-two">
              <Laptop size={22} />
              <span>Projects</span>
            </div>
            <div className="method-floating method-float-three">
              <Rocket size={22} />
              <span>Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* ZERO TO HERO */}
      <section className="about-journey section-padding">
        <div className="about-section-heading about-reveal">
          <span className="section-eyebrow">THE SR TECH LEARNING JOURNEY</span>
          <h2>
            From Zero <span>to Hero.</span>
          </h2>
          <p>
            Every skilled professional starts somewhere.
            Here's how we guide learners through their growth journey.
          </p>
        </div>

        <div className="journey-list">
          {journey.map((step, index) => {
            const Icon = step.icon;

            return (
              <article className="journey-step about-reveal" key={step.number}>
                <div className="journey-marker">
                  <span>{step.number}</span>
                  {index !== journey.length - 1 && (
                    <div className="journey-connector"></div>
                  )}
                </div>

                <div className="journey-card">
                  <div className="journey-icon">
                    <Icon size={27} />
                  </div>

                  <div className="journey-text">
                    <span>{step.subtitle}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <span className="journey-card-number">{step.number}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="journey-ending about-reveal">
          <div>
            <Sparkles size={25} />
            <h3>Your potential is just the beginning.</h3>
            <p>Keep learning. Keep building. Keep elevating.</p>
          </div>
          {/* <Link to="/enquiry">
            Begin Your Journey <ArrowRight size={19} />
          </Link> */}
           <a href="/enquiry" className="about-primary-btn">
              Begin Your Journey
            <ArrowUpRight size={17} />
          </a>
          
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-purpose section-padding">
        <div className="about-section-heading about-reveal">
          <span className="section-eyebrow">WHAT DRIVES US</span>
          <h2>
            Our Purpose. <span>Our Direction.</span>
          </h2>
        </div>

        <div className="purpose-grid">
          <article className="purpose-card about-reveal">
            <div className="purpose-icon">
              <Target size={30} />
            </div>
            <span>OUR MISSION</span>
            <h3>Make Learning Meaningful.</h3>
            <p>
              To make technology education and practical skill
              development accessible, engaging, and valuable
              for learners through structured learning and
              hands-on experiences.
            </p>
          </article>

          <article className="purpose-card purpose-card-blue about-reveal">
            <div className="purpose-icon">
              <Eye size={30} />
            </div>
            <span>OUR VISION</span>
            <h3>Inspire the Next Generation.</h3>
            <p>
              To contribute to a future where individuals are
              confident, skilled, innovative, and prepared to
              embrace opportunities in a changing world.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="about-final-cta">
        <div className="final-cta-glow"></div>
        <div className="final-cta-content about-reveal">
          <span>YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>
            Don't Just Dream About Your Future.
            <br />
            <strong>Start Building It.</strong>
          </h2>
          <p>
            Take the first step towards learning, growing,
            and creating new possibilities.
          </p>
          {/* <Link to="/enquiry" className="about-primary-btn">
            Enquire Now <ArrowUpRight size={19} />
          </Link> */}
          <a href="/enquiry" className="about-primary-btn">
              Enquire Now
            <ArrowUpRight size={17} />
          </a>
          
        </div>
      </section>

    </main>
  );
}

export default AboutPage;
