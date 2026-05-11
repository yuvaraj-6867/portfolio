import { Cpu, Code2, TestTube, Wrench, Monitor } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Automation',
    skills: [
      { name: 'Playwright', level: 'Expert' },
      { name: 'Selenium', level: 'Expert' },
      { name: 'Cypress', level: 'Intermediate' },
    ],
  },
  {
    icon: Code2,
    title: 'Languages',
    skills: [
      { name: 'TypeScript', level: 'Expert' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'Ruby', level: 'Intermediate' },
    ],
  },
  {
    icon: TestTube,
    title: 'Testing',
    skills: [
      { name: 'Manual Testing', level: 'Expert' },
      { name: 'Test Cases', level: 'Expert' },
      { name: 'Bug Tracking', level: 'Expert' },
      { name: 'JMeter', level: 'Intermediate' },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: [
      { name: 'JIRA', level: 'Expert' },
      { name: 'Linear', level: 'Expert' },
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'Jenkins', level: 'Intermediate' },
    ],
  },
  {
    icon: Monitor,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 'Intermediate' },
      { name: 'CSS / HTML', level: 'Intermediate' },
    ],
  },
];

const SkillsSection = () => {
  useScrollAnimation();
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive toolkit for quality assurance, test automation, and full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skillCategories.map(({ icon: Icon, title, skills }, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-xl hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm fade-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-lg">
                    <Icon className="text-cyan-400" size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
                <div className="space-y-3">
                  {skills.map((skill, j) => (
                    <div key={j} className="text-slate-300 font-medium hover:text-white transition-colors">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
