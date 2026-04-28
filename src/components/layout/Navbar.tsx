import { Link, useLocation } from "wouter";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navVariants } from "@/lib/motion";
import portraitSrc from "@/assets/profile-placeholder.svg";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/hire", label: "Hire Me" },
    { href: "/contact", label: "Contact" },
  ];

  const cvUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/cv.pdf`;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border/50 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/hire" className="font-display font-bold text-xl tracking-tight z-50 flex items-center gap-2 group">
            <div className={`rounded-full overflow-hidden flex items-center justify-center transition-all ${scrolled ? "p-0.5" : "p-0"}`}>
              <img 
                src={portraitSrc} 
                alt="Talha Nasir" 
                className="w-9 h-9 object-cover rounded-full border-2 border-primary/40 ring-2 ring-primary/20 ring-offset-2 ring-offset-background hover:ring-primary/60 transition-all"
                loading="eager"
              />
            </div>
            <span className="hidden sm:inline-block">Talha Nasir</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(200,80,255,0.8)]"
                  />
                )}
              </Link>
            ))}
            <div className="flex items-center ml-4 gap-3">
              <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all neon-glow-primary">
                <Link href="/hire">Available for work</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-all border border-secondary/20">
                <a href={cvUrl} download>Download CV</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-display font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`${
                location === link.href ? "text-primary" : "text-muted-foreground"
              } hover:text-primary transition-colors`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 w-full max-w-[200px]">
            <Button asChild className="bg-primary text-white hover:bg-primary/90 w-full">
              <Link href="/hire" onClick={() => setMobileOpen(false)}>Hire Me</Link>
            </Button>
            <Button asChild variant="outline" className="w-full text-foreground border-border">
              <a href={cvUrl} download onClick={() => setMobileOpen(false)}>Download CV</a>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
