import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ViewCounter from "./components/ViewCounter";
import ShareButton from "./components/ShareButton";
import "./index.css";

const App = () => {
  return (
    <div className="bg-slate-950 text-white">
      <SplashScreen />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
      <ViewCounter />
      <ShareButton />
    </div>
  );
};

export default App;
