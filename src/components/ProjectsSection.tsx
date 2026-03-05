import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { gridContainer, gridItem, cardHover, buttonHover, buttonTap } from "./animations";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import swagLabsImage from "../assets/sauce-labs.svg";
import projectVideo from "../assets/video.mp4";
import computerImage from "../assets/computer_4202976.png";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  video?: string;
  type: "personal" | "work";
};

const ProjectsSection = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "personal" | "work">("all");

  const projects: Project[] = [
    {
      title: "Swag Labs Demo Website",
      description:
        "Automated the Swag Labs demo website login and post-login actions using Playwright and Cypress. The script retrieves item titles, interacts with the sorting dropdown, verifies the selected option, checks the logo and subtitle, adds an item to the cart, and navigates to the cart page.",
      tags: ["JavaScript", "Playwright", "Cypress"],
      github: "https://github.com/yuvaraj-6867/swag_labs-website.git",
      image: swagLabsImage,
      video: projectVideo,
      type: "personal",
    },
    {
      title: "BugZera – Test Management Platform",
      description:
        "Built a complete test management and bug tracking platform from scratch. Features include test case management, bug tracking, Playwright/Selenium integration, real-time analytics, sprint management, and role-based access control.",
      tags: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL", "Docker"],
      link: "https://bugzera.shop",
      image: computerImage,
      type: "personal",
    },
    {
      title: "Construction Management System",
      description:
        "Full-stack construction management app with modules for project tracking, worker management, daily attendance with wage calculation, payments, materials, invoices, and PDF/Excel exports. Supports bilingual (English & Tamil) and role-based access for 5 user roles.",
      tags: ["React", "TypeScript", "Ruby on Rails", "PostgreSQL", "Docker"],
      link: "https://construction.bugzera.shop",
      image: computerImage,
      type: "personal",
    },
    {
      title: "GreenRoom – Payroll & Tax Management",
      description:
        "Engineered 150+ Playwright automation scripts in TypeScript for payroll processing and tax compliance workflows (US). Designed and executed 200+ manual test cases covering end-to-end payroll cycles, compliance requirements, and financial reporting. Also initiated performance testing using JMeter.",
      tags: ["Playwright", "TypeScript", "JMeter", "JIRA"],
      image: computerImage,
      type: "work",
    },
    {
      title: "MERKENSOFT – CRM for Textile Industry",
      description:
        "Executed comprehensive QA across Agile sprints including smoke, sanity, regression, and story-level testing. Developed 150+ test cases and automated critical workflows using Playwright and Selenium, reducing testing time by 40%. Recognized by client for proactive identification of critical defects.",
      tags: ["Playwright", "Selenium", "Ruby", "Linear"],
      image: computerImage,
      type: "work",
    },
  ];

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <SectionHeader
          title="My Projects"
          subtitle="A selection of my recent testing and automation projects"
        />

        <motion.div className="project-filters" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {["all", "personal", "work"].map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f as typeof filter)}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
          className="projects-grid"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={gridItem}
              whileHover={cardHover}
              className="project-card"
            >
              <motion.div
                className="project-image-container"
                onClick={() =>
                  setActiveVideoIndex(index === activeVideoIndex ? null : index)
                }
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {index === activeVideoIndex && project.video ? (
                  <motion.video
                    src={project.video}
                    className="project-video"
                    controls
                    autoPlay
                    muted
                    loop
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => console.error("Video error:", e)}
                  />
                ) : (
                  <>
                    <motion.img
                      src={project.image}
                      className="project-image"
                      alt={project.title}
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8 }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "fallback-image-url";
                      }}
                    />
                    {project.video && (
                      <motion.div
                        className="video-overlay"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <motion.span
                          className="video-overlay-text"
                          initial={{ y: 10 }}
                          whileHover={{ y: 0 }}
                        >
                          Click to play demo
                        </motion.span>
                      </motion.div>
                    )}
                  </>
                )}
              </motion.div>

              <div className="project-info">
                <span className={`project-type-badge project-type-${project.type}`}>
                  {project.type === "work" ? "Work Project" : "Personal Project"}
                </span>
                <motion.h3
                  className="project-title"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="project-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="project-tag"
                      custom={i}
                      variants={tagVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      <FiGithub size={16} /> Code
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                    >
                      <FiExternalLink size={16} /> Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
