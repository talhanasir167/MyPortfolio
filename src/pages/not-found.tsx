import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-destructive/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      
      <div className="relative z-10">
        <h1 className="text-8xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-muted-foreground to-foreground mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground tracking-tight">
          Page not found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10 text-lg">
          The route you are looking for doesn't exist, or has been moved to another dimension.
        </p>
        <Button asChild className="h-12 px-8 bg-primary hover:bg-primary/90 text-white transition-all neon-glow-primary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
