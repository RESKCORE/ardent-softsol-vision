import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MapPin, Smartphone, Code2, ShieldCheck, Users, Cloud, Pencil, Headphones, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-code.png";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ardent Softsol — Crafting Innovative Tailored Software Solutions" },
      { name: "description", content: "Vancouver, BC software development & consulting firm. Custom mobile, full-stack, QA testing and staff augmentation services that scale your business." },
      { name: "keywords", content: "software development Vancouver BC, custom software solutions, mobile app development, full-stack development, software testing, staff augmentation, IT consulting Canada" },
      { property: "og:title", content: "Ardent Softsol — Tailored Software Solutions" },
      { property: "og:description", content: "From concept to execution, we engineer custom software that delivers efficiency, agility and unmatched performance." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const clients = ["Deloitte", "Spinwheel", "Blue Cross", "FedEx", "SideKick", "PayByPhone"];

const services = [
  { icon: Smartphone, title: "Mobile Development", desc: "Native iOS, Android & cross-platform apps that delight users." },
  { icon: Code2, title: "Full-Stack Development", desc: "Scalable, secure web platforms from frontend to cloud." },
  { icon: ShieldCheck, title: "Software Testing", desc: "End-to-end QA — manual, automation, performance & API." },
  { icon: Users, title: "Staffing Services", desc: "Top 1% engineering talent that integrates with your team." },
];

const industries = [
  "Fintech and Payments",
  "Logistics and Supply Chain",
  "Healthcare and Wellness",
  "Retail and Ecommerce",
  "Public Sector and Education",
  "SaaS and B2B Platforms",
];

const engagementModels = [
  {
    title: "Discovery to Delivery",
    desc: "Strategy, UX, and engineering in one aligned team with predictable milestones and proactive risk management.",
  },
  {
    title: "Dedicated Teams",
    desc: "Long-term squads embedded in your workflow to build, iterate, and optimize on an ongoing roadmap.",
  },
  {
    title: "Staff Augmentation",
    desc: "Add senior engineers, QA, or designers quickly with vetted talent and clear accountability.",
  },
];

const caseStudies = [
  {
    title: "Logistics Platform Modernization",
    outcome: "Reduced dispatch time by 38% with a real-time operations dashboard and automated workflows.",
    focus: "System redesign, API consolidation, and performance tuning.",
  },
  {
    title: "Fintech Mobile Experience",
    outcome: "Increased monthly active users by 26% after a UX overhaul and stability improvements.",
    focus: "Cross-platform build, secure authentication, and analytics.",
  },
  {
    title: "Enterprise QA Acceleration",
    outcome: "Cut release cycles from 4 weeks to 10 days with automation and CI/CD integration.",
    focus: "Automation strategy, regression suite, and test data management.",
  },
];

const faqs = [
  {
    q: "How do you keep projects on schedule?",
    a: "We use a clear delivery plan, weekly milestones, and transparent progress reporting so stakeholders always know the next step.",
  },
  {
    q: "Can you work with our existing team and stack?",
    a: "Yes. We integrate into your tools and processes and align with your preferred tech stack and deployment practices.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Most projects start with discovery, followed by design and development sprints, then QA and launch with ongoing support.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. We offer monitoring, maintenance, and continuous improvement plans tailored to your needs.",
  },
];

function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Hero */}
      <section className="panel relative overflow-hidden p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center reveal">
        <div className="dot-pattern absolute right-10 top-10 w-32 h-24 opacity-60" />
        <div className="dot-pattern absolute left-10 bottom-10 w-24 h-16 opacity-60" />
        <div className="relative z-10">
          <span className="pill animate-pulse">We are Ardent</span>
          <h1 className="font-display-premium text-3xl md:text-4xl lg:text-5xl mt-6 leading-[1.05] text-slide-up">
            Crafting Innovative<br />Tailored Software <span className="text-primary highlight-gradient">Solutions</span>
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-6 text-sm font-semibold font-poppins">
            <span className="text-primary">IT</span>
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-brand-ink">DEVELOPMENT</span>
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-primary">INNOVATION</span>
          </div>
          <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-lg leading-relaxed">
            From concept to execution, we engineer custom solutions to fit your unique needs,
            delivering efficiency, agility, and unmatched performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 font-semibold hover:opacity-90 transition shadow-sm">
              Get Started <ArrowRight className="size-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-primary text-primary rounded-full px-7 py-3.5 font-semibold hover:bg-primary-soft transition">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <img src={heroImg} alt="Ardent Softsol coding illustration" className="w-full max-w-lg h-auto" />
        </div>
      </section>

      {/* Clients */}
      <section className="panel p-8 md:p-12 overflow-hidden reveal">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Trusted by businesses worldwide
        </p>
        <div className="marquee-wrapper mt-8">
          <div className="marquee-track items-center py-4">
            {[...clients, ...clients].map((c, i) => (
              <div key={`${c}-${i}`} className="shrink-0 text-center text-xl font-bold text-brand-ink/70 hover:text-primary transition select-none">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="grid md:grid-cols-2 gap-8 py-8 reveal">
        <div>
          <span className="pill">About Us</span>
          <h2 className="font-display-premium text-2xl md:text-3xl mt-5 leading-tight text-slide-up">
            Building Technology That <span className="text-primary highlight-gradient">Drives Real Impact</span>
          </h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed font-inter">
          <p className="fade-in-slow">
            Ardent Softsol is a software development and consulting firm committed to delivering
            scalable, secure, and innovative digital solutions for ambitious teams.
          </p>
          <p className="fade-in-delayed">
            We combine deep technical expertise with a client-first approach to help businesses
            transform ideas into powerful software products.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {["Client-focused approach", "Agile & transparent process", "Scalable solutions", "Long-term partnership"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-foreground fade-in-slow">
                <CheckCircle2 className="size-5 text-primary shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-8 reveal">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Our Core Services</h2>
          <p className="text-muted-foreground mt-6 font-poppins">
            From idea to deployment, we offer end-to-end solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <div key={s.title} className={`panel p-7 hover:shadow-lg hover:-translate-y-1 transition reveal reveal-delay-${(idx % 4) + 1}`}>
              <div className="icon-tile"><s.icon className="size-6" /></div>
              <h3 className="text-lg font-semibold mt-5 font-poppins">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-inter">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel p-10 md:p-12 reveal">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">Industries we serve</p>
            <h2 className="font-display-premium text-2xl md:text-3xl mt-4 leading-tight text-slide-up">
              Domain Expertise That
              <span className="text-primary highlight-gradient"> Accelerates Results</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed font-inter">
              We bring sector-specific insight to every build, shaping product strategy, compliance, and user experience
              around real operational needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {industries.map((i, idx) => (
              <div key={i} className={`content-card p-4 text-sm font-semibold font-poppins reveal reveal-delay-${(idx % 4) + 1}`}>
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 reveal">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Engagement Models</h2>
            <p className="text-muted-foreground mt-6 leading-relaxed font-inter">
              Choose a collaboration style that fits your timeline, budget, and internal capacity. We stay flexible while
              maintaining accountability and measurable outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {engagementModels.map((m, idx) => (
              <div key={m.title} className={`panel p-6 reveal reveal-delay-${(idx % 3) + 1} hover:shadow-lg transition`}>
                <h3 className="font-semibold text-lg font-poppins">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inter">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="panel p-10 md:p-14 reveal">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "200+", l: "Businesses Served" },
            { n: "230+", l: "Projects Completed" },
            { n: "98%", l: "Client Satisfaction" },
            { n: "7+", l: "Years of Experience" },
          ].map((s) => (
            <div key={s.l} className="text-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-primary font-display-light">{s.n}</div>
              <div className="mt-2 text-sm font-semibold font-poppins">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-8 reveal">
        <h2 className="font-display-premium text-2xl md:text-3xl text-center underline-accent mx-auto block w-fit text-slide-up">Our Process</h2>
        <p className="text-center text-muted-foreground mt-6 max-w-xl mx-auto font-inter">
          A streamlined process that ensures clarity, quality, and successful delivery of every project.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { n: "01", t: "Discover", d: "We understand your business and goals.", i: Pencil },
            { n: "02", t: "Plan", d: "We analyze and craft the right strategy.", i: ShieldCheck },
            { n: "03", t: "Develop", d: "We build with clean and efficient code.", i: Code2 },
            { n: "04", t: "Test", d: "We ensure quality through rigorous testing.", i: CheckCircle2 },
            { n: "05", t: "Deploy", d: "We deliver and support your success.", i: Cloud },
          ].map((s, idx) => (
            <div key={s.n} className={`text-center reveal reveal-delay-${(idx % 5) + 1}`}>
              <div className="icon-tile mx-auto"><s.i className="size-6" /></div>
              <div className="mt-4 font-bold font-poppins">{s.n}. {s.t}</div>
              <p className="text-xs text-muted-foreground mt-2 font-inter">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="panel p-8 md:p-12 grid md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 items-center reveal">
        <div className="flex items-center gap-5">
          <div className="icon-tile !size-16 !rounded-2xl"><Mail className="size-7" /></div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase font-poppins">Get in touch</p>
            <h3 className="font-display-premium text-xl md:text-2xl mt-1">Let's Start a Conversation</h3>
          </div>
        </div>
        <ContactStripItem icon={<Phone className="size-5" />} label="Call Us" value="+1 (604) 401-2800" />
        <ContactStripItem icon={<Mail className="size-5" />} label="Email Us" value="info@ardentsoftsol.com" />
        <ContactStripItem icon={<MapPin className="size-5" />} label="Our Location" value="3665 Kingsway, unit 300, Vancouver, BC" />
      </section>

      <section className="panel p-10 md:p-12 reveal">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">Case study highlights</p>
            <h2 className="font-display-premium text-2xl md:text-3xl mt-4 text-slide-up">Real Outcomes, Measurable Impact</h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary rounded-full px-6 py-3 font-semibold hover:bg-primary-soft transition btn-premium-hover"
          >
            Discuss a project <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {caseStudies.map((c, idx) => (
            <div key={c.title} className={`content-card p-6 reveal reveal-delay-${(idx % 3) + 1} hover:shadow-lg transition`}>
              <h3 className="font-semibold text-lg font-poppins">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inter">{c.focus}</p>
              <p className="text-sm font-semibold mt-4 font-poppins">{c.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 reveal">
        <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Frequently Asked Questions</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {faqs.map((f, idx) => (
            <div key={f.q} className={`panel p-6 reveal reveal-delay-${(idx % 4) + 1} hover:shadow-md transition`}>
              <h3 className="font-semibold font-poppins">{f.q}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-inter">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function ContactStripItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="icon-tile">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-primary font-poppins">{label}</p>
        <p className="text-sm text-muted-foreground font-inter">{value}</p>
      </div>
    </div>
  );
}
