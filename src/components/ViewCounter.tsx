import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

const ViewCounter = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const currentViews = parseInt(localStorage.getItem("portfolioViews") || "0");
    const newViews = currentViews + 1;
    localStorage.setItem("portfolioViews", newViews.toString());
    setViews(newViews);
  }, []);

  return (
    <motion.div
      className="view-counter"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
    >
      <FiEye size={16} />
      <span>{views.toLocaleString()} views</span>
    </motion.div>
  );
};

export default ViewCounter;
