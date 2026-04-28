import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Terminal, Database, Code, Cpu, Server, Brain, Network, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroBg from "@/assets/hero-bg.png";

// --- Data ---
// Editable portfolio content
const PORTFOLIO_DATA = {
  name: "Alex Carter",
  title: "Senior Full-Stack & LLM Engineer",
  tagline: "Bridging the gap between production web systems and aligned AI models.",
  about: "I build robust, scalable web applications and integrate them with fine-tuned large language models. With over 6 years of full-stack experience (React, Node, Postgres, Cloud) and deep expertise in LLM training, alignment (RLHF/DPO), and inference optimization, I help teams ship AI-native products that are both technically sound and deeply impactful.",
  email: "hello@alexcarter.dev",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: {
    fullstack: ["React / Next.js", "Node.js / TypeScript", "Python", "PostgreSQL", "Redis", "Docker / Kubernetes", "AWS / GCP"],
    llm: ["PyTorch / JAX", "Transformers / vLLM", "RLHF / DPO", "LoRA / QLoRA", "Eval Frameworks", "Prompt Engineering", "RAG Architectures"]
  },
  experience: [
    {
      company: "Nexus AI",
      role: "Senior AI Engineer",
      period: "2022 - Present",
      description: "Leading the core model infrastructure team. Fine-tuned custom 7B/13B models for code generation, built the evaluation pipeline, and integrated models into our Next.js web application serving 100k+ MAU."
    },
    {
      company: "DataFlow Systems",
      role: "Full-Stack Developer",
      period: "2019 - 2022",
      description: "Architected and maintained a distributed data processing platform using React, Node.js, and PostgreSQL. Scaled the backend to handle 50k requests per second."
    }
  ],
  projects: [
    {
      title: "Cortex",
      description: "An open-source RAG-powered knowledge base for engineering teams. Built with Next.js, FastAPI, pgvector, and a custom fine-tuned Llama-3 model for precise technical retrieval.",
      tech: ["Next.js", "FastAPI", "pgvector", "vLLM"],
      link: "#"
    },
    {
      title: "EvalBench",
      description: "A framework for automated LLM evaluation and regression testing. Used internally by 3 startups to prevent model drift during RLHF.",
      tech: ["Python", "PyTorch", "React", "SQLite"],
      link: "#"
    },
    {
      title: "DevStream",
      description: "Real-time collaborative code editor with AI pair programming capabilities. Handles multi-user CRDTs via WebSockets.",
      tech: ["React", "Node.js", "Redis", "WebSockets"],
      link: "#"
    }
  ]
};

// --- Components ---

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 md:mb-20">
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
      {title}
    </h2>
    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-12 bg-primary mt-6 rounded-full" />
  </div>
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span>{PORTFOLIO_DATA.name.split(' ')[0]}<span className="text-primary">.dev</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        </div>
        <Button variant="outline" size="sm" className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
          <a href="#contact">Get in touch</a>
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 px-6 md:px-12 lg:px-24">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30 mix-blend-screen">
          <img src={heroBg} alt="Abstract hero background" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <motion.div style={{ opacity, scale }} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono border border-primary/20">
              System.init()
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">scalable web</span> <br/>
            & aligning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LLMs</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-light"
          >
            {PORTFOLIO_DATA.tagline}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
              <a href="#work">View Selected Work</a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border hover:bg-muted/50 transition-all" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border/40 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <SectionHeading title="The Intersect" subtitle="Where infrastructure meets intelligence." />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {PORTFOLIO_DATA.about}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most engineers build the app OR train the model. I do both. This end-to-end perspective allows me to design RAG systems that don't just benchmark well, but actually scale in production.
              </p>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
             <FadeIn delay={0.2} className="relative z-10">
               <Card className="bg-card border-border/50 overflow-hidden group hover:border-primary/50 transition-colors h-full">
                 <CardContent className="p-8">
                   <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Server className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">Full-Stack Engineering</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                     Building resilient, distributed architectures. From React frontends to Postgres databases, ensuring high availability and low latency.
                   </p>
                   <div className="flex flex-wrap gap-2">
                     <Badge variant="secondary" className="bg-secondary/50 font-mono font-normal">React</Badge>
                     <Badge variant="secondary" className="bg-secondary/50 font-mono font-normal">Node.js</Badge>
                     <Badge variant="secondary" className="bg-secondary/50 font-mono font-normal">Postgres</Badge>
                   </div>
                 </CardContent>
               </Card>
             </FadeIn>
             
             <FadeIn delay={0.4} className="relative z-10 sm:mt-12">
               <Card className="bg-card border-border/50 overflow-hidden group hover:border-blue-500/50 transition-colors h-full">
                 <CardContent className="p-8">
                   <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Brain className="w-6 h-6 text-blue-400" />
                   </div>
                   <h3 className="text-xl font-bold mb-3">LLM Alignment</h3>
                   <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                     Fine-tuning foundation models for domain-specific tasks. Optimizing inference and building rigorous evaluation pipelines.
                   </p>
                   <div className="flex flex-wrap gap-2">
                     <Badge variant="secondary" className="bg-secondary/50 font-mono font-normal">PyTorch</Badge>
                     <Badge variant="secondary" className="bg-secondary/50 font-mono font-normal">vLLM</Badge>
                     <Badge variant="secondary" className="bg-secondary/50 font-mono font-normal">RLHF</Badge>
                   </div>
                 </CardContent>
               </Card>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeading title="Technical Arsenal" />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <FadeIn delay={0.1}>
              <div className="mb-8 flex items-center gap-3 border-b border-border/50 pb-4">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold">Systems & Web</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills.fullstack.map((skill, i) => (
                  <div key={i} className="px-4 py-2 rounded-md bg-muted/40 border border-border/50 text-sm font-mono hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="mb-8 flex items-center gap-3 border-b border-border/50 pb-4">
                <Network className="w-5 h-5 text-blue-400" />
                <h3 className="text-2xl font-bold">AI & Models</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {PORTFOLIO_DATA.skills.llm.map((skill, i) => (
                  <div key={i} className="px-4 py-2 rounded-md bg-muted/40 border border-border/50 text-sm font-mono hover:bg-blue-500/10 hover:border-blue-500/30 transition-colors cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30 border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionHeading title="Selected Work" subtitle="Architecting robust applications and aligning custom models." />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {PORTFOLIO_DATA.projects.map((project, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full bg-background/50 border-border/50 hover:border-primary/40 transition-all duration-300 group flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-blue-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <Activity className="w-8 h-8 text-primary/70" />
                      <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t, j) => (
                        <span key={j} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionHeading title="Experience" />
          </FadeIn>
          
          <div className="mt-16 space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative pl-8 md:pl-0">
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />
                <div className="md:grid md:grid-cols-2 gap-12 relative">
                  {/* Mobile timeline line */}
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border/50 -translate-x-4" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[-32px] md:left-[50%] top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-background -translate-x-1/2 md:translate-x-[-50%]" />
                  
                  <div className={`mb-4 md:mb-0 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-primary font-mono text-sm mt-1">{exp.company}</div>
                    <div className="text-muted-foreground text-sm mt-1 mb-4">{exp.period}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Empty div for layout if needed */}
                  {i % 2 === 0 && <div className="hidden md:block" />}
                  {i % 2 !== 0 && <div className="hidden md:block md:col-start-1 md:row-start-1" />}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card/30 border-t border-border/40 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]" />
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
              Ready to build?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
              <a href={`mailto:${PORTFOLIO_DATA.email}`}>
                <Mail className="mr-2 h-5 w-5" /> Say Hello
              </a>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-border/40 text-sm text-muted-foreground bg-background">
        <div>
          &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href={PORTFOLIO_DATA.socials.github} className="hover:text-primary transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" /> <span className="sr-only">GitHub</span>
          </a>
          <a href={PORTFOLIO_DATA.socials.linkedin} className="hover:text-primary transition-colors flex items-center gap-2">
            <Linkedin className="w-4 h-4" /> <span className="sr-only">LinkedIn</span>
          </a>
          <a href={PORTFOLIO_DATA.socials.twitter} className="hover:text-primary transition-colors flex items-center gap-2">
            <Twitter className="w-4 h-4" /> <span className="sr-only">Twitter</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
