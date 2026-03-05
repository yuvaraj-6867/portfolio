import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiCopy, FiCheck } from "react-icons/fi";
import { Phone, MapPin, Calendar } from "lucide-react";
import {
  containerVariants,
  itemVariants,
  dividerExpand,
  contactItemVariants,
  buttonHover,
  buttonTap,
} from "./animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ text: "", isError: false });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yuvaraj6867@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "4b552cc0-7644-4d02-945e-cdc359ac1838",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFeedback({ text: "Message sent successfully!", isError: false });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setFeedback({ text: "Failed to send message. Please try again.", isError: true });
        }
        setTimeout(() => setFeedback({ text: "", isError: false }), 3000);
      })
      .catch(() => {
        setFeedback({ text: "Failed to send message. Please try again later.", isError: true });
        setTimeout(() => setFeedback({ text: "", isError: false }), 3000);
      })
      .finally(() => setIsSubmitting(false));
  };

  const contactItems = [
    {
      icon: <FiMail className="contact-icon-purple" />,
      label: "Email",
      value: "yuvaraj6867@gmail.com",
      link: "mailto:yuvaraj6867@gmail.com",
    },
    {
      icon: <FiLinkedin className="contact-icon-blue" />,
      label: "LinkedIn",
      value: "linkedin.com/in/yuvaraj",
      link: "https://www.linkedin.com/in/yuvaraj-b-608406270",
    },
    {
      icon: <FiGithub className="contact-icon-yellow" />,
      label: "GitHub",
      value: "github.com/yuvaraj",
      link: "https://github.com/yuvaraj-6867",
    },
    {
      icon: <Phone className="contact-icon-blue" />,
      label: "Phone",
      value: "+91 9025986867",
      link: "tel:+919025986867",
    },
    {
      icon: <MapPin className="contact-icon-blue" />,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India",
    },
    // {
    //   icon: <Calendar className="contact-icon-blue" />,
    //   label: "Availability",
    //   value: "Open to full-time opportunities",
    // },
  ];

  // Form field animation
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    }),
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="contact-header"
        >
          <motion.h2 variants={itemVariants} className="contact-title">
            Contact Me
          </motion.h2>
          <motion.div
            className="contact-divider"
            variants={dividerExpand}
            style={{ originX: 0.5 }}
          />
          <motion.p variants={itemVariants} className="contact-subtitle">
            Have a project that needs testing? Feel free to reach out – I'm
            always open to discuss new opportunities.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="contact-info-card"
          >
            <motion.h3 variants={itemVariants} className="contact-card-title">
              Contact Information
            </motion.h3>

            {contactItems.map(({ icon, label, value, link }, index) => (
              <motion.div
                key={index}
                className="contact-item"
                variants={contactItemVariants}
                whileHover={{
                  x: 8,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="contact-icon-wrapper"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.div>
                <div style={{ flex: 1 }}>
                  <p className="contact-label">{label}</p>
                  {link ? (
                    <a
                      href={link}
                      target={
                        link.startsWith("mailto:") || link.startsWith("tel:")
                          ? "_self"
                          : "_blank"
                      }
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="contact-value">{value}</p>
                  )}
                </div>
                {label === "Email" && (
                  <motion.button
                    onClick={copyEmail}
                    className="copy-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Copy email"
                  >
                    {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="contact-form-card"
          >
            <motion.h3 variants={itemVariants} className="contact-card-title">
              Send Me a Message
            </motion.h3>

            <motion.div
              className="form-group"
              custom={0}
              variants={formFieldVariants}
            >
              <label className="form-label">Your Name</label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                whileFocus={{ scale: 1.01, borderColor: "rgba(139, 92, 246, 0.5)" }}
              />
            </motion.div>

            <motion.div
              className="form-group"
              custom={1}
              variants={formFieldVariants}
            >
              <label className="form-label">Email Address</label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                whileFocus={{ scale: 1.01, borderColor: "rgba(139, 92, 246, 0.5)" }}
              />
            </motion.div>

            <motion.div
              className="form-group"
              custom={2}
              variants={formFieldVariants}
            >
              <label className="form-label">Subject</label>
              <motion.input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                whileFocus={{ scale: 1.01, borderColor: "rgba(139, 92, 246, 0.5)" }}
              />
            </motion.div>

            <motion.div
              className="form-group"
              custom={3}
              variants={formFieldVariants}
            >
              <label className="form-label">Message</label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-textarea"
                whileFocus={{ scale: 1.01, borderColor: "rgba(139, 92, 246, 0.5)" }}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
              variants={itemVariants}
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {feedback.text && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`feedback-message ${
                  feedback.isError ? "feedback-error" : "feedback-success"
                }`}
              >
                {feedback.text}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
