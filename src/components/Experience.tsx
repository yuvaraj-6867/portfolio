import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Quality Analyst',
    company: 'Drylogics Solutions',
    duration: 'Jun 2025 – Present',
    period: '10 mos',
    type: 'Full-time · On-site',
    location: 'Coimbatore, Tamil Nadu, India',
    achievements: [
      'Create and execute test cases for functional and regression testing',
      'Develop and maintain automated tests using Playwright',
      'Report and track bugs using Linear',
      'Perform regression testing during releases',
      'Collaborate with teams during sprint planning and QA reviews',
    ],
    skills: ['Playwright', 'TypeScript', 'Linear', 'Web Testing'],
  },
  {
    role: 'Junior Test Engineer',
    company: 'Drylogics Solutions',
    duration: 'Aug 2024 – May 2025',
    period: '10 mos',
    type: 'Full-time · On-site',
    location: 'Coimbatore, Tamil Nadu, India',
    achievements: [
      'Collaborate with cross-functional teams to understand requirements and identify test scenarios',
      'Write, execute, and maintain manual test cases for functional, regression, and exploratory testing',
      'Support the development of automated test scripts using Cypress and Selenium',
      'Contribute to the creation and maintenance of test documentation and reports',
      'Perform regression testing during deployment cycles',
      'Participate in daily stand-ups, sprint planning, and QA reviews',
    ],
    skills: ['Cypress', 'Selenium', 'GitHub', 'Git'],
  },
  {
    role: 'QA Tester',
    company: 'Drylogics Solutions',
    duration: 'May 2024 – Jul 2024',
    period: '3 mos',
    type: 'Full-time · On-site',
    location: 'Coimbatore, Tamil Nadu, India',
    achievements: [
      'Ensure quality and functionality through manual and automated testing',
      'Create and execute detailed test cases, identify defects',
      'Develop automation scripts using Selenium',
      'Perform functional, regression, and performance testing',
      'Collaborate closely with developers to resolve issues',
    ],
    skills: ['Selenium', 'Manual Testing', 'Functional Testing'],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-teal-500 to-orange-500 hidden md:block" />
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="absolute left-6 top-6 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950 hidden md:block z-10" />
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="md:ml-20 bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm cursor-pointer fade-up"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.duration} · {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <button className="text-slate-400 hover:text-cyan-400 transition-colors ml-4 mt-1">
                        {expanded === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>

                    {expanded === i && (
                      <div className="mt-6 pt-6 border-t border-slate-700/50">
                        <ul className="space-y-2 mb-6">
                          {exp.achievements.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                              <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, k) => (
                            <span key={k} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg text-xs font-mono">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
