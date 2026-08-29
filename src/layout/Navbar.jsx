import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";

const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#experience", label: "Experience"},
]

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
              console.log("scrollY:", window.scrollY, "isScrolled will be:", window.scrollY > 50);
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  
    return(

        <header className={`fixed top-0 left-0 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">

                <a href="#" className="text-Xl font-bold tracking-tight hover:text-primary">
                    MM<span className="text-primary">.</span>
                </a>

                {/* Desktop nav */}

                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                              {link.label}  
                            </a>
                        ))}
                    </div>
                </div>

            {/* CTA button */}
            <div className="hidden md:block">
                <Button size="sm">
                    Contact Me
                </Button>
            </div>

            {/*mobile menu butt*/}
            <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev )}>
                {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}

            </button>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-strong absolute top-full left-0 right-0 animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                            <a href={link.href} 
                                key={index} className="text-lg text-muted-foreground hover:text-foreground py-2"
                                onClick = {() => setIsMobileMenuOpen(false)}>
                                {link.label}   
                            </a>
                        ))}

                    <Button size="sm">
                        Contact Me
                    </Button>
                </div>

            </div>
            )}
        </nav>   
    </header>

        

        

    );
};