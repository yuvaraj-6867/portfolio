import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-6 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-2">            <button
              onClick={() => scrollTo('#hero')}
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors mb-4 font-mono block"
            >
              &lt;Yuvaraj<span className="text-cyan-400">/</span>&gt;
            </button>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Quality Analyst specializing in automation testing with Playwright and Selenium.
            </p>
            <div className="flex space-x-3 mt-6">
              {[
                { icon: Github, href: 'https://github.com/yuvaraj-6867' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvaraj-b-608406270' },
                { icon: Mail, href: 'mailto:yuvaraj6867@gmail.com' },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                  className="p-3 bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700/50 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 rounded-lg transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>yuvaraj6867@gmail.com</li>
              <li>+91 9025986867</li>
              <li>Coimbatore, Tamil Nadu</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Yuvaraj B. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
