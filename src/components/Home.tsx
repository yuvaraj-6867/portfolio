import { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

// Folio-style: words slide up from masked container
const maskReveal = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Quality Analyst';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) { setDisplayText(fullText.slice(0, index)); index++; }
      else clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
  };

  const stats = [
    { value: '2+', label: 'Years' },
    { value: '350+', label: 'Test Cases' },
    { value: '150+', label: 'Scripts' },
    { value: '5', label: 'Projects' },
  ];

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-20 -right-40 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">

            {/* Left */}
            <div className="space-y-8">

              {/* Badge — fade in */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span>Available for opportunities</span>
              </motion.div>

              {/* Name — mask reveal word by word */}
              <div>
                <div className="overflow-hidden">
                  <motion.h1
                    custom={0} variants={maskReveal} initial="hidden" animate="visible"
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                  >
                    Yuvaraj B
                  </motion.h1>
                </div>
                {/* Typed role */}
                <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
                  className="flex items-center space-x-2 text-2xl md:text-3xl font-mono mt-3">
                  <Terminal className="text-cyan-400" size={28} />
                  <span className="text-cyan-400">&gt;</span>
                  <span className="text-orange-400">{displayText}</span>
                  <span className="w-1 h-8 bg-orange-400 animate-pulse inline-block" />
                </motion.div>
              </div>

              {/* Bio */}
              <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
                className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Quality Analyst with 2 years of expertise in manual and automation testing.
                Delivered 350+ test cases and 150+ automation scripts across payroll and CRM systems at Drylogic Solutions, Coimbatore.
              </motion.p>

              {/* Stats */}
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
                className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.06, y: -4 }} transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500/50 transition-colors duration-300 cursor-default">
                    <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
                className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(6,182,212,0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/30 group transition-all">
                  <span>Get In Touch</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={20} />
                  </motion.span>
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  href="/resume.pdf" download
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-slate-600 hover:border-cyan-500 hover:bg-cyan-500/10 text-white font-medium rounded-lg backdrop-blur-sm transition-all">
                  <Download size={20} />
                  <span>Resume</span>
                </motion.a>
              </motion.div>

              {/* Socials */}
              <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
                className="flex items-center space-x-4">
                {[
                  { href: 'https://github.com/yuvaraj-6867', icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/yuvaraj-b-608406270', icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:yuvaraj6867@gmail.com', icon: Mail, label: 'Email' },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4, rotate: 5 }} whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors duration-300">
                    <Icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right floating cards */}
            <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block">
              <div className="relative w-full aspect-square">

                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.04 }}
                  className="absolute top-0 right-0 w-64 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-cyan-500/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-cyan-400">$ playwright test</div>
                    <div className="text-green-400">✓ Login flow passed</div>
                    <div className="text-green-400">✓ Cart operations passed</div>
                    <div className="text-slate-400">Tests: 150+ passed</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  whileHover={{ scale: 1.04 }}
                  className="absolute bottom-10 left-0 w-56 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-orange-500/10">
                  <div className="text-orange-400 font-semibold mb-3">Test Coverage</div>
                  <div className="space-y-3">
                    {['Playwright', 'Selenium', 'Manual Testing'].map((label, i) => (
                      <div key={i} className="text-sm text-slate-300">{label}</div>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
