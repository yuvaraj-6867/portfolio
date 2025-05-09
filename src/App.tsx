import Home from "./components/Home";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Navbar from "./components/Navbar";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <SkillsSection />
      <ProjectsSection />
      <About/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
