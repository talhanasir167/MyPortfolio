import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-12 mt-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/" className="font-display font-bold text-xl tracking-tight">
            Talha Nasir
          </Link>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
            <Link href="/hire" className="text-muted-foreground hover:text-primary transition-colors">Hire Me</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/cv.pdf`} download className="text-muted-foreground hover:text-primary transition-colors">Download CV</a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="mailto:talhanasir167@gmail.com" 
            className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a 
            href="https://github.com/talhanasir167" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/30 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/talhanasir305/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border/50 text-muted-foreground hover:text-secondary hover:border-secondary/50 hover:bg-secondary/10 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
