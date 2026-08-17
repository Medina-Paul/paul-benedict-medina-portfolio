import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isLightMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'about'];
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element's top is in the top 30% of the screen, or it's currently occupying the screen
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding indicator position
  useEffect(() => {
    if (!navRef.current) return;
    
    const targetId = hoveredSection || activeSection;
    const targetElement = navRef.current.querySelector(`[data-id="${targetId}"]`);
    
    if (targetElement) {
      setIndicatorStyle({
        width: targetElement.offsetWidth,
        left: targetElement.offsetLeft,
      });
    }
  }, [activeSection, hoveredSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on click
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 z-50 bg-theme-bg/90 backdrop-blur-md border-b border-theme-text/10 flex items-center justify-between">
        
        {/* Left: Hamburger (Mobile) + Logo */}
        <div className="flex items-center h-full px-4 md:px-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hover:cursor-pointer text-theme-text-muted hover:text-theme-primary p-2 mr-2 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Center: Navigation Links (Desktop Only) with Sliding Indicator */}
        <ul 
          ref={navRef}
          className="hidden md:flex relative h-full items-center space-x-6 lg:space-x-10 text-[13px] tracking-wide"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {/* Sliding Blue Bar (Top) */}
          <div 
            className="absolute top-0 h-[3px] bg-[#ff4655] transition-all duration-300 ease-out z-10"
            style={{ width: `${indicatorStyle.width}px`, left: `${indicatorStyle.left}px` }}
          />

          <li className="h-full flex items-center" data-id="hero" onMouseEnter={() => setHoveredSection('hero')}>
            <button onClick={() => scrollToSection('hero')} className="px-1 font-bold text-theme-text hover:text-[#ff4655] transition-colors uppercase cursor-pointer">HOME</button>
          </li>
          <li className="h-full flex items-center" data-id="projects" onMouseEnter={() => setHoveredSection('projects')}>
            <button onClick={() => scrollToSection('projects')} className="px-1 font-bold text-theme-text hover:text-[#ff4655] transition-colors uppercase cursor-pointer">PROJECTS</button>
          </li>
          <li className="h-full flex items-center" data-id="skills" onMouseEnter={() => setHoveredSection('skills')}>
            <button onClick={() => scrollToSection('skills')} className="px-1 font-bold text-theme-text hover:text-[#ff4655] transition-colors uppercase cursor-pointer">SKILLS</button>
          </li>
          <li className="h-full flex items-center" data-id="about" onMouseEnter={() => setHoveredSection('about')}>
            <button onClick={() => scrollToSection('about')} className="px-1 font-bold text-theme-text hover:text-[#ff4655] transition-colors uppercase cursor-pointer">ABOUT</button>
          </li>
        </ul>
        
        {/* Right: Theme Toggle & CTA */}
        <div className="flex items-center h-full">
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="text-theme-text-muted hover:text-theme-primary hover:cursor-pointer flex items-center justify-center p-2 mr-2 md:mr-4 transition-[transform,box-shadow,opacity] duration-300"
            aria-label="Toggle Theme"
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="h-full px-5 sm:px-6 md:px-12 bg-[#ff4655] hover:bg-[#ff6b76] hover:cursor-pointer text-black font-bold text-sm md:text-base tracking-wider uppercase flex items-center justify-center"
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-theme-bg border-b border-theme-text/10 shadow-lg md:hidden flex flex-col py-4 px-6 z-40 animate-in slide-in-from-top-2 duration-300">
          <button onClick={() => scrollToSection('hero')} className="py-3 text-sm font-bold text-theme-text hover:text-[#ff4655] text-left uppercase border-b border-theme-text/5 cursor-pointer transition-colors">HOME</button>
          <button onClick={() => scrollToSection('projects')} className="py-3 text-sm font-bold text-theme-text hover:text-[#ff4655] text-left uppercase border-b border-theme-text/5 cursor-pointer transition-colors">PROJECTS</button>
          <button onClick={() => scrollToSection('skills')} className="py-3 text-sm font-bold text-theme-text hover:text-[#ff4655] text-left uppercase border-b border-theme-text/5 cursor-pointer transition-colors">SKILLS</button>
          <button onClick={() => scrollToSection('about')} className="py-3 text-sm font-bold text-theme-text hover:text-[#ff4655] text-left uppercase cursor-pointer transition-colors">ABOUT</button>
        </div>
      )}
    </>
  );
};

export default Navbar;

