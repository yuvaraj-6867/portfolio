// import { motion } from 'framer-motion';

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 15 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut"
//     }
//   }
// };

// const CookieSections = () => {
//   return (
//     <motion.div
//       className="min-h-screen bg-gray-950 text-gray-200 px-6 py-16 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.4 }}
//     >
//       <div className="max-w-3xl w-full mx-auto">
//         <motion.h2 
//           className="text-3xl font-bold mb-6 text-white"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ 
//             opacity: 1, 
//             y: 0,
//             transition: {
//               type: "spring",
//               stiffness: 100,
//               damping: 10,
//               delay: 0.1
//             }
//           }}
//         >
//           Cookie Policy
//         </motion.h2>
        
//         <motion.div 
//           className="space-y-4 text-gray-300"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.p variants={itemVariants}>
//             This site uses cookies to enhance user experience and for basic analytics. Our cookie usage includes:
//           </motion.p>
          
//           <motion.ul 
//             className="list-disc pl-6 space-y-2"
//             variants={containerVariants}
//           >
//             <motion.li variants={itemVariants}>Essential cookies for site functionality</motion.li>
//             <motion.li variants={itemVariants}>Performance cookies for analytics</motion.li>
//             <motion.li variants={itemVariants}>Preference cookies for user settings</motion.li>
//           </motion.ul>
          
//           <motion.p variants={itemVariants}>
//             You can manage or disable cookies through your browser settings. Continuing to use this site without changing
//             your cookie settings constitutes consent to our use of cookies.
//           </motion.p>
          
//           <motion.p 
//             variants={itemVariants}
//             className="italic text-gray-400"
//           >
//             We don't use third-party advertising cookies or tracking cookies.
//           </motion.p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default CookieSections;