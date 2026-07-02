import { Award, Code, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const highlights = [
  { icon: Shield, label: 'Manual Testing', desc: 'Functional, regression, smoke & sanity testing' },
  { icon: Zap, label: 'Automation', desc: 'Playwright & Selenium frameworks' },
  { icon: Code, label: 'Languages', desc: 'TypeScript, JavaScript, Ruby' },
  { icon: Award, label: 'Bug Tracking', desc: 'JIRA, Linear & GitHub' },
];

const About = () => {
  useScrollAnimation();
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-16 fade-up"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div className="grid lg:grid-cols-2 gap-12 items-center mb-16 fade-up"
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Text */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Hello! I'm a <span className="text-cyan-400 font-semibold">Quality Analyst</span> with 2 years of expertise in manual and automation testing.
                I've delivered 350+ test cases and 150+ automation scripts across payroll and CRM systems at Drylogic Solutions, Coimbatore.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm proficient in <span className="text-cyan-400 font-semibold">Playwright (TypeScript)</span> and{' '}
                <span className="text-cyan-400 font-semibold">Selenium (Ruby)</span> and experienced in defect management using JIRA, Linear, and GitHub.
                I execute functional, regression, smoke, sanity, and story-level testing across Agile sprints.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I also have knowledge of frontend technologies like React and CSS, which helps me better understand UI behavior and write more precise test cases.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-3">
                {['Playwright', 'Selenium', 'TypeScript', 'Ruby', 'React'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-cyan-400 rounded-lg text-sm font-mono backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl w-fit mb-4 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all">
                    <Icon className="text-cyan-400" size={22} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{label}</h3>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '2', label: 'Years Experience' },
              { value: '350+', label: 'Test Cases' },
              { value: '150+', label: 'Automation Scripts' },
              { value: '5', label: 'Projects' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-slate-800/30 border border-slate-700/30 rounded-xl">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
