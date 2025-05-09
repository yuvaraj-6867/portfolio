// import { motion } from 'framer-motion';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const TermsSections = () => {
//   return (
//     <motion.div
//       className="min-h-screen bg-gray-900 text-gray-200 px-6 py-16 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-3xl w-full mx-auto">
//         <motion.h2 
//           className="text-3xl font-bold mb-6 text-white"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ 
//             duration: 0.6,
//             ease: "backOut",
//             delay: 0.2
//           }}
//         >
//           Terms of Service
//         </motion.h2>
        
//         <motion.div 
//           className="space-y-4 text-gray-300"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.p variants={itemVariants}>
//             This website is for personal and portfolio use only. By accessing this site, you agree to comply with these terms:
//           </motion.p>
          
//           <motion.ul 
//             className="list-disc pl-6 space-y-2"
//             variants={containerVariants}
//           >
//             <motion.li variants={itemVariants}>Content is for personal viewing only</motion.li>
//             <motion.li variants={itemVariants}>No commercial use without permission</motion.li>
//             <motion.li variants={itemVariants}>No redistribution or reproduction of content</motion.li>
//             <motion.li variants={itemVariants}>No attempts to compromise site security</motion.li>
//           </motion.ul>
          
//           <motion.p variants={itemVariants}>
//             Any violation of these terms may result in appropriate legal actions. These terms are subject to change without notice.
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default TermsSections;