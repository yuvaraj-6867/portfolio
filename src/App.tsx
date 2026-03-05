import Home from "./components/Home";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import SEO from "./components/SEO";
import Experience from "./components/Experience";
import CursorTrail from "./components/CursorTrail";
import ViewCounter from "./components/ViewCounter";
import ShareButton from "./components/ShareButton";
import SkipToContent from "./components/SkipToContent";
import { useKeyboardNav } from "./hooks/useKeyboardNav";
import { ToastProvider } from "./components/Toast";

const App = () => {
  useKeyboardNav();

  return (
    <ToastProvider>
      <div>
        <SkipToContent />
        <SEO />
        <CursorTrail />
        <ScrollProgress />
        <ViewCounter />
        <ShareButton />
        <SplashScreen />
        <Navbar/>
        <Home />
        <SkillsSection />
        <ProjectsSection />
        <Experience />
        <About/>
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </div>
    </ToastProvider>
  );
};

export default App;
