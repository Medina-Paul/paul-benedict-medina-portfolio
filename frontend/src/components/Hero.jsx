import { Mail, MapPin } from 'lucide-react';
import medina_pfp from '../assets/medina_pfp.jpg'

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 opacity-100 pointer-events-none">
        <img 
          src={medina_pfp} 
          alt="Paul Benedict Medina Background" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
        
        {/* Left fade to blend with the text column */}
        <div className="absolute inset-y-0 left-0 w-[90%] sm:w-3/4 lg:w-1/2 bg-gradient-to-r from-theme-bg via-theme-bg/80 to-transparent"></div>
        
        {/* Vertical fade to blend with the section below */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-theme-bg/30 to-transparent"></div>
      </div>

      
      {/* Left Section Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Column: Text */}
          <div className="flex-1 max-w-2xl w-full flex flex-col items-start text-left">
          
            {/* Name */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-black text-theme-primary mb-4 leading-[1.1] drop-shadow-md">
              Paul Benedict Medina
            </h1>
            
            {/* Subtitle / Location Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-theme-text mb-6">
              <span className="font-bold text-lg md:text-xl font-heading drop-shadow-sm">Web Developer</span>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-theme-text-muted/40"></div>
              <div className="flex items-center gap-1.5 text-theme-text font-bold">
                <MapPin size={18} className="text-theme-primary" />
                Quezon City, Philippines
              </div>
            </div>

            {/* Bio */}
            <p className="text-base text-theme-text font-medium mb-10 leading-relaxed max-w-xl">
             Third-year BS Information Technology student with a solid foundation in web development. Proficient in modern web technologies seeking for freelancing projects to provide reliable solutions.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-row items-center gap-3 mb-12">
              <button onClick={() => handleScroll('contact')} className="bg-[#ff4655] hover:bg-[#ff6b76] hover:cursor-pointer text-black px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold tracking-wider transition-[transform,box-shadow,opacity,filter] duration-300 flex items-center justify-center rounded-sm">
                Send Inquiry
              </button>
              <button onClick={() => handleScroll('projects')} className="bg-theme-text/5 backdrop-blur-md text-theme-text border border-theme-text/20 hover:cursor-pointer hover:border-[#ff4655] hover:text-[#ff4655] hover:bg-theme-text/10 px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-bold tracking-wider transition-[transform,box-shadow,opacity,filter] duration-300 flex items-center justify-center rounded-sm">
                View Works
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 text-theme-text-muted">
              <a href="https://www.facebook.com/paulfranciscomedina" target="_blank" rel="noopener noreferrer" className="hover:text-theme-primary transition-[transform,box-shadow,opacity] duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="mailto:paulbenedictmedina@gmail.com" className="hover:text-theme-primary transition-[transform,box-shadow,opacity] duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

