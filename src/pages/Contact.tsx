import { useState } from "react";
import { Mail, Phone, Linkedin, CheckCircle, Download } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
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
        title: "Message received",
        description: "Thanks — I'll get back to you shortly.",
      });
    } catch (error) {
      toast({
        title: "Could not send message",
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

  return (
    <div className="container mx-auto px-6 py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      
      <FadeIn>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-center tracking-tight">
          Let's <span className="text-gradient-primary">Connect</span>
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          I'm currently available for work. Whether you have a project in mind, need a consultant, or just want to chat about AI models, my inbox is open.
        </p>
        <div className="flex justify-center mb-16">
          <Button asChild variant="outline" className="border-secondary/30 hover:bg-secondary/10 text-secondary hover:text-secondary-foreground transition-all gap-2">
            <a href={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/cv.pdf`} download>
              <Download className="w-4 h-4" /> Download CV
            </a>
          </Button>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto relative z-10">
        
        <StaggerContainer className="flex flex-col gap-6">
          <StaggerItem>
            <a href="mailto:talhanasir167@gmail.com" className="block">
              <Card className="bg-card/40 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:bg-primary/5 group">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground font-mono">talhanasir167@gmail.com</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="tel:+923066934501" className="block">
              <Card className="bg-card/40 backdrop-blur border-border/50 hover:border-secondary/50 transition-all hover:bg-secondary/5 group">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-secondary/20">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground font-mono">+92 306 6934501</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </StaggerItem>

          <StaggerItem>
            <a href="https://www.linkedin.com/in/talhanasir305/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-card/40 backdrop-blur border-border/50 hover:border-blue-500/50 transition-all hover:bg-blue-500/5 group">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-500/20">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">LinkedIn</h3>
                    <p className="text-muted-foreground font-mono">linkedin.com/in/talhanasir305</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <Card className="bg-card/40 backdrop-blur border-border/50 h-full">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" {...field} />
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
                          <Input placeholder="you@example.com" type="email" className="bg-background/50 border-border/50 focus-visible:ring-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            className="min-h-[120px] bg-background/50 border-border/50 focus-visible:ring-primary/50 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium neon-glow-primary transition-all duration-300" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">Sending...</span>
                    ) : (
                      <span className="flex items-center gap-2">Send Message <CheckCircle className="w-4 h-4" /></span>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </FadeIn>

      </div>
    </div>
  );
}
