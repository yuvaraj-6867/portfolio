import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { containerVariants, itemVariants } from "./animations";

const experiences = [
  {
    role: "Quality Analyst",
    company: "Drylogic Solutions",
    period: "Jun 2025 - Present",
    duration: "10 mos",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Full-time · On-site",
    achievements: [
      "Create and execute test cases for functional and regression testing",
      "Develop and maintain automated tests using Playwright",
      "Report and track bugs using Linear",
      "Perform regression testing during releases",
      "Collaborate with teams during sprint planning and QA reviews",
    ],
    skills: ["Playwright", "TypeScript", "Linear", "Web Testing"],
  },
  {
    role: "Junior Test Engineer",
    company: "Drylogic Solutions",
    period: "Aug 2024 - May 2025",
    duration: "10 mos",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Full-time · On-site",
    achievements: [
      "Collaborate with cross-functional teams to understand requirements and identify test scenarios",
      "Write, execute, and maintain manual test cases for functional, regression, and exploratory testing",
      "Support the development of automated test scripts using Cypress and Selenium",
      "Contribute to the creation and maintenance of test documentation and reports",
      "Perform regression testing during deployment cycles",
      "Participate in daily stand-ups, sprint planning, and QA reviews",
    ],
    skills: ["Cypress", "Selenium", "GitHub", "Git"],
  },
  {
    role: "QA Tester",
    company: "Drylogic Solutions",
    period: "May 2024 - Jul 2024",
    duration: "3 mos",
    location: "Coimbatore, Tamil Nadu, India",
    type: "Full-time · On-site",
    achievements: [
      "Ensure quality and functionality through manual and automated testing",
      "Create and execute detailed test cases, identify defects",
      "Develop automation scripts using Selenium",
      "Perform functional, regression, and performance testing",
      "Collaborate closely with developers to resolve issues",
    ],
    skills: ["Selenium", "Manual Testing", "Functional Testing"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionHeader title="Experience" subtitle="My professional journey in quality assurance" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} className="timeline">
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemVariants} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <span className="timeline-badge">{exp.type}</span>
                </div>
                <p className="timeline-period">{exp.period} · {exp.duration} • {exp.location}</p>
                <ul>
                  {exp.achievements.map((achievement, j) => (
                    <li key={j}>{achievement}</li>
                  ))}
                </ul>
                <div className="timeline-skills">
                  {exp.skills.map((skill, k) => (
                    <span key={k} className="timeline-skill">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
