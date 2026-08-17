import { useState, useRef } from 'react';
import { Folder, Play, X, ArrowLeft, ArrowRight } from 'lucide-react';
import nswmc_thumbnail from '../assets/nswmc_thumbnail.png';
import peso_thumbnail from '../assets/peso_thumbnail.png';

const Projects = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const projects = [
    {
      id: 1,
      title: "NSWMC Website Redesign",
      category: "Web Page",
      image: nswmc_thumbnail,
      youtubeId: "CTC7GLkrQ5A" 
    },
    {
      id: 2,
      title: "PESO Employment Tracker System",
      category: "Fullstack System",
      image: peso_thumbnail,
      youtubeId: "__fdnJaU0FY" 
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 px-6 min-h-screen flex flex-col justify-center relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-theme-primary inline-block relative">
            Projects
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-theme-primary/40 rounded-full"></span>
          </h2>
        </div>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory pt-4 md:pt-0 -mt-4 md:mt-0 pb-6 md:pb-0 -mx-6 px-[10vw] md:mx-0 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-auto'}`}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="w-[80vw] max-w-[320px] md:w-auto md:max-w-none shrink-0 snap-center md:snap-align-none flex flex-col group"
            >

              <div className="relative rounded-sm overflow-hidden mb-4 bg-theme-card border border-theme-text/10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-150 ease-out" 
                />
                
                {/* Category Tag (Top Right) */}
                <div className="absolute top-0 right-0 bg-[#ff4655] text-black text-[11px] font-bold px-3 py-1.5 flex items-center gap-1 shadow-sm rounded-bl-sm">
                   <Folder size={12} strokeWidth={3} /> {project.category}
                </div>

                {/* Play Button Overlay on Image */}
                {project.youtubeId && (
                  <div 
                    onClick={() => setActiveVideoId(project.youtubeId)}
                    className="absolute inset-0 flex md:hidden group-hover:flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-[#ff4655] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-150 ease-out">
                      <Play size={28} fill="black"/>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-base font-bold text-theme-text mb-4 leading-relaxed">
                {project.title}
              </h3>
           
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Mobile only since desktop is a grid) */}
        <div className="flex justify-end gap-6 mt-6 md:hidden px-6">
          <button 
            onClick={() => scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })}
            className="text-[#ff4655] hover:text-[#ff6b76] transition-colors cursor-pointer"
            aria-label="Scroll Left"
          >
            <ArrowLeft size={28} strokeWidth={2.5} />
          </button>
          <button 
            onClick={() => scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })}
            className="text-[#ff4655] hover:text-[#ff6b76] transition-colors cursor-pointer"
            aria-label="Scroll Right"
          >
            <ArrowRight size={28} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop (Sibling layer to prevent iOS Safari backdrop-filter bugs with iframes) */}
          <div 
            className="absolute inset-0 bg-theme-bg/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setActiveVideoId(null)}
          ></div>

          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 z-[110] text-theme-text-muted hover:text-[#ff4655] p-2 transition-colors cursor-pointer"
            onClick={() => setActiveVideoId(null)}
            aria-label="Close Video"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          {/* Video Container */}
          <div className="relative w-full max-w-5xl aspect-video bg-black overflow-hidden shadow-2xl z-[105] animate-in zoom-in-95 duration-300 rounded-sm">
            <iframe
              className="absolute inset-0 w-full h-full pointer-events-auto"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

