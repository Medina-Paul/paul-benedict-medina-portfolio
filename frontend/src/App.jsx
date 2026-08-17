import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollControls from './components/ScrollControls';
import Footer from './components/Footer';

function App() {
  const [isLightMode, setIsLightMode] = useState(false); // Default is Dark Mode

  useEffect(() => {
    // Apply light mode class if enabled
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="relative w-full h-full overflow-x-hidden selection:bg-theme-primary/30">
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <ScrollControls />

      <Footer />
    </div>
  );
}

export default App;

