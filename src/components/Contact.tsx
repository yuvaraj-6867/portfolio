import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ text: '', isError: false });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('yuvaraj6867@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: '4b552cc0-7644-4d02-945e-cdc359ac1838',
        ...formData,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setFeedback({ text: 'Message sent successfully!', isError: false });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setFeedback({ text: 'Failed to send. Please try again.', isError: true });
        }
        setTimeout(() => setFeedback({ text: '', isError: false }), 3000);
      })
      .catch(() => {
        setFeedback({ text: 'Failed to send. Please try again later.', isError: true });
        setTimeout(() => setFeedback({ text: '', isError: false }), 3000);
      })
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'yuvaraj6867@gmail.com', href: 'mailto:yuvaraj6867@gmail.com', copyable: true },
    { icon: Phone, label: 'Phone', value: '+91 9025986867', href: 'tel:+919025986867' },
    { icon: MapPin, label: 'Location', value: 'Coimbatore, Tamil Nadu, India' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yuvaraj', href: 'https://www.linkedin.com/in/yuvaraj-b-608406270' },
    { icon: Github, label: 'GitHub', value: 'github.com/yuvaraj-6867', href: 'https://github.com/yuvaraj-6867' },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss quality assurance opportunities? Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, copyable }, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-5 rounded-xl hover:bg-slate-800/70 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-all flex-shrink-0">
                      <Icon className="text-cyan-400" size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-400 text-xs mb-1">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                          className="text-white text-sm hover:text-cyan-400 transition-colors truncate block">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm truncate">{value}</p>
                      )}
                    </div>
                    {copyable && (
                      <button onClick={copyEmail} className="text-slate-400 hover:text-cyan-400 transition-colors flex-shrink-0">
                        {copied ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name} required
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Email Address</label>
                  <input
                    type="email" name="email" value={formData.email} required
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-slate-400 text-sm mb-2">Subject</label>
                <input
                  type="text" name="subject" value={formData.subject} required
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all"
                />
              </div>
              <div className="mb-6">
                <label className="block text-slate-400 text-sm mb-2">Message</label>
                <textarea
                  name="message" value={formData.message} required rows={5}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900/50 border border-slate-700/50 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all resize-none"
                />
              </div>
              <button
                type="submit" disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-semibold rounded-lg transition-all duration-200 disabled:opacity-50"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
              {feedback.text && (
                <p className={`mt-4 text-sm text-center ${feedback.isError ? 'text-red-400' : 'text-green-400'}`}>
                  {feedback.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
