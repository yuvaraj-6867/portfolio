import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
    className="text-center mb-16"
  >
    <motion.h2
      variants={itemVariants}
      className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6"
    >
      {title}
    </motion.h2>
    <motion.p
      variants={itemVariants}
      className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl"
    >
      {subtitle}
    </motion.p>
  </motion.div>
);

export default SectionHeader;
