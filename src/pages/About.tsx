import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Cpu, User } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// Swap this import to your preferred About photo (same folder), e.g. `@/assets/about.jpg`
import aboutPhotoSrc from "@/assets/talha-nasir-hero.png";

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col w-full relative">
      {/* Hero — split editorial + portrait */}
      <section className="relative border-b border-border/40 overflow-hidden min-h-[min(92vh,880px)] flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-0 right-0 w-[55%] max-w-[720px] h-[70%] bg-gradient-to-bl from-primary/12 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[45%] max-w-[560px] h-[55%] bg-gradient-to-tr from-secondary/10 via-transparent to-transparent blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/60 border border-primary/25 backdrop-blur-md mb-6 w-fit">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Profile</span>
                  <Separator orientation="vertical" className="h-3 bg-border" />
                  <span className="text-xs font-mono text-primary">01</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.05] mb-6">
                  Engineer,{" "}
                  <span className="text-gradient-primary">builder</span>
                  <br />
                  <span className="text-muted-foreground font-light">&amp; LLM expertise</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-8">
                Production-grade builds, AI-assisted velocity, and ongoing work in LLM training and evaluation. Built for the AI era.
                </p>
              </FadeIn>

              <FadeIn delay={0.14} className="flex flex-wrap gap-2 mb-10">
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal border-border/60 bg-card/40 backdrop-blur-sm">
                  <User className="w-3.5 h-3.5 mr-1.5 text-primary shrink-0" />
                  Senior engineer
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal border-border/60 bg-card/40 backdrop-blur-sm">
                  <Code2 className="w-3.5 h-3.5 mr-1.5 text-secondary shrink-0" />
                  Production-grade systems
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-normal border-border/60 bg-card/40 backdrop-blur-sm">
                  <Cpu className="w-3.5 h-3.5 mr-1.5 text-blue-400 shrink-0" />
                  LLM training & evaluation
                </Badge>
              </FadeIn>

              <FadeIn delay={0.18} className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white neon-glow-primary">
                  <Link href="/hire">
                    Work with me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border/80 hover:border-primary/40 hover:bg-primary/5">
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
              <FadeIn delay={0.08} direction="left" className="relative w-full max-w-[420px] lg:max-w-[min(100%,480px)] xl:max-w-[520px]">
                <div className="absolute -inset-6 md:-inset-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 blur-2xl opacity-80" />
                <div className="absolute top-6 -right-2 md:right-4 w-24 h-24 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-lg border border-secondary/30 rotate-12 bg-secondary/5" />

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <motion.div
                    animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative rounded-[1.75rem] p-[1px] bg-gradient-to-br from-primary via-primary/30 to-secondary shadow-2xl shadow-primary/10"
                  >
                    <div className="relative rounded-[calc(1.75rem-1px)] overflow-hidden bg-background aspect-[4/5] ring-1 ring-inset ring-white/10">
                      <img
                        src={aboutPhotoSrc}
                        alt="Talha Nasir"
                        className="w-full h-full object-cover object-[center_15%]"
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent pointer-events-none md:opacity-100 opacity-60" />

                      <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/70 border border-white/10 backdrop-blur-md">
                          <div
                            className="w-2 h-2 rounded-full bg-secondary shrink-0 animate-pulse"
                            style={{ boxShadow: "0 0 10px var(--color-secondary)" }}
                          />
                          <span className="text-xs font-mono text-foreground/90">Available for selective work</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-muted-foreground/90">
                          <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                          Talha Nasir
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Story — editorial column */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-primary/50 to-transparent hidden lg:block" />
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-primary mb-3">The narrative</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              From consultancy to <span className="text-gradient-primary">independence</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-10" staggerDelay={0.08}>
            <StaggerItem>
              <Card className="border-border/50 bg-card/25 backdrop-blur-md shadow-none hover:border-primary/20 transition-colors">
                <CardContent className="p-8 sm:p-10">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Background</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I'm a software engineer based in Lahore, Pakistan, with 6+ years of production experience across marketplaces, healthcare, e-commerce, and SaaS. I spent most of that time at Devsinc, one of Pakistan's largest software consultancies, where I worked my way from engineer to senior engineer leading marketplace and microservices work for clients in the US and Europe.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="border-border/50 bg-card/25 backdrop-blur-md shadow-none hover:border-secondary/25 transition-colors">
                <CardContent className="p-8 sm:p-10">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">Today</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In 2025 I went independent. The shape of software engineering is changing, AI tools are reshaping how fast prototypes get built, and the model training that powers those tools has become its own discipline. I wanted to work across all of it. Today I split my time between freelance engineering (MVPs, integrations, full-stack builds) and paid contributions to RLHF and evaluation pipelines on Mindrift, Toloka, and Turing, the platforms that supply training data to leading AI labs.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Highlight — what you bring */}
      <section className="pb-20 lg:pb-28 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/40 via-border to-secondary/30">
              <div className="rounded-2xl bg-background/90 backdrop-blur-xl px-8 py-10 sm:px-10 sm:py-12">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">What I bring</p>
                </div>
                <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed font-light">
                  Classical engineering rigor, fluency with modern AI-assisted tooling{" "}
                  <span className="text-muted-foreground">(Cursor, Claude Code, v0 and many others)</span>
                  , and an honest sense of what AI is actually good at versus where you still need real engineering. I work async, communicate clearly, and ship.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="mt-14">
            <blockquote className="relative pl-6 sm:pl-8 border-l-2 border-primary/60">
              <p className="text-xl sm:text-2xl font-display font-medium leading-snug text-foreground">
                If you're building something and want a senior engineer who treats your codebase like it'll outlive the prototype, let's talk.
              </p>
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.16} className="flex flex-wrap gap-4 mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white neon-glow-primary">
              <Link href="/hire">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:border-primary/50">
              <Link href="/contact">Email me</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
