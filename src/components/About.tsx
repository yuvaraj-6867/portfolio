import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  dividerExpand,
  slideFromLeft,
  gridItem,
} from "./animations";

const stats = [
  { number: "1.7", label: "Years Exp." },
  { number: "350+", label: "Test Cases" },
  { number: "150+", label: "Automation Scripts" },
  { number: "2", label: "Projects" },
];

const About = () => {
  const paragraphs = [
    {
      text: "Hello! I'm a ",
      highlight: "Quality Analyst",
      rest: " with 1.7 years of expertise in manual and automation testing. I've delivered 350+ test cases and 150+ automation scripts across payroll and CRM systems at Drylogic Solutions, Coimbatore.",
    },
    {
      text: "I'm proficient in ",
      highlight: "Playwright (TypeScript)",
      highlight2: "Selenium (Ruby)",
      rest: " and experienced in defect management using JIRA, Linear, and GitHub. I execute functional, regression, smoke, sanity, and story-level testing across Agile sprints.",
    },
    {
      text: "I also have knowledge of frontend technologies like React and CSS, which helps me better understand UI behavior and write more precise test cases.",
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

        {/* Stats grid */}
        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} className="stat-item" variants={gridItem}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
