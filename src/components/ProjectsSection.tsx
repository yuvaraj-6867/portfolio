import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { gridContainer, gridItem, cardHover, buttonHover, buttonTap } from "./animations";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import swagLabsImage from "../assets/sauce-labs.svg";
import projectVideo from "../assets/video.mp4";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  video?: string;
};

const ProjectsSection = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Swag Labs Demo Website",
      description:
        "Automated the Swag Labs demo website login and post-login actions using Playwright and Cypress. The script retrieves item titles, interacts with the sorting dropdown, verifies the selected option, checks the logo and subtitle, adds an item to the cart, and navigates to the cart page.",
      tags: ["JavaScript", "Playwright", "Cypress"],
      github: "https://github.com/yuvaraj-6867/swag_labs-website.git",
      image: swagLabsImage,
      video: projectVideo,
    },
  ];

  // Tag animation variants
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

  return (
    <section id="projects" className="projects-section">
      <div className="container projects-container">
        <SectionHeader
          title="My Projects"
          subtitle="A selection of my recent testing and automation projects"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainer}
          className="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={gridItem}
              whileHover={cardHover}
              className="project-card"
            >
              {/* Image container with reveal animation */}
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

                {/* Tags with staggered animation */}
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

                {/* Links with hover effects */}
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
