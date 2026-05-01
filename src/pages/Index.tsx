import logo from "@/assets/finsync-logo.png";
import screenHome from "@/assets/screen-home.jpg";
import screenBudgets from "@/assets/screen-budgets.jpg";
import screenSummary from "@/assets/screen-summary.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wallet,
  PieChart,
  Target,
  Users,
  ArrowLeftRight,
  TrendingUp,
  CalendarRange,
  BarChart3,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Re-usable bits                                                            */
/* -------------------------------------------------------------------------- */

const PlayBadge = ({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) => {
  const dark = variant === "dark";
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 transition-all hover:scale-[1.03] ${
        dark
          ? "bg-foreground text-background hover:shadow-glow"
          : "bg-background text-foreground shadow-card hover:shadow-soft"
      } ${className}`}
      aria-label="Get FinSync on Google Play"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M3.6 1.6a2 2 0 0 0-1 1.74v17.32a2 2 0 0 0 1 1.74L13.5 12 3.6 1.6Z" fill="#34A853" />
        <path d="M17.4 8.1 13.5 12l3.9 3.9 3.4-1.97a2 2 0 0 0 0-3.86L17.4 8.1Z" fill="#FBBC04" />
        <path d="M3.6 1.6 13.5 12l3.9-3.9L4.6 1.06A2 2 0 0 0 3.6 1.6Z" fill="#EA4335" />
        <path d="M3.6 22.4a2 2 0 0 0 1 .54L17.4 15.9 13.5 12 3.6 22.4Z" fill="#4285F4" />
      </svg>
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wider opacity-80">Get it on</span>
        <span className="text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
};

const PhoneFrame = ({
  src,
  alt,
  width = "w-[260px]",
  className = "",
}: {
  src: string;
  alt: string;
  width?: string;
  className?: string;
}) => (
  <div
    className={`relative ${width} rounded-[2.5rem] bg-foreground p-[6px] shadow-glow ${className}`}
    style={{
      boxShadow:
        "0 40px 90px -20px hsl(250 70% 40% / 0.45), inset 0 0 0 1px hsl(0 0% 100% / 0.08)",
    }}
  >
    <div className="relative overflow-hidden rounded-[2.1rem] bg-background">
      <img src={src} alt={alt} className="block w-full h-auto" />
    </div>
  </div>
);

const SectionEyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-1.5 text-xs font-semibold text-foreground/70 backdrop-blur">
    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const features = [
  {
    icon: TrendingUp,
    title: "Income & Expense Tracking",
    desc: "Log every transaction with smart categories so you always know where your money goes.",
    img: screenHome,
  },
  {
    icon: PieChart,
    title: "Budget Tracking",
    desc: "Set daily, weekly or monthly limits and get gentle nudges before you overspend.",
    img: screenBudgets,
  },
  {
    icon: Wallet,
    title: "Multi-Wallet Support",
    desc: "Cash, bank, savings — manage every account in one place and transfer between them in a tap.",
    img: screenSummary,
  },
];

const steps = [
  {
    title: "Install FinSync in seconds",
    desc: "Grab the app from the Google Play Store and create your first wallet in under a minute.",
  },
  {
    title: "Track every rupee effortlessly",
    desc: "Add income, expenses and IOUs with categories that actually make sense to you.",
  },
  {
    title: "Stay in control of your goals",
    desc: "Watch budgets, goals and monthly summaries update live as your finances grow.",
  },
];

const trust = [
  {
    icon: Sparkles,
    title: "Save Hours Every Month",
    desc: "Stop juggling spreadsheets — FinSync automates the boring parts of money management.",
  },
  {
    icon: BarChart3,
    title: "Get Real Financial Insights",
    desc: "Beautiful charts turn your raw numbers into clear, actionable insights you can trust.",
  },
  {
    icon: Target,
    title: "Stay On Top of Budgets",
    desc: "Smart alerts and goal tracking keep you on course — without the guilt or guesswork.",
  },
];

const plans = [
  {
    name: "Personal",
    price: "Free",
    tagline: "Perfect for individuals just getting started.",
    bullets: [
      "Unlimited transactions",
      "Up to 3 wallets",
      "Budget tracking",
      "Monthly summary",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "Free",
    tagline: "Everything in Personal, plus the power features.",
    bullets: [
      "Unlimited wallets & transfers",
      "IOU tracking with friends",
      "Financial goals",
      "Advanced analytics",
    ],
    highlight: true,
    cta: "Get Started",
  },
  {
    name: "Family",
    price: "Soon",
    tagline: "For households tracking finances together.",
    bullets: [
      "Shared wallets",
      "Member roles",
      "Combined summaries",
      "Family goals",
    ],
    highlight: false,
    cta: "Notify Me",
  },
];

const faqs = [
  {
    q: "Is FinSync really free to use?",
    a: "Yes. FinSync is completely free to download and use on Android. There are no hidden subscriptions or paywalls.",
  },
  {
    q: "Is FinSync available on iOS?",
    a: "Not yet. FinSync is currently Android-only. iOS support is planned for a future release — stay tuned!",
  },
  {
    q: "Where is my financial data stored?",
    a: "Your data lives privately on your device. FinSync is built offline-first, so your finances stay yours.",
  },
  {
    q: "Can I track multiple wallets and transfer between them?",
    a: "Absolutely. You can create multiple wallets — cash, bank, savings — and move money between them with one tap.",
  },
  {
    q: "How do IOUs work in FinSync?",
    a: "IOUs let you track who owes you money and who you owe. Mark them as paid when settled and FinSync handles the rest.",
  },
  {
    q: "Will FinSync support more features in the future?",
    a: "Yes — recurring transactions, family wallets and more analytics are on the roadmap. Updates roll out frequently.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ────────────────────────  Nav  ──────────────────────── */}
      <header className="sticky top-4 z-50 px-4">
        <nav className="container max-w-6xl rounded-full border border-border bg-background/80 backdrop-blur-xl px-4 py-2 flex items-center justify-between shadow-card">
          <a href="#" className="flex items-center gap-2 pl-2">
            <img src={logo} alt="FinSync logo" className="h-8 w-auto" />
            <span className="font-semibold tracking-tight hidden sm:inline">FinSync</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="#plans" className="hover:text-foreground transition-colors">Plans</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            <a href="#download">Get Started</a>
          </Button>
        </nav>
      </header>

      {/* ────────────────────────  Hero  ──────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container max-w-6xl pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <SectionEyebrow>Your Finance Companion</SectionEyebrow>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              Take Control of Your{" "}
              <span className="text-gradient">Financial Future</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              FinSync helps you track expenses, manage budgets, settle IOUs and reach
              financial goals — all from a single, beautifully simple Android app.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PlayBadge />
              <Button asChild variant="outline" size="lg" className="rounded-full h-[58px] px-6">
                <a href="#features">
                  Explore Features <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <span>Trusted by early users on</span>
              <div className="flex items-center gap-5 opacity-70">
                <span className="font-semibold tracking-tight">Android</span>
                <span className="h-4 w-px bg-border" />
                <span className="font-semibold tracking-tight">Play Store</span>
                <span className="h-4 w-px bg-border" />
                <span className="font-semibold tracking-tight">Offline</span>
              </div>
            </div>
          </div>

          {/* Phone visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-10 gradient-hero rounded-[3rem] blur-3xl opacity-25" />
            <div
              className="relative rounded-[2.75rem] p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(160deg, hsl(35 40% 92%) 0%, hsl(250 60% 95%) 100%)",
              }}
            >
              <PhoneFrame src={screenHome} alt="FinSync home" width="w-[260px] md:w-[290px]" />

              {/* floating accents */}
              <div className="absolute -left-6 top-10 rounded-2xl bg-card border border-border shadow-card px-4 py-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">This month</p>
                  <p className="text-sm font-semibold">+₹ 22,500</p>
                </div>
              </div>
              <div className="absolute -right-4 bottom-12 rounded-2xl gradient-card text-primary-foreground shadow-glow px-4 py-3 flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Target className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Goal</p>
                  <p className="text-sm font-semibold">68% reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────  Features  ──────────────────────── */}
      <section id="features" className="py-24">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Powerful Features to Take Control of{" "}
              <span className="text-gradient">Your Finances</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Everything you need to manage money confidently — built into one Android app.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group flex flex-col rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                <div className="mt-6 rounded-2xl bg-secondary/60 p-4 flex items-center justify-center min-h-[180px] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="max-h-[200px] w-auto rounded-xl shadow-soft group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <a href="#how">
                See how it works <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ────────────────────────  3 Steps purple band  ──────────────────────── */}
      <section id="how" className="py-24">
        <div className="container max-w-6xl">
          <div className="rounded-[2.5rem] gradient-hero p-8 md:p-14 lg:p-16 text-primary-foreground shadow-glow relative overflow-hidden">
            <div className="absolute -top-24 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Phone */}
              <div className="flex justify-center">
                <PhoneFrame src={screenBudgets} alt="Budgets" width="w-[240px] md:w-[270px]" />
              </div>

              {/* Steps */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Manage Your Finances in <br /> 3 Simple Steps
                </h2>
                <ul className="mt-8 space-y-5">
                  {steps.map((s, i) => (
                    <li
                      key={s.title}
                      className="flex items-start gap-4 rounded-2xl bg-white/10 backdrop-blur px-5 py-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-primary font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold">{s.title}</p>
                        <p className="mt-1 text-sm opacity-90 leading-relaxed">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-primary hover:bg-white/90"
                  >
                    <a href="#download">
                      Get Started <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────  Trust grid  ──────────────────────── */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <SectionEyebrow>Why FinSync</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
              Why People Trust FinSync
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-10">
            {trust.map((t) => (
              <div key={t.title} className="text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <t.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────  Plans  ──────────────────────── */}
      <section id="plans" className="py-24">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Simple Plans for Everyone
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              FinSync is free. Pick the plan that matches how you manage money.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-8 border flex flex-col ${
                  p.highlight
                    ? "gradient-hero text-primary-foreground border-transparent shadow-glow scale-[1.02]"
                    : "bg-card text-foreground border-border shadow-card"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground text-background text-xs font-semibold px-3 py-1">
                    Recommended
                  </span>
                )}
                <p className={`text-sm font-semibold ${p.highlight ? "opacity-90" : "text-muted-foreground"}`}>
                  {p.name}
                </p>
                <p className="mt-3 text-5xl font-bold tracking-tight">{p.price}</p>
                <p className={`mt-2 text-sm ${p.highlight ? "opacity-90" : "text-muted-foreground"}`}>
                  {p.tagline}
                </p>

                <Button
                  asChild
                  className={`mt-6 rounded-full ${
                    p.highlight
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  <a href="#download">{p.cta}</a>
                </Button>

                <div className={`my-6 h-px ${p.highlight ? "bg-white/30" : "bg-border"}`} />

                <ul className="space-y-3 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                          p.highlight ? "bg-white/20" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className={p.highlight ? "" : "text-foreground/90"}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────  FAQ  ──────────────────────── */}
      <section id="faq" className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Everything you need to know about FinSync.
            </p>
          </div>

          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-5 shadow-card"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ────────────────────────  Final CTA  ──────────────────────── */}
      <section id="download" className="py-16">
        <div className="container max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] gradient-hero p-10 md:p-16 text-primary-foreground shadow-glow">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  Start Managing Your Finances with Confidence
                </h2>
                <p className="mt-4 text-lg opacity-90 max-w-md">
                  Download FinSync on Android today — free, private and beautifully simple.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <PlayBadge variant="light" />
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full h-[58px] px-6 border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
                  >
                    <a href="#features">Explore Features</a>
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="rotate-6">
                  <PhoneFrame src={screenSummary} alt="Monthly summary" width="w-[230px] md:w-[260px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────  Footer  ──────────────────────── */}
      <footer className="border-t border-border py-10">
        <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FinSync" className="h-7 w-auto" />
            <span>© {new Date().getFullYear()} FinSync. Your finance companion.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#plans" className="hover:text-foreground transition-colors">Plans</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="#download" className="hover:text-foreground transition-colors">Download</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
