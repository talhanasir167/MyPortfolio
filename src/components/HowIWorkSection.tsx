import { useState } from "react";
import { User, Users, Check, ArrowRight, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { AnimatePresence, motion } from "framer-motion";
import { itemFadeVariants, getPrefersReducedMotion } from "@/lib/motion";

interface HowIWorkSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function HowIWorkSection({ 
  title = <>How I <span className="text-gradient-primary">work</span></>,
  subtitle = "Pick one to see how I work"
}: HowIWorkSectionProps) {
  const [activeWorkMode, setActiveWorkMode] = useState<"solo" | "team" | null>(null);

  const toggle = (mode: "solo" | "team") =>
    setActiveWorkMode((prev) => (prev === mode ? null : mode));

  const workModeContent = {
    solo: {
      title: "How I work solo",
      subtitle: "End-to-end ownership, from raw client input to a live production app.",
      accent: "primary",
      steps: [
        { title: "Discover", desc: "Gather raw requirements directly from the client; ask the questions nobody asked." },
        { title: "Structure", desc: "Turn unstructured notes, calls, and screenshots into clean, structured information." },
        { title: "Define", desc: "Translate that into clear, testable business requirements and acceptance criteria." },
        { title: "Design & build", desc: "Architect the system, design the data model, build the UI and the backend." },
        { title: "Ship", desc: "Harden, deploy, and hand over a production-ready application that real users can use today." }
      ]
    },
    team: {
      title: "How I work in a team",
      subtitle: "Tight collaboration with stakeholders, designers, and engineers.",
      accent: "secondary",
      steps: [
        { title: "Align", desc: "Meet stakeholders to lock product goals, scope, and success metrics." },
        { title: "Break down", desc: "Decompose requirements with designers and engineers into deliverable tickets." },
        { title: "Contribute", desc: "Own system design, write code, do thorough code reviews, mentor where useful." },
        { title: "Communicate", desc: "Keep async + sync channels tight so blockers surface early and decisions stick." },
        { title: "Deliver", desc: "Drive features through QA, staging, and release with the team, owning my slice end-to-end." }
      ]
    }
  };

  const content = activeWorkMode ? workModeContent[activeWorkMode] : null;

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center">{title}</h2>
        <p className="text-center text-muted-foreground mb-12 font-medium tracking-wide uppercase text-sm">{subtitle}</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
        <div className="relative h-full flex flex-col">
          <button
            type="button"
            aria-pressed={activeWorkMode === "solo"}
            onClick={() => toggle("solo")}
            className={`relative z-10 text-left flex-1 flex flex-col rounded-xl border bg-card text-card-foreground shadow transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary group ${
              activeWorkMode === "solo"
                ? "bg-background/80 border-primary/50 neon-glow-primary scale-[1.02]"
                : "bg-background/40 border-border/50 opacity-70 hover:scale-[1.02] hover:border-primary/40 hover:opacity-100 hover:bg-background/60 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]"
            }`}
          >
            <div className="p-8 flex flex-col flex-1">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                activeWorkMode === "solo" ? "bg-primary/20" : "bg-muted group-hover:bg-primary/10"
              }`}>
                <User className={`w-6 h-6 transition-colors ${activeWorkMode === "solo" ? "text-primary" : "text-muted-foreground group-hover:text-primary/70"}`} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Solo Developer</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                I can take complete ownership of your project. From the first line of code to the production deployment, I handle the architecture, frontend, backend, and infrastructure. I ship fast, communicate clearly, and deliver end-to-end.
              </p>

              <div className="mt-auto pt-4 border-t border-border/40">
                <div className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  activeWorkMode === "solo" ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                }`}>
                  {activeWorkMode === "solo" ? (
                    <>
                      <Check className="w-4 h-4" /> Currently viewing
                    </>
                  ) : (
                    <>
                      View my process <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </button>

          <AnimatePresence>
            {activeWorkMode === "solo" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
              >
                <motion.div
                  animate={getPrefersReducedMotion() ? {} : { y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="text-primary bg-background rounded-full p-0.5"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative h-full flex flex-col">
          <button
            type="button"
            aria-pressed={activeWorkMode === "team"}
            onClick={() => toggle("team")}
            className={`relative z-10 text-left flex-1 flex flex-col rounded-xl border bg-card text-card-foreground shadow transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary group ${
              activeWorkMode === "team"
                ? "bg-background/80 border-secondary/50 neon-glow-secondary scale-[1.02]"
                : "bg-background/40 border-border/50 opacity-70 hover:scale-[1.02] hover:border-secondary/40 hover:opacity-100 hover:bg-background/60 hover:shadow-[0_0_15px_-3px_hsl(var(--secondary)/0.3)]"
            }`}
          >
            <div className="p-8 flex flex-col flex-1">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                activeWorkMode === "team" ? "bg-secondary/20" : "bg-muted group-hover:bg-secondary/10"
              }`}>
                <Users className={`w-6 h-6 transition-colors ${activeWorkMode === "team" ? "text-secondary" : "text-muted-foreground group-hover:text-secondary/70"}`} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Team Player</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                I integrate seamlessly into existing teams. I collaborate with PMs and designers, write clean PRs, conduct thorough code reviews, mentor junior engineers, and thrive in async-friendly, remote-first environments.
              </p>

              <div className="mt-auto pt-4 border-t border-border/40">
                <div className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                  activeWorkMode === "team" ? "text-secondary" : "text-muted-foreground group-hover:text-secondary"
                }`}>
                  {activeWorkMode === "team" ? (
                    <>
                      <Check className="w-4 h-4" /> Currently viewing
                    </>
                  ) : (
                    <>
                      View my process <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </button>

          <AnimatePresence>
            {activeWorkMode === "team" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
              >
                <motion.div
                  animate={getPrefersReducedMotion() ? {} : { y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  className="text-secondary bg-background rounded-full p-0.5"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative mt-8">
        <AnimatePresence mode="wait" initial={false}>
          {content && activeWorkMode && (
            <motion.div
              key={activeWorkMode}
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden"
            >
              <Card className={`bg-card/40 backdrop-blur overflow-hidden transition-colors duration-500 border-x border-b border-border/50 border-t-2 ${
                activeWorkMode === "solo" ? "border-t-primary" : "border-t-secondary"
              }`}>
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8 text-center md:text-left">
                    <h3 className="text-3xl font-display font-bold mb-3">{content.title}</h3>
                    <p className="text-xl text-muted-foreground">{content.subtitle}</p>
                  </div>

                  <StaggerContainer className="space-y-4">
                    {content.steps.map((step, idx) => (
                      <StaggerItem key={idx}>
                        <div className="flex gap-4 p-4 rounded-xl bg-background/40 border border-border/40 hover:bg-background/60 transition-colors">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-bold font-mono text-sm ${
                            content.accent === "primary"
                              ? "bg-primary/10 border-primary/30 text-primary"
                              : "bg-secondary/10 border-secondary/30 text-secondary"
                          }`}>
                            {idx + 1}
                          </div>
                          <div className="pt-1">
                            <h4 className="font-bold text-lg mb-1 leading-none">{step.title}</h4>
                            <p className="text-muted-foreground leading-snug">{step.desc}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <div className="mt-8 text-center">
                    <button
                      type="button"
                      onClick={() => setActiveWorkMode(null)}
                      className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
