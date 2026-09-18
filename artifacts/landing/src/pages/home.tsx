import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/hero-background";
import { RequestDemoDialog } from "@/components/request-demo-dialog";
import { ProjectDiscoveryForm } from "@/components/project-discovery-form";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Code,
  FileCode2,
  Globe,
  Layers,
  LifeBuoy,
  PencilRuler,
  Plug,
  RefreshCw,
  Search,
  Smartphone,
  Workflow,
} from "lucide-react";

const LOGOS = [
  { src: "/logos/ateb-group.png", alt: "ATEB Group", scale: "scale-100" },
  { src: "/logos/ateb-ltd.png", alt: "ATEB Ltd", scale: "scale-250" },
  { src: "/logos/orient.png", alt: "Orient for Transformation", scale: "scale-250" },
  { src: "/logos/egypt-reference.png", alt: "Egypt Reference", scale: "scale-100" },
];

function Nav({
  isScrolled,
  onDemoOpen,
  scrollToContact,
}: {
  isScrolled: boolean;
  onDemoOpen: () => void;
  scrollToContact: () => void;
}) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
            <Boxes className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Perfectus Technologies
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Business Systems Engineering
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="http://54.145.72.107"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-medium px-4 py-2.5 rounded-full border border-border/60 text-muted-foreground hover:text-white hover:border-border transition-colors"
          >
            View Demo
          </a>
          <button
            onClick={scrollToContact}
            className="hidden md:inline-flex text-sm font-medium px-4 py-2.5 rounded-full border border-border/60 text-muted-foreground hover:text-white hover:border-border transition-colors"
          >
            Tell Us What You Need
          </button>
          <button
            onClick={onDemoOpen}
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            Request a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({
  onDemoOpen,
  scrollToContact,
}: {
  onDemoOpen: () => void;
  scrollToContact: () => void;
}) {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden flex flex-col items-center text-center px-6">
      <div className="absolute inset-0 z-0 bg-grid opacity-20" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16)_0%,transparent_55%)]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background" />
      <HeroBackground />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Business Systems &amp; Software Engineering
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.05] mb-6"
        >
          Business Systems,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-primary to-gray-400">
            Engineered.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          We design, build, and integrate software that helps companies operate
          better — from ERP and business automation to custom platforms,
          websites, integrations, and internal systems.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            onClick={onDemoOpen}
            className="group px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)]"
          >
            Request a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            onClick={scrollToContact}
            className="px-8 py-4 rounded-md border border-border/60 text-muted-foreground hover:text-white hover:border-white/40 transition-colors font-medium"
          >
            Tell Us What You Need
          </motion.button>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30 relative overflow-hidden flex flex-col items-center">
      <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8 font-medium">
        Trusted by
      </p>
      <div className="w-full max-w-7xl mx-auto mask-edges overflow-hidden relative">
        <div className="flex w-[200%] animate-marquee hover-pause items-center">
          <div className="flex w-1/2 justify-around items-center px-8">
            {LOGOS.map((logo) => (
              <div
                key={logo.alt}
                className="w-48 h-20 flex items-center justify-center overflow-visible"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.scale} max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center px-8">
            {LOGOS.map((logo) => (
              <div
                key={`${logo.alt}-2`}
                className="w-48 h-20 flex items-center justify-center overflow-visible"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.scale} max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-all duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 container mx-auto max-w-7xl">
      <div className="mb-16 md:mb-24">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
          Capabilities
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
          What We Build
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          We turn business processes into software. From established ERP
          platforms to completely custom systems, we build around how your
          company actually operates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<Boxes className="w-6 h-6 text-primary" />}
          title="Business Systems &amp; ERP"
          description="Implement, customize, and extend Odoo and other business platforms to match real operational workflows."
          delay={0.1}
        />
        <ServiceCard
          icon={<FileCode2 className="w-6 h-6 text-primary" />}
          title="Custom Software"
          description="Build purpose-designed business systems when off-the-shelf software isn't enough."
          delay={0.2}
        />
        <ServiceCard
          icon={<Workflow className="w-6 h-6 text-primary" />}
          title="Automation &amp; Integrations"
          description="Connect systems, eliminate repetitive work, and automate business processes through APIs, webhooks, and custom middleware."
          delay={0.3}
        />
        <ServiceCard
          icon={<Globe className="w-6 h-6 text-primary" />}
          title="Websites &amp; Digital Platforms"
          description="Build modern, high-performance websites and customer-facing digital experiences for companies."
          delay={0.4}
        />
        <ServiceCard
          icon={<Smartphone className="w-6 h-6 text-primary" />}
          title="Web &amp; Mobile Applications"
          description="Create applications for employees, customers, operations, and specialized business workflows."
          delay={0.5}
        />
        <ServiceCard
          icon={<LifeBuoy className="w-6 h-6 text-primary" />}
          title="Ongoing Engineering"
          description="Continue improving, maintaining, scaling, and supporting the systems we build."
          delay={0.6}
        />
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card border-y border-border relative overflow-hidden">
      <div className="absolute -right-32 -top-32 w-[26rem] h-[26rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -left-32 -bottom-32 w-[22rem] h-[22rem] rounded-full bg-primary/5 blur-[110px]" />
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
              Platform-Agnostic Engineering
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Odoo when it fits.
              <br />
              Custom when it doesn't.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Odoo is one of the tools we use to build business systems — not the
              answer to every problem. If Odoo is the right solution, we
              implement and engineer it into your operations. If it isn't, we
              build something better suited to the business.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>No product agenda — we recommend what actually fits the business.</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Clean, documented, portable code — you own the system and the data.</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Built for the day you outgrow the tool, not just the day you adopt it.</span>
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            <PositioningCard
              icon={<Boxes className="w-5 h-5 text-primary" />}
              title="ERP platforms, engineered properly"
            >
              From Odoo implementation and customization to enterprise-level
              business workflows — configured around how your teams actually work.
            </PositioningCard>
            <PositioningCard
              icon={<Layers className="w-5 h-5 text-primary" />}
              title="Custom systems, built from scratch"
            >
              When off-the-shelf software force-fits your process, we design and
              build a purpose-specific system around your operations.
            </PositioningCard>
            <PositioningCard
              icon={<Plug className="w-5 h-5 text-primary" />}
              title="Everything connected, always"
            >
              REST APIs, webhooks, and middleware close the gaps between the
              systems you run on and the work your teams do.
            </PositioningCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="py-24 md:py-32 px-6 container mx-auto max-w-7xl">
      <div className="text-center mb-16 md:mb-20">
        <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
          How We Work
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          From problem to production.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We don&apos;t sell software licenses. We sell engineering and
          operational leverage — delivered through a disciplined build sequence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <ProcessStep
          num="01"
          icon={<Search className="w-5 h-5 text-primary" />}
          title="Understand"
          description="We map your processes, constraints, and goals before a line of code is written."
          delay={0.1}
        />
        <ProcessStep
          num="02"
          icon={<PencilRuler className="w-5 h-5 text-primary" />}
          title="Design"
          description="We architect data models, workflows, and integrations around how you operate."
          delay={0.2}
        />
        <ProcessStep
          num="03"
          icon={<Code className="w-5 h-5 text-primary" />}
          title="Build"
          description="We engineer the software in focused, testable increments — no black boxes."
          delay={0.3}
        />
        <ProcessStep
          num="04"
          icon={<Plug className="w-5 h-5 text-primary" />}
          title="Integrate"
          description="We connect everything through APIs, webhooks, and middleware into one workflow."
          delay={0.4}
        />
        <ProcessStep
          num="05"
          icon={<RefreshCw className="w-5 h-5 text-primary" />}
          title="Support &amp; Evolve"
          description="We maintain, scale, and improve the systems as your company grows."
          delay={0.5}
        />
      </div>
    </section>
  );
}

function EngineeringEdge() {
  return (
    <section className="py-24 md:py-32 px-6 bg-card border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-3">
            Why Work With Us
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The Engineering Edge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We approach business software as an engineering discipline — not a
            configuration exercise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureItem
            title="Engineering, not configuration"
            description="Every system we deliver is treated as a software product: designed, documented, and maintained with engineering rigor."
          />
          <FeatureItem
            title="Built around your operations"
            description="We don't force your business to fit the software. We engineer the software to fit your operational realities."
          />
          <FeatureItem
            title="No lock-in, ever"
            description="Open standards and clean, documented code. Your codebase, data, and architecture stay yours — from day one."
          />
          <FeatureItem
            title="Enterprise-grade reliability"
            description="Robust architectures with redundant backups, high availability, monitoring, and proactive support."
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 container mx-auto max-w-3xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
          Tell Us What You Need
        </h2>
        <p className="text-muted-foreground text-lg">
          We don&apos;t just implement software. We build the systems companies
          run on.
        </p>
      </div>
      <ProjectDiscoveryForm />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-background">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-primary/20 flex items-center justify-center border border-primary/30">
            <Boxes className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display font-semibold tracking-tight text-white">
            Perfectus Technologies Inc
          </span>
        </div>
        <p className="text-sm font-medium tracking-wide text-muted-foreground">
          Business Systems, Engineered.
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Perfectus Technologies Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle2 className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-display font-semibold text-white mb-2">
          {title}
        </h4>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProcessStep({
  num,
  icon,
  title,
  description,
  delay,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
          {icon}
        </div>
        <span className="absolute -top-1 -right-2 text-[9px] font-mono font-medium text-muted-foreground">
          #{num}
        </span>
      </div>
      <h3 className="text-lg font-display font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}

function PositioningCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 rounded-xl bg-background border border-border">
      <div className="flex items-start gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-white">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <RequestDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
      <Nav
        isScrolled={isScrolled}
        onDemoOpen={() => setDemoOpen(true)}
        scrollToContact={scrollToContact}
      />
      <Hero onDemoOpen={() => setDemoOpen(true)} scrollToContact={scrollToContact} />
      <TrustedBy />
      <Capabilities />
      <Positioning />
      <HowWeWork />
      <EngineeringEdge />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;




