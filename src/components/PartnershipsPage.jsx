
import {
  GraduationCap,
  Target,
  Laptop,
  Presentation,
  ArrowUpRight,
  CheckCircle2,
  Users,
  BookOpen,
  Building2,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./PartnershipsPage.css";

/* =========================================
   REUSABLE SCROLL REVEAL COMPONENT
========================================= */

function Reveal({
  as: Tag = "div",
  className = "",
  children,
  id,
  ...props
}) {
  const revealRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = revealRef.current;

    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={revealRef}
      id={id}
      {...props}
      className={`scroll-reveal ${
        visible ? "is-revealed" : ""
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/* =========================================
   PARTNERSHIP PROGRAM DATA
========================================= */

const partnershipPrograms = [
  {
    id: "admission-guidance",
    number: "01",
    label: "ACADEMIC SUPPORT",
    title: "College Admission Guidance",
    subtitle: "Helping students make informed academic decisions.",
    description:
      "We support students in exploring higher education opportunities and understanding the admission process. Our guidance helps students identify suitable courses, understand eligibility requirements, and plan their academic journey based on their interests and qualifications.",
    image:
      "https://images.openai.com/static-rsc-4/YKl52qIbHALxBSeB9yt1sZZ5EfwUpDRsKEHrUeLKdAVSgA3V0g9IViBaBB7qibf9OhOKFZzjV1GsA8-H5fdHI6ERmBdq_o9CAmNdrVrKC6fkxHYe3CDJoItiSxLd-c2JbuyseARsr31HP1Nf5DbTt9NeaV3_c_EFgJS1hReEuqaHHaxoPZuTt51a8YunC_pJ?purpose=fullsize",
    imageAlt: "Students receiving academic admission guidance",
    icon: GraduationCap,

    services: [
      "Course and specialization guidance",
      "Higher education opportunity information",
      "Eligibility and admission process guidance",
      "Application procedure assistance",
      "Academic and career pathway counselling",
    ],

    steps: [
      {
        title: "Understand the Student Profile",
        description:
          "Understand the student's educational background, qualifications, interests, and future goals.",
      },
      {
        title: "Explore Suitable Courses",
        description:
          "Identify relevant courses, specializations, institutions, and higher education pathways.",
      },
      {
        title: "Explain Eligibility Requirements",
        description:
          "Provide information about admission criteria, entrance requirements, and application procedures.",
      },
      {
        title: "Guide the Application Process",
        description:
          "Assist students in understanding application steps and the documentation they may need.",
      },
      {
        title: "Provide Follow-up Guidance",
        description:
          "Help students understand subsequent admission steps and explore available opportunities.",
      },
    ],

    outcome:
      "Better-informed academic decisions and a clearer understanding of higher education opportunities.",
  },

  {
    id: "crt",
    number: "02",
    label: "CAREER READINESS",
    title: "Campus Recruitment Training (CRT)",
    subtitle: "Preparing students for campus recruitment opportunities.",
    description:
      "Our Campus Recruitment Training programs focus on developing the aptitude, communication, reasoning, and technical skills required for recruitment processes. Programs can be customized according to student levels, academic backgrounds, and institutional requirements.",
    image:
      "https://www.hinduengg.com/hinduenggnew/Admincss/assets/img/MainPage/DSCF9042.JPG",
    imageAlt: "Students participating in campus recruitment training",
    icon: Target,

    services: [
      "Quantitative aptitude and problem solving",
      "Logical and analytical reasoning",
      "Verbal ability and communication",
      "Programming and technical fundamentals",
      "Resume preparation and interview skills",
      "Group discussions and mock interviews",
    ],

    steps: [
      {
        title: "Initial Student Assessment",
        description:
          "Evaluate students' existing aptitude, reasoning, communication, and technical knowledge.",
      },
      {
        title: "Prepare a Training Plan",
        description:
          "Create a structured training schedule based on student levels and institutional requirements.",
      },
      {
        title: "Deliver Concept-Based Training",
        description:
          "Teach important concepts through examples, problem-solving techniques, and guided practice.",
      },
      {
        title: "Conduct Practice and Assessments",
        description:
          "Organize exercises, timed tests, assignments, and progress assessments.",
      },
      {
        title: "Prepare for Recruitment",
        description:
          "Conduct mock interviews, resume reviews, and group discussion practice.",
      },
    ],

    outcome:
      "Improved problem-solving ability, communication, technical confidence, and recruitment readiness.",
  },

  {
    id: "skill-development",
    number: "03",
    label: "PRACTICAL LEARNING",
    title: "Skill Development Programs",
    subtitle: "Building practical and industry-relevant capabilities.",
    description:
      "We design structured skill development programs to help students and professionals strengthen their technical and professional capabilities. Programs can be tailored to different academic backgrounds, engineering branches, and organizational learning requirements.",
    image:
      "https://www.akgec.ac.in/wp-content/uploads/2019/06/Development.jpg",
    imageAlt: "Students developing practical technical skills",
    icon: Laptop,

    services: [
      "Technical skill development across disciplines",
      "Programming and software development",
      "Emerging technology awareness",
      "Communication and professional skills",
      "Practical exercises and guided assignments",
      "Project-oriented learning activities",
    ],

    steps: [
      {
        title: "Identify Learning Requirements",
        description:
          "Understand institutional objectives, student backgrounds, and the skills that need to be developed.",
      },
      {
        title: "Customize the Program",
        description:
          "Prepare a suitable curriculum, duration, learning objectives, and training schedule.",
      },
      {
        title: "Build Conceptual Understanding",
        description:
          "Deliver instructor-led sessions covering essential concepts and their practical applications.",
      },
      {
        title: "Conduct Hands-on Practice",
        description:
          "Provide exercises, demonstrations, assignments, and practical implementation activities.",
      },
      {
        title: "Evaluate Learning Progress",
        description:
          "Review student progress through practical activities, assessments, and feedback.",
      },
    ],

    outcome:
      "Stronger practical capabilities, improved technical confidence, and better preparation for professional opportunities.",
  },

  {
    id: "seminars-workshops",
    number: "04",
    label: "KNOWLEDGE EXCHANGE",
    title: "Seminars & Workshops",
    subtitle: "Creating opportunities for interactive learning.",
    description:
      "We organize seminars, technical workshops, interactive sessions, and knowledge-sharing events for educational institutions and organizations. These initiatives introduce participants to emerging technologies, practical applications, and industry developments.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRhH6ovDh1wShtyLHOkzKrvgefjAaxiGMv_6PhtVnEO8QhC-uUmG7l6Rn&s=10",
    imageAlt: "Students attending a technical seminar and workshop",
    icon: Presentation,

    services: [
      "Technical seminars and guest sessions",
      "Emerging technology awareness programs",
      "Hands-on technical workshops",
      "Career development and industry orientation",
      "Expert-led knowledge-sharing sessions",
      "Faculty Development Programs, where applicable",
    ],

    steps: [
      {
        title: "Identify Topics and Objectives",
        description:
          "Discuss institutional interests and identify relevant technical or professional topics.",
      },
      {
        title: "Plan the Session",
        description:
          "Define the target audience, objectives, duration, format, and schedule.",
      },
      {
        title: "Prepare Learning Resources",
        description:
          "Develop presentation materials, demonstrations, exercises, and supporting resources.",
      },
      {
        title: "Conduct the Session",
        description:
          "Deliver interactive seminars, practical workshops, and knowledge-sharing activities.",
      },
      {
        title: "Collect Feedback",
        description:
          "Gather participant feedback and review the effectiveness of the session.",
      },
    ],

    outcome:
      "Greater awareness of emerging technologies, exposure to new concepts, and opportunities for interactive learning.",
  },
];

/* =========================================
   INDIVIDUAL PARTNERSHIP PROGRAM
========================================= */

function PartnershipProgram({ program, reverse }) {
  const Icon = program.icon;

  return (
    <Reveal
      as="article"
      id={program.id}
      className={`partnership-detail ${
        reverse ? "partnership-detail-reverse" : ""
      }`}
    >
      {/* Program Image */}
      <div className="partnership-detail-image">
        <img
          src={program.image}
          alt={program.imageAlt}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div className="partnership-image-overlay">
          <span>{program.number}</span>
          <Icon size={38} strokeWidth={1.5} />
        </div>
      </div>

      {/* Program Information */}
      <div className="partnership-detail-content">
        <span className="partnership-label">
          {program.label}
        </span>

        <h2>{program.title}</h2>
        <h3>{program.subtitle}</h3>

        <p className="partnership-detail-description">
          {program.description}
        </p>

        <h4>What We Provide</h4>

        <div className="partnership-service-list">
          {program.services.map((service) => (
            <div
              key={service}
              className="partnership-service-item"
            >
              <CheckCircle2 size={17} />
              <span>{service}</span>
            </div>
          ))}
        </div>

        {/* <Link
          to="/enquiry"
          className="partnership-detail-link"
        >
          Enquire About This Program
          <ArrowUpRight size={18} />
        </Link> */}
         <a href="/enquiry" className="partnership-detail-link">
             Enquire About This Program
            <ArrowUpRight size={17} />
          </a>
      </div>

      {/* Implementation Process */}
      <div className="partnership-process">
        <div className="partnership-process-heading">
          <span>OUR APPROACH</span>
          <h3>How We Do It</h3>
          <p>
            A structured approach designed around the
            institution's requirements and learning objectives.
          </p>
        </div>

        <div className="partnership-steps">
          {program.steps.map((step, index) => (
            <div
              className="partnership-step"
              key={step.title}
            >
              <div className="partnership-step-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="partnership-step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expected Outcome */}
      <div className="partnership-outcome">
        <CheckCircle2 size={23} />

        <div>
          <span>EXPECTED OUTCOME</span>
          <p>{program.outcome}</p>
        </div>
      </div>
    </Reveal>
  );
}

/* =========================================
   MAIN PARTNERSHIPS PAGE
========================================= */

function PartnershipsPage() {
  const location = useLocation();

  /*
    Automatically scroll to the requested activity
    when arriving from the homepage or opening a direct URL.
  */
  useEffect(() => {
    if (!location.hash) return;

    const programId = decodeURIComponent(
      location.hash.substring(1)
    );

    const timer = setTimeout(() => {
      const target = document.getElementById(programId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  /*
    Navigation between activities within this page.
  */
  const handleProgramNavigation = (e, programId) => {
    e.preventDefault();

    const target = document.getElementById(programId);

    if (!target) return;

    window.history.replaceState(
      null,
      "",
      `${location.pathname}#${programId}`
    );

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /*
    Scroll to the activities overview.
  */
  const handleExploreActivities = (e) => {
    e.preventDefault();

    document
      .getElementById("partnership-programs")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="partnerships-page">

      {/* Hero */}
      <Reveal
        as="section"
        className="partnerships-hero"
      >
        <div className="partnerships-hero-content">
          <span className="partnerships-hero-eyebrow">
            <Building2 size={16} />
            INSTITUTIONAL COLLABORATION
          </span>

          <h1>
            College & Business
            <span> Partnerships</span>
          </h1>

          <p>
            Building stronger institutions through collaboration.
            We work with colleges, educational institutions, and
            businesses to create meaningful learning opportunities,
            strengthen employability, and encourage professional growth.
          </p>

          <div className="partnerships-hero-actions">
            <a
              href="#partnership-programs"
              onClick={handleExploreActivities}
            >
              Explore Our Activities
              <ArrowUpRight size={18} />
            </a>

            <Link to="/enquiry">
              Discuss a Partnership
            </Link>
          </div>
        </div>

        <div className="partnerships-hero-visual">
          <div className="partnerships-visual-card">
            <Users size={34} />
            <h3>Collaborate</h3>
            <p>
              Work together towards meaningful development.
            </p>
          </div>

          <div className="partnerships-visual-card">
            <BookOpen size={34} />
            <h3>Develop</h3>
            <p>
              Build skills through structured learning.
            </p>
          </div>

          <div className="partnerships-visual-card">
            <Target size={34} />
            <h3>Grow</h3>
            <p>
              Prepare for academic and professional opportunities.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Introduction */}
      <Reveal
        as="section"
        className="partnerships-intro"
      >
        <span>WORKING TOGETHER</span>

        <h2>
          Creating Value Through
          <span> Meaningful Collaboration</span>
        </h2>

        <p>
          Every institution has different goals and requirements.
          We work with our partners to understand their needs and
          develop suitable initiatives that support student learning,
          professional development, and institutional objectives.
        </p>
      </Reveal>

      {/* Program Navigation */}
      <Reveal
        as="nav"
        className="partnership-program-nav"
        aria-label="Partnership programs"
      >
        {partnershipPrograms.map((program) => (
          <a
            key={program.id}
            href={`#${program.id}`}
            onClick={(e) =>
              handleProgramNavigation(e, program.id)
            }
          >
            {program.number}. {program.title}
          </a>
        ))}
      </Reveal>

      {/* Detailed Programs */}
      <section
        className="partnership-programs"
        id="partnership-programs"
      >
        {partnershipPrograms.map((program, index) => (
          <PartnershipProgram
            key={program.id}
            program={program}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>

      {/* Collaboration Process */}
      <Reveal
        as="section"
        className="partnership-collaboration"
      >
        <div className="partnership-collaboration-heading">
          <span>LET'S WORK TOGETHER</span>

          <h2>How Our Collaboration Begins</h2>

          <p>
            From understanding your requirements to delivering
            a suitable program, we follow a clear collaborative process.
          </p>
        </div>

        <div className="partnership-collaboration-steps">
          {[
            {
              title: "Connect With Us",
              description:
                "Share your institution's goals and requirements.",
            },
            {
              title: "Understand Your Needs",
              description:
                "Discuss the target audience, objectives, and expectations.",
            },
            {
              title: "Plan the Program",
              description:
                "Prepare a suitable proposal, schedule, and delivery approach.",
            },
            {
              title: "Deliver & Review",
              description:
                "Conduct the agreed program and review feedback and progress.",
            },
          ].map((step, index) => (
            <div
              className="partnership-collaboration-step"
              key={step.title}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Final CTA */}
      <Reveal
        as="section"
        className="partnerships-final-cta"
      >
        <div>
          <span>START A COLLABORATION</span>

          <h2>
            Let's Create Opportunities Together.
          </h2>

          <p>
            Have a training requirement, campus initiative, seminar,
            or institutional partnership idea? Let's discuss how
            we can work together.
          </p>
        </div>

        <Link to="/enquiry">
          Discuss a Partnership
          <ArrowUpRight size={19} />
        </Link>
      </Reveal>

    </main>
  );
}

export default PartnershipsPage;
