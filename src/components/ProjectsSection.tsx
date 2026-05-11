import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import swagLabsImage from '../assets/sauce-labs.svg';
import fullLogoImage from '../assets/fullLogo.svg';
import greenroomImage from '../assets/Greenroom-PrimaryLogo-PrimaryGreen.svg';
import bugzeraImage from '../assets/bugzera.svg';
import constructionImage from '../assets/favicon.svg';

type Project = {
  title: string;
  subtitle?: string;
  type: 'Automation Project' | 'Personal Project';
  description: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  logo: string;
};

const projects: Project[] = [
  {
    title: 'Swag Labs Demo Website',
    type: 'Automation Project',
    description: 'Automated the Swag Labs demo website login and post-login actions using Playwright and Cypress. The script retrieves item titles, interacts with the sorting dropdown, verifies the selected option, checks the logo and subtitle, adds an item to the cart, and navigates to the cart page.',
    tags: ['JavaScript', 'Playwright'],
    github: 'https://github.com/yuvaraj-6867/swag_labs-website.git',
    logo: swagLabsImage,
  },
  {
    title: 'GreenRoom',
    subtitle: 'Payroll & Tax Management',
    type: 'Automation Project',
    description: 'Engineered 150+ Playwright automation scripts in TypeScript for payroll processing and tax compliance workflows (US). Designed and executed 200+ manual test cases covering end-to-end payroll cycles, compliance requirements, and financial reporting. Also initiated performance testing using JMeter.',
    tags: ['Playwright', 'TypeScript', 'JMeter', 'JIRA'],
    logo: greenroomImage,
  },
  {
    title: 'MERKENSOFT',
    subtitle: 'CRM for Textile Industry',
    type: 'Automation Project',
    description: 'Executed comprehensive QA across Agile sprints including smoke, sanity, regression, and story-level testing. Developed 150+ test cases and automated critical workflows using Playwright and Selenium, reducing testing time by 40%. Recognized by client for proactive identification of critical defects.',
    tags: ['Playwright', 'Selenium', 'Ruby', 'Linear'],
    logo: fullLogoImage,
  },
  {
    title: 'BugZera',
    subtitle: 'Test Management Platform',
    type: 'Personal Project',
    description: 'Built a complete test management and bug tracking platform from scratch. Features include test case management, bug tracking, Playwright/Selenium integration, real-time analytics, sprint management, and role-based access control.',
    tags: ['React', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://bugzera.shop',
    logo: bugzeraImage,
  },
  {
    title: 'Construction Management System',
    type: 'Personal Project',
    description: 'Full-stack construction management app with modules for project tracking, worker management, daily attendance with wage calculation, payments, materials, invoices, and PDF/Excel exports. Supports bilingual (English & Tamil) and role-based access for 5 user roles.',
    tags: ['React', 'TypeScript', 'Ruby on Rails', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://construction.bugzera.shop',
    logo: constructionImage,
  },
];

const badgeStyle: Record<string, string> = {
  'Automation Project': 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  'Personal Project': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
};

const ProjectsSection = () => {
  useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              A showcase of automation frameworks and full-stack applications demonstrating QA expertise and development skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm fade-up">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-slate-700/50 rounded-xl p-3 flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                        <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 border rounded-full text-xs font-medium mb-1 ${badgeStyle[project.type]}`}>
                          {project.type}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                          {project.subtitle && <span className="text-slate-400 font-normal text-sm block">{project.subtitle}</span>}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all">
                          <Github size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-700/50 rounded-lg transition-all">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
