import { motion } from "framer-motion";
import { containerVariants, itemVariants, dividerExpand } from "./animations";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
    className="section-header"
  >
    <motion.h2 variants={itemVariants} className="section-title">
      {title}
    </motion.h2>

    {/* Animated divider line */}
    <motion.div
      className="section-divider"
      variants={dividerExpand}
      style={{ originX: 0.5 }}
    />

    <motion.p variants={itemVariants} className="section-subtitle">
      {subtitle}
    </motion.p>
  </motion.div>
);

export default SectionHeader;
