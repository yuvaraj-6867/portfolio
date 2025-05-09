import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      navLinks.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveLink(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-gradient-to-r from-purple-900/90 to-indigo-900/90 backdrop-blur-md py-2 shadow-lg'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('home')}
            className="flex-shrink-0 cursor-pointer"
          >
            {/* <span className="text-white font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Yuvaraj
            </span> */}
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="hidden md:flex space-x-8"
          >
            {navLinks.map((link) => (
              <motion.button
                key={`nav-${link.id}`}
                variants={itemVariants}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium relative group transition-colors ${activeLink === link.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${activeLink === link.id
                  ? 'w-full bg-gradient-to-r from-cyan-400 to-blue-500'
                  : 'w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500'
                  }`}></span>
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-indigo-800/50 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
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
          className="md:hidden bg-gradient-to-b from-purple-900/95 to-indigo-900/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <motion.button
                key={`mobile-nav-${link.id}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.indexOf(link) * 0.1 }}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors ${activeLink === link.id
                  ? 'bg-indigo-800/30 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-indigo-800/20'
                  }`}
              >
                {link.name}
                {activeLink === link.id && (
                  <span className="block h-0.5 w-6 bg-cyan-400 mt-1 rounded-full"></span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;