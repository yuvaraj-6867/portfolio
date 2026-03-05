import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["home", "skills", "projects", "experience", "about", "contact"];

const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="section-indicator">
      {sections.map((section) => (
        <motion.button
          key={section}
          className={`indicator-dot ${activeSection === section ? "active" : ""}`}
          onClick={() => scrollToSection(section)}
          whileHover={{ scale: 1.5 }}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
