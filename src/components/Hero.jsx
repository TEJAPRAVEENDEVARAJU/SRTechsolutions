import { ArrowUpRight, Sparkles } from "lucide-react";
import "./Hero.css";


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        {/* Left content */}
        
        <div className="hero-content">
          <br />
          <div className="hero-tag animate-tag">
            <Sparkles size={15} />
            <span>Technology • Education • Innovation</span>
          </div>

          <h1 className="animate-heading">
            Empowering Career Growth Through
            <span> Technology, Skills & Innovation.</span>
          </h1>

          <p className="hero-description animate-description">
            Empowering individuals and organizations through
            technology, industry-relevant skills, and innovative
            learning experiences.
          </p>

          <div className="hero-actions animate-buttons">
            <a href="/expertise" className="hero-btn hero-btn-primary">
              Explore Our Expertise
              <ArrowUpRight size={18} />
            </a>

            
            <a href="/enquiry" className="hero-btn hero-btn-secondary">
              Enquire Now
            <ArrowUpRight size={17} />
          </a>
          <a href="https://www.google.com/maps/dir//SR+TECH+SOLUTIONS,+Brodipet,+Guntur,+Andhra+Pradesh+522002/@16.2311044,80.3324507,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a4a75435d3bd10f:0x8ce1ec2245c76c48!2m2!1d80.4375761!2d16.3044052?entry=ttu&g_ep=EgoyMDI2MTEwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn-primary">
            Visit Our Office
            <ArrowUpRight size={17} />
          </a>
          </div>

          <div className="hero-bottom-note animate-note">
            <span className="hero-note-line"></span>
            <span>Building skills. Creating possibilities.</span>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-visual animate-image">
          <div className="hero-image-frame">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/063/405/522/small_2x/young-beautiful-college-student-with-backpack-and-holding-book-isolated-on-the-transparent-background-png.png"
              alt="Students learning technology, developing skills and preparing for their careers"
            />
          </div>
          <div className="hero-image-decoration"></div>
        </div>
      </div>

      <div className="hero-scroll">
        <span></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;

