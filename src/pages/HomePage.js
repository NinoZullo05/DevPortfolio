import Navbar from "../components/NavBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import { ThemeProvider } from "../hooks/ThemeContext";
const HomePage = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default HomePage;
