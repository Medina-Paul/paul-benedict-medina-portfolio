import { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollControls = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showBottomBtn, setShowBottomBtn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show top button if scrolled down
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }

      // Hide bottom button if near bottom
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (scrolledToBottom) {
        setShowBottomBtn(false);
      } else {
        setShowBottomBtn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 bg-theme-bg/80 backdrop-blur-sm text-theme-primary rounded-sm flex items-center justify-center border border-theme-text/10 hover:cursor-pointer hover:border-[#ff4655] hover:text-[#ff4655] hover:bg-[#ff4655]/10 ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        } transition-[transform,box-shadow,opacity,filter] duration-300`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <button
        onClick={scrollToBottom}
        className={`w-12 h-12 bg-theme-bg/80 backdrop-blur-sm text-theme-secondary rounded-sm flex items-center justify-center border border-theme-text/10 hover:cursor-pointer hover:border-[#ff4655] hover:text-[#ff4655] hover:bg-[#ff4655]/10 ${
          showBottomBtn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
        } transition-[transform,box-shadow,opacity,filter] duration-300`}
        aria-label="Scroll to bottom"
      >
        <ArrowDown size={24} />
      </button>
    </div>
  );
};

export default ScrollControls;

