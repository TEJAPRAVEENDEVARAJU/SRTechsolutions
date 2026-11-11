
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Enquiry from "../components/Enquiry";

function EnquiryPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#contact") return;

    const timer = setTimeout(() => {
      const target = document.getElementById("contact");

      if (!target) return;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        90;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <main>
      <Enquiry />
    </main>
  );
}

export default EnquiryPage;
