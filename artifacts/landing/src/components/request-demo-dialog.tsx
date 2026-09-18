import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Boxes,
  CheckCircle2,
  Globe,
  Layers,
  MessageSquare,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectDiscoveryForm } from "@/components/project-discovery-form";

type ExploreOption = {
  label: string;
  icon: React.ReactNode;
  bullets: string[];
};

const EXPLORE_OPTIONS: ExploreOption[] = [
  {
    label: "ERP / Odoo",
    icon: <Boxes className="w-5 h-5 text-primary" />,
    bullets: [
      "Odoo implementation",
      "Odoo customization",
      "Enterprise-level business workflows",
      "Custom Odoo modules",
    ],
  },
  {
    label: "Custom Business System",
    icon: <Layers className="w-5 h-5 text-primary" />,
    bullets: [
      "Built around your company's processes",
      "Replace spreadsheets and disconnected tools",
      "Internal business platforms",
      "Workflow automation",
    ],
  },
  {
    label: "Company Website",
    icon: <Globe className="w-5 h-5 text-primary" />,
    bullets: [
      "Corporate websites",
      "Business websites",
      "Landing pages",
      "Customer-facing platforms",
    ],
  },
  {
    label: "Integrations & Automation",
    icon: <Workflow className="w-5 h-5 text-primary" />,
    bullets: [
      "REST APIs",
      "Webhooks",
      "Middleware",
      "Connecting existing systems",
      "Automated business workflows",
    ],
  },
  {
    label: "Web / Mobile Application",
    icon: <Smartphone className="w-5 h-5 text-primary" />,
    bullets: [
      "Custom web applications",
      "Employee applications",
      "Customer portals",
      "Mobile business applications",
    ],
  },
  {
    label: "Something Else",
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    bullets: ["Tell us what you need — we'll scope it"],
  },
];

type Step = "select" | "form" | "success";

export function RequestDemoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState<Step>("select");
  const [selected, setSelected] = useState<ExploreOption | null>(null);

  const handleOpenChange = (next: boolean) => {
    if (next) {
      setStep("select");
      setSelected(null);
    }
    onOpenChange(next);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg sm:max-w-3xl border-border/60 p-6 sm:p-8">
        <DialogHeader className="mb-6 text-left">
          <DialogTitle className="text-2xl font-display font-bold text-white">
            {step === "select" && "What would you like to explore?"}
            {step === "form" && "Tell us about your project"}
            {step === "success" && "Request received"}
          </DialogTitle>
          <DialogDescription>
            {step === "select" &&
              "Pick the area closest to what you need. We'll shape the conversation around it."}
            {step === "form" &&
              "A few details help us prepare a meaningful walkthrough — this is a project discovery request, not a sales pitch."}
            {step === "success" &&
              "Our engineering team will review your requirements and reach out within 24 hours."}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
                  {step === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {EXPLORE_OPTIONS.map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => {
                    setSelected(opt);
                    setStep("form");
                  }}
                  className="group text-left p-4 rounded-xl bg-card border border-border hover:border-primary/60 hover:bg-primary/[0.03] transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      {opt.icon}
                    </span>
                    <span className="font-display font-semibold text-white">
                      {opt.label}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {opt.bullets[0]}
                    {opt.bullets.length > 1 ? ` · ${opt.bullets[1]}` : ""}
                  </p>
                </button>
              ))}
            </motion.div>
          )}

          {step === "form" && selected && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="space-y-4"
            >
              <button
                type="button"
                onClick={() => setStep("select")}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Choose a different area
              </button>
              <ProjectDiscoveryForm
                defaultInterest={selected.label}
                onSuccess={() => setStep("success")}
              />
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="py-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Request received
              </h3>
              <p className="text-muted-foreground mb-8">
                Our engineering team will review your requirements and reach out
                within 24 hours.
              </p>
                            <DialogClose asChild>
                <button className="px-6 py-3 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors">
                  Back to site
                </button>
              </DialogClose>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}

export type { ExploreOption };
