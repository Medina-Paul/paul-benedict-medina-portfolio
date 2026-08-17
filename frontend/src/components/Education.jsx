
import { GraduationCap, Award, Sparkles, Circle, Plus } from 'lucide-react';

const Education = () => {
  return (
    <section id="about" className="py-20 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Sparkles className="absolute top-[10%] left-[15%] text-theme-secondary animate-float" size={32} />
        <Plus className="absolute top-[20%] right-[20%] text-theme-primary animate-float-reverse" size={24} />
        <Circle className="absolute top-[40%] left-[5%] text-theme-secondary animate-float-slow" size={16} strokeWidth={4} />

        <Sparkles className="absolute bottom-[20%] right-[15%] text-theme-primary animate-float" size={28} />
        <Plus className="absolute bottom-[30%] left-[25%] text-theme-secondary animate-float-reverse" size={20} />
        <Circle className="absolute bottom-[10%] right-[35%] text-theme-primary animate-float-slow" size={24} strokeWidth={3} />

        <Sparkles className="absolute top-[50%] right-[5%] text-theme-secondary animate-float-reverse" size={20} />
        <Plus className="absolute top-[60%] left-[40%] text-theme-primary animate-float" size={32} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-theme-primary inline-block relative">
            Education & Certifications
            <span className="absolute -bottom-4 left-0 w-full h-1 bg-theme-primary/30 rounded-full"></span>
          </h2>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-theme-card p-8 border border-theme-text/10 rounded-sm">
            <div className="flex items-center gap-4 mb-8 text-theme-primary">
              <GraduationCap size={28} />
              <h3 className="text-xl font-bold font-heading">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base text-theme-text">B.S. Information Technology</h4>
                <p className="text-theme-primary font-bold text-sm mb-1">Polytechnic University of the Philippines Manila • 2024 - Present</p>
                <p className="text-theme-text-muted text-sm">Consistent President/Dean Lister.</p>
              </div>
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base text-theme-text">TVL-ICT: Computer Systems Servicing</h4>
                <p className="text-theme-primary font-bold text-sm mb-1">Don Alejandro Roces Sr. Science-Technology High School • 2022 - 2024</p>
                <p className="text-theme-text-muted text-sm">Graduated with honors. Rank 5 in Batch.</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-theme-card p-8 border border-theme-text/10 rounded-sm">
            <div className="flex items-center gap-4 mb-8 text-theme-primary">
              <Award size={28} />
              <h3 className="text-xl font-bold font-heading">Certifications</h3>
            </div>

            <div className="space-y-6">

              {/* Cert 1 */}
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base md:text-base text-theme-text leading-snug">Data Analytics Essentials</h4>
                <p className="text-theme-primary font-bold text-xs md:text-sm mb-1">DICT-ITU DTC Initiative • Ongoing</p>
              </div>

              {/* Cert 2 */}
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base md:text-base text-theme-text leading-snug">AI Fundamentals: Foundations for Understanding AI</h4>
                <p className="text-theme-primary font-bold text-xs md:text-sm mb-1">IBM SkillsBuild / DICT-ITU DTC Initiative • Aug 2026</p>
              </div>

              {/* Cert 3 */}
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base md:text-base text-theme-text leading-snug">AI Fundamentals: Language and Vision in AI</h4>
                <p className="text-theme-primary font-bold text-xs md:text-sm mb-1">IBM SkillsBuild / DICT-ITU DTC Initiative • Aug 2026</p>
              </div>

              {/* Cert 4 */}
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base md:text-base text-theme-text leading-snug">Career Development Talk with Silicon Valley HQ</h4>
                <p className="text-theme-primary font-bold text-xs md:text-sm mb-1">Silicon Valley HQ • Oct 2024</p>
                <p className="text-theme-text-muted text-xs md:text-sm mt-1">Generative AI, Cybersecurity, Emotional Intelligence, and Job Opportunities.</p>
              </div>

              {/* Cert 5 */}
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base md:text-base text-theme-text leading-snug">TESDA National Certificate II: Computer Systems Servicing</h4>
                <p className="text-theme-primary font-bold text-xs md:text-sm mb-1">TESDA • April 2024</p>
              </div>

              {/* Cert 6 */}
              <div className="relative pl-6 border-l-2 border-theme-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-theme-primary border-2 border-theme-card"></div>
                <h4 className="font-bold text-base md:text-base text-theme-text leading-snug">Work Immersion Certificate of Completion (160 hours)</h4>
                <p className="text-theme-primary font-bold text-xs md:text-sm mb-1">PC-Factory • March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


