// import { motion } from 'framer-motion';
// import { FiShield, FiLock, FiEyeOff, FiCalendar } from 'react-icons/fi';

// const PrivacySections = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-gray-200 px-6 py-16 flex items-center justify-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-3xl w-full mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="flex items-center gap-3 mb-8"
//         >
//           <FiShield className="text-3xl text-blue-400" />
//           <h2 className="text-4xl font-bold text-white">Privacy Policy</h2>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="space-y-6"
//         >
//           <motion.div variants={item} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
//             <div className="flex items-start gap-4">
//               <FiLock className="text-xl text-blue-400 mt-1 flex-shrink-0" />
//               <p className="text-gray-300">
//                 We value your privacy. Your data will not be sold or shared with third parties without your explicit consent. 
//                 Any personal information collected is used solely to enhance your experience on this site.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div variants={item} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
//             <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
//               <FiEyeOff className="text-blue-400" />
//               Data We Collect
//             </h3>
//             <ul className="list-disc pl-6 space-y-2 text-gray-300">
//               <li>Contact form submissions (if applicable)</li>
//               <li>Anonymous usage analytics through Plausible</li>
//               <li>Basic cookie data for essential functionality</li>
//               <li>Authentication tokens for logged-in users</li>
//             </ul>
//           </motion.div>

//           <motion.div variants={item} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
//             <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
//             <p className="text-gray-300 mb-3">
//               Under privacy laws, you have the right to:
//             </p>
//             <ul className="list-disc pl-6 space-y-2 text-gray-300">
//               <li>Request access to your personal data</li>
//               <li>Request correction or deletion of your data</li>
//               <li>Withdraw consent for data processing</li>
//               <li>Lodge a complaint with a regulatory authority</li>
//             </ul>
//           </motion.div>

//           <motion.div variants={item} className="flex items-center gap-2 text-sm text-gray-500">
//             <FiCalendar />
//             <span>Last updated: {new Date().toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })}</span>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default PrivacySections;
