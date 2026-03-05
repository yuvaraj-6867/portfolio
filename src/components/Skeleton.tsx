import { motion } from "framer-motion";

export const SkeletonCard = () => (
  <motion.div
    className="skeleton-card"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="skeleton skeleton-image" />
    <div className="skeleton skeleton-title" />
    <div className="skeleton skeleton-text" />
    <div className="skeleton skeleton-text short" />
  </motion.div>
);

export const SkeletonGrid = ({ count = 6 }: { count?: number }) => (
  <div className="skeleton-grid">
    {[...Array(count)].map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
);
