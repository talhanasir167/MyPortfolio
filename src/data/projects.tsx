import React from "react";
import {
  Server,
  ShoppingCart,
  Users,
  Store,
  Briefcase,
  Scale,
  Calendar,
  Library,
  BookOpen,
  Cpu,
  Bot,
  Activity,
  Smartphone
} from "lucide-react";

export type Project = {
  id: string;
  title: string;
  overview: string;
  role: string;
  tech: string[];
  highlights: string[];
  category: "Engineering" | "AI & LLMs";
  industry: string;
  featured?: boolean;
  icon?: React.ReactNode;
};

export const projects: Project[] = [
  {
    id: "kaiora",
    title: "Kaiora",
    overview: "Kaiora is an AI-powered all-in-one health optimization mobile app that unifies nutrition, training, and sleep into a single adaptive system. It turns continuous biometric and behavioral data into daily, science-backed recommendations instead of static plans.",
    role: "Mobile + Full-stack engineer",
    tech: ["React Native", "Supabase", "PostgreSQL", "TypeScript", "AI/LLM APIs", "Apple Health", "Google Fit", "Garmin", "Oura"],
    highlights: [
      "Built core mobile UI and key user flows in React Native; implemented nutrition tracking (text / voice / image input), training plans, and sleep & recovery views.",
      "Integrated wearable & health data sources (Apple Health, Google Fit, Garmin, Oura) into a unified health-data layer powering a single Health Score.",
      "Implemented AI-driven personalization for plans that adapt daily based on user behavior, biometrics, and progress.",
      "Performance optimizations across screens and data sync paths for smooth use on lower-end devices."
    ],
    category: "Engineering",
    industry: "Health & Wellness",
    featured: true,
    icon: <Smartphone className="w-8 h-8 text-secondary" />
  },
  {
    id: "tom",
    title: "TheOneMedical (TOM)",
    overview: "Healthcare platform with microservices architecture; built and integrated APIs (REST + GraphQL), Surescripts integration, on-call hotfixes, led a team of 3 developers.",
    role: "Software Engineer / Tech Lead",
    tech: ["React", "Angular", "Ruby on Rails", "GraphQL", "Surescripts", "AWS", "PostgreSQL", "Datadog"],
    highlights: [
      "Microservices across Angular + React views",
      "Surescripts integration",
      "Led 3 devs incl. code reviews",
      "On-call production hotfixes with minimal downtime"
    ],
    category: "Engineering",
    industry: "Healthcare",
    featured: true,
    icon: <Activity className="w-8 h-8 text-primary" />
  },
  {
    id: "agzaga",
    title: "Agzaga",
    overview: "US-based e-commerce platform; optimized pages for Core Web Vitals, integrated NetSuite, synced Walmart/eBay/Amazon, integrated TaxCloud.",
    role: "Software Engineer (Full-stack)",
    tech: ["React", "Ruby on Rails", "NetSuite", "TaxCloud", "Algolia", "Solidus", "PostgreSQL"],
    highlights: [
      "Improved Core Web Vitals",
      "Multi-marketplace data sync (Walmart/eBay/Amazon)",
      "State-by-state tax via TaxCloud",
      "Faster search via Algolia migration"
    ],
    category: "Engineering",
    industry: "E-commerce",
    featured: false,
    icon: <ShoppingCart className="w-8 h-8 text-blue-400" />
  },
  {
    id: "greatrecruiters",
    title: "GreatRecruiters",
    overview: "Platform for job seekers to review recruiters and for companies to build employer brand. Owned full-stack work, Stripe payments, scalability.",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "Ruby on Rails", "Sidekiq", "Redis", "Stripe", "PostgreSQL", "Heroku"],
    highlights: [
      "30% faster page loads via Rails query + Next.js cache optimizations",
      "Migrated legacy search to pg_search",
      "Stripe subscriptions + webhooks for premium features",
      "Led sprint planning and mentored 2 junior developers"
    ],
    category: "Engineering",
    industry: "Recruiting",
    featured: true,
    icon: <Users className="w-8 h-8 text-secondary" />
  },
  {
    id: "tomarket",
    title: "ToMarket",
    overview: "Marketplace connecting consumers with local food producers. Modernized legacy recurring order system with Sidekiq, integrated QuickBooks.",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "Tailwind", "Ruby on Rails", "Sidekiq", "PostgreSQL", "QuickBooks API"],
    highlights: [
      "65% reduction in order processing errors",
      "Reliable recurring-order workflow handling thousands of weekly transactions",
      "QuickBooks real-time financial sync",
      "Zero-downtime Heroku deploys"
    ],
    category: "Engineering",
    industry: "Multi-tenant SaaS",
    featured: false,
    icon: <Store className="w-8 h-8 text-primary" />
  },
  {
    id: "maplehr",
    title: "MapleHR",
    overview: "All-in-one HR + payroll platform. Improved reliability, automated payroll/tax/compliance, biometric+GPS attendance, AI-powered leave approval, RBAC.",
    role: "Full-Stack Developer",
    tech: ["React", "Ruby on Rails", "GraphQL", "Stripe", "PostgreSQL", "Heroku"],
    highlights: [
      "Payroll for 500+ employees cut from 3 hrs to 15 min",
      "Uptime improved to 99.95%",
      "Automated tax filing reduced manual errors by 90%",
      "AI-powered leave approval reduced HR workload 40%"
    ],
    category: "Engineering",
    industry: "HRMS",
    featured: true,
    icon: <Briefcase className="w-8 h-8 text-secondary" />
  },
  {
    id: "adalat",
    title: "Adalat.pk",
    overview: "Pakistan-based platform connecting lawyers and clients for consultations, payments, and legal content. Multi-role auth, Stripe payments, Urdu support.",
    role: "Lead Developer",
    tech: ["Ruby on Rails", "Tailwind", "Stripe", "PostgreSQL", "Figma"],
    highlights: [
      "Launched in 6 months",
      "5,000+ consultations in Q1 with 99.9% payment success",
      "Reduced client-lawyer matching time by 70%",
      "4.8/5 average lawyer rating"
    ],
    category: "Engineering",
    industry: "Legal-tech",
    featured: true,
    icon: <Scale className="w-8 h-8 text-blue-400" />
  },
  {
    id: "saplings",
    title: "Saplings",
    overview: "US-based e-commerce. Core Web Vitals optimization, NetSuite integration, multi-marketplace data sync, TaxCloud + tax-exempt via Solidus.",
    role: "Software Engineer",
    tech: ["React", "Ruby on Rails", "Stripe", "Google Calendar API", "PostgreSQL", "Datadog"],
    highlights: [
      "Performance + Core Web Vitals improvements",
      "Cross-marketplace sync",
      "Tax exemption flow",
      "Admin tooling enhancements"
    ],
    category: "Engineering",
    industry: "E-commerce",
    featured: false,
    icon: <ShoppingCart className="w-8 h-8 text-primary" />
  },
  {
    id: "prnet",
    title: "The PR Net (PRNet)",
    overview: "Digital platform for marketing & communications professionals — events, awards, mentorship, networking. Built event management, Stripe ticketing, Zoom integration.",
    role: "Full-Stack Developer",
    tech: ["Ruby on Rails", "React", "Tailwind", "Stripe", "Zoom API", "HubSpot", "PostgreSQL"],
    highlights: [
      "Scaled platform for traffic spikes during major events (e.g. Future Focus)",
      "Attendee matchmaking algorithm",
      "Admin tools for awards (PR Net 100) and mentorship",
      "Mentored junior devs on Rails + React"
    ],
    category: "Engineering",
    industry: "Event Management",
    featured: false,
    icon: <Calendar className="w-8 h-8 text-secondary" />
  },
  {
    id: "booknest",
    title: "BookNest",
    overview: "End-to-end library management system built solo. Catalog, memberships, borrowing/returns, reporting. Vector DB for semantic book search.",
    role: "Solo Engineer",
    tech: ["Ruby on Rails", "React", "Tailwind", "PostgreSQL", "Vector DB", "Heroku CI/CD"],
    highlights: [
      "Solo end-to-end ownership from architecture to deploy",
      "Semantic search via vector DB",
      "Comprehensive RSpec + Jest coverage",
      "Digitized manual workflows for staff and members"
    ],
    category: "Engineering",
    industry: "Library",
    featured: true,
    icon: <Library className="w-8 h-8 text-blue-400" />
  },
  {
    id: "scratchpaper",
    title: "Scratch Paper",
    overview: "Educational platform overhaul. Led full Rails 7 rebuild with Hotwire/Stimulus + Next.js front-end, RBAC admin, FERPA-compliant audit logging.",
    role: "Lead Rails Developer & Technical Architect",
    tech: ["Ruby on Rails 7", "Hotwire", "Stimulus", "Next.js", "TailwindUI", "PostgreSQL", "Cloudinary"],
    highlights: [
      "35% faster page loads",
      "25% lower Heroku dyno cost via background job tuning",
      "Test coverage from 65% to 92%",
      "Granular RBAC admin with FERPA-compliant audit logging"
    ],
    category: "Engineering",
    industry: "EdTech",
    featured: false,
    icon: <BookOpen className="w-8 h-8 text-primary" />
  },
  {
    id: "ai-data",
    title: "AI Data Annotation & LLM Training",
    overview: "Large-scale dataset work for training and improving LLMs across text, image, audio, and video.",
    role: "LLM Trainer / Data Specialist",
    tech: ["Python", "Annotation Tooling", "AI Pipelines", "RLHF"],
    highlights: [
      "Worked across multiple modalities (text, image, audio, video)",
      "QC and dataset structuring",
      "Client engagements via Mindrift and Turing"
    ],
    category: "AI & LLMs",
    industry: "AI/LLMs",
    featured: false,
    icon: <Cpu className="w-8 h-8 text-secondary" />
  },
  {
    id: "ai-automation",
    title: "AI Automation / Workflow Tools",
    overview: "Automation solutions that streamline manual workflows using APIs and AI integrations.",
    role: "Full-Stack + AI Integration Engineer",
    tech: ["Node.js", "Python", "REST APIs", "Supabase", "AWS", "LLM APIs"],
    highlights: [
      "AI-assisted automations bolted onto existing systems",
      "Rapid delivery of workflow scripts",
      "Integrations across SaaS APIs"
    ],
    category: "AI & LLMs",
    industry: "AI/LLMs",
    featured: false,
    icon: <Bot className="w-8 h-8 text-blue-400" />
  }
];

export const industries = Array.from(new Set(projects.map((p) => p.industry)));
export const categories = Array.from(new Set(projects.map((p) => p.category)));
