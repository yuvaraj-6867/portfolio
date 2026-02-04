import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import type { JSX } from 'react';

interface SocialLink {
  icon: JSX.Element;
  href: string;
  name: string;
  className: string;
}

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FiGithub />, href: "https://github.com/yuvaraj-6867", name: "GitHub", className: "github" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/yuvaraj-b-608406270/", name: "LinkedIn", className: "linkedin" },
    { icon: <FiMail />, href: "mailto:yuvaraj6867@gmail.com", name: "Email", className: "email" },
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
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="footer-divider"
        />

        <div className="footer-content">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="footer-text"
          >
            © {new Date().getFullYear()} Yuvaraj's Portfolio. All rights reserved.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="social-links"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={`social-${index}`}
                variants={itemVariants}
                href={link.href}
                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`social-link ${link.className}`}
                whileHover={{ y: -2 }}
                aria-label={link.name}
              >
                {link.icon}
                <span className="social-tooltip">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
