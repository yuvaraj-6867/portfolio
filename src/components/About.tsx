import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  dividerExpand,
  slideFromLeft,
} from "./animations";

const About = () => {
  const paragraphs = [
    {
      text: "Hello! I'm a ",
      highlight: "Junior Test Engineer",
      rest: " with a strong interest in software quality and automation. I have experience working with testing frameworks like Jest, Cypress, and Selenium, and I'm passionate about ensuring applications are robust, reliable, and user-friendly.",
    },
    {
      text: "I enjoy collaborating with developers and QA teams to write test cases, debug issues, and improve test coverage. I'm also learning frontend technologies like ",
      highlight: "React",
      highlight2: "CSS",
      rest: " to better understand UI behavior and enhance my testing capabilities.",
    },
    {
      text: "I'm eager to grow in the field of software testing and contribute to high-quality development workflows.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header with animated divider */}
        <div className="about-header">
          <motion.h2
            className="about-title"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="about-divider"
            variants={dividerExpand}
            style={{ originX: 0.5 }}
          />
        </div>

        {/* Content with staggered paragraphs */}
        <motion.div className="about-content">
          {paragraphs.map((para, index) => (
            <motion.p
              key={index}
              className="about-text"
              variants={slideFromLeft}
              custom={index}
              whileHover={{
                x: 10,
                transition: { duration: 0.3 },
              }}
            >
              {para.text}
              {para.highlight && (
                <motion.span
                  className="text-highlight"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {para.highlight}
                </motion.span>
              )}
              {para.highlight2 && (
                <>
                  {" and "}
                  <motion.span
                    className="text-highlight"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    {para.highlight2}
                  </motion.span>
                </>
              )}
              {para.rest}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
