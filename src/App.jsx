import { useState, useEffect } from "react";
import Navbar from "./components/navigation/NavBar";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Spinner from "./components/UI/Spinner"; // Import your spinner component
import About from "./components/sections/About";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
