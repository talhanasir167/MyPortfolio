import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-card/40 backdrop-blur border-border/50 hover:border-primary/30 transition-all overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-50 group-hover:opacity-100 transition-opacity" />
      
      <CardContent className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-1/3 flex flex-col items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              {project.icon}
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors font-mono text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-8">
            <div>
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-lg leading-relaxed text-foreground/90">{project.overview}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">My Role</h4>
              <p className="text-foreground/80">{project.role}</p>
            </div>

            <div>
              <h4 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-3">Highlights & Outcomes</h4>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
