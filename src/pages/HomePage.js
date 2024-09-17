import Navbar from "../components/NavBar";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
const HomePage = () => {
  return (
    <>
     <div className="dark:bg-dark-bg bg-light-bg">
     <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
     </div>
    </>
  );
};

export default HomePage;
