import { motion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Check if at top of page
      if (window.scrollY < 100) {
        setActiveLink('home');
        return;
      }

      // Find which section is currently in view
      let currentSection = 'home';
      const navbarHeight = 100;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
            currentSection = link.id;
          }
        }
      }

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToSection = (id: string) => {
    setActiveLink(id);

    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', '/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', `#${id}`);
      }
    }
    setIsOpen(false);
  };

  // Handle hash on page load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth',
          });
          setActiveLink(hash);
        }
      }, 100);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container">
        <div className="navbar-content">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="navbar-brand"
          >
            Yuvaraj
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="navbar-links"
          >
            {navLinks.map((link) => (
              <motion.button
                key={`nav-${link.id}`}
                variants={itemVariants}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className={`nav-link-underline ${activeLink === link.id ? 'active' : ''}`}></span>
              </motion.button>
            ))}
            <motion.div variants={itemVariants}>
              <ThemeToggle />
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="mobile-menu-btn-wrapper">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX style={{ display: 'block', height: '1.5rem', width: '1.5rem' }} />
              ) : (
                <FiMenu style={{ display: 'block', height: '1.5rem', width: '1.5rem' }} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mobile-nav"
        >
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <motion.button
                key={`mobile-nav-${link.id}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.indexOf(link) * 0.1 }}
                onClick={() => scrollToSection(link.id)}
                className={`mobile-nav-link ${activeLink === link.id ? 'active' : ''}`}
              >
                {link.name}
                {activeLink === link.id && (
                  <span className="mobile-nav-indicator"></span>
                )}
              </motion.button>
            ))}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mobile-theme-toggle"
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
