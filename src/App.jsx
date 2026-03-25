import { useState, useEffect, useRef } from "react";
import {
  Mail, Github, Linkedin, ExternalLink, ChevronDown,
  Calendar, Code, Database, Brain, Heart, Shield,
  BarChart3, Cpu, Users, Layers, Terminal,
  GraduationCap, Award, MapPin, ArrowRight, Menu, X,
  Activity, Dna, FileText, Lock, Zap, GitBranch,
  TrendingUp, Target, Workflow, Search, MessageSquare
} from "lucide-react";

function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
}

function FadeIn({ children, className = "", delay = 0 }) {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function StatCard({ value, label, accent }) {
  return (
    <div className="text-center px-4">
      <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: accent, fontFamily: "'Georgia', serif" }}>{value}</div>
      <div className="text-xs tracking-wide uppercase" style={{ fontFamily: "system-ui, sans-serif", color: "#7a7f8a", letterSpacing: "0.08em" }}>{label}</div>
    </div>
  );
}

function GridBg({ opacity = 0.04 }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      <svg width="100%" height="100%">
        <defs>
          <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#1e273d" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const NAV = [
    { label: "About", id: "about" },
    { label: "Impact", id: "impact" },
    { label: "Projects", id: "projects" },
    { label: "Capabilities", id: "capabilities" },
    { label: "Background", id: "background" },
  ];

  const coral = "#e87864";
  const sage = "#5a8a7a";
  const navy = "#1e273d";
  const sand = "#f8f5f0";
  const cream = "#fdfbf7";
  const darkCard = "#141a28";

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: cream, color: navy, minHeight: "100vh" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(253,251,247,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,39,61,0.06)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="text-lg font-bold tracking-tight" style={{ color: navy }}>
            KJ
          </button>
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm tracking-wide hover:opacity-60 transition-opacity"
                style={{ fontFamily: "system-ui, sans-serif", color: navy, letterSpacing: "0.04em" }}
              >
                {n.label}
              </button>
            ))}
            <a
              href="https://github.com/kage77"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-full transition-all hover:scale-105"
              style={{ background: navy, color: cream, fontFamily: "system-ui, sans-serif" }}
            >
              <Github size={14} /> GitHub
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: cream }}>
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left text-base py-1" style={{ fontFamily: "system-ui, sans-serif" }}>{n.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ======================== HERO ======================== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: cream }}>
        <GridBg />
        <div className="absolute" style={{ width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle, ${coral}15 0%, transparent 70%)`, top: "8%", right: "-4%", pointerEvents: "none" }} />
        <div className="absolute" style={{ width: 240, height: 240, borderRadius: "50%", background: `radial-gradient(circle, ${sage}10 0%, transparent 70%)`, bottom: "12%", left: "-2%", pointerEvents: "none" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(30,39,61,0.04)" }}>
              <MapPin size={13} style={{ color: coral }} />
              <span className="text-xs tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif", color: "#7a7f8a", letterSpacing: "0.12em" }}>
                Seattle Area
              </span>
              <span style={{ color: "#d0d3da" }}>|</span>
              <span className="text-xs tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif", color: "#7a7f8a", letterSpacing: "0.12em" }}>
                Open to Senior TPM & Analytics Leadership
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-5" style={{ color: navy, letterSpacing: "-0.025em" }}>
              Kunal Jagtap
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed" style={{ color: "#3a3f4b", maxWidth: 680, margin: "0 auto 2.5rem" }}>
              I build analytics platforms that serve <span style={{ color: coral, fontWeight: 700 }}>1,500+ enterprise users</span> by day,
              and AI systems that help families interpret <span style={{ color: sage, fontWeight: 700 }}>complex medical data</span> by night.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-medium transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: coral, color: "#fff", fontFamily: "system-ui, sans-serif" }}
              >
                See What I've Built <ArrowRight size={16} />
              </button>
              <a
                href="https://github.com/kage77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-medium border-2 transition-all hover:scale-105"
                style={{ borderColor: navy, color: navy, fontFamily: "system-ui, sans-serif" }}
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <button onClick={() => scrollTo("about")} className="mt-16 opacity-30 hover:opacity-60 transition-opacity" style={{ animation: "bounce 2s infinite" }}>
              <ChevronDown size={26} />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ======================== ABOUT / POSITIONING ======================== */}
      <section id="about" className="py-24 md:py-32" style={{ background: sand }}>
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase mb-6" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.15em" }}>The Short Version</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 leading-snug" style={{ color: navy }}>
              Most product managers talk about data. I've spent a decade inside it: building the pipelines, governing the platforms, migrating the infrastructure, and shipping the dashboards that thousands of people open every morning.
            </h2>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div className="grid md:grid-cols-2 gap-10" style={{ fontFamily: "system-ui, sans-serif", color: "#4a4f5b", lineHeight: 1.85, fontSize: "0.98rem" }}>
              <div>
                <p className="mb-5">
                  I joined DaVita Kidney Care as a data analyst writing SQL queries. Over five promotions and ten years, I grew into the Technical Product Manager who owns the CX analytics function: the BI platforms, the AI tooling rollout, the Tableau cloud migration, and the NICE CXone contact center transition that touched every front-line user in the organization.
                </p>
                <p>
                  That progression matters because it means I don't just set strategy. I understand the data layer underneath it, the engineering constraints around it, and the operational reality of the people who depend on it.
                </p>
              </div>
              <div>
                <p className="mb-5">
                  Outside of DaVita, I build AI systems for the hardest audience I know: families dealing with serious health conditions. My CGM project turns raw glucose data into plain-English insights for a family managing Type 1 diabetes. My GenomeGuide project translates genetic testing reports into documents that parents can actually read and bring to their next doctor's appointment.
                </p>
                <p>
                  The thread connecting all of it: <strong style={{ color: navy }}>I take complex data that overwhelms people and turn it into something they can act on.</strong> Whether that's an executive checking operational KPIs or a parent trying to understand their child's lab results.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================== IMPACT NUMBERS ======================== */}
      <section id="impact" className="py-20 md:py-28 relative overflow-hidden" style={{ background: navy }}>
        <GridBg opacity={0.06} />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase mb-6 text-center" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.15em" }}>Career at a Glance</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
              <StatCard value="10 yrs" label="At DaVita" accent={coral} />
              <StatCard value="5" label="Promotions" accent={coral} />
              <StatCard value="1,500+" label="Platform Users" accent="#e0e5ea" />
              <StatCard value="4" label="Enterprise Platforms" accent="#e0e5ea" />
            </div>
          </FadeIn>

          {/* Compressed timeline */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl p-6 md:p-10" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h3 className="text-xl font-bold mb-8" style={{ color: "#e0e5ea" }}>DaVita Kidney Care, Federal Way, WA</h3>

              {[
                {
                  title: "Technical Product Manager",
                  period: "2025 to Present",
                  highlight: true,
                  desc: "Own product vision for CX analytics platforms. Led Tableau on-prem to cloud migration by building and open-sourcing a Python utility that rewired workbooks from embedded connections to governed published data sources, eliminating KPI inconsistencies across the environment. Scaled AI-assisted development (Windsurf, Claude) from a personal experiment to an adopted engineering standard. Manage architectural dependencies across four concurrent platform deliveries: Tableau Cloud, NICE CXone, ServiceNow, and Enterprise Data.",
                },
                {
                  title: "Manager / Supervisor, CX Reporting & Analytics",
                  period: "2021 to 2025",
                  highlight: false,
                  desc: "Owned the analytics workstream for a Cisco-to-NICE CXone migration affecting thousands of agents: rebuilt metric definitions, established data validation standards, and maintained reporting continuity through cutover with zero downtime. Designed a centralized Reporting Hub that consolidated fragmented dashboards across departments and cut ad-hoc reporting requests. Redesigned the team's intake process from scratch, automating the scrum dashboard, formalizing backlog prioritization, and improving delivery predictability.",
                },
                {
                  title: "Senior Data Analyst",
                  period: "2019 to 2021",
                  highlight: false,
                  desc: "Automated executive reporting workflows, recovering 10+ hours per reporting cycle. Extended the team beyond traditional BI by building forecasting models, ticket triage automation, and sentiment analysis tools in Python.",
                },
                {
                  title: "Data Analyst / Applications Developer",
                  period: "2017 to 2019",
                  highlight: false,
                  desc: "Built the SQL pipelines, ETL processes, and early Tableau dashboards that established the data quality standards later applied at scale during the NICE CXone transition.",
                },
              ].map((role, i) => (
                <div key={i} className="flex gap-4 md:gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full mt-2" style={{ background: role.highlight ? coral : "rgba(255,255,255,0.15)" }} />
                    {i < 3 && <div className="w-px flex-1 mt-2" style={{ background: "rgba(255,255,255,0.08)" }} />}
                  </div>
                  <div className="pb-2">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                      <h4 className="text-base md:text-lg font-bold" style={{ color: role.highlight ? "#f0ede8" : "#c0c5d0" }}>{role.title}</h4>
                      <span className="text-xs px-2.5 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", color: "#7a7f8a", fontFamily: "system-ui, sans-serif" }}>{role.period}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#8a8f9a" }}>{role.desc}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 md:gap-6 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ background: "rgba(255,255,255,0.08)" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ fontFamily: "system-ui, sans-serif", color: "#5a5f6b" }}>Previously</p>
                  <h4 className="text-sm font-bold mb-1" style={{ color: "#8a8f9a" }}>Data Engineer Intern, Edifices (San Francisco, 2015)</h4>
                  <p className="text-xs" style={{ fontFamily: "system-ui, sans-serif", color: "#6a6f7a" }}>NLP-driven claims processing pipelines and EMR ingestion adapters in a healthcare analytics product team.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================== PROJECTS ======================== */}
      <section id="projects" className="py-24 md:py-32" style={{ background: cream }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.15em" }}>What I Build Outside of Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: navy }}>
              AI systems for the hardest audience: families.
            </h2>
            <p className="text-lg mb-16 max-w-3xl" style={{ fontFamily: "system-ui, sans-serif", color: "#5a5f6b", lineHeight: 1.7 }}>
              Both projects solve the same core problem: someone I care about is drowning in complex health data that no existing tool translates into something they can act on. So I built the translation layer myself.
            </p>
          </FadeIn>

          {/* === CGM Case Study === */}
          <FadeIn>
            <div className="rounded-2xl overflow-hidden mb-10" style={{ background: sand, border: "1px solid rgba(30,39,61,0.06)" }}>
              {/* Header band */}
              <div className="px-8 md:px-10 py-6" style={{ background: `linear-gradient(135deg, #2a1f1e, ${navy})` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${coral}20` }}>
                    <Heart size={18} style={{ color: coral }} />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.1em" }}>Personal Project</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#f0ede8" }}>CGM AI Daily Insights</h3>
                <p className="text-base" style={{ color: `${coral}cc`, fontFamily: "system-ui, sans-serif" }}>Turning raw glucose data into plain-English daily summaries via Telegram</p>
              </div>

              {/* Body */}
              <div className="px-8 md:px-10 py-8">
                {/* Problem */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.1em" }}>The Problem</h4>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
                    A family member with Type 1 diabetes generates hundreds of glucose readings per day through a Dexcom CGM sensor. The existing Dexcom Clarity dashboard reports the numbers well (averages, time-in-range, GMI) but does not answer the questions that actually matter each morning: Did dinner cause last night's spike? Was the overnight low meaningful, or just noise? What is the one thing worth paying attention to today? The gap is not data. It is interpretation.
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.1em" }}>The Approach</h4>
                  <p className="text-base leading-relaxed mb-4" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
                    I built an interpretive layer that sits on top of existing clinical tools, not replacing them. Daily Dexcom Clarity CSV exports are uploaded via a private Telegram bot (chosen because it is already open every morning, unlike a new dashboard). The data flows through the OpenClaw engine, which handles parsing, pattern detection, and AI narrative generation, then returns a plain-English summary highlighting overnight stability, meal-triggered spikes, and unusual variability.
                  </p>
                </div>

                {/* Key Decisions */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.1em" }}>Key Design Decisions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <MessageSquare size={15} />, title: "Telegram as interface", desc: "Meets the user where they already are. No new app to check. Insight delivery feels like a text message, not a report." },
                      { icon: <Layers size={15} />, title: "Tiered model routing", desc: "Claude Opus handles complex pattern reasoning. Sonnet/Haiku handle daily formatting. Ollama runs as a zero-cost local fallback. Monthly cost stays predictable." },
                      { icon: <Lock size={15} />, title: "Full environment isolation", desc: "Agent runs in a dedicated macOS user account with a local-only gateway. Telegram bot paired exclusively to one user. No public-facing access to health data." },
                      { icon: <Shield size={15} />, title: "Financial guardrails", desc: "Account pre-funding, hard spend boundaries, and retry/loop breakers prevent the autonomous system from running up unexpected API costs." },
                    ].map((d, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: cream }}>
                        <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${coral}10`, color: coral }}>{d.icon}</div>
                        <div>
                          <p className="text-sm font-bold mb-0.5" style={{ fontFamily: "system-ui, sans-serif", color: navy }}>{d.title}</p>
                          <p className="text-xs leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#6a6f7a" }}>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.1em" }}>Outcome & Roadmap</h4>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
                    The system is in daily use. Morning summaries take under 30 seconds to read and have replaced a 5-10 minute manual review of Dexcom Clarity charts. The roadmap progresses from the current manual CSV upload to cron-driven automated retrieval, then to direct Dexcom API integration that eliminates the export step entirely.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "Claude Opus", "OpenClaw", "Telegram Bot API", "Dexcom Clarity"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ background: `${coral}10`, color: "#8a4a3a", fontFamily: "system-ui, sans-serif" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* === GenomeGuide Case Study === */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-10" style={{ background: sand, border: "1px solid rgba(30,39,61,0.06)" }}>
              {/* Header band */}
              <div className="px-8 md:px-10 py-6" style={{ background: `linear-gradient(135deg, #1a2520, ${navy})` }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${sage}20` }}>
                    <Dna size={18} style={{ color: sage }} />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: "system-ui, sans-serif", color: sage, letterSpacing: "0.1em" }}>Personal Project</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "#f0ede8" }}>GenomeGuide</h3>
                <p className="text-base" style={{ color: `${sage}cc`, fontFamily: "system-ui, sans-serif" }}>Translating genetic testing reports into plain-language documents for families</p>
              </div>

              {/* Body */}
              <div className="px-8 md:px-10 py-8">
                {/* Problem */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: sage, letterSpacing: "0.1em" }}>The Problem</h4>
                  <p className="text-base leading-relaxed mb-3" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
                    In October 2021, a two-month-old girl underwent a hemispherectomy to stop hundreds of daily seizures. Three months later, a dense 3-page OncoPlex Cancer Gene Panel arrived identifying a pathogenic mutation in AKT3. Shortly after, the family had an excellent but fleeting 18-minute telemedicine call with a genetic counselor.
                  </p>
                  <p className="text-base leading-relaxed p-4 rounded-xl" style={{ fontFamily: "system-ui, sans-serif", color: "#4a4f5b", background: cream, borderLeft: `3px solid ${sage}` }}>
                    Then the call ended. The family was left with a clinical report they could not read and a fading memory of an 18-minute conversation. There was no plain-language document connecting the lab finding to their child's brain condition. No written record of what the genetic counselor explained. Nothing to share with family members or bring to the next appointment.
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: sage, letterSpacing: "0.1em" }}>The Approach</h4>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
                    GenomeGuide takes a genetic testing report and generates a structured, readable document with six sections: a three-sentence summary readable in ten seconds, a plain-language translation of the lab findings (nothing added, nothing assumed), a biological explanation using accessible analogies (like a thermostat analogy for cell growth regulation via the mTOR pathway), curated research context from ClinVar and published studies, tailored questions for the next medical appointment, and links to condition-specific organizations like the Pediatric Epilepsy Surgery Alliance.
                  </p>
                </div>

                {/* Key Decisions */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: sage, letterSpacing: "0.1em" }}>Key Design Decisions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { icon: <Brain size={15} />, title: "Condition inference engine", desc: "Maps vague lab terminology (like 'MPPH syndrome') to the actual clinical condition by cross-referencing gene, variant type, tissue, and pathology notes. Routes families to the correct community instead of dead-end searches." },
                      { icon: <Shield size={15} />, title: "Deterministic safety gate", desc: "Hard-coded rules (not AI) that block treatment recommendations, require uncertainty hedging on heritability claims, replace stigmatizing language ('mutation' becomes 'variant'), and verify mandatory counseling topics are addressed." },
                      { icon: <Target size={15} />, title: "Complement, not replace", desc: "Designed to extend the genetic counselor's expertise into a persistent, shareable document. It does not replace the clinician. It extends the value of that 18-minute window far beyond the call itself." },
                      { icon: <Users size={15} />, title: "Broad mTOR coverage", desc: "Automatically adapts across 7+ mTOR pathway conditions (HME, FCD, TSC, MCAP, MPPH, PROS, Smith-Kingsmore) because they share the same biological pathway, not because each was individually programmed." },
                    ].map((d, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: cream }}>
                        <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${sage}12`, color: sage }}>{d.icon}</div>
                        <div>
                          <p className="text-sm font-bold mb-0.5" style={{ fontFamily: "system-ui, sans-serif", color: navy }}>{d.title}</p>
                          <p className="text-xs leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#6a6f7a" }}>{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold tracking-wider uppercase mb-3" style={{ fontFamily: "system-ui, sans-serif", color: sage, letterSpacing: "0.1em" }}>Outcome & Roadmap</h4>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
                    Early user testing with parent feedback. Roadmap: move to a web upload interface, engage genetic counselors for clinical feedback, beta deploy to 20-30 families, present to the Pediatric Epilepsy Surgery Alliance community, then expand beyond mTOR pathway conditions to all rare diseases.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "Claude Opus", "ClinVar API"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs" style={{ background: `${sage}10`, color: "#3a6a5a", fontFamily: "system-ui, sans-serif" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* === Open Source Utilities === */}
          <FadeIn delay={0.15}>
            <p className="text-sm tracking-widest uppercase mb-5 mt-6" style={{ fontFamily: "system-ui, sans-serif", color: "#8a8f9a", letterSpacing: "0.12em" }}>Open Source Tools</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            <FadeIn delay={0.2}>
              <a
                href="https://github.com/kage77/tableau-embedded-to-published-sqlserver"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-md group"
                style={{ background: sand, border: "1px solid rgba(30,39,61,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <GitBranch size={16} style={{ color: coral }} />
                    <h4 className="text-base font-bold" style={{ color: navy }}>tableau-embedded-to-published</h4>
                  </div>
                  <ExternalLink size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: "#7a7f8a" }} />
                </div>
                <p className="text-sm mb-3" style={{ fontFamily: "system-ui, sans-serif", color: "#5a5f6b", lineHeight: 1.7 }}>
                  Python utility that migrates Tableau workbooks from embedded SQL Server connections to governed published data sources. Built from the real migration I led at DaVita. Supports dry-run mode and batch CSV input.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Tableau REST API"].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs" style={{ background: "rgba(30,39,61,0.04)", color: "#7a7f8a", fontFamily: "system-ui, sans-serif" }}>{t}</span>
                  ))}
                </div>
              </a>
            </FadeIn>
            <FadeIn delay={0.25}>
              <a
                href="https://github.com/kage77/python-etl-pipeline"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-md group"
                style={{ background: sand, border: "1px solid rgba(30,39,61,0.06)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <Database size={16} style={{ color: coral }} />
                    <h4 className="text-base font-bold" style={{ color: navy }}>python-etl-pipeline</h4>
                  </div>
                  <ExternalLink size={13} className="opacity-0 group-hover:opacity-50 transition-opacity" style={{ color: "#7a7f8a" }} />
                </div>
                <p className="text-sm mb-3" style={{ fontFamily: "system-ui, sans-serif", color: "#5a5f6b", lineHeight: 1.7 }}>
                  Zero-config data loading. Reads any Excel file, infers column types, generates DDL, and loads into SQL Server or SQLite. No manual schema mapping. Supports CLI overrides, batch loading, and a self-contained demo mode.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "pandas", "SQL Server", "SQLite"].map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs" style={{ background: "rgba(30,39,61,0.04)", color: "#7a7f8a", fontFamily: "system-ui, sans-serif" }}>{t}</span>
                  ))}
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======================== CAPABILITIES ======================== */}
      <section id="capabilities" className="py-24 md:py-32" style={{ background: sand }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.15em" }}>Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: navy }}>What I bring to the table.</h2>
            <p className="text-base mb-14 max-w-2xl" style={{ fontFamily: "system-ui, sans-serif", color: "#6a6f7a" }}>
              Not just what tools I use, but what I can do with them and where I've done it.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <BarChart3 size={20} />,
                title: "Analytics Platform Ownership",
                desc: "Full lifecycle ownership of BI platforms from architecture to adoption. Governed Tableau environments at enterprise scale. Built self-serve reporting that replaced ad-hoc request queues.",
                tools: "Tableau, Power BI, SQL Server, SQL",
              },
              {
                icon: <Cpu size={20} />,
                title: "AI-Enabled Product Delivery",
                desc: "Took AI tooling from personal experiment to team-wide standard at DaVita. Built production AI workflows for health data interpretation using Claude API, Ollama, and model routing for cost control.",
                tools: "Claude API, Ollama, Windsurf, Gemini",
              },
              {
                icon: <Workflow size={20} />,
                title: "Enterprise Platform Migration",
                desc: "Led analytics workstreams through two major platform transitions (Cisco to NICE CXone, Tableau on-prem to cloud) while maintaining reporting continuity for thousands of users.",
                tools: "NICE CXone, Cisco Contact Center, ServiceNow",
              },
              {
                icon: <Code size={20} />,
                title: "Data Engineering & Automation",
                desc: "Built ETL pipelines, automated executive reporting, and wrote the Python utilities that powered migrations. Comfortable in the data layer, not just the strategy layer.",
                tools: "Python, SQL, pandas, REST APIs",
              },
              {
                icon: <Users size={20} />,
                title: "Team & Process Leadership",
                desc: "Managed cross-functional teams of analysts and developers. Redesigned delivery processes, formalized backlog prioritization, and built mentorship culture around SQL, Tableau, and data engineering.",
                tools: "Agile, Scrum, OKRs, Stakeholder Discovery",
              },
              {
                icon: <Target size={20} />,
                title: "Product Strategy & Governance",
                desc: "Defined KPI governance and metric standardization strategies. Translated CX and IT needs into prioritized roadmaps. Managed architectural dependencies across concurrent platform deliveries.",
                tools: "Product Roadmapping, Data Governance, BI Strategy",
              },
            ].map((cap, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="rounded-xl p-6 h-full" style={{ background: cream, border: "1px solid rgba(30,39,61,0.05)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `${coral}08`, color: coral }}>
                    {cap.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "system-ui, sans-serif", color: navy }}>{cap.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "system-ui, sans-serif", color: "#5a5f6b" }}>{cap.desc}</p>
                  <p className="text-xs" style={{ fontFamily: "system-ui, sans-serif", color: "#9a9faa" }}>{cap.tools}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== EDUCATION ======================== */}
      <section id="background" className="py-24 md:py-32" style={{ background: cream }}>
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "system-ui, sans-serif", color: coral, letterSpacing: "0.15em" }}>Background</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-14" style={{ color: navy }}>Education & Certifications</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              { degree: "M.S., Information Systems & Operations Management", school: "University of Texas at Arlington" },
              { degree: "B.E., Computer Engineering", school: "University of Pune" },
            ].map((edu, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-xl" style={{ background: sand, border: "1px solid rgba(30,39,61,0.05)" }}>
                  <GraduationCap size={20} style={{ color: coral, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h3 className="text-base font-bold mb-0.5" style={{ color: navy }}>{edu.degree}</h3>
                    <p className="text-sm" style={{ fontFamily: "system-ui, sans-serif", color: "#7a7f8a" }}>{edu.school}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-3">
              {[
                "Human-Centered AI / Stanford",
                "Claude API & AI Workflow Training / Anthropic",
                "Advanced SQL / Learning Tree International",
              ].map((c) => (
                <span key={c} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm" style={{ background: sand, border: "1px solid rgba(30,39,61,0.05)", fontFamily: "system-ui, sans-serif", color: "#4a4f5b" }}>
                  <Award size={13} style={{ color: coral }} /> {c}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer className="py-16 md:py-20" style={{ background: navy }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-xl md:text-2xl font-bold mb-3 leading-relaxed" style={{ color: "#e0e5ea" }}>
              Technology is most powerful when it is used to
            </p>
            <p className="text-xl md:text-2xl font-bold mb-10 leading-relaxed" style={{ color: coral }}>
              support the people we care about.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="flex items-center justify-center gap-4 mb-8">
              {[
                { href: "mailto:kunaljagtap74@gmail.com", icon: <Mail size={17} /> },
                { href: "https://linkedin.com/in/kunaljagtap7", icon: <Linkedin size={17} /> },
                { href: "https://github.com/kage77", icon: <Github size={17} /> },
              ].map((l, i) => (
                <a key={i} href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.06)", color: "#9a9faa" }}>
                  {l.icon}
                </a>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-sm mb-1" style={{ fontFamily: "system-ui, sans-serif", color: "#5a5f6b" }}>
              kunaljagtap74@gmail.com | 678-860-4414
            </p>
            <p className="text-xs" style={{ fontFamily: "system-ui, sans-serif", color: "#3a3f4b" }}>
              Puyallup, WA
            </p>
          </FadeIn>
        </div>
      </footer>
    </div>
  );
}
