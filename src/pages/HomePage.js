import Navbar from "../components/NavBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import DevSkills from "../components/DevSkills";
import { ThemeProvider } from "../hooks/ThemeContext";
const HomePage = () => {
  return (
    <>
      <ThemeProvider> 
        <Navbar />
        <Home />
        <AboutMe />
        <DevSkills />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
