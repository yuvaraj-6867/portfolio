import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import type { JSX } from 'react';

interface SocialLink {
  icon: JSX.Element;
  href: string;
  name: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FiGithub />, href: "https://github.com/yuvaraj-6867", name: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/yuvaraj-b-608406270/", name: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:yuvaraj6867@gmail.com", name: "Email" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <footer className="bg-white py-4 sm:py-5 text-center text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4 sm:my-5"
        />

        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xs sm:text-sm"
          >
            © {new Date().getFullYear()} Yuvaraj's Portfolio. All rights reserved.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex gap-4 sm:gap-5"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={`social-${index}`}
                variants={itemVariants}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-colors text-xl sm:text-2xl relative group
                  ${link.name === 'GitHub' ? 'hover:text-yellow-400' : ''}
                  ${link.name === 'LinkedIn' ? 'hover:text-blue-500' : ''}
                  ${link.name === 'Email' ? 'hover:text-red-500' : ''}`}
                whileHover={{ y: -2 }}
                aria-label={link.name}
              >
                {link.icon}
                <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
