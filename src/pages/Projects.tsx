import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { projects, industries, categories } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

function scrollToHashProject() {
  const id = window.location.hash.replace(/^#/, "");
  if (!id || !projects.some((p) => p.id === id)) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", ...categories, ...industries];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === p.category) return true;
    if (activeFilter === p.industry) return true;
    return false;
  });

  useEffect(() => {
    const syncFilterFromHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id || !projects.some((p) => p.id === id)) return;
      setActiveFilter((prev) => (prev === "All" ? prev : "All"));
    };
    syncFilterFromHash();
    window.addEventListener("hashchange", syncFilterFromHash);
    return () => window.removeEventListener("hashchange", syncFilterFromHash);
  }, []);

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const scroll = () => scrollToHashProject();
    scroll();
    const t1 = window.setTimeout(scroll, 120);
    const t2 = window.setTimeout(scroll, 400);
    window.addEventListener("hashchange", scroll);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("hashchange", scroll);
    };
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-6 py-20 relative min-h-[80vh]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          Case <span className="text-gradient-primary">Studies</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          A deep dive into the systems I've built, the models I've trained, and the problems I've solved.
        </p>

        {/* Industries mini-strip */}
        <div className="mb-12 border-b border-border/40 pb-8">
          <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">Industries shipped in</h4>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span key={ind} className="text-sm text-foreground/80 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-16">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                  : "bg-card/50 text-muted-foreground hover:bg-card border border-border/50 hover:border-primary/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </FadeIn>

      <motion.div layout className="space-y-12 md:space-y-24">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
