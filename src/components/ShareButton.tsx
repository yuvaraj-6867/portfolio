import { motion } from "framer-motion";
import { FiShare2 } from "react-icons/fi";
import { useToast } from "./Toast";

const ShareButton = () => {
  const { showToast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Yuvaraj - QA Engineer Portfolio",
          text: "Check out my portfolio showcasing QA and automation testing projects",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!", "success");
    }
  };

  return (
    <motion.button
      className="share-btn"
      onClick={handleShare}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Share Portfolio"
    >
      <FiShare2 size={18} />
    </motion.button>
  );
};

export default ShareButton;
