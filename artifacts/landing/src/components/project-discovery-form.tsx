import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const INTEREST_OPTIONS = [
  "ERP / Odoo",
  "Custom Business System",
  "Company Website",
  "Integrations & Automation",
  "Web / Mobile Application",
  "Something Else",
] as const;

const BUDGET_OPTIONS = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const inputClass =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-white placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

type ProjectDiscoveryFormProps = {
  /** Pre-selected interest from the demo modal; renders the interest field read-only. */
  defaultInterest?: string;
  /** Called after a successful submit. When omitted, an inline success state renders. */
  onSuccess?: () => void;
  className?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ProjectDiscoveryForm({
  defaultInterest,
  onSuccess,
  className,
}: ProjectDiscoveryFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: defaultInterest ?? "",
    message: "",
    budget: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setFormError(false);
    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
      formData.append(
        "subject",
        `Project Discovery — ${fields.interest || "General"} — ${fields.name} — ${fields.company || "Unknown company"}`,
      );
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        onSuccess?.();
      } else {
        setStatus("error");
        setFormError(true);
      }
    } catch {
      setStatus("error");
      setFormError(true);
    }
  };

  if (status === "success" && !onSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-10 text-center bg-card border border-border rounded-xl"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-2">
          Request received
        </h3>
        <p className="text-muted-foreground">
          Our engineering team will review your requirements and reach out within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm text-primary hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

    return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="name"
          label="Full Name"
          required
          placeholder="Jane Doe"
          value={fields.name}
          onChange={handleChange}
        />
        <Field
          id="email"
          label="Work Email"
          type="email"
          required
          placeholder="jane@company.com"
          value={fields.email}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          id="company"
          label="Company Name"
          required
          placeholder="Acme Corp"
          value={fields.company}
          onChange={handleChange}
        />
        <Field
          id="phone"
          label="Phone"
          sub="(optional)"
          type="tel"
          placeholder="+1 555 000 0000"
          value={fields.phone}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="interest" className="text-sm font-medium text-gray-300">
          What are you looking for?
        </label>
        {defaultInterest ? (
          <div className="w-full bg-background border border-border rounded-md px-4 py-3 text-white">
            {defaultInterest}
          </div>
        ) : (
          <select
            id="interest"
            name="interest"
            required
            value={fields.interest}
            onChange={handleChange}
            className={cn(inputClass, "appearance-none pr-10")}
          >
            <option value="">Select an area</option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
        {defaultInterest && (
          <input type="hidden" name="interest" value={fields.interest} />
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-300">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          className={cn(inputClass, "resize-none")}
          placeholder="What do you need built? Describe your current tools, processes, and goals."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-gray-300">
          Budget / Project scope
          <span className="text-muted-foreground/70"> (optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={fields.budget}
          onChange={handleChange}
          className={cn(inputClass, "appearance-none pr-10")}
        >
          <option value="">Select an estimated range</option>
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {formError && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or email us directly.
        </p>
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
            Request a Demo
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  sub,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  sub?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label} {required && <span className="text-red-400/80">*</span>}
        {sub && <span className="text-muted-foreground/70"> ({sub})</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}

