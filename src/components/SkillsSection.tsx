import { motion } from "framer-motion";
import { FaGitAlt, FaReact, FaLaptopCode } from "react-icons/fa";
import { SiTypescript, SiRuby, SiJira, SiSelenium, SiJenkins } from "react-icons/si";
import { gridContainer, gridItem, cardHover } from "./animations";
import SectionHeader from "./SectionHeader";
import { FaCss3Alt, FaJs } from "react-icons/fa6";

const SkillsSection = () => {
  const skills = [
    { name: "Playwright", icon: <div className="skill-emoji">🎭</div> },
    { name: "Selenium", icon: <SiSelenium className="icon-green" /> },
    { name: "Manual Testing", icon: <FaLaptopCode className="icon-yellow" /> },
    { name: "TypeScript", icon: <SiTypescript className="icon-blue-dark" /> },
    { name: "JavaScript", icon: <FaJs className="icon-yellow" /> },
    { name: "Ruby", icon: <SiRuby className="icon-cyan" /> },
    { name: "JIRA / Linear", icon: <SiJira className="icon-blue" /> },
    { name: "Jenkins", icon: <SiJenkins className="icon-orange" />, level: "Beginner" },
    { name: "Git / GitHub", icon: <FaGitAlt className="icon-orange" /> },
    { name: "React", icon: <FaReact className="icon-blue" />, level: "Beginner" },
    { name: "CSS / HTML", icon: <FaCss3Alt className="icon-blue" /> },
    { name: "Test Cases", icon: <div className="skill-emoji">📝</div> },
    { name: "JMeter", icon: <div className="skill-emoji">⚡</div> },
    { name: "Bug Tracking", icon: <div className="skill-emoji">🐞</div> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container skills-container">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I use to build and test quality software"
        />

        {/* Skills Grid with staggered reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainer}
          className="skills-grid"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={gridItem}
              whileHover={cardHover}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div className="skill-content">
                <motion.div
                  className="skill-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {skill.icon}
                </motion.div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
