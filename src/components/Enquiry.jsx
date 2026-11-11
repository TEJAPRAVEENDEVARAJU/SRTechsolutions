
import { useEffect, useRef, useState } from "react";

import PaymentNotice from "./PaymentNotice";

import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Send,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  Building2,
  MapPin,
  Users,
} from "lucide-react";

import "./Enquiry.css";

// Available services
const services = [
  "Future-Ready IT & Engineering Programs",
  "Industrial Training (Diploma)",
  "Internships (B.Tech / Degree)",
  "Skill Development Courses",
  "Mini & Major Projects",
  "Workshops & Faculty Development Programs (FDP)",
  "Research, Paper Writing & Publication",
  "College & Industry Partnerships",
  "Other / General Enquiry",
];

// Available qualifications
const qualifications = [
  "10th",
  "Intermediate",
  "ITI",
  "Diploma",
  "B.E.",
  "B.Tech",
  "B.Sc",
  "BCA",
  "Degree",
  "M.E.",
  "M.Tech",
  "M.Sc",
  "MCA",
  "Ph.D.",
  "Other",
];

// Available durations
const durations = [
  "3 Weeks",
  "4 Weeks",
  "6 Weeks",
  "12 Weeks",
  "12+ Weeks",
];

function Enquiry() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // Form states
  const [role, setRole] = useState("Student");
  const [service, setService] = useState("");
  const [qualification, setQualification] = useState("");
  const [otherQualification, setOtherQualification] = useState("");
  const [duration, setDuration] = useState("");

  // Entrance animation observer
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
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  // Handle role selection
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);

    setQualification("");
    setOtherQualification("");
    setDuration("");
  };

  // Handle service selection
  const handleServiceChange = (selectedService) => {
    setService(selectedService);
    setDuration("");
  };

  // Submit enquiry
  const submitEnquiry = (channel) => {
    const form = formRef.current;

    if (!form) return;

    // Validate all required fields
    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const selectedQualification =
      qualification === "Other"
        ? otherQualification.trim()
        : qualification;

    const details = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),

      role,
      service,

      qualification:
        role === "Organization"
          ? "Not applicable"
          : selectedQualification,

      institution: data.get("institution") || "Not applicable",

      branch: data.get("branch") || "Not applicable",

      studyYear: data.get("studyYear") || "Not specified",

      graduationYear:
        data.get("graduationYear") || "Not specified",

      duration: duration || "Not specified",

      department: data.get("department") || "",

      designation: data.get("designation") || "",

      organizationName: data.get("organizationName") || "",

      organizationType: data.get("organizationType") || "",

      organizationLocation:
        data.get("organizationLocation") || "",

      organizationRequirements:
        data.get("organizationRequirements") || "",

      message:
        data.get("message") || "No additional message",
    };

    // Organization details
    const organizationDetails =
      role === "Organization"
        ? `
Organization Name: ${details.organizationName}
Organization Type: ${details.organizationType}
Location: ${details.organizationLocation}

How SR Tech Solutions can help:
${details.organizationRequirements}
`
        : "";

    // Student details
    const studentDetails =
      role === "Student"
        ? `
Qualification: ${details.qualification}
College / Institution: ${details.institution}
Branch / Specialization: ${details.branch}
Current Study Year: ${details.studyYear}
Preferred Duration: ${details.duration}
`
        : "";

    // Graduate details
    const graduateDetails =
      role === "Graduate"
        ? `
Highest Qualification: ${details.qualification}
College / University: ${details.institution}
Branch / Specialization: ${details.branch}
Year of Graduation: ${details.graduationYear}
Preferred Duration: ${details.duration}
`
        : "";

    // Faculty / Researcher details
    const facultyDetails =
      role === "Faculty / Researcher"
        ? `
Highest Qualification: ${details.qualification}
Institution / University: ${details.institution}
Department: ${details.department}
Designation: ${details.designation}
`
        : "";

    // Complete enquiry message
    const message = `
SR TECH SOLUTIONS - NEW ENQUIRY

Name: ${details.name}
Email: ${details.email}
Mobile: ${details.phone}

Category: ${details.role}
Interested Service: ${details.service}

${studentDetails}
${graduateDetails}
${facultyDetails}
${organizationDetails}

Additional Message:
${details.message}

Thank you.
    `.trim();

    // WhatsApp submission
    if (channel === "whatsapp") {
      const whatsappURL =
        `https://wa.me/918143767679?text=${encodeURIComponent(message)}`;

      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );
    }

    // Email submission
    else {
      const subject = encodeURIComponent(
        `New Enquiry - ${details.service}`
      );

      const body = encodeURIComponent(message);

      window.location.href =
        `mailto:srtechsolutions204@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`enquiry-section ${
        isVisible ? "enquiry-visible" : ""
      }`}
      id="contact"
    >
      <div className="enquiry-container">

        {/* LEFT INFORMATION PANEL */}

        <div className="enquiry-info">

          <span className="enquiry-eyebrow">
            <span className="enquiry-eyebrow-line"></span>
            LET'S CONNECT
          </span>

          <h2>
            Let's Build
            <span> Your Future </span>
            Together.
          </h2>

          <p className="enquiry-intro">
            Whether you're a student, graduate, faculty member
            or organization, we're here to help you take the
            next step through technology, training and innovation.
          </p>

          {/* Benefits */}

          <div className="enquiry-benefits">

            <div className="enquiry-benefit">
              <div className="enquiry-benefit-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <h4>Industry-Relevant Training</h4>
                <p>
                  Learn practical and career-focused skills.
                </p>
              </div>
            </div>

            <div className="enquiry-benefit">
              <div className="enquiry-benefit-icon">
                <BriefcaseBusiness size={22} />
              </div>

              <div>
                <h4>Internships & Projects</h4>
                <p>
                  Gain experience through practical work.
                </p>
              </div>
            </div>

            <div className="enquiry-benefit">
              <div className="enquiry-benefit-icon">
                <BookOpen size={22} />
              </div>

              <div>
                <h4>Learning Opportunities</h4>
                <p>
                  Explore courses and academic support.
                </p>
              </div>
            </div>

          </div>

          {/* Contact note */}

          
<div className="enquiry-contact-note">
  <h4>Have a question?</h4>
  <p className="contact-subtitle">
    Our team is here to help. Get in touch with us.
  </p>

  <a
    href="tel:+918143767679"
    className="enquiry-contact-item"
  >
    <span className="contact-icon">
      <MessageCircle size={19} />
    </span>
    <span className="contact-details">
      <small>Call Us</small>
      <strong>+91 81437 67679</strong>
    </span>
    <ArrowUpRight size={17} />
  </a>

  <a
    href="mailto:srtechsolutions204@gmail.com"
    className="enquiry-contact-item"
  >
    <span className="contact-icon">
      <Mail size={19} />
    </span>
    <span className="contact-details">
      <small>Email Us</small>
      <strong>srtechsolutions204@gmail.com</strong>
    </span>
    <ArrowUpRight size={17} />
  </a>
</div>


          {/* Office Location */}

          <div className="enquiry-location">

            <div className="enquiry-location-heading">
              <MapPin size={20} />
              <h3>Visit Our Office</h3>
            </div>

            <p>
              Beside Arundelpet Police Station, above Paramount
              Studio, Brodipet, Guntur, Andhra Pradesh 522002.
            </p>

            <div className="enquiry-map">
              <iframe
                title="SR Tech Solutions Office Location"
                src="https://www.google.com/maps?q=Beside+Arundelpet+Police+Station,+above+Paramount+Studio,+Brodipet,+Guntur,+Andhra+Pradesh+522002&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              className="enquiry-directions"
              href="https://www.google.com/maps/search/?api=1&query=Beside+Arundelpet+Police+Station,+above+Paramount+Studio,+Brodipet,+Guntur,+Andhra+Pradesh+522002"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions →
            </a>

          </div>

        </div>

        {/* ENQUIRY FORM */}

      <div className="enquiry-form-card">
<div className="enquiry-info">
          <div className="enquiry-form-heading">
            <span style={{ fontSize: "18px" }}>
              GET STARTED
            </span>

            <h3>Send Us an Enquiry</h3>

            <p>
              Fill in your details. We'll be happy to assist you.
            </p>
          </div>

          <form
            ref={formRef}
            className="enquiry-form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* PERSONAL DETAILS */}

            <div className="form-grid">

              <div className="form-group">
                <label htmlFor="enquiry-name">
                  Full Name *
                </label>

                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="enquiry-email">
                  Email Address *
                </label>

                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="enquiry-phone">
                  Mobile Number *
                </label>

                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  autoComplete="tel"
                  pattern="[+]?[0-9\s-]{10,15}"
                  title="Enter a valid mobile number"
                  required
                />
              </div>

            </div>

            <div className="form-divider"></div>

            {/* USER CATEGORY */}

            <div className="form-group">

              <label>I am a *</label>

              <div className="role-options">

                {[
                  "Student",
                  "Graduate",
                  "Faculty / Researcher",
                  "Organization",
                ].map((item) => (

                  <button
                    key={item}
                    type="button"
                    className={`role-option ${
                      role === item ? "active" : ""
                    }`}
                    onClick={() => handleRoleChange(item)}
                  >

                    {item === "Student" && (
                      <GraduationCap size={18} />
                    )}

                    {item === "Graduate" && (
                      <BriefcaseBusiness size={18} />
                    )}

                    {item === "Faculty / Researcher" && (
                      <Users size={18} />
                    )}

                    {item === "Organization" && (
                      <Building2 size={18} />
                    )}

                    {item}

                  </button>

                ))}

              </div>

            </div>

            {/* INTERESTED SERVICE */}

            <div className="form-group">

              <label htmlFor="enquiry-service">
                Interested Service *
              </label>

              <select
                id="enquiry-service"
                value={service}
                onChange={(e) =>
                  handleServiceChange(e.target.value)
                }
                required
              >

                <option value="">
                  Select a service
                </option>

                {services.map((item) => (

                  <option key={item} value={item}>
                    {item}
                  </option>

                ))}

              </select>

            </div>

            {/* INTERNSHIP DURATION */}

            {service === "Internships (B.Tech / Degree)" && (
              <div className="form-group conditional-field">

                <label htmlFor="enquiry-duration">
                  Preferred Internship Duration *
                </label>

                <select
                  id="enquiry-duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                >

                  <option value="">
                    Select duration
                  </option>

                  {durations.map((item) => (

                    <option key={item} value={item}>
                      {item}
                    </option>

                  ))}

                </select>

              </div>
            )}

            <div className="form-divider"></div>

            {/* ORGANIZATION FIELDS */}

            {role === "Organization" ? (

              <div className="form-grid conditional-field">

                <div className="form-group full-width">
                  <label htmlFor="organization-name">
                    Organization Name *
                  </label>

                  <input
                    id="organization-name"
                    name="organizationName"
                    type="text"
                    placeholder="Enter organization name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization-type">
                    Organization Type *
                  </label>

                  <select
                    id="organization-type"
                    name="organizationType"
                    defaultValue=""
                    required
                  >

                    <option value="">
                      Select organization type
                    </option>

                    <option>College</option>
                    <option>University</option>
                    <option>Company</option>
                    <option>Training Institute</option>
                    <option>School</option>
                    <option>Other</option>

                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="organization-location">
                    Location *
                  </label>

                  <input
                    id="organization-location"
                    name="organizationLocation"
                    type="text"
                    placeholder="City, State"
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="organization-requirements">
                    How can SR Tech Solutions help your organization? *
                  </label>

                  <textarea
                    id="organization-requirements"
                    name="organizationRequirements"
                    rows="4"
                    placeholder="Describe your training, technology, internship, partnership or other requirements..."
                    required
                  />
                </div>

              </div>

            ) : role === "Faculty / Researcher" ? (

              /* FACULTY / RESEARCHER FIELDS */

              <div className="form-grid conditional-field">

                <div className="form-group full-width">
                  <label htmlFor="faculty-qualification">
                    Highest Qualification *
                  </label>

                  <select
                    id="faculty-qualification"
                    value={qualification}
                    onChange={(e) => {
                      setQualification(e.target.value);
                      setOtherQualification("");
                    }}
                    required
                  >

                    <option value="">
                      Select qualification
                    </option>

                    {qualifications.map((item) => (

                      <option key={item} value={item}>
                        {item}
                      </option>

                    ))}

                  </select>
                </div>

                {qualification === "Other" && (

                  <div className="form-group full-width conditional-field">

                    <label htmlFor="other-qualification">
                      Enter Your Qualification *
                    </label>

                    <input
                      id="other-qualification"
                      type="text"
                      value={otherQualification}
                      onChange={(e) =>
                        setOtherQualification(e.target.value)
                      }
                      placeholder="Enter your qualification"
                      required
                    />

                  </div>

                )}

                <div className="form-group full-width">
                  <label htmlFor="faculty-institution">
                    Institution / University Name *
                  </label>

                  <input
                    id="faculty-institution"
                    name="institution"
                    type="text"
                    placeholder="Enter institution name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="faculty-department">
                    Department *
                  </label>

                  <input
                    id="faculty-department"
                    name="department"
                    type="text"
                    placeholder="e.g. CSE, ECE, Mechanical"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="faculty-designation">
                    Designation *
                  </label>

                  <input
                    id="faculty-designation"
                    name="designation"
                    type="text"
                    placeholder="e.g. Assistant Professor"
                    required
                  />
                </div>

              </div>

            ) : (

              /* STUDENT / GRADUATE FIELDS */

              <>

                <div className="form-group">

                  <label htmlFor="enquiry-qualification">

                    {role === "Student"
                      ? "Current Qualification *"
                      : "Highest Qualification *"}

                  </label>

                  <select
                    id="enquiry-qualification"
                    value={qualification}
                    onChange={(e) => {
                      setQualification(e.target.value);
                      setOtherQualification("");
                    }}
                    required
                  >

                    <option value="">
                      Select qualification
                    </option>

                    {qualifications.map((item) => (

                      <option key={item} value={item}>
                        {item}
                      </option>

                    ))}

                  </select>

                </div>

                {/* OTHER QUALIFICATION */}

                {qualification === "Other" && (

                  <div className="form-group conditional-field">

                    <label htmlFor="other-qualification">
                      Enter Your Qualification *
                    </label>

                    <input
                      id="other-qualification"
                      type="text"
                      value={otherQualification}
                      onChange={(e) =>
                        setOtherQualification(e.target.value)
                      }
                      placeholder="Enter your qualification"
                      required
                    />

                  </div>

                )}

                {/* INSTITUTION AND BRANCH */}

                <div className="form-grid">

                  <div className="form-group">
                    <label htmlFor="enquiry-institution">

                      {role === "Student"
                        ? "College / Institution Name *"
                        : "College / University Name *"}

                    </label>

                    <input
                      id="enquiry-institution"
                      name="institution"
                      type="text"
                      placeholder="Enter institution name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="enquiry-branch">
                      Branch / Specialization *
                    </label>

                    <input
                      id="enquiry-branch"
                      name="branch"
                      type="text"
                      placeholder="e.g. CSE, ECE, Mechanical"
                      required
                    />
                  </div>

                  {/* STUDENT YEAR */}

                  {role === "Student" ? (

                    <div className="form-group full-width">

                      <label htmlFor="enquiry-year">
                        Current Year of Study{" "}
                        <span className="optional-label">
                          (Optional)
                        </span>
                      </label>

                      <select
                        id="enquiry-year"
                        name="studyYear"
                        defaultValue=""
                      >

                        <option value="">
                          Select current year
                        </option>

                        <option>1st Year</option>
                        <option>2nd Year</option>
                        <option>3rd Year</option>
                        <option>4th Year</option>
                        <option>Not Applicable</option>

                      </select>

                    </div>

                  ) : (

                    /* GRADUATION YEAR */

                    <div className="form-group full-width">

                      <label htmlFor="enquiry-graduation">
                        Year of Graduation{" "}
                        <span className="optional-label">
                          (Optional)
                        </span>
                      </label>

                      <input
                        id="enquiry-graduation"
                        name="graduationYear"
                        type="number"
                        min="1980"
                        max="2035"
                        placeholder="e.g. 2025"
                      />

                    </div>

                  )}

                </div>

              </>

            )}

            {/* ADDITIONAL MESSAGE */}

            <div className="form-group">

              <label htmlFor="enquiry-message">
                Additional Message{" "}
                <span className="optional-label">
                  (Optional)
                </span>
              </label>

              <textarea
                id="enquiry-message"
                name="message"
                rows="4"
                placeholder="Tell us about your requirements, preferred engineering domain, course or any other questions..."
              />

            </div>

            {/* SUBMISSION BUTTONS */}

            <div className="enquiry-submit-actions">

              <button
                type="button"
                className="enquiry-submit whatsapp-submit"
                onClick={() => submitEnquiry("whatsapp")}
              >

                <MessageCircle size={19} />

                Submit via WhatsApp

                <ArrowUpRight size={17} />

              </button>

              <button
                type="button"
                className="enquiry-submit email-submit"
                onClick={() => submitEnquiry("email")}
              >

                <Mail size={18} />

                Send via Email

                <Send size={16} />

              </button>

            </div>

            {/* PRIVACY NOTE */}

            <p className="enquiry-form-footnote">
              Your contact details will be shared with SR Tech
              Solutions through your selected contact method
              to respond to your enquiry.
            </p>

          </form>

        </div>

      </div>
      </div>
<br/>
      <PaymentNotice />

    </section>
  );
}

export default Enquiry;
