import {Button} from '@/components/Button';
import { ArrowRight,
         Download,
         ChevronDown,
 } from "lucide-react";
import { AnimatedBorderButton } from '../components/AnimatedBorderButton';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const skills = [
    "Java",
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "AWS",
    "REST APIs",]


export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden">
       {/* bg */}
        <div className="absolute inset-0">
           <img src="/hero-bg.jpg" alt="Matrix-like-image" className="w-full h-full object-cover opacity-40" />
           <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background">

           </div>
        </div>

        {/*content*/} 
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/*left Colum - text con*/} 
               <div className="space-y-8">
                    <div className="animate-fade-in-simple">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            dddddd
                            
                        </span>
                    </div>

                {/* headline */} 
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                         RRRRR <span className="text-primary glow-text">UUUUUUU</span>
                    <br />
                    DDDDDDDDDD
                    <br />
                   <span className="font-serif italic font-normal text-white">
                    FFFFFFFFFFFFFF
                    </span> 

                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
                </p>

                </div>
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg">
                    Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                </AnimatedBorderButton>
                </div>
                
                {/* Social Links */} 
                
                <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
                    <span className='tezt-sm text-muted-foreground'>Follow me: </span>
                   {[
                        { icon: FaGithub, href: "https://github.com/milanmorton711" },
                        { icon: FaLinkedin, href: "https://linkedin.com/in/your-profile" },
                    ].map((social, idx) => (
                        <a href={social.href} key={idx} className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-399'>
                            <social.icon className='' />
                        </a>
                    ))}
                </div>

               </div>
                  {/* Right Column - Profile Image */}
            <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/tempfp.jpg"
                  alt="Milan Morton"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating badge */}

                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                    <div className='flex items-center gap-3'>
                        <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                        <span className='text-sm font-medium'>Available for work</span>
                    </div>
                </div>
                {/* Stats badge */}

              </div>
            </div>
          </div>
        </div>
        
        {/* sKILLS section */}

        <div className='mt-20 animate-fade-in animation-delay-600'>
            <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
            <div className='relative overflow-hidden'>
                <div className='flex animate-marquee'>
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className='flex-shrink-0 px-8 py-4'>
                          <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-ground transition-colors'>{skill}</span>  
                        </div>
                    ))}
                </div>
            </div>
        </div>



    </div>
    
        <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800"
        >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
        </div>
    

    </section>;
};
