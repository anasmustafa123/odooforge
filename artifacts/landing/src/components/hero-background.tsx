import { motion } from "framer-motion";
import {
  Boxes,
  Layers,
  Monitor,
  RefreshCw,
  Server,
  ShoppingCart,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";

const CARD = "absolute rounded-lg border border-border/70 bg-card/85 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)]";
const LABEL = "absolute top-2 left-2 text-[9px] uppercase tracking-[0.2em] text-primary/80 font-medium";

function DOT({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      className={`absolute w-1 h-1 rounded-full bg-primary/80 ${className}`}
      style={style}
    />
  );
}

export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none select-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Ambient soft glows that drift slowly */}
      <div className="absolute -left-40 -top-32 w-[34rem] h-[34rem] rounded-full bg-primary/20 blur-[120px] animate-drift" />
      <div className="absolute -right-48 top-1/3 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-[140px] animate-drift-slow" />

      {/* ---------- Floating UI mockups ---------- */}

      {/* 1. ERP Dashboard */}
      <div className="absolute left-3 top-24 w-[17rem] h-[12rem] origin-top-left scale-[0.4] opacity-60 sm:left-6 sm:scale-[0.55] sm:opacity-75 md:top-16 md:left-[6%] md:scale-100 md:opacity-100">
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
        <div className={`${CARD} absolute inset-0 overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center gap-2 px-3 border-b border-border/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse-soft" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
            <span className="ml-2 text-[8px] text-muted-foreground tracking-wide">Operations · Live</span>
          </div>
          <div className="absolute top-6 left-0 bottom-0 w-8 border-r border-border/50 flex flex-col items-center gap-2 pt-3">
            <Boxes className="w-3 h-3 text-primary/70" />
            <Layers className="w-3 h-3 text-muted-foreground/60" />
            <Workflow className="w-3 h-3 text-muted-foreground/60" />
            <Server className="w-3 h-3 text-muted-foreground/60" />
          </div>
          <div className="absolute top-6 left-8 right-0 bottom-0 p-2">
            <div className="flex gap-2 mb-1.5">
              <div className="flex-1 rounded-sm bg-card border border-border/60 p-1">
                <div className="text-[8px] text-muted-foreground mb-0.5">Revenue</div>
                <div className="text-[10px] text-white font-semibold flex items-center gap-1">
                  $128.4K <TrendingUp className="w-2.5 h-2.5 text-primary" />
                </div>
              </div>
              <div className="flex-1 rounded-sm bg-card border border-border/60 p-1">
                <div className="text-[8px] text-muted-foreground mb-0.5">Orders</div>
                <div className="text-[10px] text-white font-semibold">1,204</div>
              </div>
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 h-3 mb-1 px-1">
                <div className="w-8 h-1.5 rounded-full bg-muted/60 animate-ticker" />
                <div className="flex-1 h-1.5 rounded-full bg-border/80" />
                <div className="w-4 h-1.5 rounded-full bg-primary/30" />
                <div className="w-6 h-1.5 rounded-full bg-border/60" />
              </div>
            ))}
          </div>
        </div>
        <span className={`${LABEL}`}>Systems</span>
        </motion.div>
      </div>

      {/* 2. Analytics / Charts */}
      <div className="absolute right-3 top-40 w-[19rem] h-[13rem] origin-top-right scale-[0.4] opacity-60 sm:right-6 sm:scale-[0.55] sm:opacity-75 md:top-24 md:right-[6%] md:scale-100 md:opacity-100">
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
        <div className={`${CARD} absolute inset-0 overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center gap-2 px-3 border-b border-border/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse-soft" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
            <span className="ml-2 text-[8px] text-muted-foreground tracking-wide">Analytics · Live</span>
          </div>
          <div className="absolute inset-x-0 bottom-0 top-6 p-2 flex items-end justify-between gap-1.5 px-3">
            {[38, 55, 42, 68, 52, 74, 62, 86, 70, 95].map((h, i) => (
              <div
                key={i}
                className="w-3 rounded-t-sm bg-gradient-to-t from-primary/40 to-primary animate-bar"
                style={{ height: `${h}%`, animationDelay: `${i * 0.22}s` }}
              />
            ))}
          </div>
          <svg
            className="absolute inset-x-2 top-8 bottom-4 w-[calc(100%-1rem)] h-[calc(100%-3rem)] overflow-visible"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,42 C16,38 24,28 38,30 C52,32 60,14 74,16 C86,18 92,8 100,10 L100,50 L0,50 Z"
              fill="url(#heroArea)"
            />
            <path
              d="M0,42 C16,38 24,28 38,30 C52,32 60,14 74,16 C86,18 92,8 100,10"
              fill="none"
              stroke="#6266f0"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle r="1.4" fill="#a5b4fc" opacity={0.9}>
              <animateMotion
                dur="3.2s"
                repeatCount="indefinite"
                path="M0,42 C16,38 24,28 38,30 C52,32 60,14 74,16 C86,18 92,8 100,10"
              />
            </circle>
          </svg>
        </div>
        <span className={`${LABEL}`}>Analytics</span>
        </motion.div>
      </div>

      {/* 3. Inventory / Orders */}
      <div className="absolute left-3 bottom-24 w-[15rem] h-[10rem] origin-bottom-left scale-[0.4] opacity-60 sm:left-6 sm:scale-[0.55] sm:opacity-75 md:bottom-24 md:left-[13%] md:scale-100 md:opacity-100">
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
        <div className={`${CARD} absolute inset-0 overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center gap-2 px-3 border-b border-border/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse-soft" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
            <span className="ml-2 text-[8px] text-muted-foreground tracking-wide">Inventory</span>
          </div>
          <div className="absolute top-6 left-0 right-0 bottom-0 p-2">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[9px] text-white font-semibold">Stock Status</span>
              <span className="w-10 h-2 rounded-full bg-primary/20 overflow-hidden">
                <span className="block h-full w-[72%] rounded-full bg-primary/70" />
              </span>
            </div>
            {[
              { n: "SKU-2041", p: "bg-emerald-400/70", w: "w-16" },
              { n: "SKU-0817", p: "bg-amber-400/60", w: "w-10" },
              { n: "SKU-5533", p: "bg-emerald-400/50", w: "w-14" },
              { n: "SKU-1022", p: "bg-red-400/50", w: "w-8" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-2 h-4 px-1">
                <span className="text-[8px] text-muted-foreground font-mono">{r.n}</span>
                <div className={`${r.w} h-1.5 rounded-full ${r.p}`} />
                <span className={`ml-auto text-[8px] ${i % 2 ? "text-emerald-300/80" : "text-muted-foreground"}`}>
                  {i % 2 ? "● On time" : "● In stock"}
                </span>
              </div>
            ))}
            <div className="absolute bottom-1 left-0 right-0 px-2 pt-1 border-t border-border/40 flex items-center justify-between">
              <span className="text-[8px] text-muted-foreground">Replenished 12m ago</span>
              <RefreshCw className="w-2.5 h-2.5 text-primary/70 animate-pulse-soft" />
            </div>
          </div>
        </div>
        <span className={`${LABEL}`}>Inventory</span>
        </motion.div>
      </div>

      {/* 4. Website Preview */}
      <div className="absolute right-3 bottom-32 w-[17rem] h-[11rem] origin-bottom-right scale-[0.4] opacity-60 sm:right-6 sm:scale-[0.55] sm:opacity-75 md:bottom-32 md:right-[10%] md:scale-100 md:opacity-100">
        <motion.div
          initial={{ opacity: 0, y: 80, rotate: -5, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
        <div className={`${CARD} absolute inset-0 overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center gap-1.5 px-3 border-b border-border/60">
            <span className="flex-1 h-3 rounded-full bg-muted/50 mx-auto max-w-[70%]" />
          </div>
          <div className="absolute top-6 left-0 right-0 bottom-0 p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Monitor className="w-2.5 h-2.5 text-primary" />
              </div>
              <div className="h-2 w-16 bg-muted/50 rounded-full" />
              <div className="ml-auto flex gap-1.5">
                <div className="w-4 h-2 rounded-full bg-muted/50" />
                <div className="w-4 h-2 rounded-full bg-primary/40" />
              </div>
            </div>
            <div className="space-y-2 mb-3">
              <div className="h-2 w-3/4 bg-muted/60 rounded-full" />
              <div className="h-2 w-1/2 bg-muted/40 rounded-full" />
            </div>
            <div className="h-6 rounded-sm bg-gradient-to-r from-primary/30 to-primary/10 flex items-center justify-center">
              <span className="text-[7px] text-primary/90 font-semibold tracking-widest">● Deploy Ready</span>
            </div>
          </div>
        </div>
        <span className={`${LABEL}`}>Website</span>
        </motion.div>
      </div>

      {/* 5. Automation Workflow */}
      <div className="absolute top-10 left-0 right-0 flex justify-center px-6 opacity-50 lg:inset-0 lg:top-auto lg:items-center lg:px-0 lg:opacity-100">
        <div className="origin-top scale-[0.55] sm:scale-[0.7] lg:origin-center lg:scale-100">
          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[19rem] h-[8rem]"
          >
        <div className={`${CARD} absolute inset-0 overflow-hidden`}>
          <div className="absolute top-0 left-0 right-0 h-6 flex items-center gap-2 px-3 border-b border-border/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse-soft" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-muted" />
            <span className="ml-2 text-[8px] text-muted-foreground tracking-wide">Automation Flow</span>
          </div>
          <div className="absolute top-6 left-0 right-0 bottom-0 flex items-center justify-center gap-3 px-4">
            <div className="w-10 h-10 rounded-md bg-card border border-border/70 flex flex-col items-center justify-center">
              <Zap className="w-4 h-4 text-primary/80" />
              <span className="text-[6px] text-muted-foreground mt-0.5">Trigger</span>
            </div>
            <svg width="34" height="20" viewBox="0 0 34 20" className="overflow-visible">
              <path d="M0,10 L30,10" stroke="#6366f1b3" strokeWidth="1.2" strokeDasharray="4 3" className="animate-flow" fill="none" />
              <circle r="1.6" fill="#a5b4fc">
                <animateMotion dur="1.6s" repeatCount="indefinite" path="M0,10 L30,10" />
              </circle>
            </svg>
            <div className="w-10 h-10 rounded-md bg-card border border-border/70 flex flex-col items-center justify-center">
              <RefreshCw className="w-4 h-4 text-primary/80" />
              <span className="text-[6px] text-muted-foreground mt-0.5">Process</span>
            </div>
            <svg width="34" height="20" viewBox="0 0 34 20" className="overflow-visible">
              <path d="M0,10 L30,10" stroke="#6366f1b3" strokeWidth="1.2" strokeDasharray="4 3" className="animate-flow" fill="none" />
              <circle r="1.6" fill="#a5b4fc">
                <animateMotion dur="1.6s" begin="0.4s" repeatCount="indefinite" path="M0,10 L30,10" />
              </circle>
            </svg>
            <div className="w-10 h-10 rounded-md bg-card border border-border/70 flex flex-col items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-primary/80" />
              <span className="text-[6px] text-muted-foreground mt-0.5">Integrate</span>
            </div>
          </div>
        </div>
        <span className={`${LABEL}`}>Workflow</span>
          </motion.div>
        </div>
      </div>

      {/* ---------- Connecting data flows ---------- */}
      <div className="absolute inset-0 opacity-70 md:opacity-100">
        {/* Flow lines running behind the cards */}
        <svg className="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path
            d="M14,28 C38,20 62,26 80,14"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.3"
            strokeDasharray="2 2"
            className="animate-flow"
          />
          <path
            d="M18,80 C40,86 68,70 86,62"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.3"
            strokeDasharray="2 2"
            className="animate-flow"
            style={{ animationDelay: "0.8s" }}
          />
        </svg>

        <DOT className="left-[22%] top-[24%] animate-pulse-soft" />
        <DOT className="left-[38%] top-[14%] animate-pulse-soft" style={{ animationDelay: "0.6s" }} />
        <DOT className="left-[62%] top-[22%] animate-pulse-soft" style={{ animationDelay: "1.2s" }} />
        <DOT className="left-[80%] top-[38%] animate-pulse-soft" style={{ animationDelay: "1.8s" }} />
        <DOT className="left-[16%] top-[72%] animate-pulse-soft" style={{ animationDelay: "2.4s" }} />
        <DOT className="left-[40%] top-[84%] animate-pulse-soft" style={{ animationDelay: "3s" }} />
        <DOT className="left-[72%] top-[74%] animate-pulse-soft" style={{ animationDelay: "3.6s" }} />
        <DOT className="left-[88%] top-[66%] animate-pulse-soft" style={{ animationDelay: "4.2s" }} />
      </div>

      {/* Faint vignette pulled over everything so headline stays dominant */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.30)_0%,transparent_65%)]" />
    </div>
  );
}