import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { Phone, MapPin, Calendar } from "lucide-react";
import emailjs from "emailjs-com";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ text: "", isError: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_0i00e69",
        "template_wvbcbbf",
        templateParams,
        "3y2xX9KZEAOy-Z-hm"
      )
      .then(() => {
        setFeedback({ text: "Message sent successfully!", isError: false });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setFeedback({ text: "", isError: false }), 3000);
      })
      .catch(() => {
        setFeedback({
          text: "Failed to send message. Please try again later.",
          isError: true,
        });
        setTimeout(() => setFeedback({ text: "", isError: false }), 3000);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="py-40 sm:py-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Contact Me
          </h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4"></div>
          <p className="text-gray-700 max-w-md mx-auto text-base sm:text-lg">
            Have a project that needs testing? Feel free to reach out – I'm
            always open to discuss new opportunities.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-10 sm:mt-16">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-lg space-y-6 w-full max-w-full mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Contact Information
            </h3>

            {[
              {
                icon: <FiMail className="text-purple-600" />,
                label: "Email",
                value: "yuvaraj6867@gmail.com",
                link: "mailto:yuvaraj6867@gmail.com",
              },
              {
                icon: <FiLinkedin className="text-blue-600" />,
                label: "LinkedIn",
                value: "linkedin.com/in/yuvaraj",
                link: "https://www.linkedin.com/in/yuvaraj-b-608406270",
              },
              {
                icon: <FiGithub className="text-yellow-800" />,
                label: "GitHub",
                value: "github.com/yuvaraj",
                link: "https://github.com/yuvaraj-6867",
              },
              {
                icon: <Phone className="text-blue-600" />,
                label: "Phone",
                value: "+91 9025986867",
                link: "tel:+919025986867",
              },
              {
                icon: <MapPin className="text-blue-600" />,
                label: "Location",
                value: "Coimbatore, Tamil Nadu, India",
              },
              {
                icon: <Calendar className="text-blue-600" />,
                label: "Availability",
                value: "Open to full-time opportunities",
              },
            ].map(({ icon, label, value, link }, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">{icon}</div>
                <div>
                  <p className="text-gray-500 text-sm">{label}</p>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-purple-600 break-words"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-800">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-lg space-y-6 w-full max-w-full mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Send Me a Message
            </h3>

            <div>
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {feedback.text && (
              <div
                className={`p-4 mt-4 rounded-lg text-sm ${
                  feedback.isError
                    ? "bg-red-100 text-red-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {feedback.text}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
