import { motion } from "framer-motion";
import { useState } from "react";
import { FaGitAlt, FaReact, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { SiTypescript, SiRuby } from 'react-icons/si';
import { containerVariants, itemVariants } from "./animations";
import SectionHeader from "./SectionHeader";
import { FaCss3Alt, FaJs } from "react-icons/fa6";

// Define categories
type Category = "All" | "Development" | "Testing" | "Tools";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "Development" },
    { name: "Manual Testing", icon: <FaLaptopCode className="text-yellow-400" />, category: "Testing" },
    { name: "Mobile Testing", icon: <FaMobileAlt className="text-green-400" />, category: "Testing" },
    { name: "Playwright", icon: <div className="text-3xl">🎭</div>, category: "Testing" },
    { name: "React", icon: <FaReact className="text-blue-400" />, category: "Development" },
    { name: "Ruby", icon: <SiRuby className="text-cyan-400" />, category: "Development" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, category: "Development" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" />, category: "Development" },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "Tools" },
    { name: "Test Cases", icon: <div className="text-3xl">📝</div>, category: "Testing" },
    { name: "Bug Tracking", icon: <div className="text-3xl">🐞</div>, category: "Testing" },
  ];

  // Filter skills based on active category
  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const categories: Category[] = ["All", "Development", "Testing", "Tools"];

  // Category color mapping
  const categoryColors = {
    All: "bg-gradient-to-r from-purple-500 to-indigo-500",
    Development: "bg-gradient-to-r from-blue-500 to-cyan-500",
    Testing: "bg-gradient-to-r from-amber-500 to-yellow-500",
    Tools: "bg-gradient-to-r from-green-500 to-teal-500"
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="My Skills"
          subtitle="Technologies and tools I use to build and test quality software"
        />

        {/* Category Filters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? `${categoryColors[category]} text-white shadow-lg`
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="mt-3 flex justify-end">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  skill.category === "Development" ? "bg-blue-100 text-blue-800" :
                  skill.category === "Testing" ? "bg-amber-100 text-amber-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;