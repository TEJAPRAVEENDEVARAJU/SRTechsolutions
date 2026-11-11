
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Gallery.css";

const galleryImages = [
  "src/assets/srtech6.webp",
  "src/assets/srtech2.webp",
  "src/assets/srtech3.webp",
  "src/assets/srtech4.webp",
  "src/assets/srtech5.webp",
  "src/assets/srtech7.webp",
  "src/assets/srtech8.webp",
  "src/assets/srtech9.webp",
  "src/assets/srtech11.webp",
  "src/assets/srtech10.webp",
  "src/assets/Studentact.jpg",
    "src/assets/srtech1.webp",
];

function Gallery({ preview = false }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const images = preview
    ? galleryImages.slice(0, 6)
    : galleryImages;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrevious = (e) => {
    e.stopPropagation();
    setSelectedIndex((current) =>
      (current - 1 + images.length) % images.length
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((current) =>
      (current + 1) % images.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`gallery-section ${
        isVisible ? "gallery-visible" : ""
      }`}
    >
      <div className="gallery-container">

        <div className="gallery-heading">
            <br/><br/><br/>
          <span className="gallery-eyebrow">
            A GLIMPSE OF OUR JOURNEY
          </span>

          <h2>
            Moments of Learning.
            <span> Milestones of Growth.</span>
          </h2>

          <p>
            Every picture tells a story of learning, collaboration
            and innovation. Explore the moments that bring together
            students, educators and industry through meaningful
            experiences at SR Tech Solutions.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <button
              type="button"
              className="gallery-image"
              key={image}
              style={{ "--image-index": index }}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View gallery image ${index + 1}`}
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>

        {preview && (
          <div className="gallery-view-all">
            <Link to="/gallery">
              View All Images
              <ChevronRight size={18} />
            </Link>
          </div>
        )}
      </div>

      {selectedIndex !== null && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={26} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            className="lightbox-image"
            src={images[selectedIndex]}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={showNext}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
