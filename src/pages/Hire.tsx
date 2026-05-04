import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Check, Mail, Linkedin, Download, Calendar, Zap, Terminal, Code, Rocket, Users, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AnimatePresence, motion } from "framer-motion";
import { itemFadeVariants, getPrefersReducedMotion } from "@/lib/motion";
import { HowIWorkSection } from "@/components/HowIWorkSection";

// TODO: Talha — replace with real quotes
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
  }
];

const briefSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  projectDescription: z.string().min(10, "Please provide a brief description"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export default function Hire() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof briefSchema>>({
    resolver: zodResolver(briefSchema),
    defaultValues: {
      name: "",
      email: "",
      projectDescription: "",
      budget: "",
      timeline: "",
    },
  });

  async function onSubmit(values: z.infer<typeof briefSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        if (response.status === 404) {
          throw new Error("API route not found - run with vercel dev for local form testing.");
        }
        throw new Error(result?.error ?? "Submission failed");
      }

      form.reset();
      toast({
        title: "Request received",
        description: "Thanks — I'll reply within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Could not send request",
        description:
          error instanceof Error
            ? error.message
            : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const cvUrl = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/cv.pdf`;

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-8 neon-glow-primary">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-display font-medium text-primary tracking-wide">Available now — starting this week</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-8">
                Let's build your <span className="text-gradient-primary">next big thing</span>.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light mb-12 leading-relaxed">
                Whether you need a rapid prototype to validate an idea or a robust integration for your existing team, I'm ready to ship.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow transition-all hover:scale-105 neon-glow-primary h-14 px-8 text-lg w-full sm:w-auto">
                <a href="#quote-form">
                  Request a quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all h-14 px-8 text-lg w-full sm:w-auto">
                <a href={cvUrl} download>
                  Download CV <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </FadeIn>
            <FadeIn delay={0.5} className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
              <a href="mailto:talhanasir167@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={18} /> Email me directly
              </a>
              <a href="https://www.linkedin.com/in/talhanasir305/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                <Linkedin size={18} /> Message on LinkedIn
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/5">Featured Service</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">AI-assisted rapid prototyping <br/><span className="text-muted-foreground font-light">— vibe-coded MVPs in days, not months.</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                I combine classical engineering rigor with fluent LLM prompting to build high-quality applications at unprecedented speed. By vibe-coding the scaffolding and heavily directing AI tools, I can turn your idea into a deployed, working MVP while maintaining a clean, production-ready architecture.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <StaggerContainer className="lg:col-span-2 space-y-8">
              <StaggerItem>
                <Card className="bg-card/40 backdrop-blur border-border/50 h-full">
                  <CardContent className="p-8 sm:p-10">
                    <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                      <Zap className="text-primary" /> Process & Timeline
                    </h3>
                    <div className="space-y-6">
                      {[
                        { step: "1", title: "Discovery", desc: "We align on your exact goals, audience, and the core value proposition." },
                        { step: "2", title: "Vibe-coded prototype", desc: "Rapidly scaffolding the MVP using AI-assisted generation tools." },
                        { step: "3", title: "Iterate with you", desc: "Feedback loops on the live prototype to get the details right." },
                        { step: "4", title: "Production-harden", desc: "Applying classical engineering to ensure security, performance, and scale." },
                        { step: "5", title: "Ship & handoff", desc: "Deployment to production, complete with source code and documentation." }
                      ].map((s, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold font-mono text-sm">
                            {s.step}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{s.title}</h4>
                            <p className="text-muted-foreground">{s.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
            
            <StaggerContainer className="space-y-8">
              <StaggerItem>
                <Card className="bg-card/40 backdrop-blur border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="text-secondary w-5 h-5" /> What you get
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"/> Working, polished MVP</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"/> Live deployment setup</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"/> Clean, typed source code</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"/> Technical documentation</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"/> 1-on-1 handoff session</li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
              
              <StaggerItem>
                <Card className="bg-card/40 backdrop-blur border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-display font-bold mb-4 flex items-center gap-2">
                      <Rocket className="text-blue-400 w-5 h-5" /> Ideal for
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"/> Founders validating ideas</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"/> Teams needing a fast spike</li>
                      <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"/> Adding AI features to existing apps</li>
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 bg-card/20 border-y border-border/40 relative">
        <HowIWorkSection />
      </section>

      {/* Why Me Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">Why <span className="text-secondary">Me</span></h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "6+ Years", desc: "Experience across E-commerce, Healthcare, Fintech, Multi-tenant SaaS, and more." },
              { title: "Dual Threat", desc: "I ship robust production apps AND vibe-coded rapid prototypes with legacy coding experinece and AI-assisted development." },
              { title: "LLM Native", desc: "Hands-on experience training, Agentic AI Systems, Data Labeling & Annotation, and evaluating foundation models." },
              { title: "Ready Now", desc: "Available to start immediately without lengthy onboarding." }
            ].map((item, idx) => (
              <StaggerItem key={idx}>
                <Card className="h-full bg-card/40 border-border/50">
                  <CardContent className="p-6">
                    <h4 className="font-display font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials & Form */}
      <section id="quote-form" className="py-24 relative overflow-hidden bg-card/20 border-t border-border/40">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-[150px] mix-blend-screen" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="flex flex-col justify-center">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to <span className="text-gradient-primary">start</span>?</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Tell me about your project, your timeline, and your goals. I'll get back to you within 24 hours to discuss the next steps.
                </p>
              </FadeIn>
              
              <div className="space-y-6">
                {testimonials.map((t, idx) => (
                  <FadeIn key={idx} delay={idx * 0.1}>
                    <Card className="bg-background/60 border-border/50">
                      <CardContent className="p-6">
                        <p className="italic text-muted-foreground mb-4">"{t.quote}"</p>
                        <div>
                          <p className="font-bold">{t.author}</p>
                          <p className="text-sm text-muted-foreground">{t.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2}>
              <Card className="bg-background/80 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/5">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-6">Request a Quote</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" className="bg-background/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" type="email" className="bg-background/50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="What are we building?" 
                                className="min-h-[100px] bg-background/50 resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. $5k - $10k" className="bg-background/50" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Timeline (Optional)</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. 2-4 weeks" className="bg-background/50" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium neon-glow-primary transition-all duration-300" disabled={isSubmitting}>
                        {isSubmitting ? "Sending request..." : "Send Request"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
