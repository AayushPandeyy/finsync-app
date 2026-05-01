import logo from "@/assets/finsync-logo.png";
import screenHome from "@/assets/screen-home.jpg";
import screenBudgets from "@/assets/screen-budgets.jpg";
import screenSummary from "@/assets/screen-summary.jpg";
import { Button } from "@/components/ui/button";
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
  Star,
  Shield,
  Sparkles,
} from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Income & Expense Tracking", desc: "Categorize every transaction so you always know where your money goes." },
  { icon: PieChart, title: "Budget Tracking", desc: "Set daily, weekly and monthly limits and get alerts before you overspend." },
  { icon: Users, title: "IOUs Made Simple", desc: "Track who owes you and who you owe — never forget a debt again." },
  { icon: Target, title: "Financial Goals", desc: "Save for what matters and watch your progress in real time." },
  { icon: BarChart3, title: "Powerful Analytics", desc: "Beautiful charts that turn raw numbers into clear insights." },
  { icon: Wallet, title: "Multiple Wallets", desc: "Cash, bank, savings — manage every account in one place." },
  { icon: ArrowLeftRight, title: "Wallet Transfers", desc: "Move money between wallets instantly with one tap." },
  { icon: CalendarRange, title: "Monthly Summary", desc: "A clean snapshot of your income, expenses and net balance each month." },
];

const PlayBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="#"
    className={`inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition-all hover:scale-105 hover:shadow-glow ${className}`}
    aria-label="Get FinSync on Google Play"
  >
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
      <path d="M3.6 1.6a2 2 0 0 0-1 1.74v17.32a2 2 0 0 0 1 1.74L13.5 12 3.6 1.6Z" fill="#34A853"/>
      <path d="M17.4 8.1 13.5 12l3.9 3.9 3.4-1.97a2 2 0 0 0 0-3.86L17.4 8.1Z" fill="#FBBC04"/>
      <path d="M3.6 1.6 13.5 12l3.9-3.9L4.6 1.06A2 2 0 0 0 3.6 1.6Z" fill="#EA4335"/>
      <path d="M3.6 22.4a2 2 0 0 0 1 .54L17.4 15.9 13.5 12 3.6 22.4Z" fill="#4285F4"/>
    </svg>
    <span className="flex flex-col items-start leading-tight">
      <span className="text-[10px] uppercase tracking-wider opacity-80">Get it on</span>
      <span className="text-lg font-semibold">Google Play</span>
    </span>
  </a>
);

const PhoneFrame = ({
  src,
  alt,
  width = "w-[260px]",
  rotate = "",
  featured = false,
}: {
  src: string;
  alt: string;
  width?: string;
  rotate?: string;
  featured?: boolean;
}) => (
  <div className={`relative ${rotate}`}>
    <div className={`absolute -inset-3 gradient-hero rounded-[3rem] blur-2xl ${featured ? "opacity-60" : "opacity-40"}`} />
    <div
      className={`relative ${width} rounded-[2.5rem] bg-foreground p-[6px] shadow-glow`}
      style={{ boxShadow: featured ? "0 40px 90px -20px hsl(250 70% 40% / 0.55), inset 0 0 0 1px hsl(0 0% 100% / 0.08)" : "0 25px 60px -20px hsl(250 60% 30% / 0.45), inset 0 0 0 1px hsl(0 0% 100% / 0.06)" }}
    >
      <div className="relative overflow-hidden rounded-[2.1rem] bg-background">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-20 rounded-full bg-foreground" />
        <img src={src} alt={alt} className="block w-full h-auto" />
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/50">
        <nav className="container flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="FinSync logo" className="h-9 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#screens" className="hover:text-foreground transition-colors">Screens</a>
            <a href="#why" className="hover:text-foreground transition-colors">Why FinSync</a>
          </div>
          <Button asChild size="sm" className="rounded-full">
            <a href="#download">Download</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-soft">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

        <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Your Finance Companion
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Take control of <span className="text-gradient">every rupee.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              FinSync helps you track expenses, manage budgets, settle IOUs and reach financial goals — all from a single, beautifully simple Android app.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PlayBadge />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                Loved by early users
              </div>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Free to download</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> Private & secure</div>
            </div>
          </div>

          {/* Phone mockups */}
          <div className="relative h-[600px] lg:h-[680px] flex items-center justify-center lg:ml-8">
            {/* Backdrop glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-[420px] w-[420px] rounded-full gradient-hero blur-3xl opacity-50" />
            </div>
            {/* Decorative grid dots */}
            <div
              className="absolute inset-0 opacity-[0.18] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              }}
            />

            {/* Left phone */}
            <div className="absolute left-1/2 top-1/2 -translate-x-[calc(50%+140px)] -translate-y-[calc(50%-10px)] animate-float-delayed">
              <PhoneFrame src={screenBudgets} alt="FinSync budgets" rotate="-rotate-[10deg]" width="w-[210px] md:w-[230px]" />
            </div>

            {/* Right phone */}
            <div className="absolute left-1/2 top-1/2 -translate-x-[calc(50%-140px)] -translate-y-[calc(50%-10px)] animate-float-delayed" style={{ animationDelay: "2s" }}>
              <PhoneFrame src={screenSummary} alt="FinSync summary" rotate="rotate-[10deg]" width="w-[210px] md:w-[230px]" />
            </div>

            {/* Center phone (front) */}
            <div className="relative z-20 animate-float">
              <PhoneFrame src={screenHome} alt="FinSync home" width="w-[260px] md:w-[290px]" featured />
            </div>

            {/* Floating UI accents */}
            <div className="absolute top-12 left-4 md:left-2 z-30 animate-float" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-3 rounded-2xl bg-card/95 backdrop-blur border border-border shadow-card px-4 py-3">
                <div className="h-9 w-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">This month</p>
                  <p className="text-sm font-semibold">+₹ 22,500</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 right-2 md:right-0 z-30 animate-float-delayed" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3 rounded-2xl gradient-card text-primary-foreground shadow-glow px-4 py-3">
                <div className="h-9 w-9 rounded-xl bg-white/20 flex items-center justify-center">
                  <Target className="h-4 w-4" />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] uppercase tracking-wider opacity-80">Goal</p>
                  <p className="text-sm font-semibold">68% reached</p>
                </div>
              </div>
            </div>

            <div className="absolute top-24 right-6 z-30 animate-float" style={{ animationDelay: "2.4s" }}>
              <div className="rounded-full bg-card/95 backdrop-blur border border-border shadow-card px-3 py-1.5 flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs font-medium">On track</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / trust strip */}
      <section className="border-y border-border bg-background">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {[
            { v: "8+", l: "Powerful features" },
            { v: "100%", l: "Offline-first" },
            { v: "0₹", l: "To get started" },
            { v: "Android", l: "Available now" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">master your money</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One app for every part of your financial life — no spreadsheets, no clutter.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screens showcase */}
      <section id="screens" className="py-24 bg-secondary/40">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">A closer look</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Designed to feel effortless</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Bold gradients, friendly cards and clear numbers. Every screen tells you exactly what you need to know.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { src: screenHome, title: "Dashboard", desc: "Your wallets, balance and recent activity at a glance." },
              { src: screenBudgets, title: "Budgets", desc: "Daily, weekly and monthly limits with progress rings." },
              { src: screenSummary, title: "Monthly Summary", desc: "Net balance, income vs expense, and goal progress." },
            ].map((s) => (
              <div key={s.title} className="text-center">
                <div className="relative inline-block">
                  <div className="absolute -inset-4 gradient-hero rounded-[2.5rem] blur-2xl opacity-30" />
                  <img
                    src={s.src}
                    alt={s.title}
                    className="relative w-full max-w-[280px] mx-auto rounded-[2rem] border-[6px] border-foreground/90 shadow-card"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FinSync */}
      <section id="why" className="py-24 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why FinSync</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              Less spreadsheets. <br /> <span className="text-gradient">More clarity.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              FinSync was built for people who want a real handle on their finances without the friction of complicated tools.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Beautiful, gradient-driven UI that's a joy to use daily",
                "Track multiple wallets and transfer between them",
                "Smart budgets warn you before you overspend",
                "Settle debts with friends using built-in IOUs",
                "Monthly summaries you'll actually want to read",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 gradient-hero rounded-[2.5rem] blur-3xl opacity-30" />
            <div className="relative rounded-3xl gradient-card p-8 md:p-10 shadow-glow text-primary-foreground overflow-hidden">
              <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/10" />
              <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10" />
              <div className="relative">
                <p className="text-sm opacity-80">Total Balance</p>
                <p className="mt-1 text-5xl font-bold">₹ 15,000</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/15 backdrop-blur p-4">
                    <p className="text-xs opacity-80">Income</p>
                    <p className="text-2xl font-semibold mt-1">₹ 22,500</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 backdrop-blur p-4">
                    <p className="text-xs opacity-80">Expense</p>
                    <p className="text-2xl font-semibold mt-1">₹ 7,500</p>
                  </div>
                </div>
                <div className="mt-6 h-2 w-full rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-1/3 bg-white rounded-full" />
                </div>
                <p className="mt-3 text-xs opacity-80">33% of monthly budget used</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 md:p-20 text-center text-primary-foreground shadow-glow">
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ready to sync your finances?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Download FinSync on Android today. iOS coming soon.
              </p>
              <div className="mt-8 flex justify-center">
                <PlayBadge />
              </div>
              <p className="mt-6 text-sm opacity-75">Available on Android · Free download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img src={logo} alt="FinSync" className="h-7 w-auto" />
            <span>© {new Date().getFullYear()} FinSync. Your finance companion.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#download" className="hover:text-foreground transition-colors">Download</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
