import { motion } from "framer-motion";
import { FiPrinter } from "react-icons/fi";

const PrintResume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.button
      className="print-resume-btn"
      onClick={handlePrint}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Print Resume"
    >
      <FiPrinter size={18} />
      <span>Print Resume</span>
    </motion.button>
  );
};

export default PrintResume;
