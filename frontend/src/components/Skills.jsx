import { useState, useEffect, useRef } from 'react';
import { 
  FileCode2, 
  Terminal, 
  Cpu, 
  Layout, 
  Monitor, 
  Server, 
  Zap,
  Table, 
  Calculator, 
  Network, 
  Database,
  Cloud,
  GitBranch,
  Sparkles,
  Send,
  Box
} from 'lucide-react';
import java_icon from '../assets/java_icon.svg';
import cobol_icon from '../assets/cobol_icon.svg';
import matplotlib_icon from '../assets/matplotlib_icon.svg';
import vscode_icon from '../assets/vscode_icon.svg';
import seaborn_icon from '../assets/seaborn_icon.svg';

const SkillIcon = ({ slug, FallbackIcon }) => {
  const [error, setError] = useState(false);

  if (error || !slug) {
    if (typeof FallbackIcon === 'string') {
      return (
        <img 
          src={FallbackIcon} 
          alt="fallback icon" 
          className="w-7 h-7 object-contain pointer-events-none"
          draggable="false"
        />
      );
    }
    return <FallbackIcon size={28} />;
  }

  return (
    <img 
      src={`https://cdn.simpleicons.org/${slug}`} 
      alt="icon" 
      className={`w-7 h-7 object-contain pointer-events-none ${slug === 'github' ? 'invert-in-dark' : ''}`}
      draggable="false"
      onError={() => setError(true)}
    />
  );
};

const Skills = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  const allSkills = [
    // Programming Languages
    { name: "JavaScript", slug: "javascript", fallback: FileCode2 },
    { name: "Python", slug: "python", fallback: Terminal },
    { name: "Java", slug: null, fallback: java_icon },
    { name: "C", slug: "c", fallback: Cpu },
    { name: "COBOL", slug: null, fallback: cobol_icon },
    
    // Web Development
    { name: "React", slug: "react", fallback: Layout },
    { name: "Tailwind CSS", slug: "tailwindcss", fallback: Monitor },
    { name: "Node.js", slug: "nodedotjs", fallback: Server },
    { name: "Express", slug: "express", fallback: Zap },
    
    // Data Analytics
    { name: "Pandas", slug: "pandas", fallback: Table },
    { name: "NumPy", slug: "numpy", fallback: Calculator },
    { name: "Scikit-learn", slug: "scikitlearn", fallback: Network },
    { name: "Matplotlib", slug: null, fallback: matplotlib_icon },
    { name: "Seaborn", slug: null, fallback: seaborn_icon },
    
    // Database
    { name: "PostgreSQL", slug: "postgresql", fallback: Database },
    { name: "MySQL", slug: "mysql", fallback: Database },
    { name: "SQLite", slug: "sqlite", fallback: Database },
    { name: "MongoDB", slug: "mongodb", fallback: Database },
    { name: "NeonDB", slug: "neon", fallback: Cloud },
    
    // Tools & IDEs
    { name: "GitHub", slug: "github", fallback: Cloud },
    { name: "Git", slug: "git", fallback: GitBranch },
    { name: "LucideReact", slug: "lucide", fallback: Sparkles },
    { name: "Postman", slug: "postman", fallback: Send },
    { name: "VS Code", slug: null, fallback: vscode_icon },
    { name: "IntelliJ", slug: "intellijidea", fallback: Box },
  ];

  // Duplicate skills to create an infinite loop
  const duplicatedSkills = [...allSkills, ...allSkills];

  // Auto-scrolling logic
  useEffect(() => {
    let animationFrameId;
    
    const scroll = () => {
      // Pause if hovered or dragging
      if (scrollRef.current && !isHovered && !isDragging) {
        scrollRef.current.scrollLeft += 1; 
        
        // Seamless loop
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  // Handle manual mouse wheel scrolling horizontally
  useEffect(() => {
    const handleWheel = (e) => {
      if (scrollRef.current && isHovered) {
        e.preventDefault(); 
        scrollRef.current.scrollLeft += e.deltaY; 
        
        // Manual looping
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
          scrollRef.current.scrollLeft = 0;
        } else if (scrollRef.current.scrollLeft <= 0) {
          scrollRef.current.scrollLeft = (scrollRef.current.scrollWidth / 2);
        }
      }
    };
    
    const node = scrollRef.current;
    if (node) {
      node.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (node) node.removeEventListener('wheel', handleWheel);
    };
  }, [isHovered]);

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setStartScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent text selection while dragging
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = startScrollLeft - walk;
    
    // Handle looping while dragging
    if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth / 2)) {
      scrollRef.current.scrollLeft = 0;
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setStartScrollLeft(0);
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft = (scrollRef.current.scrollWidth / 2);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setStartScrollLeft(scrollRef.current.scrollWidth / 2);
    }
  };

  return (
    <section id="skills" className="py-20 min-h-[50vh] flex flex-col justify-center overflow-hidden relative bg-theme-card">
      
      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-theme-primary inline-block relative">
            Skills & Technologies
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-theme-primary/30 rounded-full"></span>
          </h2>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="w-full relative pb-8">
        
        {/* The actual scrolling viewport */}
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`w-full overflow-x-auto flex gap-4 px-4 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Inner content wrapper */}
          <div className="flex gap-4 items-center w-max pointer-events-none">
            {duplicatedSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-24 h-24 rounded-sm bg-theme border border-theme-text/10 pointer-events-auto hover:border-[#ff4655] group transition-[transform,box-shadow,opacity,filter] duration-300"
              >
                <div className="text-theme-text-muted group-hover:text-[#ff4655] flex items-center justify-center h-8 pointer-events-none transition-[transform,box-shadow,opacity,filter] duration-300">
                  <SkillIcon slug={skill.slug} FallbackIcon={skill.fallback} />
                </div>
                <span className="text-[11px] font-bold text-theme-text text-center px-1 pointer-events-none uppercase tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

