import { useState, useEffect } from 'react';

const Footer = () => {
  const [verse, setVerse] = useState({ text: "Loading...", reference: "" });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Fetch a random Bible verse using the free labs.bible.org API
    fetch('https://labs.bible.org/api/?passage=random&type=json')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const v = data[0];
          setVerse({
            text: v.text.replace(/<[^>]*>?/gm, ''), // strip any stray html tags
            reference: `${v.bookname} ${v.chapter}:${v.verse}`
          });
        }
      })
      .catch(() => {
        setVerse({
          text: "I can do all things through Christ which strengtheneth me.",
          reference: "Philippians 4:13"
        });
      });
  }, []);

  return (
    <footer className="w-full bg-theme-bg border-t border-theme-text/10 pt-8 pb-6 px-6 flex flex-col items-center">
      <div className="container mx-auto max-w-5xl flex flex-col items-center gap-6">
        
        {/* Bible Verse Quote */}
        <div className="flex flex-col items-center max-w-3xl text-center">
          <p className="text-theme-text font-heading text-base md:text-[1rem] italic mb-3 leading-relaxed font-bold">
            "{verse.text}"
          </p>
          <span className="text-[#ff4655] font-black tracking-widest uppercase text-xs md:text-[.8rem] px-4 py-1">
           {verse.reference}
          </span>
        </div>

        <div className="w-full h-1 bg-theme-text-muted/10 rounded-full my-2"></div>

        {/* Copyright */}
        <div className="flex justify-center items-center justify-between w-full text-theme-text-muted text-sm md:text-base font-bold">
          <p>© {currentYear} - Paul Benedict Medina</p>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

