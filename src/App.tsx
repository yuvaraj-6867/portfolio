import Home from "./components/Home";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <SplashScreen />
      <Navbar/>
      <Home />
      <SkillsSection />
      <ProjectsSection />
      <About/>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
