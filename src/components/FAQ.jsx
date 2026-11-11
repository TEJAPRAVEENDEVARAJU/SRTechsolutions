
import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./FAQ.css";

const questions = [
  {
    question: "What is SR Tech Solutions?",
    answer:
      "SR Tech Solutions focuses on technology, education and skill development through industrial training, internship programs, practical learning and career development initiatives.",
  },
  {
    question: "What types of training programs do you offer?",
    answer:
      "We offer industrial training, internship programs, live project-based learning, research and development activities, and career guidance. Visit our Expertise page to explore the available areas.",
  },
  {
    question: "Who can apply for industrial training?",
    answer:
      "Students interested in developing technical knowledge and practical skills can enquire about our industrial training opportunities. Eligibility may vary depending on the program.",
  },
  {
    question: "Do you provide internship opportunities?",
    answer:
      "We offer internship opportunities designed to help students gain practical exposure and improve their technical and professional skills. Contact us for current opportunities and eligibility details.",
  },
  {
    question: "Will students get an opportunity to work on live projects?",
    answer:
      "Our learning approach includes practical project-based activities that help students apply their knowledge, improve problem-solving abilities and develop project experience.",
  },
  {
    question: "Are stipend-based training opportunities available?",
    answer:
      "Stipend-based industrial training opportunities may be available for eligible programs. Please contact our team to confirm the current availability and conditions.",
  },
  {
    question: "Do you provide career guidance and interview preparation?",
    answer:
      "Career development support may include resume preparation, interview guidance and professional skill development to help students prepare for career opportunities.",
  },
  {
    question: "How can I join a program or make an enquiry?",
    answer:
      "You can visit our Enquiry page and submit your details. Our team can help you understand the available programs and the next steps.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* Heading */}
        <div className="faq-heading">
          <span className="faq-tag">GOT QUESTIONS?</span>

          <h2>
            Frequently Asked <span>Questions</span>
          </h2>

          <p>
            Find answers to common questions about our training,
            internship opportunities and career development programs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`faq-item ${isOpen ? "active" : ""}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-question-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-toggle">
                    {isOpen ? (
                      <Minus size={19} />
                    ) : (
                      <Plus size={19} />
                    )}
                  </span>
                </button>

                <div
                  className={`faq-answer ${isOpen ? "show" : ""}`}
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact */}
        <div className="faq-contact">
          <div className="faq-contact-icon">
            <MessageCircle size={24} />
          </div>

          <div className="faq-contact-content">
            <h3>Still Have Questions?</h3>
            <p>
              Our team is here to help you with your queries.
            </p>
          </div>

          <Link to="/enquiry" className="faq-contact-btn">
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
