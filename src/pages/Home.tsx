import { Link } from "wouter";
import { ArrowRight, Code, Database, Server, Star, User, Users, ChevronRight, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import heroBg from "@/assets/hero-abstract.png";
import { projects } from "@/data/projects";
import { HowIWorkSection } from "@/components/HowIWorkSection";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Angular", "React Native", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Redux", "React Query", "Bootstrap", "SCSS", "ERB", "Hotwire", "Stimulus", "Flowbite", "TailwindUI"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "Django", "Ruby on Rails", "REST", "GraphQL", "WebSockets", "Sidekiq", "Redis"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis", "Vector DB"] },
  { category: "Cloud & DevOps", items: ["AWS", "Heroku", "Vercel", "Digital Ocean", "Docker", "Firebase", "GitHub Actions", "Sentry", "Datadog", "Grafana", "Kibana", "Rollbar", "LaunchDarkly", "Cloudinary", "S3"] },
  { category: "Integrations", subtitle: "Shipped in production", icon: <Puzzle className="inline-block w-5 h-5 mr-2 text-secondary -mt-1" />, items: ["Stripe", "Braintree", "AWS (SNS, SQS)", "HubSpot", "Surescripts", "NetSuite", "TaxCloud", "Algolia", "QuickBooks", "Zoom API", "Google Calendar", "Apple Health", "Google Fit", "Garmin", "Oura"] },
  { category: "AI & LLMs", items: ["LLM training & fine-tuning", "Dataset curation", "Data annotation", "Data labeling", "RLHF-style data work", "Evals & QA", "Prompt engineering", "RAG", "AI workflow automation", "Vector databases"] },
  { category: "AI-Assisted (Vibe Coding)", items: ["Replit Agent", "Replit", "Cursor", "Claude Code", "v0", "Lovable", "GitHub Copilot", "Codex"] },
  { category: "Tools & Collab", items: ["Git", "Jira", "Linear", "Monday", "Confluence", "Figma", "Notion", "Slack", "Microsoft Teams"] }
];

const testimonials = [
  {
    quote: "Talha shipped our MVP in less than a week. The combination of his backend knowledge and AI-assisted speed is exactly what an early-stage startup needs.",
    author: "David M.",
    role: "Founder, FinTech Startup"
  },
  {
    quote: "We brought him in for a quick spike to integrate LLM features into our platform. Clean code, great communication, and immediate impact.",
    author: "Sarah K.",
    role: "Engineering Manager, HealthTech"
  },
  {
    quote: "An absolute powerhouse. Talha understands both classical engineering and the new AI-native workflow natively.",
    author: "James T.",
    role: "CTO, SaaS Platform"
  }
];

const industriesList = [
  "E-commerce", "Health & Wellness", "Healthcare", "Fintech", "SaaS", "Recruiting", "Event Management", "Legal-tech", "CRM", "HRMS"
];

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Neon abstract mesh" 
            className="w-full h-full object-cover opacity-20 mix-blend-screen" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[120px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20 pb-12 lg:pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-primary/30 backdrop-blur-md mb-6">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ boxShadow: "0 0 10px var(--color-secondary)" }} />
                  <span className="text-sm font-mono text-muted-foreground">Available for work</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-6">
                  Production engineering meets<br className="hidden md:block"/>
                  <span className="text-gradient-primary">AI-assisted speed</span>,<br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">and LLM expertise.</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-light mb-10 leading-relaxed">
                  6+ years of production engineering, fluent in AI-assisted development, and a paid contributor to LLM training pipelines on different platforms. I build MVPs in days and harden them for scale.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.4} className="flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow transition-all hover:scale-105 neon-glow-primary">
                  <Link href="/projects">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all">
                  <Link href="/contact">
                    Get in touch
                  </Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Intersection / The 3 Pillars */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">The <span className="text-gradient-primary">Intersection</span></h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <Card className="h-full bg-card/40 backdrop-blur border-border/50 hover:border-primary/40 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">Production Engineering</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    6+ years building robust, scalable full-stack applications across e-commerce, healthcare, and fintech using React, Node.js, and complex database architectures.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="font-mono bg-background">System Architecture</Badge>
                    <Badge variant="outline" className="font-mono bg-background">Scalable APIs</Badge>
                    <Badge variant="outline" className="font-mono bg-background">Distributed Systems</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/40 backdrop-blur border-border/50 hover:border-secondary/40 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">LLM Training Data Experience </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Paid contributor to RLHF, evaluation, and annotation pipelines through Mindrift, Toloka, and Turing, the platforms that supply training data to leading AI labs. Hands-on experience with what makes models good or bad.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="font-mono bg-background">Fine-tuning</Badge>
                    <Badge variant="outline" className="font-mono bg-background">RLHF</Badge>
                    <Badge variant="outline" className="font-mono bg-background">Annotation & Labeling</Badge>
                    <Badge variant="outline" className="font-mono bg-background">Model Evaluation</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="h-full bg-card/40 backdrop-blur border-border/50 hover:border-blue-500/40 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">AI-Assisted Development</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Vibe Coding with Classical Engineering experience, fluent in the new AI-assisted paradigm. Leveraging Replit Agent, Cursor, and Claude Code to prototype and ship at 10x speed without sacrificing quality.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge variant="outline" className="font-mono bg-background">Agentic Development</Badge>
                    <Badge variant="outline" className="font-mono bg-background">Production-Ready MVPs</Badge>
                    <Badge variant="outline" className="font-mono bg-background">LLM-Powered Apps</Badge>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Selected Work Mini Strip */}
      <section className="py-24 bg-card/20 border-y border-border/40 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end mb-12 gap-6">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-display font-bold">Featured <span className="text-primary">Work</span></h2>
            </FadeIn>
            <FadeIn delay={0.2} className="hidden md:flex">
              <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                View all case studies <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).slice(0, 4).map((project, idx) => (
              <StaggerItem key={project.id}>
                <Link href={`/projects#${project.id}`} className="block h-full relative z-0 hover:z-10">
                  <Card className="h-full bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                        {project.overview.split(';')[0].split('.')[0] + '.'}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 4).map((t, i) => (
                          <Badge key={i} variant="secondary" className="font-mono text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="mt-12 text-center md:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/projects" className="flex items-center justify-center gap-2">
                View all case studies <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-24 relative bg-card/20 border-b border-border/40">
        <HowIWorkSection />
      </section>

      {/* Skills Matrix */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 text-center">Technical <span className="text-gradient-primary">Arsenal</span></h2>
          </FadeIn>
          
          <FadeIn delay={0.2} className="flex justify-center mb-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-background/60 p-2 rounded-2xl border border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border/40">
                <User className="text-primary w-5 h-5" />
                <div className="text-sm font-medium">Solo developer <span className="text-muted-foreground ml-1 font-normal">— ships end-to-end</span></div>
              </div>
              <div className="hidden sm:block text-muted-foreground/30">|</div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-card border border-border/40">
                <Users className="text-secondary w-5 h-5" />
                <div className="text-sm font-medium">Team player <span className="text-muted-foreground ml-1 font-normal">— collaborates, reviews, mentors</span></div>
              </div>
            </div>
          </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {skills.map((skillGroup, idx) => (
                <StaggerItem key={idx}>
                  <Card className="bg-background/40 hover:bg-background/80 border-border/50 hover:border-primary/30 transition-all h-full group">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-display font-bold mb-4 pb-2 border-b border-border/50 group-hover:border-primary/30 transition-colors inline-block w-full">
                        {skillGroup.icon}
                        {skillGroup.category}
                        {skillGroup.subtitle && <span className="block text-xs font-sans font-normal text-muted-foreground mt-1">{skillGroup.subtitle}</span>}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((item, i) => (
                          <Badge key={i} variant="outline" className="bg-card/50 text-muted-foreground group-hover:bg-primary/5 group-hover:text-foreground transition-colors border-border/40 hover:border-primary/40">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
        </div>
      </section>

      {/* Career & Experience */}
      <section className="py-24 relative bg-card/20 border-y border-border/40">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Career <span className="text-secondary">Footprint</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16">
              Over the past 6+ years, I've shipped products across a wide spectrum of industries. The domain changes, but the requirement for robust architecture and intuitive UX remains constant.
            </p>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.1} className="relative pl-8 border-l-2 border-border/50">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <h3 className="text-2xl font-bold">Senior Full-Stack Engineer</h3>
              <p className="text-primary font-mono text-sm mt-1 mb-4">Various Domains & Startups</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Led architecture and full-stack implementation for products spanning multiple sectors. Built multi-tenant SaaS platforms, robust e-commerce solutions with Stripe, real-time recruiting apps, and complex HR management systems.
              </p>
              <div className="flex flex-wrap gap-2">
                {industriesList.map((industry, i) => (
                  <Badge key={i} variant="outline" className="bg-background/50 border-border/50 text-muted-foreground">
                    {industry}
                  </Badge>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative pl-8 border-l-2 border-border/50">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-secondary ring-4 ring-background" />
              <h3 className="text-2xl font-bold">LLM Trainer & Data Specialist</h3>
              <p className="text-secondary font-mono text-sm mt-1 mb-4">Mindrift, Toloka, and Turing</p>
              <p className="text-muted-foreground leading-relaxed">
                Worked on large-scale datasets for training foundation models. Involved in prompt engineering, RLHF data structuring, and rigorous QA across text, image, audio, and video modalities to ensure model safety and alignment.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 relative border-b border-border/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient-primary">me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            I'm a software engineer with 6+ years of production experience across marketplaces, healthcare, e-commerce, and SaaS, most of it at Devsinc, where I led marketplace and microservices work for US and European clients.
            I bring classical engineering rigor and modern AI-assisted speed to every project.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary/40 hover:bg-primary/10 hover:text-foreground">
              <Link href="/about" className="inline-flex items-center gap-2">
                Read the full story <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">What People <span className="text-secondary">Say</span></h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <StaggerItem key={idx}>
                <Card className="bg-card/40 backdrop-blur border-border/50 hover:border-secondary/40 transition-all hover:bg-secondary/5 h-full flex flex-col group relative">
                  <div className="absolute -top-3 left-6">
                    <div className="bg-background border border-border/50 px-2 py-1 rounded-full flex gap-1 group-hover:border-secondary/50 transition-colors">
                      <Star className="w-3 h-3 text-secondary fill-secondary" />
                      <Star className="w-3 h-3 text-secondary fill-secondary" />
                      <Star className="w-3 h-3 text-secondary fill-secondary" />
                      <Star className="w-3 h-3 text-secondary fill-secondary" />
                      <Star className="w-3 h-3 text-secondary fill-secondary" />
                    </div>
                  </div>
                  <CardContent className="p-8 pt-10 flex-1 flex flex-col">
                    <p className="text-muted-foreground italic mb-6 flex-1 leading-relaxed">"{t.quote}"</p>
                    <div className="mt-auto pt-4 border-t border-border/40 group-hover:border-secondary/20 transition-colors">
                      <p className="font-bold text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[150px] mix-blend-screen" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
              Let's build something <span className="text-gradient-primary">electric</span>.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Available for full-time roles, contract work, or advising on AI/LLM integrations.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-10 text-lg shadow-lg shadow-primary/20 transition-all hover:scale-105 neon-glow-primary">
              <Link href="/hire">
                Start a Conversation <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
