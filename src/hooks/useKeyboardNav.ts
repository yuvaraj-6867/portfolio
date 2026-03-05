import { useEffect } from "react";

export const useKeyboardNav = () => {
  useEffect(() => {
    const sections = ["home", "skills", "projects", "experience", "about", "contact"];
    let currentIndex = 0;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          currentIndex = Math.min(currentIndex + 1, sections.length - 1);
          scrollToSection(sections[currentIndex]);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          currentIndex = Math.max(currentIndex - 1, 0);
          scrollToSection(sections[currentIndex]);
        } else if (e.key === "Home") {
          e.preventDefault();
          currentIndex = 0;
          scrollToSection("home");
        }
      }
    };

    const scrollToSection = (id: string) => {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - 80, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
};
