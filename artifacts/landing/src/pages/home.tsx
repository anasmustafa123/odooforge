import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Settings2, 
  Database, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Headset,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      {/* 1. Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md border-border/50 py-4" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-white text-lg">O</span>
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Ovexe</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://demo.yourdomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-border/60 text-muted-foreground hover:text-white hover:border-border transition-colors"
            >
              View Demo
            </a>
            <button 
              onClick={scrollToContact}
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center px-6">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 bg-grid opacity-20" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Odoo Community Edition Experts
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
          >
            Precision ERP for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              Modern Enterprises
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            We engineer, implement, and scale tailored Odoo architectures.
            No bloat, no vendor lock-in. Just pure operational leverage.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            onClick={scrollToContact}
            className="group px-8 py-4 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all flex items-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]"
          >
            Transform Your Operations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* 3. Trusted By (Marquee) */}
      <section className="py-12 border-y border-border/50 bg-card/30 relative overflow-hidden flex flex-col items-center">
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-8 font-medium">
          Trusted by
        </p>

        <div className="w-full max-w-7xl mx-auto mask-edges overflow-hidden relative">
          <div className="flex w-[200%] animate-marquee hover-pause items-center">

            {/* First Set */}
            <div className="flex w-1/2 justify-around items-center px-8">
              {[
                { src: "/logos/ateb-group.png", alt: "ATEB Group" },
                { src: "/logos/ateb-ltd.png", alt: "ATEB Ltd" },
                { src: "/logos/orient.png", alt: "Orient for Transformation" },
                { src: "/logos/egypt-reference.png", alt: "Egypt Reference" },
              ].map((logo) => (
                <div
                  key={logo.alt}
                  className="w-48 h-20 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Second Set */}
            <div className="flex w-1/2 justify-around items-center px-8">
              {[
                { src: "/logos/ateb-group.png", alt: "ATEB Group" },
                { src: "/logos/ateb-ltd.png", alt: "ATEB Ltd" },
                { src: "/logos/orient.png", alt: "Orient for Transformation" },
                { src: "/logos/egypt-reference.png", alt: "Egypt Reference" },
              ].map((logo) => (
                <div
                  key={`${logo.alt}-2`}
                  className="w-48 h-20 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-24 md:py-32 px-6 container mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver full-cycle Odoo solutions. From initial architecture design to custom module engineering and ongoing technical support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Settings2 className="w-6 h-6 text-primary" />}
            title="Odoo Implementation"
            description="End-to-end deployment of Odoo Community Edition, configured exactly to your organizational workflows."
            delay={0.1}
          />
          <ServiceCard 
            icon={<Cpu className="w-6 h-6 text-primary" />}
            title="Custom Module Development"
            description="Bespoke Python modules that extend core functionality. If the business logic demands it, we build it."
            delay={0.2}
          />
          <ServiceCard 
            icon={<Database className="w-6 h-6 text-primary" />}
            title="System Integration"
            description="Seamlessly connect Odoo with your existing tech stack via RESTful APIs, webhooks, and custom middleware."
            delay={0.3}
          />
          <ServiceCard 
            icon={<Workflow className="w-6 h-6 text-primary" />}
            title="Workflow Automation"
            description="Eliminate manual data entry. We design automated pipelines that trigger actions across your entire ERP."
            delay={0.4}
          />
          <ServiceCard 
            icon={<ShieldCheck className="w-6 h-6 text-primary" />}
            title="ERP Migration"
            description="Secure, zero-downtime data migration from legacy systems (SAP, NetSuite, Dynamics) into your new Odoo environment."
            delay={0.5}
          />
          <ServiceCard 
            icon={<Headset className="w-6 h-6 text-primary" />}
            title="Technical Support"
            description="SLA-backed infrastructure management, performance tuning, and continuous technical assistance."
            delay={0.6}
          />
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-card border-y border-border px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              The Engineering Edge
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We approach ERP implementation as a software engineering discipline, not just a configuration exercise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FeatureItem 
              title="Open-Source Expertise"
              description="We leverage Odoo Community Edition to give you full ownership of your data and infrastructure without predatory licensing fees."
            />
            <FeatureItem 
              title="No Vendor Lock-In"
              description="Your codebase is yours. We build cleanly documented, standard-compliant modules that your internal team can take over at any time."
            />
            <FeatureItem 
              title="Deep Customization"
              description="We don't force your business to fit the software. We engineer the software to fit your exact operational realities."
            />
            <FeatureItem 
              title="Enterprise-Grade Reliability"
              description="Built for scale. We deploy robust architectures with redundant backups, high availability, and proactive monitoring."
            />
          </div>
        </div>
      </section>

      {/* 6. Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
            Initiate Project
          </h2>
          <p className="text-muted-foreground text-lg">
            Discuss your infrastructure requirements with our technical team.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* 7. Footer */}
      <footer className="border-t border-border py-8 px-6 bg-background">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-display font-bold text-primary text-xs">O</span>
            </div>
            <span className="font-display font-semibold tracking-tight text-white">Ovexe</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Precision ERP Engineering.
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ovexe Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
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
        <h3 className="text-xl font-display font-semibold text-white mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function FeatureItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle2 className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-display font-semibold text-white mb-2">{title}</h4>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fields, setFields] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      formData.append("subject", `New Inquiry from ${fields.name} — ${fields.company}`);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFields({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 text-center bg-card border border-border rounded-xl"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">Message Received</h3>
        <p className="text-muted-foreground">
          Our engineering team will review your requirements and reach out within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-primary hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
          <input
            id="name"
            name="name"
            required
            value={fields.name}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Jane Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-gray-300">Company Name</label>
        <input
          id="company"
          name="company"
          required
          value={fields.company}
          onChange={handleChange}
          className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Acme Corp"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">Project Details</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          className="w-full bg-background border border-border rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
          placeholder="Briefly describe your current infrastructure and requirements..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-4 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            Submit Inquiry
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
