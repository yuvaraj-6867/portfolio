import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

const SocialSidebar = () => {
  const socials = [
    { icon: <FiGithub size={20} />, href: "https://github.com/yuvaraj-6867", label: "GitHub", target: "_blank" },
    { icon: <FiLinkedin size={20} />, href: "https://www.linkedin.com/in/yuvaraj-b-608406270", label: "LinkedIn", target: "_blank" },
    { icon: <FiMail size={20} />, href: "mailto:yuvaraj6867@gmail.com", label: "Email", target: "_self" },
    { icon: <FiFileText size={20} />, href: "/yuvaraj.pdf", label: "Resume", target: "_blank" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="social-sidebar"
    >
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target={social.target}
          rel="noopener noreferrer"
          aria-label={social.label}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="social-icon"
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
