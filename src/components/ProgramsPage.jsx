import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  BriefcaseBusiness,
  FolderKanban,
  Presentation,
  BookOpen,
  Code2,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
  Wrench,
  Award,
  Building2,
  Cpu,
  BrainCircuit,
  Monitor,
  Microscope,
  FileText,
  ShieldCheck,
  Route,
} from "lucide-react";

import "./ProgramsPage.css";

const programs = [
  {
    id: "industrial-training",
    number: "01",
    title: "Stipend-Based Industrial Training",
    subtitle: "For Diploma Students · All Engineering Branches",
    category: "DIPLOMA STUDENTS",
    description:
      "Connect classroom knowledge with practical engineering applications through structured, branch-oriented industrial training.",
    icon: GraduationCap,
    highlights: [
      "Training opportunities across Diploma engineering branches",
      "AP and Telangana SBTET curriculum-oriented learning",
      "Branch-specific technical concepts and practical exercises",
      "Industry-oriented assignments and demonstrations",
      "Project exposure and technical skill development",
      "Professional communication and workplace awareness",
    ],
    areas: [
      "Civil Engineering",
      "Electrical & Electronics Engineering",
      "Electronics & Communication Engineering",
      "Mechanical Engineering",
      "Computer Engineering",
      "Computer Science & Engineering",
      "Artificial Intelligence & Machine Learning",
      "Information Technology",
    ],
    note:
      "Training duration, stipend availability, eligibility and certificates depend on the specific program and applicable terms.",
  },
  {
    id: "internships",
    number: "02",
    title: "Internship Programs",
    subtitle: "For B.Tech & Degree Students",
    category: "CAREER EXPERIENCE",
    description:
      "Develop practical skills and gain exposure to professional workflows through structured internship opportunities across relevant disciplines.",
    icon: BriefcaseBusiness,
    highlights: [
      "Discipline-oriented internship opportunities",
      "Practical technical learning",
      "Guided assignments and activities",
      "Project-based experience",
      "Professional skills development",
      "Career preparation and guidance",
    ],
    areas: [
      "Computer Science & Engineering",
      "Information Technology",
      "Artificial Intelligence & Machine Learning",
      "Electronics & Communication",
      "Electrical & Electronics",
      "Civil Engineering",
      "Mechanical Engineering",
      "Other relevant disciplines",
    ],
    note:
      "Internship duration, eligibility, certificates and any institutional or AICTE-related requirements are subject to the specific program arrangement.",
  },
  
{
  id: "projects",
  number: "03",
  title: "Mini & Major Projects",
  subtitle: "Academic Projects · Practical Learning · Innovation",
  category: "PROJECT DEVELOPMENT",
  description:
    "Turn your academic knowledge into practical solutions with Mini and Major Project support from SR Tech Solutions. Explore project ideas, develop technical skills and gain hands-on experience through guided project planning, implementation and presentation.",

  icon: FolderKanban,

  highlights: [
    "Mini project guidance for Diploma and Degree students",
    "Final-year major project support",
    "Innovative and industry-relevant project topics",
    "Project planning and topic selection",
    "Hardware and software project guidance",
    "Practical implementation and testing support",
    "Project documentation and report preparation",
    "PPT, technical presentation and viva preparation"
  ],

  areas: [
    "Web Development and Software Applications",
    "Python, Java and Programming Projects",
    "Artificial Intelligence and Machine Learning",
    "Internet of Things (IoT) and Embedded Systems",
    "Electrical and Electronics Projects",
    "Civil and Mechanical Engineering Projects",
    "Research-Based and Emerging Technology Projects",
    "Interdisciplinary Engineering Solutions"
  ],

  note:
    "Project topics, development scope, hardware or software requirements, documentation and guidance are finalized according to the student's academic discipline, institution guidelines and project requirements."
},

  {
    id: "workshops",
    number: "04",
    title: "Workshops & FDPs",
    subtitle: "For Students · Faculty · Institutions",
    category: "KNOWLEDGE & SKILL DEVELOPMENT",
    description:
      "Interactive technical workshops and Faculty Development Programs designed to encourage continuous learning and knowledge sharing.",
    icon: Presentation,
    highlights: [
      "Technical workshops for students",
      "Faculty Development Programs",
      "Emerging technology sessions",
      "Hands-on demonstrations",
      "Expert-led learning sessions",
      "Institution-specific training programs",
    ],
    areas: [
      "Programming and Software Technologies",
      "Artificial Intelligence and Data Analytics",
      "Emerging Engineering Technologies",
      "Industry Tools and Applications",
      "Professional and Technical Skills",
    ],
    note:
      "Topics, duration, delivery mode and participation arrangements can be planned according to institutional requirements.",
  },
  {
    id: "research",
    number: "05",
    title: "Research & Publications",
    subtitle: "Research Guidance · Technical Writing",
    category: "RESEARCH & INNOVATION",
    description:
      "Encourage research thinking and technical communication by helping students and academic teams develop and present their ideas.",
    icon: BookOpen,
    highlights: [
      "Research topic exploration",
      "Literature review guidance",
      "Research methodology support",
      "Technical paper writing guidance",
      "Formatting and presentation support",
      "Publication process awareness",
    ],
    areas: [
      "Engineering Research",
      "Computer Science and IT",
      "Emerging Technologies",
      "Interdisciplinary Research",
    ],
    note:
      "Research guidance does not guarantee acceptance or publication. Final research work and submission decisions remain with the authors.",
  },
  {
    id: "it-programs",
    number: "06",
    title: "Future-Ready IT & Engineering Programs",
    subtitle: "Multi-Domain Technical Training · Batch-Based Programs",
    category: "IT & ENGINEERING SKILLS",
    description:
      "Build practical technology skills through training programs across Computer Science, Electronics, Electrical, Mechanical and Civil Engineering. Computer Science and IT form our primary focus, while programs for other engineering domains are arranged according to batch requirements and trainer availability.",
    icon: Code2,
    highlights: [
      "CSE and IT-focused software and emerging technology programs",
      "Additional technical learning areas for ECE, EEE, Mechanical and Civil students",
      "Batch-based course planning and trainer coordination",
      "Practical exercises, demonstrations and tool familiarisation",
      "Project-oriented learning where applicable",
      "Flexible duration based on course scope and institutional needs",
    ],
    areas: [
      "Computer Science & Information Technology",
      "Electronics & Communication Engineering",
      "Electrical & Electronics Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
    ],
    note:
      "Course topics, trainer allocation, syllabus, duration and schedule are finalised based on student batch requirements, institutional needs and trainer availability. Not every course runs continuously.",
  },
];

const branches = [
  {
    title: "Civil Engineering",
    image: "https://snu.edu.in/site/assets/files/15637/b.tech.civilengineering.1600x0.webp",
    areas: [
      "AutoCAD and technical drafting",
      "Building planning and estimation",
      "Surveying concepts",
      "Structural and construction basics",
    ],
  },
  {
    title: "Electrical & Electronics",
    image: "https://live.staticflickr.com/65535/50011695713_89c1651159_4k.jpg",
    areas: [
      "Electrical machines and circuits",
      "Electrical wiring and safety",
      "Power systems fundamentals",
      "PLC and automation concepts",
    ],
  },
  {
    title: "Electronics & Communication",
    image: "https://gct.ac.in/sites/gct.ac.in/files/styles/department_banner_images/public/IMG-20251031-WA0104.jpg?itok=bMaC_hcN",
    areas: [
      "Electronic circuit fundamentals",
      "Embedded systems",
      "Microcontrollers and Arduino",
      "Sensors and IoT applications",
    ],
  },
  {
    title: "Mechanical Engineering",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1w1Ss8LnToYQ_WgmHYaUx7um13BopxPVMcORZPIpJdpCCsEB9VK568VYS&s=10",
    areas: [
      "Engineering drawing",
      "3D modelling concepts",
      "CAD tools and applications",
      "Manufacturing fundamentals",
    ],
  },
  {
    title: "Computer Engineering",
    image: "https://i0.wp.com/nationalskillsnetwork.in/wp-content/uploads/2016/02/Livelihood-College-Sukma-Computer-Training-scaled-1.jpg",
    areas: [
      "Programming fundamentals",
      "Database concepts",
      "Web application development",
      "Software project demonstrations",
    ],
  },
  {
    title: "CSE, AIML & Information Technology",
    image: "https://www.chitkara.edu.in/wp-content/uploads/2025/01/cse-aiml-desk.jpg",
    areas: [
      "Python and Java programming",
      "Artificial Intelligence fundamentals",
      "Web technologies",
      "Data analytics and networking",
    ],
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "Build a strong foundation by understanding engineering concepts, tools and their practical applications.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Explore relevant technologies, equipment, software and discipline-specific applications.",
    icon: Target,
  },
  {
    number: "03",
    title: "Practise",
    description:
      "Strengthen technical knowledge through guided exercises, demonstrations and hands-on activities.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Apply the concepts through assignments, practical tasks and project-oriented learning.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Prepare",
    description:
      "Develop communication, presentation and workplace skills for future opportunities.",
    icon: Award,
  },
];

function IndustrialTrainingDetails() {
  return (
    <div className="industrial-details">
      {/* Introduction */}
      <section className="industrial-intro">
        <div className="industrial-intro-content">
          <span className="industrial-eyebrow">
            STIPEND-BASED INDUSTRIAL TRAINING
          </span>

          <h2>
            Turning Technical Knowledge into
            <span> Practical Industry Skills.</span>
          </h2>

          <p>
            <b style={{ color: "#070707", fontSize: "20px" }}>SR Tech Solutions</b> provides structured industrial
            training opportunities for Diploma students across
            engineering disciplines. The program focuses on
            practical exposure, technical skill development and
            understanding how classroom concepts are applied
            in real-world engineering environments.
          </p>

          <div className="industrial-intro-points">
            <span>
              <CheckCircle2 size={17} />
              AP & Telangana SBTET students
            </span>
            <span>
              <CheckCircle2 size={17} />
              Multiple engineering branches
            </span>
            <span>
              <CheckCircle2 size={17} />
              Practical-oriented learning
            </span>
          </div>

          <a href="/enquiry" className="industrial-primary-btn">
            Enquire About Training
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="industrial-intro-image">
          <img
            src="https://i.pinimg.com/474x/4a/15/69/4a1569316f56cab38e657949aaa85ce1.jpg"
            alt="Engineering students participating in practical industrial training"
          />
          <div className="industrial-image-caption">
            <GraduationCap size={22} />
            <div>
              <strong>Learn Beyond the Classroom</strong>
              <span>Practical skills. Real understanding.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why this program */}
      <section className="industrial-section">
        <div className="industrial-section-heading">
          <span>WHY INDUSTRIAL TRAINING?</span>
          <h3>Experience Learning Beyond Textbooks</h3>
          <p>
            Build a connection between academic knowledge and
            practical engineering applications.
          </p>
        </div>

        <div className="industrial-benefit-grid">
          <div className="industrial-benefit-card">
            <div className="industrial-benefit-icon">
              <Wrench size={23} />
            </div>
            <h4>Practical Exposure</h4>
            <p>
              Understand how engineering concepts are used
              through demonstrations and practical activities.
            </p>
          </div>

          <div className="industrial-benefit-card">
            <div className="industrial-benefit-icon">
              <Target size={23} />
            </div>
            <h4>Technical Skills</h4>
            <p>
              Develop familiarity with relevant tools,
              technologies and discipline-specific applications.
            </p>
          </div>

          <div className="industrial-benefit-card">
            <div className="industrial-benefit-icon">
              <FolderKanban size={23} />
            </div>
            <h4>Project Exposure</h4>
            <p>
              Explore practical assignments and project-based
              learning activities.
            </p>
          </div>

          <div className="industrial-benefit-card">
            <div className="industrial-benefit-icon">
              <Users size={23} />
            </div>
            <h4>Career Readiness</h4>
            <p>
              Improve communication, teamwork and professional
              awareness.
            </p>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="industrial-section industrial-branches-section">
        <div className="industrial-section-heading">
          <span>BRANCH-WISE TRAINING</span>
          <h3>Training Across Engineering Disciplines</h3>
          <p>
            Explore learning areas relevant to your Diploma
            engineering branch.
          </p>
        </div>

        <div className="industrial-branch-grid">
          {branches.map((branch, index) => (
            <div className="industrial-branch-card" key={branch.title}>
              <div className="industrial-branch-image">
                <img
                  src={branch.image}
                  alt={`${branch.title} industrial training`}
                  loading="lazy"
                />
              </div>

              <div className="industrial-branch-content">
                <span className="industrial-branch-number">
                  BRANCH 0{index + 1}
                </span>

                <h4>{branch.title}</h4>

                <ul>
                  {branch.areas.map((area) => (
                    <li key={area}>
                      <CheckCircle2 size={15} />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning process */}
      <section className="industrial-section industrial-process-section">
        <div className="industrial-section-heading">
          <span>OUR LEARNING APPROACH</span>
          <h3>From Concepts to Practical Understanding</h3>
          <p>
            A structured learning journey designed to help
            students understand, practise and apply technical skills.
          </p>
        </div>

        <div className="industrial-process-grid">
          {learningSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="industrial-process-card" key={step.number}>
                <div className="industrial-process-top">
                  <span>{step.number}</span>
                  <Icon size={23} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Skills and outcomes */}
      <section className="industrial-section">
        <div className="industrial-outcomes-grid">
          <div className="industrial-outcome-panel">
            <span>SKILLS DEVELOPMENT</span>
            <h3>What You Can Develop</h3>
            <ul>
              <li><CheckCircle2 size={17} /> Technical fundamentals</li>
              <li><CheckCircle2 size={17} /> Tool and technology familiarity</li>
              <li><CheckCircle2 size={17} /> Practical problem-solving</li>
              <li><CheckCircle2 size={17} /> Project understanding</li>
              <li><CheckCircle2 size={17} /> Communication and teamwork</li>
              <li><CheckCircle2 size={17} /> Professional awareness</li>
            </ul>
          </div>

          <div className="industrial-outcome-panel industrial-outcome-blue">
            <span>ENGINEERING APPLICATIONS</span>
            <h3>Explore Relevant Domains</h3>
            <ul>
              <li><CheckCircle2 size={17} /> Design and drafting applications</li>
              <li><CheckCircle2 size={17} /> Electrical and automation systems</li>
              <li><CheckCircle2 size={17} /> Electronics and embedded systems</li>
              <li><CheckCircle2 size={17} /> Mechanical design and modelling</li>
              <li><CheckCircle2 size={17} /> Software and application development</li>
              <li><CheckCircle2 size={17} /> Emerging engineering technologies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career support */}
      <section className="industrial-career-section">
        <div className="industrial-career-icon">
          <Users size={29} />
        </div>

        <div>
          <span>BEYOND TECHNICAL TRAINING</span>
          <h3>Preparing Students for the Professional World</h3>
          <p>
            Along with technical learning, students can develop
            workplace awareness, communication, teamwork,
            presentation and career-planning skills through
            relevant learning activities.
          </p>
        </div>
      </section>

      {/* Eligibility and information */}
      <section className="industrial-eligibility">
        <div>
          <span>PROGRAM ELIGIBILITY</span>
          <h3>Who Can Apply?</h3>
          <p>
            Diploma students from relevant engineering branches
            under AP and Telangana SBTET can enquire about
            available industrial training opportunities.
          </p>
        </div>

        <div className="industrial-eligibility-note">
          <strong>Important Program Information</strong>
          <p>
            The program title refers to stipend-based training
            opportunities. Stipend availability, amount, duration,
            eligibility, selection and payment conditions are
            subject to the specific training arrangement and
            applicable terms. These details will be communicated
            before enrolment. Do not assume a stipend is guaranteed.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="industrial-final-cta">
        <div>
          <span>TAKE THE NEXT STEP</span>
          <h3>Ready to Build Your Practical Skills?</h3>
          <p>
            Connect with SR Tech Solutions to learn about
            current industrial training opportunities.
          </p>
        </div>

        <a href="/enquiry">
          Enquire Now
          <ArrowUpRight size={18} />
        </a>
      </section>
    </div>
  );
}


const internshipBenefits = [
  {
    title: "Practical Industry Exposure",
    description:
      "Understand professional workflows through practical activities, demonstrations and guided learning.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Live Project Experience",
    description:
      "Apply technical concepts by working on assignments and project-oriented activities.",
    icon: FolderKanban,
  },
  {
    title: "Mentorship & Guidance",
    description:
      "Learn with guidance, feedback and support throughout the internship journey.",
    icon: Users,
  },
  {
    title: "Career Development",
    description:
      "Build communication, teamwork, presentation and interview preparation skills.",
    icon: GraduationCap,
  },
];

const internshipHighlights = [
  "Discipline-oriented internship opportunities",
  "Industry-focused technical learning",
  "Practical assignments and demonstrations",
  "Live and guided project activities",
  "Mentor guidance and progress reviews",
  "Professional development sessions",
  "Resume and interview preparation guidance",
  "Technical presentation opportunities",
];

const internshipDurations = [
  { duration: "4 Weeks", description: "Short-term practical learning" },
  { duration: "6 Weeks", description: "Focused technical experience" },
  { duration: "8 Weeks", description: "Extended project-oriented learning" },
  { duration: "3 Months", description: "Structured internship experience" },
  { duration: "6 Months", description: "Longer-term learning opportunity" },
];

const internshipEligibility = [
  "B.Tech / B.E students",
  "Degree students",
  "Pre-final-year students",
  "Final-year students",
  "Eligible recent graduates",
];

const internshipMethods = [
  {
    number: "01",
    title: "Learn",
    description:
      "Understand the fundamentals and concepts relevant to your selected domain.",
  },
  {
    number: "02",
    title: "Practise",
    description:
      "Strengthen your knowledge through practical exercises and technical activities.",
  },
  {
    number: "03",
    title: "Implement",
    description:
      "Apply your learning through assignments, demonstrations and project work.",
  },
  {
    number: "04",
    title: "Evaluate",
    description:
      "Review your progress through assessments, presentations and feedback.",
  },
];

const internshipOutcomes = [
  "Practical understanding of selected technologies",
  "Experience with relevant tools and workflows",
  "Problem-solving and analytical thinking",
  "Project development and implementation skills",
  "Teamwork and professional communication",
  "Resume and interview preparation",
];

const internshipDomains = [
  "Computer Science & Engineering",
  "Information Technology",
  "Artificial Intelligence & Machine Learning",
  "Electronics & Communication Engineering",
  "Electrical & Electronics Engineering",
  "Civil Engineering",
  "Mechanical Engineering",
  "Other relevant engineering disciplines",
];

function InternshipDetails() {
  return (
    <div className="internship-details">

      {/* Internship Hero */}
      <section className="internship-intro">
        <div className="internship-intro-content">
          <span className="internship-eyebrow">
            INTERNSHIP PROGRAMS · B.TECH & DEGREE
          </span>

          <h2>
            Turn Your Knowledge Into
            <span> Practical Experience.</span>
          </h2>

          <p>
            <b style={{ color: "#070707", fontSize: "20px" }}>SR Tech Solutions</b> offers structured internship learning
            opportunities for B.Tech and Degree students across relevant
            disciplines. Gain practical exposure, explore technologies,
            work on guided projects and develop skills that support your
            professional journey.
          </p>

          <div className="internship-intro-points">
            <span>
              <CheckCircle2 size={17} />
              Practical learning
            </span>
            <span>
              <CheckCircle2 size={17} />
              Project experience
            </span>
            <span>
              <CheckCircle2 size={17} />
              Career guidance
            </span>
          </div>

          <a href="/enquiry" className="internship-primary-btn">
            Explore Internship Opportunities
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="internship-intro-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfg38dTPPHorY3xNjDpfZTseE5C_F2ojy05dC778TFL4Z4hIwrzbLmBvEA&s=10"
            alt="Students participating in a professional internship"
          />

          <div className="internship-image-caption">
            <BriefcaseBusiness size={22} />
            <div>
              <strong>Learn. Apply. Grow.</strong>
              <span>Build skills through experience.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="internship-section">
        <div className="internship-section-heading">
          <span>WHY CHOOSE OUR INTERNSHIPS?</span>
          <h3>Experience Learning Beyond Academics</h3>
          <p>
            Develop practical knowledge and professional skills through
            structured learning and guided experience.
          </p>
        </div>

        <div className="internship-benefit-grid">
          {internshipBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div className="internship-benefit-card" key={benefit.title}>
                <div className="internship-benefit-icon">
                  <Icon size={23} />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Highlights */}
      <section className="internship-section internship-highlights-section">
        <div className="internship-highlight-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAmpnUfhzQ8HFsrkCfDDnrB4VVlQGkG2Vna0InGcwfELUjJKNgTmAz_g&s=10"
            alt="Students learning through practical activities"
            loading="lazy"
          />
        </div>

        <div className="internship-highlight-content">
          <span>PROGRAM HIGHLIGHTS</span>
          <h3>More Than Just an Internship</h3>
          <p>
            Our learning approach combines technical development,
            practical activities and professional readiness.
          </p>

          <div className="internship-highlight-list">
            {internshipHighlights.map((item) => (
              <div key={item}>
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duration */}
      <section className="internship-section">
        <div className="internship-section-heading">
          <span>FLEXIBLE LEARNING OPTIONS</span>
          <h3>Choose Your Internship Duration</h3>
          <p>
            Internship schedules can be planned according to the
            program structure and institutional requirements.
          </p>
        </div>

        <div className="internship-duration-grid">
          {internshipDurations.map((item, index) => (
            <div className="internship-duration-card" key={item.duration}>
              <span>OPTION 0{index + 1}</span>
              <h4>{item.duration}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility and domains */}
      <section className="internship-section">
        <div className="internship-two-column">
          <div className="internship-info-panel">
            <span>WHO CAN APPLY?</span>
            <h3>Eligibility</h3>

            <ul>
              {internshipEligibility.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="internship-info-panel internship-domain-panel">
            <span>DISCIPLINES</span>
            <h3>Internship Domains</h3>

            <ul>
              {internshipDomains.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Learning methodology */}
      <section className="internship-section internship-method-section">
        <div className="internship-section-heading">
          <span>OUR LEARNING METHODOLOGY</span>
          <h3>A Structured Internship Journey</h3>
          <p>
            Progress through a learning process that connects
            technical concepts with practical implementation.
          </p>
        </div>

        <div className="internship-method-grid">
          {internshipMethods.map((step) => (
            <div className="internship-method-card" key={step.number}>
              <span>{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="internship-section">
        <div className="internship-outcomes">
          <div>
            <span>YOUR LEARNING OUTCOMES</span>
            <h3>What You Can Gain</h3>
            <p>
              Build a stronger foundation for academic projects,
              professional opportunities and future career growth.
            </p>
          </div>

          <ul>
            {internshipOutcomes.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certification and career guidance */}
      <section className="internship-career-section">
        <div className="internship-career-icon">
          <Award size={29} />
        </div>

        <div>
          <span>CAREER & PROFESSIONAL DEVELOPMENT</span>
          <h3>Prepare for Your Next Opportunity</h3>
          <p>
            Depending on the internship arrangement, eligible
            participants may receive completion documentation.
            Students can also benefit from relevant resume guidance,
            interview preparation and professional development support.
          </p>
        </div>
      </section>

      {/* Important information */}
      <section className="internship-information">
        <div>
          <span>IMPORTANT PROGRAM INFORMATION</span>
          <h3>Plan Your Internship With Us</h3>
          <p>
            Available domains, duration, eligibility, fees, schedules,
            certification and selection conditions vary by program.
            Any institutional or AICTE-related requirements will be
            communicated according to the applicable arrangement.
            Internship completion does not guarantee employment or
            placement.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="internship-final-cta">
        <div>
          <span>START YOUR PROFESSIONAL JOURNEY</span>
          <h3>Ready to Gain Practical Experience?</h3>
          <p>
            Connect with SR Tech Solutions to explore internship
            opportunities in your discipline.
          </p>
        </div>

        <a href="/enquiry">
          Enquire Now
          <ArrowUpRight size={18} />
        </a>
      </section>

    </div>
  );
}




/* =========================================
   MINI & MAJOR PROJECT DETAILS
   Kept inside the existing ProgramsPage.jsx
========================================= */
function ProjectsDetails() {
  const projectDomains = [
    {
      icon: Code2,
      title: "Web Development & Software",
      topics: [
        "Full-Stack Web Applications",
        "Student Management Systems",
        "E-Commerce Applications",
        "Cloud-Based Applications",
        "Mobile Application Development",
      ],
    },
    {
      icon: BrainCircuit,
      title: "Artificial Intelligence & Machine Learning",
      topics: [
        "Machine Learning Applications",
        "Deep Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
    },
    {
      icon: Cpu,
      title: "IoT & Embedded Systems",
      topics: [
        "Smart Home Automation",
        "IoT-Based Monitoring Systems",
        "Arduino and ESP32 Projects",
        "Sensor-Based Applications",
        "Embedded System Design",
      ],
    },
    {
      icon: Wrench,
      title: "Electrical & Electronics",
      topics: [
        "Power Electronics Applications",
        "Renewable Energy Systems",
        "Electrical Automation",
        "Wireless Communication",
        "Control System Applications",
      ],
    },
    {
      icon: Building2,
      title: "Civil & Mechanical Engineering",
      topics: [
        "CAD-Based Design Projects",
        "3D Modelling and Simulation",
        "Structural Analysis Applications",
        "Engineering Design",
        "Manufacturing Concepts",
      ],
    },
    {
      icon: BookOpen,
      title: "Research & Emerging Technologies",
      topics: [
        "Research-Oriented Projects",
        "Innovative Problem Solving",
        "Industry-Relevant Concepts",
        "Data Analytics Applications",
        "Interdisciplinary Projects",
      ],
    },
  ];

  const projectSupport = [
    {
      icon: Lightbulb,
      title: "Topic Selection",
      description:
        "Explore suitable project ideas based on your academic branch, interests and requirements.",
    },
    {
      icon: Target,
      title: "Project Planning",
      description:
        "Understand the project scope, objectives, requirements and implementation approach.",
    },
    {
      icon: Code2,
      title: "Development Guidance",
      description:
        "Work through software development, hardware implementation or simulation as applicable.",
    },
    {
      icon: Wrench,
      title: "Testing & Debugging",
      description:
        "Review project functionality, identify issues and improve the implementation.",
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description:
        "Prepare project reports, technical descriptions and supporting documentation.",
    },
    {
      icon: Presentation,
      title: "Presentation & Viva",
      description:
        "Prepare project demonstrations, presentations and technical explanations.",
    },
  ];

  const projectSteps = [
    "Initial discussion and understanding project requirements",
    "Project topic selection and scope finalization",
    "Planning, design and technology selection",
    "Implementation and development guidance",
    "Testing, debugging and documentation",
    "Project demonstration and presentation preparation",
  ];

  return (
    <div className="projects-details">
      <section className="projects-intro">
        <div className="projects-intro-content">
          <span className="projects-eyebrow">
            MINI & MAJOR PROJECT DEVELOPMENT
          </span>

          <h2>
            Build Your Ideas Into
            <span> Practical Projects.</span>
          </h2>

          <p>
            <strong className="projects-company-name">
              SR Tech Solutions
            </strong>{" "}
            provides project guidance and development support for students
            who want to strengthen their technical knowledge through
            practical work. From topic selection and planning to
            implementation, testing, documentation and presentation,
            students can explore project work aligned with their academic
            discipline and institutional requirements.
          </p>

          <div className="projects-intro-points">
            <span><CheckCircle2 size={17} /> Mini & Major Project Guidance</span>
            <span><CheckCircle2 size={17} /> Hardware & Software Domains</span>
            <span><CheckCircle2 size={17} /> Technical Documentation Support</span>
          </div>

          <a href="/enquiry" className="projects-primary-btn">
            Enquire About Projects <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="projects-intro-image">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1100&q=85"
            alt="Engineering students working on a technical project in a laboratory"
            loading="lazy"
          />
          <div className="projects-image-caption">
            <Cpu size={23} />
            <div>
              <strong>Learn. Build. Innovate.</strong>
              <span>Transform concepts into practical solutions.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-section-heading">
          <span>PROJECT CATEGORIES</span>
          <h3>Mini Projects & Major Projects</h3>
          <p>
            Project complexity and scope are considered according to the
            student's academic level and requirements.
          </p>
        </div>

        <div className="projects-category-grid">
          <div className="projects-category-card">
            <div className="projects-category-icon"><Monitor size={27} /></div>
            <span className="projects-category-label">01 / MINI PROJECTS</span>
            <h4>Mini Projects</h4>
            <p>
              Build a strong technical foundation by applying classroom
              concepts to focused and manageable project ideas.
            </p>
            <h5>Suitable for</h5>
            <div className="projects-tags">
              <span>Diploma</span><span>Degree</span><span>B.Tech</span>
              <span>Early Academic Years</span>
            </div>
            <ul>
              <li><CheckCircle2 /> Programming-based applications</li>
              <li><CheckCircle2 /> Basic web and software solutions</li>
              <li><CheckCircle2 /> Electronics and circuit models</li>
              <li><CheckCircle2 /> Sensor and microcontroller projects</li>
              <li><CheckCircle2 /> Small-scale engineering prototypes</li>
            </ul>
          </div>

          <div className="projects-category-card projects-major-card">
            <div className="projects-category-icon"><BrainCircuit size={27} /></div>
            <span className="projects-category-label">02 / MAJOR PROJECTS</span>
            <h4>Major Projects</h4>
            <p>
              Explore comprehensive academic projects involving research,
              design, development, implementation and technical evaluation.
            </p>
            <h5>Suitable for</h5>
            <div className="projects-tags">
              <span>Final-Year Diploma</span><span>B.Tech</span>
              <span>Degree</span><span>M.Tech</span>
            </div>
            <ul>
              <li><CheckCircle2 /> Advanced software applications</li>
              <li><CheckCircle2 /> AI and machine learning solutions</li>
              <li><CheckCircle2 /> IoT and embedded systems</li>
              <li><CheckCircle2 /> Research-oriented implementations</li>
              <li><CheckCircle2 /> Interdisciplinary engineering projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-section projects-domains-section">
        <div className="projects-section-heading">
          <span>EXPLORE TECHNICAL DOMAINS</span>
          <h3>Major Project Topics & Technologies</h3>
          <p>
            Explore project ideas across engineering and technology domains.
            Topics are finalized according to the student's branch,
            requirements and project scope.
          </p>
        </div>

        <div className="projects-domain-grid">
          {projectDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div className="projects-domain-card" key={domain.title}>
                <div className="projects-domain-top">
                  <div className="projects-domain-icon"><Icon size={25} /></div>
                  <span>0{index + 1}</span>
                </div>
                <h4>{domain.title}</h4>
                <ul>
                  {domain.topics.map((topic) => (
                    <li key={topic}><CheckCircle2 size={15} /><span>{topic}</span></li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="projects-section projects-support-section">
        <div className="projects-section-heading">
          <span>HOW WE SUPPORT STUDENTS</span>
          <h3>Guidance Across the Project Development Journey</h3>
          <p>
            Students can explore support at different stages of their project
            work according to the agreed requirements.
          </p>
        </div>

        <div className="projects-support-grid">
          {projectSupport.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="projects-support-card" key={item.title}>
                <div className="projects-support-icon"><Icon size={23} /></div>
                <span>STEP 0{index + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="projects-process-section">
        <div className="projects-process-container">
          <div className="projects-process-heading">
            <span>OUR APPROACH</span>
            <h3>From Project Idea to <span>Final Presentation.</span></h3>
            <p>
              A structured approach helps students understand each stage of
              their project development.
            </p>
          </div>
          <div className="projects-process-list">
            {projectSteps.map((step, index) => (
              <div className="projects-process-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-deliverables">
          <div className="projects-deliverables-heading">
            <span>PROJECT OUTPUTS</span>
            <h3>Prepare. Demonstrate. <span>Present with Confidence.</span></h3>
            <p>
              Depending on the agreed project scope, academic requirements
              and selected technologies, project outputs may include:
            </p>
          </div>
          <div className="projects-deliverable-list">
            <div><CheckCircle2 /> Source code and implementation files</div>
            <div><CheckCircle2 /> Circuit diagrams and system designs</div>
            <div><CheckCircle2 /> Project report and documentation</div>
            <div><CheckCircle2 /> Presentation slides</div>
            <div><CheckCircle2 /> Prototype and demonstration guidance</div>
            <div><CheckCircle2 /> Technical explanation and viva preparation</div>
          </div>
        </div>
      </section>

      <section className="projects-information">
        <div>
          <span>IMPORTANT PROJECT INFORMATION</span>
          <h3>Plan Your Project With Us</h3>
          <p>
            Project topics, development scope, technologies, hardware or
            software requirements, documentation and guidance are finalized
            according to the student's academic discipline, institution
            guidelines and project requirements.
          </p>
        </div>
      </section>

      <section className="projects-final-cta">
        <div>
          <span>HAVE A PROJECT IDEA?</span>
          <h3>
            Let's Explore Your Next Project with
            <strong> SR Tech Solutions.</strong>
          </h3>
          <p>
            Share your academic branch, project requirements and area of
            interest. Our team can discuss suitable project guidance and
            available support.
          </p>
        </div>
        <a href="/enquiry">
          Submit Project Enquiry <ArrowUpRight size={18} />
        </a>
      </section>
    </div>
  );
}



function WorkshopsFDPDetails() {
  const workshopTopics = [
    "Artificial Intelligence (AI)",
    "Machine Learning (ML)",
    "Data Science",
    "Internet of Things (IoT)",
    "Embedded Systems",
    "Robotics",
    "Electric Vehicle (EV) Technology",
    "PLC & SCADA",
    "Industrial Automation",
    "Solar Energy Systems",
    "AutoCAD & BIM",
    "Quantity Surveying",
    "Web Development",
    "Python Programming",
    "Java Programming",
    "Cloud Computing",
    "Cyber Security",
  ];

  const fdpTopics = [
    "Emerging Engineering Technologies",
    "Industry-Oriented Curriculum",
    "Outcome-Based Education (OBE)",
    "AI Tools for Teaching & Learning",
    "Research Methodology",
    "Project-Based Learning",
    "Digital Teaching Techniques",
    "Laboratory Development",
    "Industry Best Practices",
    "Student Mentoring & Career Guidance",
  ];

  const engineeringDomains = [
    "Computer Science Engineering (CSE)",
    "Information Technology (IT)",
    "Artificial Intelligence & Data Science",
    "Electronics & Communication Engineering (ECE)",
    "Electrical & Electronics Engineering (EEE)",
    "Mechanical Engineering",
    "Civil Engineering",
    "Emerging Technology Programs",
  ];

  const programFeatures = [
    "Industry Expert Sessions",
    "Hands-on Practical Training",
    "Live Demonstrations",
    "Interactive Learning Activities",
    "Real-Time Case Studies",
    "Project-Based Learning",
    "Question & Answer Sessions",
    "Career Guidance",
    "Latest Software & Tools",
    "Practical Problem Solving",
  ];

  const learningOutcomes = [
    "Understand current industry technologies",
    "Apply practical concepts in teaching and projects",
    "Improve technical and professional skills",
    "Develop innovative project ideas",
    "Enhance classroom and laboratory effectiveness",
    "Strengthen industry-academia collaboration",
    "Prepare students for future careers",
  ];

  const trainingModes = [
    "On-Campus Workshops",
    "Offline Faculty Development Programs",
    "Online Live Sessions",
    "Hybrid Training Programs",
    "Customized Programs for Colleges and Universities",
  ];

  const institutions = [
    "Engineering Colleges",
    "Polytechnic Colleges",
    "Universities",
    "Technical Institutions",
    "Training & Placement Cells",
    "Student Chapters",
    "Professional Associations",
  ];

  const renderTags = (items) => (
    <div className="workshops-tag-grid">
      {items.map((item) => (
        <span className="workshops-tag" key={item}>{item}</span>
      ))}
    </div>
  );

  const renderChecks = (items) => (
    <div className="workshops-check-grid">
      {items.map((item) => (
        <div className="workshops-check-item" key={item}>
          <CheckCircle2 size={17} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="workshops-details">
      <section className="workshops-hero-card">
        <div className="workshops-hero-copy">
          <span className="workshops-eyebrow">PROGRAM 04 · INSTITUTIONAL LEARNING</span>
          <h2>Workshops & Faculty Development Programs (FDP)</h2>
          <h3>Empowering Educators. Inspiring Students. Strengthening Institutions.</h3>
          <p>
            At <strong>SR Tech Solutions</strong>, we believe that quality education begins
            with well-trained faculty and industry-aware students. Our workshops and
            Faculty Development Programs are designed to connect academic learning
            with industry expectations through emerging technologies, practical
            applications and modern teaching methodologies.
          </p>
          <p>
            Programs can be conducted by experienced industry professionals and
            subject experts, with practical knowledge intended for use in classrooms,
            laboratories and real-world projects.
          </p>
        </div>
        <div className="workshops-hero-visual">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1100&q=85"
            alt="Students participating in an educational workshop"
            loading="lazy"
          />
          <div className="workshops-visual-caption">Learn · Practice · Share</div>
        </div>
      </section>

      <section className="workshops-section">
        <div className="workshops-section-heading">
          <span>WHY CHOOSE US</span>
          <h3>Practical Learning for Meaningful Impact</h3>
          <p>
            We focus on practical learning rather than theory alone. Each workshop
            and FDP can include hands-on experience, live demonstrations and
            exposure to current industry trends.
          </p>
        </div>
        <div className="workshops-benefit-grid">
          {[
            ["Faculty Competencies", "Enhance faculty technical competencies.", Users],
            ["Student Employability", "Support students in developing relevant skills.", GraduationCap],
            ["Emerging Technologies", "Introduce participants to new and evolving technologies.", BrainCircuit],
            ["Industry-Academia", "Strengthen collaboration between institutions and industry.", Building2],
            ["Innovation & Research", "Promote an environment that encourages innovation and research.", Lightbulb],
            ["Outcome-Based Education", "Support teaching and learning aligned with OBE practices.", Target],
          ].map(([title, description, Icon]) => (
            <article className="workshops-benefit-card" key={title}>
              <span className="workshops-card-icon"><Icon size={22} /></span>
              <h4>{title}</h4>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workshops-section">
        <div className="workshops-section-heading">
          <span>OUR PROGRAMS</span>
          <h3>Technical Workshops</h3>
          <p>Interactive workshops that provide practical exposure to engineering technologies and related applications.</p>
        </div>
        {renderTags(workshopTopics)}
      </section>

      <section className="workshops-section workshops-fdp-panel">
        <div className="workshops-section-heading">
          <span>FACULTY DEVELOPMENT</span>
          <h3>Faculty Development Programs (FDP)</h3>
          <p>
            FDPs are designed to help educators upgrade technical knowledge,
            teaching practices and research capabilities.
          </p>
        </div>
        {renderTags(fdpTopics)}
      </section>

      <section className="workshops-section">
        <div className="workshops-section-heading">
          <span>WHO CAN PARTICIPATE?</span>
          <h3>Programs for Students and Faculty</h3>
        </div>
        <div className="workshops-audience-grid">
          <article className="workshops-audience-card">
            <div className="workshops-audience-title"><GraduationCap size={23} /><h4>Workshops</h4></div>
            <ul>
              <li>Diploma Students</li>
              <li>B.E. / B.Tech Students</li>
              <li>M.Tech Students</li>
              <li>Degree Students</li>
            </ul>
          </article>
          <article className="workshops-audience-card">
            <div className="workshops-audience-title"><Users size={23} /><h4>Faculty Development Programs</h4></div>
            <ul>
              <li>Assistant Professors</li>
              <li>Associate Professors</li>
              <li>Professors</li>
              <li>Heads of Departments</li>
              <li>Lab Instructors</li>
              <li>Training & Placement Officers</li>
              <li>Academic Coordinators</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="workshops-section">
        <div className="workshops-section-heading">
          <span>ENGINEERING DOMAINS</span>
          <h3>Cross-Disciplinary Coverage</h3>
          <p>Workshops and FDPs can be planned for the following engineering and technology domains.</p>
        </div>
        {renderTags(engineeringDomains)}
      </section>

      <section className="workshops-section workshops-features-panel">
        <div className="workshops-section-heading">
          <span>PROGRAM FEATURES</span>
          <h3>Learn Through Participation</h3>
        </div>
        {renderChecks(programFeatures)}
      </section>

      <section className="workshops-section">
        <div className="workshops-section-heading">
          <span>LEARNING OUTCOMES</span>
          <h3>Knowledge That Can Be Applied</h3>
          <p>Participants are intended to build the understanding and confidence to:</p>
        </div>
        {renderChecks(learningOutcomes)}
      </section>

      <section className="workshops-section workshops-modes-panel">
        <div className="workshops-section-heading">
          <span>FLEXIBLE DELIVERY</span>
          <h3>Training Modes</h3>
          <p>Delivery options can be selected to suit institutional needs.</p>
        </div>
        {renderTags(trainingModes)}
      </section>

      <section className="workshops-section">
        <div className="workshops-section-heading">
          <span>INSTITUTIONAL COLLABORATION</span>
          <h3>Why Institutions Partner with SR Tech Solutions</h3>
          <p>
            SR Tech Solutions works with educational institutions to deliver
            practical, industry-focused training that complements academic
            curricula. Programs can be tailored to institutional requirements,
            helping faculty stay current with technological developments while
            supporting students in building relevant skills. Program structure,
            trainers and delivery plans are discussed with each institution.
          </p>
        </div>
        <div className="workshops-partner-layout">
          <div className="workshops-partner-icon"><Building2 size={38} /></div>
          <div>
            <h4>Who Can Partner With Us?</h4>
            {renderTags(institutions)}
          </div>
        </div>
      </section>

      <section className="workshops-certificate-card">
        <span className="workshops-certificate-icon"><Award size={30} /></span>
        <div>
          <span className="workshops-eyebrow">CERTIFICATE OF PARTICIPATION</span>
          <h3>Recognizing Successful Participation</h3>
          <p>
            Eligible participants will receive a Certificate of Participation
            upon successful completion of the workshop or Faculty Development
            Program, subject to the program's participation and completion criteria.
          </p>
        </div>
      </section>

      <section className="workshops-final-cta">
        <div>
          <span>PARTNER WITH SR TECH SOLUTIONS</span>
          <h3>Let’s Build Future-Ready Engineers Together</h3>
          <p>
            Whether your institution is planning a one-day technical workshop,
            a multi-day Faculty Development Program or customized industry-oriented
            training, connect with our team to discuss your requirements.
          </p>
          <strong>Enhance Knowledge · Build Practical Skills · Foster Innovation</strong>
          <small>Create Industry-Ready Professionals</small>
        </div>
        <a href="/enquiry">Discuss an Institutional Program <ArrowUpRight size={18} /></a>
      </section>
    </div>
  );
}


function ResearchDetails() {
  const services = [
    "Research Topic Selection",
    "Research Methodology Guidance",
    "Literature Review Support",
    "Paper Writing Assistance",
    "Technical Documentation",
    "Plagiarism & Quality Review",
    "Journal & Conference Selection Guidance",
    "Paper Formatting",
    "Publication Support",
    "Research Presentation Guidance",
  ];

  const participants = [
    "Diploma Students",
    "Degree Students",
    "B.Tech Students",
    "M.Tech Students",
    "Ph.D. Scholars",
    "Faculty Members",
    "Researchers",
  ];

  const process = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Choose Your Research Topic",
      description:
        "Select a meaningful and industry-relevant research problem based on your academic interests and objectives.",
    },
    {
      number: "02",
      icon: Microscope,
      title: "Develop Your Research",
      description:
        "Plan, implement, analyze and validate your research work with appropriate guidance.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Write Your Paper",
      description:
        "Prepare a professional research paper with a clear structure, technical content and appropriate formatting.",
    },
    {
      number: "04",
      icon: BookOpen,
      title: "Publication Guidance",
      description:
        "Receive guidance on selecting suitable journals or conferences and preparing your submission.",
    },
  ];

  const benefits = [
    { icon: Users, title: "Research Mentorship", description: "Guidance from subject experts throughout the research process." },
    { icon: Target, title: "Practical Guidance", description: "Research support focused on practical and industry-oriented topics." },
    { icon: Users, title: "Individual Support", description: "One-to-one guidance based on your research requirements." },
    { icon: FileText, title: "Technical Writing", description: "Assistance with technical writing, paper structure and documentation." },
    { icon: ShieldCheck, title: "Research Ethics", description: "Emphasis on originality, academic integrity and responsible research." },
    { icon: BookOpen, title: "Publication Guidance", description: "Support with journal and conference selection and submission preparation." },
    { icon: Target, title: "Requirement-Based Support", description: "Guidance and service scope discussed according to individual requirements." },
    { icon: Route, title: "End-to-End Guidance", description: "Support across the different stages of the research journey." },
  ];

  const outcomes = [
    "Improve technical and subject knowledge",
    "Develop analytical and problem-solving abilities",
    "Strengthen academic and research profiles",
    "Build experience in technical writing",
    "Explore higher education and research opportunities",
    "Develop innovative ideas and research solutions",
  ];

  return (
    <div className="research-details">
      <section className="research-hero">
        <div className="research-hero-content">
          <span className="research-eyebrow">RESEARCH · WRITING · PUBLICATION</span>
          <h2>Turn Your Ideas into <span>Meaningful Research</span></h2>
          <p>
            At <strong>SR Tech Solutions</strong>, we help students and faculty develop
            innovative ideas into structured research work. Our guidance covers the
            research journey, from topic selection and methodology to technical
            writing, review and publication preparation.
          </p>
          <p>
            Whether you are working on an academic project or preparing your first
            research paper, we can help you understand and navigate each stage.
          </p>
          <a href="/enquiry" className="research-primary-btn">
            Enquire About Research Support <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="research-hero-image">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1100&q=85"
            alt="Scientific research laboratory and research equipment"
            loading="lazy"
          />
          <div className="research-image-caption">
            <Microscope size={25} />
            <div>
              <strong>Research & Innovation</strong>
              <span>Explore · Analyze · Create · Contribute</span>
            </div>
          </div>
        </div>
      </section>

      <section className="research-intro-strip">
        <div>
          <span>OUR APPROACH</span>
          <h3>Supporting Every Stage of Your Research Journey</h3>
        </div>
        <p>
          We focus on structured research guidance, technical documentation and
          responsible publication practices. Our aim is to help participants
          develop their own research capabilities and present their work professionally.
        </p>
      </section>

      <section className="research-section">
        <div className="research-section-heading">
          <span>HOW WE HELP</span>
          <h3>Our Research Services</h3>
          <p>Explore research and publication support according to your academic discipline and project requirements.</p>
        </div>
        <div className="research-services-grid">
          {services.map((service) => (
            <div className="research-service-item" key={service}>
              <CheckCircle2 size={19} /><span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="research-audience-section">
        <div className="research-section-heading">
          <span>WHO CAN APPLY?</span>
          <h3>Research Support for Students & Academics</h3>
          <p>Guidance for learners and academic professionals interested in research and technical publications.</p>
        </div>
        <div className="research-audience-grid">
          {participants.map((participant) => (
            <div className="research-audience-card" key={participant}>
              <GraduationCap size={22} /><span>{participant}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="research-process-section">
        <div className="research-section-heading">
          <span>OUR WORKFLOW</span>
          <h3>Our Research Process</h3>
          <p>A structured approach to move from an initial research idea towards a professionally prepared paper.</p>
        </div>
        <div className="research-process-grid">
          {process.map((step) => {
            const Icon = step.icon;
            return (
              <div className="research-process-card" key={step.number}>
                <div className="research-process-top"><span>{step.number}</span><Icon size={27} /></div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="research-section">
        <div className="research-section-heading">
          <span>WHY SR TECH SOLUTIONS?</span>
          <h3>Guidance That Supports Your Research Goals</h3>
          <p>We emphasize quality, practical learning and responsible research practices throughout the process.</p>
        </div>
        <div className="research-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div className="research-benefit-card" key={benefit.title}>
                <div className="research-benefit-icon"><Icon size={24} /></div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="research-value-section">
        <div className="research-value-content">
          <span>THE VALUE OF RESEARCH</span>
          <h3>Why Research Matters</h3>
          <p>Research helps you go beyond textbook knowledge. It encourages critical thinking, technical exploration and the development of solutions to meaningful problems.</p>
          <p>It can also strengthen your academic profile, support higher education interests and help you build skills valuable for your professional career.</p>
        </div>
        <div className="research-value-list">
          {outcomes.map((outcome) => (
            <div key={outcome}><CheckCircle2 size={19} /><span>{outcome}</span></div>
          ))}
        </div>
      </section>

      <section className="research-commitment">
        <div className="research-commitment-icon"><ShieldCheck size={32} /></div>
        <div>
          <span>OUR COMMITMENT</span>
          <h3>Original, Ethical & Quality-Focused Research</h3>
          <p>
            At SR Tech Solutions, we promote original, ethical and high-quality
            research. We encourage participants to understand their work, maintain
            academic integrity, acknowledge sources appropriately and follow
            applicable institutional and publication guidelines.
          </p>
        </div>
      </section>

      <section className="research-final-cta">
        <div>
          <span>START YOUR RESEARCH JOURNEY</span>
          <h3>Let Your Ideas Create Impact</h3>
          <p>
            Connect with SR Tech Solutions to discuss your research topic,
            technical writing needs or publication guidance. Our team can help
            you understand available support based on your requirements.
          </p>
          <strong>Research · Learn · Write · Publish · Succeed</strong>
        </div>
        <a href="/enquiry">Enquire Now <ArrowUpRight size={17} /></a>
      </section>
    </div>
  );
}


function FutureReadyITDetails() {
  const domainPrograms = [
    {
      title: "CSE / IT / AI & DS",
      label: "PRIMARY FOCUS",
      description: "Software development, programming and emerging digital technologies.",
      icon: Code2,
      courses: [
        "Full Stack Web Development",
        "Python and Java Programming",
        "Artificial Intelligence & Machine Learning",
        "Data Science and Data Analytics",
        "Cloud Computing and DevOps",
        "Cybersecurity Fundamentals",
        "Database Management",
        "Software Testing and Automation",
        "Mobile App Development",
      ],
    },
    {
      title: "ECE",
      label: "ELECTRONICS",
      description: "Electronics, embedded platforms and connected-device applications.",
      icon: Cpu,
      courses: [
        "Embedded Systems",
        "Internet of Things (IoT)",
        "VLSI Design Fundamentals",
        "PCB Design",
        "Microcontrollers and Arduino",
        "Robotics Fundamentals",
      ],
    },
    {
      title: "EEE",
      label: "ELECTRICAL",
      description: "Electrical systems, control concepts and automation technologies.",
      icon: Wrench,
      courses: [
        "PLC and SCADA Fundamentals",
        "MATLAB and Simulink",
        "Electrical Machines and Power Systems",
        "Industrial Automation",
        "Electric Vehicle Technology",
        "Solar Energy Systems",
      ],
    },
    {
      title: "Mechanical Engineering",
      label: "DESIGN & MANUFACTURING",
      description: "Computer-aided design, modelling and manufacturing applications.",
      icon: Building2,
      courses: [
        "AutoCAD",
        "SolidWorks",
        "CATIA Fundamentals",
        "3D Modelling and Design",
        "CNC Programming Fundamentals",
        "Product Design Concepts",
      ],
    },
    {
      title: "Civil Engineering",
      label: "CIVIL & CONSTRUCTION",
      description: "Design, drafting and digital tools used in civil engineering workflows.",
      icon: Monitor,
      courses: [
        "AutoCAD and Technical Drafting",
        "Revit and BIM Fundamentals",
        "STAAD.Pro Fundamentals",
        "ETABS Fundamentals",
        "Quantity Surveying",
        "Primavera Fundamentals",
      ],
    },
  ];

  const deliveryPoints = [
    [Users, "Batch-Based Planning", "Programs are planned around student strength, selected topics and institutional requirements."],
    [GraduationCap, "Relevant Trainers", "Subject trainers and experts are coordinated according to the selected domain and batch."],
    [Wrench, "Practical Learning", "Sessions may include demonstrations, guided exercises, tool exposure and projects where relevant."],
    [Target, "Flexible Duration", "The schedule and duration are planned according to the course scope and agreed learning objectives."],
  ];

  const cardStyle = {
    background: "#ffffff",
    border: "1px solid #e5eaf2",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 8px 28px rgba(20, 42, 74, 0.06)",
  };

  return (
    <div className="future-it-details" style={{ color: "#25344a" }}>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "30px", alignItems: "center", padding: "12px 0 34px" }}>
        <div>
          <span style={{ color: "#2864bd", fontWeight: 800, letterSpacing: "1.5px", fontSize: "12px" }}>FUTURE-READY IT & ENGINEERING PROGRAMS</span>
          <h2 style={{ color: "#142a4a", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.15, margin: "14px 0" }}>Build Skills for Tomorrow’s Technology</h2>
          <p style={{ color: "#5b687a", lineHeight: 1.8, fontSize: "16px" }}>
            SR Tech Solutions organises practical technical training across multiple engineering domains. Our primary focus is CSE and IT, with additional domain-specific programs arranged for ECE, EEE, Mechanical and Civil batches.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "9px", marginTop: "20px" }}>
            {["CSE & IT", "ECE", "EEE", "Mechanical", "Civil"].map((name) => (
              <span key={name} style={{ background: "#edf4ff", color: "#245ca8", borderRadius: "30px", padding: "8px 13px", fontSize: "13px", fontWeight: 700 }}>{name}</span>
            ))}
          </div>
          <a href="/enquiry" style={{ display: "inline-flex", alignItems: "center", gap: "9px", marginTop: "24px", padding: "13px 19px", borderRadius: "8px", background: "#174a91", color: "#fff", textDecoration: "none", fontWeight: 700 }}>
            Discuss Your Training Requirements <ArrowUpRight size={17} />
          </a>
        </div>
        <div style={{ borderRadius: "18px", overflow: "hidden", minHeight: "270px", background: "#eaf1fb" }}>
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85" alt="Students working with technology and engineering equipment" loading="lazy" style={{ width: "100%", height: "100%", minHeight: "270px", objectFit: "cover", display: "block" }} />
        </div>
      </section>

      <section style={{ padding: "24px 0 34px" }}>
        <div style={{ marginBottom: "22px" }}>
          <span style={{ color: "#2864bd", fontWeight: 800, letterSpacing: "1.3px", fontSize: "12px" }}>EXPLORE BY ENGINEERING DOMAIN</span>
          <h3 style={{ color: "#142a4a", fontSize: "28px", margin: "9px 0" }}>Technical Programs Across Multiple Domains</h3>
          <p style={{ color: "#687589", lineHeight: 1.7, margin: 0 }}>The following are example learning areas. The exact course selection is confirmed for each batch.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 265px), 1fr))", gap: "18px" }}>
          {domainPrograms.map((domain) => {
            const Icon = domain.icon;
            return (
              <article key={domain.title} style={cardStyle}>
                <div style={{ width: "46px", height: "46px", display: "grid", placeItems: "center", borderRadius: "12px", background: "#edf4ff", color: "#245ca8", marginBottom: "15px" }}><Icon size={23} /></div>
                <span style={{ color: "#3470bf", fontSize: "10px", fontWeight: 800, letterSpacing: "1.2px" }}>{domain.label}</span>
                <h4 style={{ color: "#142a4a", fontSize: "19px", margin: "7px 0" }}>{domain.title}</h4>
                <p style={{ color: "#687589", lineHeight: 1.6, fontSize: "13px", minHeight: "42px" }}>{domain.description}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "grid", gap: "10px" }}>
                  {domain.courses.map((course) => (
                    <li key={course} style={{ display: "flex", alignItems: "flex-start", gap: "8px", color: "#46566c", fontSize: "13px", lineHeight: 1.5 }}><CheckCircle2 size={15} color="#2b70c9" style={{ flexShrink: 0, marginTop: "2px" }} />{course}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section style={{ padding: "26px 0 34px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ color: "#2864bd", fontWeight: 800, letterSpacing: "1.3px", fontSize: "12px" }}>HOW WE ORGANISE TRAINING</span>
          <h3 style={{ color: "#142a4a", fontSize: "27px", margin: "9px 0" }}>Flexible, Batch-Based Training</h3>
          <p style={{ color: "#687589", lineHeight: 1.7 }}>We coordinate the program around the selected course, batch strength and institutional requirements.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "15px" }}>
          {deliveryPoints.map(([Icon, title, description]) => (
            <article key={title} style={{ ...cardStyle, padding: "20px" }}>
              <Icon size={23} color="#2864bd" />
              <h4 style={{ color: "#142a4a", margin: "12px 0 7px", fontSize: "16px" }}>{title}</h4>
              <p style={{ color: "#687589", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "#f0f5fc", border: "1px solid #dce8f7", borderRadius: "16px", padding: "24px", margin: "8px 0 26px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", color: "#174a91" }}><BookOpen size={21} /><strong>Program Availability</strong></div>
        <p style={{ color: "#53647a", lineHeight: 1.75, margin: 0 }}>
          Courses, trainer allocation, syllabus, duration and schedules are finalised based on student batch requirements, institutional needs and trainer availability. Programs are arranged on demand and may not run continuously throughout the year. Contact our team to discuss your preferred domain and training requirements.
        </p>
      </section>

      <section style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "18px", background: "#142a4a", borderRadius: "16px", padding: "25px", color: "#fff" }}>
        <div style={{ flex: "1 1 260px" }}>
          <h3 style={{ margin: "0 0 7px", fontSize: "22px" }}>Planning a Training Batch?</h3>
          <p style={{ margin: 0, color: "#d7e2f1", lineHeight: 1.6, fontSize: "14px" }}>Tell us your engineering domain, preferred topics and batch requirements.</p>
        </div>
        <a href="/enquiry" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#174a91", borderRadius: "8px", padding: "12px 17px", textDecoration: "none", fontWeight: 800 }}>Enquire Now <ArrowUpRight size={17} /></a>
      </section>
    </div>
  );
}

function ProgramsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeProgram, setActiveProgram] = useState(
    "industrial-training"
  );

  // Read the selected program from the URL
 useEffect(() => {
  const hash = location.hash.replace("#", "");
  const matchingProgram = programs.find(
    (program) => program.id === hash
  );

  if (matchingProgram) {
    setActiveProgram(matchingProgram.id);

    setTimeout(() => {
      document
        .getElementById("program-detail")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  } else {
    setActiveProgram("industrial-training");
  }
}, [location.hash]);

  // Select a program and update the URL
  const selectProgram = (id) => {
    setActiveProgram(id);
    navigate(`/programs#${id}`);
  };

  const selected =
    programs.find((program) => program.id === activeProgram) ||
    programs[0];

  const ActiveIcon = selected.icon;

  return (
    <main className="programs-page">
      {/* Hero */}
      <section className="programs-hero">
        <div className="programs-hero-content">
          <span className="programs-eyebrow">
            EXPLORE WHAT WE OFFER
          </span>

          <h1>
            Programs That Build
            <span> Skills & Possibilities.</span>
          </h1>

          <p>
            Discover practical training, internships, project
            development, research and technology programs designed
            to connect education with real-world opportunities.
          </p>

          <div className="programs-hero-note">
            <span></span>
            Innovate. Educate. Elevate.
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="programs-main">
        <div className="programs-main-heading">
          <span>OUR PROGRAM PORTFOLIO</span>
          <h2>Explore Our Programs</h2>
          <p>
            Choose an area to discover the opportunities and
            learning experiences offered by SR Tech Solutions.
          </p>
        </div>

        <div className="programs-layout">

          {/* Sidebar */}
          <aside className="programs-sidebar">
            <div className="programs-sidebar-heading">
              <span>PROGRAM CATEGORIES</span>
            </div>

            <div className="programs-sidebar-list">
              {programs.map((program) => {
                const Icon = program.icon;
                const isActive = activeProgram === program.id;

                return (
                  <button
                    key={program.id}
                    className={`program-menu-item ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() => selectProgram(program.id)}
                    aria-pressed={isActive}
                  >
                    <Icon size={19} />

                    <span>{program.title}</span>

                    <ArrowUpRight
                      size={15}
                      className="program-menu-arrow"
                    />
                  </button>
                );
              })}
            </div>

            <div className="programs-sidebar-help">
              <span>NEED GUIDANCE?</span>

              <p>
                Not sure which program is right for you?
                Talk to our team.
              </p>

              <a href="/enquiry">
                Contact Us <ArrowUpRight size={15} />
              </a>
            </div>
          </aside>

          {/* Program Details */}
         <article
  id="program-detail"
  className="program-detail"
  key={selected.id}
>

            {selected.id === "industrial-training" ? (
              <IndustrialTrainingDetails />

            ) : selected.id === "internships" ? (
              <InternshipDetails />

            ) : selected.id === "projects" ? (
              <ProjectsDetails />

            ) : selected.id === "workshops" ? (
              <WorkshopsFDPDetails />

            ) : selected.id === "research" ? (
              <ResearchDetails />

            ) : selected.id === "it-programs" ? (
              <FutureReadyITDetails />

            ) : (
              <>
                <div className="program-detail-top">
                  <div className="program-detail-icon">
                    <ActiveIcon size={27} />
                  </div>

                  <span className="program-detail-number">
                    PROGRAM {selected.number}
                  </span>
                </div>

                <span className="program-category">
                  {selected.category}
                </span>

                <h2>{selected.title}</h2>

                <h3>{selected.subtitle}</h3>

                <p className="program-description">
                  {selected.description}
                </p>

                <div className="program-detail-divider"></div>

                <div className="program-info-block">
                  <h4>What This Program Offers</h4>

                  <div className="program-highlights">
                    {selected.highlights.map((highlight) => (
                      <div
                        className="program-highlight"
                        key={highlight}
                      >
                        <CheckCircle2 size={17} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="program-info-block">
                  <h4>Areas Covered</h4>

                  <div className="program-area-tags">
                    {selected.areas.map((area) => (
                      <span key={area}>{area}</span>
                    ))}
                  </div>
                </div>

                <div className="program-note">
                  <strong>Program Information</strong>
                  <p>{selected.note}</p>
                </div>

                <div className="program-detail-cta">
                  <div>
                    <h4>Interested in this program?</h4>
                    <p>
                      Connect with our team to know more.
                    </p>
                  </div>

                  <a href="/enquiry">
                    Enquire Now <ArrowUpRight size={17} />
                  </a>
                </div>
              </>
            )}

          </article>
        </div>
      </section>
    </main>
  );
}

export default ProgramsPage;

