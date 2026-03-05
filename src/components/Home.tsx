import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import {
  containerVariants,
  itemVariants,
  badgeFloat,
  imageReveal,
  wordRevealContainer,
  wordReveal,
  buttonHover,
  buttonTap,
  pulseGlow,
} from "./animations";
import profileImage from "../assets/sauce-labs.svg";

const roles = ["Quality Analyst", "Automation Tester", "QA Professional", "Test Engineer"];

const useTypedText = (texts: string[]) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const speed = isDeleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  return displayText;
};

// Animated text component for word-by-word reveal
const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.span
      variants={wordRevealContainer}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordReveal}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Home = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const typedText = useTypedText(roles);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <div id="main-content">
      {/* Animated Background with parallax */}
      <motion.div className="home-background" style={{ y: backgroundY }} />

      {/* Floating dots with enhanced animation */}
      <div className="floating-dots-container">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 150 - 75, 0],
              y: [0, Math.random() * 150 - 75, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            className="floating-dot"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="home-content"
      >
        <div className="home-grid">
          {/* Left content with parallax */}
          <motion.div className="home-text-content" style={{ y: textY }}>
            {/* Badge with bounce animation */}
            <motion.div variants={badgeFloat}>
              <motion.span
                className="badge"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                QUALITY ANALYST
              </motion.span>
            </motion.div>

            {/* Animated title with word reveal */}
            <motion.h1 variants={itemVariants} className="home-title">
              Hi, I'm{" "}
              <motion.span
                className="gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Yuvaraj
              </motion.span>
            </motion.h1>

            {/* Typed role text */}
            <motion.div variants={itemVariants} className="typed-role">
              <span className="typed-role-prefix">I'm a </span>
              <span className="typed-text">{typedText}</span>
              <span className="typed-cursor" />
            </motion.div>

            {/* Description with word-by-word reveal */}
            <motion.div variants={itemVariants} className="home-description">
              <AnimatedText
                text="Results-driven QA professional with 1.7 years of expertise in manual and automation testing. Proficient in Playwright, Selenium, and defect management using JIRA and Linear."
              />
            </motion.div>

            {/* Buttons with enhanced hover effects */}
            <motion.div variants={itemVariants} className="home-buttons">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                Contact Me
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="btn-secondary"
                whileHover={buttonHover}
                whileTap={buttonTap}
              >
                View Projects
              </motion.button>
              <motion.a
                href="/resume.pdf"
                download
                className="btn-download"
                whileHover={buttonHover}
                whileTap={buttonTap}
                onClick={() => {
                  const downloads = parseInt(localStorage.getItem("cvDownloads") || "0");
                  localStorage.setItem("cvDownloads", (downloads + 1).toString());
                }}
              >
                <FiDownload size={16} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right image with parallax and reveal animation */}
          <motion.div
            variants={imageReveal}
            className="home-image-container"
            style={{ y: imageY }}
          >
            <div className="image-wrapper">
              {/* Animated glow effect */}
              <motion.div
                className="image-glow"
                animate={pulseGlow}
              />
              <motion.div
                className="image-frame"
                whileHover={{
                  scale: 1.03,
                  rotate: 2,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.img
                  src={profileImage}
                  alt="Profile Illustration"
                  className="profile-image"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.6, 0.01, 0.05, 0.95] }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,...";
                    console.error("Failed to load profile image");
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      </div>
    </section>
  );
};

export default Home;
