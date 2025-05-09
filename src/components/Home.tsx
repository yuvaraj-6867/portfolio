import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./animations";
import profileImage from "../assets/sauce-labs.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90 z-0"></div>

      {/* Floating dots */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 100, 0], y: [0, 100, 0], rotate: [0, 360] }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                JUNIOR TEST ENGINEER
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Yuvaraj
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto lg:mx-0"
            >
              I'm a Junior Test Engineer passionate about manual and automation testing. 
              I write and execute test cases, report bugs, and ensure seamless web experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all text-center"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-600 text-white rounded-lg font-medium hover:bg-gray-800 transition-all text-center"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                <img
                  src={profileImage}
                  alt="Profile Illustration"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md p-6"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,...';
                    console.error("Failed to load profile image");
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
