import { useState, useRef } from 'react';
import { Mail, MapPin, Check, Loader2, ShieldCheck } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleVerify = () => {
    if (captchaVerified) return;
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setCaptchaVerified(true);
    }, 1200);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!captchaVerified) return;
    
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setIsSending(false);
          form.current.reset(); // clear form
          setCaptchaVerified(false); // reset captcha
        },
        (error) => {
          setIsSending(false);
          alert('Failed to send message: ' + error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 min-h-screen flex flex-col justify-center relative overflow-hidden bg-theme-card">

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-theme-primary inline-block relative">
            Contact
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-theme-primary/30 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          
          {/* Left Column: Info */}
          <div className="flex flex-col space-y-8 sm:space-y-10 lg:pt-4">
            <p className="text-theme-text-muted text-xs sm:text-sm leading-relaxed">
              Available for freelance/commission projects and open to discussing new opportunities. Requests are highly appreciated.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 sm:gap-5 text-theme-text">
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 flex items-center justify-center border-2 border-theme-text-muted/20 rounded-md bg-theme-card">
                  <Mail size={20} className="text-theme-secondary sm:w-5 sm:h-5" />
                </div>
                <span className="font-medium font-heading text-theme-text-muted text-sm sm:text-[1rem] break-all leading-none sm:mb-1">paulbenedictmedina@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 sm:gap-5 text-theme-text">
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 flex items-center justify-center border-2 border-theme-text-muted/20 rounded-md bg-theme-card">
                  <MapPin size={20} className="text-theme-secondary sm:w-5 sm:h-5" />
                </div>
                <span className="font-medium font-heading text-theme-text-muted text-sm sm:text-[1rem] leading-none sm:mb-1">Quezon City, Philippines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-theme-card p-6 sm:p-8 md:p-10 border border-theme-text/10 rounded-sm">
            <form ref={form} className="space-y-5 sm:space-y-6" onSubmit={sendEmail}>
              
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-theme-text font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-theme-bg border border-theme-text/10 text-theme-text px-4 py-2.5 sm:py-3 focus:outline-none focus:border-[#ff4655] text-xs sm:text-sm rounded-sm transition-[transform,box-shadow,opacity,filter] duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-theme-text font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-theme-bg border border-theme-text/10 text-theme-text px-4 py-2.5 sm:py-3 focus:outline-none focus:border-[#ff4655] text-xs sm:text-sm rounded-sm transition-[transform,box-shadow,opacity,filter] duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject Row */}
              <div>
                <label htmlFor="subject" className="block text-theme-text font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="title"
                  required
                  className="w-full bg-theme-bg border border-theme-text/10 text-theme-text px-4 py-2.5 sm:py-3 focus:outline-none focus:border-[#ff4655] text-xs sm:text-sm rounded-sm transition-[transform,box-shadow,opacity,filter] duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Row */}
              <div>
                <label htmlFor="message" className="block text-theme-text font-bold mb-1.5 sm:mb-2 text-xs sm:text-sm">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4" 
                  className="w-full bg-theme-bg border border-theme-text/10 text-theme-text px-4 py-2.5 sm:py-3 focus:outline-none focus:border-[#ff4655] resize-none text-xs sm:text-sm rounded-sm transition-[transform,box-shadow,opacity,filter] duration-300"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Captcha Row */}
              <div 
                onClick={handleVerify}
                className={`flex items-center justify-between p-3 sm:p-4 rounded-sm border cursor-pointer  ${captchaVerified ? 'border-green-400 bg-green-400/10' : 'border-theme-text/10 bg-theme-bg hover:border-[#ff4655]'} transition-[transform,box-shadow,opacity,filter] duration-300`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-sm border-2 flex items-center justify-center  flex-shrink-0 ${captchaVerified ? 'bg-green-400 border-green-400' : 'border-theme-text-muted/50'}`}>
                    {verifying ? (
                      <Loader2 size={14} className="animate-spin text-theme-secondary sm:w-4 sm:h-4" />
                    ) : captchaVerified ? (
                      <Check size={14} className="text-white sm:w-4 sm:h-4" />
                    ) : null}
                  </div>
                  <span className="text-theme-text font-bold select-none text-xs sm:text-sm">
                    {verifying ? "Verifying..." : captchaVerified ? "Verified human" : "Verify you are human"}
                  </span>
                </div>
                <ShieldCheck size={20} className={`${captchaVerified ? "text-green-400" : "text-theme-text-muted"} sm:w-6 sm:h-6`} />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={!captchaVerified || isSending}
                className={`w-full font-bold rounded-sm py-4 flex items-center justify-center gap-2 uppercase tracking-wide text-xs sm:text-sm
                  ${captchaVerified && !isSending
                    ? 'bg-[#ff4655] hover:bg-[#ff6b76] text-black cursor-pointer' 
                    : 'bg-theme-text-muted/10 text-theme-text-muted cursor-not-allowed'
                  } transition-[transform,box-shadow,opacity,filter] duration-300`}
              >
                {isSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin sm:w-5 sm:h-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

