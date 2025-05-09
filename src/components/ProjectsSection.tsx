import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { containerVariants, itemVariants } from "./animations";
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

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 py-20">
        <SectionHeader
          title="My Projects"
          subtitle="A selection of my recent testing and automation projects"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div
                className="h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center cursor-pointer relative group"
                onClick={() =>
                  setActiveVideoIndex(index === activeVideoIndex ? null : index)
                }
              >
                {index === activeVideoIndex && project.video ? (
                  <video
                    src={project.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    controls
                    autoPlay
                    muted
                    loop
                    onError={(e) => console.error("Video error:", e)}
                  />
                ) : (
                  <>
                    <img
                      src={project.image}
                      className="w-32 h-32 object-contain transition-all duration-200 group-hover:scale-105"
                      alt={project.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'fallback-image-url';
                      }}
                    />
                    {project.video && (
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-white text-sm font-medium">Click to play demo</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-base">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-purple-600 hover:text-purple-800 transition-colors text-sm"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <FiGithub size={16} /> Code
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-purple-600 hover:text-purple-800 transition-colors text-sm"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
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
