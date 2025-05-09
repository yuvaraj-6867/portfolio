import { motion } from "framer-motion";
import { FaGitAlt, FaReact, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiRuby } from 'react-icons/si';
import { containerVariants, itemVariants } from "./animations";
import SectionHeader from "./SectionHeader";
import { FaCss3Alt, FaJs } from "react-icons/fa6";

const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Manual Testing", icon: <FaLaptopCode className="text-yellow-400" /> },
    { name: "Mobile Testing", icon: <FaMobileAlt className="text-green-400" /> },
    { name: "Playwright", icon: <div className="text-3xl">🎭</div> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Ruby", icon: <SiRuby className="text-cyan-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "Test Cases", icon: <div className="text-3xl">📝</div> },
    { name: "Bug Tracking", icon: <div className="text-3xl">🐞</div> },
  ];

  return (
    <section id="skills" className="py-40 sm:py-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 py-20">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I use to build and test quality software"
        />

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl sm:text-4xl">{skill.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
