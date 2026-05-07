import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MapPin, Smartphone, Code2, ShieldCheck, Users, Cloud, Pencil, Headphones, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-code.png";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ardent Softsol — Crafting Innovative Tailored Software Solutions" },
      { name: "description", content: "Surrey, BC software development & consulting firm. Custom mobile, full-stack, QA testing and staff augmentation services that scale your business." },
      { property: "og:title", content: "Ardent Softsol — Tailored Software Solutions" },
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

function Home() {
  return (
    <div className="flex flex-col gap-8 pb-8">
      {/* Hero */}
      <section className="panel relative overflow-hidden p-8 md:p-14 grid lg:grid-cols-2 gap-10 items-center">
        <div className="dot-pattern absolute right-10 top-10 w-32 h-24 opacity-60" />
        <div className="dot-pattern absolute left-10 bottom-10 w-24 h-16 opacity-60" />
        <div className="relative z-10">
          <span className="pill">We are Ardent</span>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold mt-6 leading-[1.05]">
            Crafting Innovative<br />Tailored Software <span className="text-primary">Solutions</span>
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-6 text-sm font-semibold">
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
      <section className="panel p-8 md:p-12">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Trusted by businesses worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((c) => (
            <div key={c} className="text-center text-xl font-bold text-brand-ink/70 hover:text-primary transition">
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="grid md:grid-cols-2 gap-8 py-8">
        <div>
          <span className="pill">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-5 leading-tight">
            Building Technology That <span className="text-primary">Drives Real Impact</span>
          </h2>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Ardent Softsol is a software development and consulting firm committed to delivering
            scalable, secure, and innovative digital solutions for ambitious teams.
          </p>
          <p>
            We combine deep technical expertise with a client-first approach to help businesses
            transform ideas into powerful software products.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {["Client-focused approach", "Agile & transparent process", "Scalable solutions", "Long-term partnership"].map((i) => (
              <li key={i} className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="size-5 text-primary shrink-0" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold underline-accent">Our Core Services</h2>
          <p className="text-muted-foreground mt-6">
            From idea to deployment, we offer end-to-end solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="panel p-7 hover:shadow-lg hover:-translate-y-1 transition">
              <div className="icon-tile"><s.icon className="size-6" /></div>
              <h3 className="text-lg font-semibold mt-5">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="panel p-10 md:p-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "200+", l: "Businesses Served" },
            { n: "230+", l: "Projects Completed" },
            { n: "98%", l: "Client Satisfaction" },
            { n: "10+", l: "Years of Experience" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-bold text-primary">{s.n}</div>
              <div className="mt-2 text-sm font-semibold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center underline-accent mx-auto block w-fit">Our Process</h2>
        <p className="text-center text-muted-foreground mt-6 max-w-xl mx-auto">
          A streamlined process that ensures clarity, quality, and successful delivery of every project.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { n: "01", t: "Discover", d: "We understand your business and goals.", i: Pencil },
            { n: "02", t: "Plan", d: "We analyze and craft the right strategy.", i: ShieldCheck },
            { n: "03", t: "Develop", d: "We build with clean and efficient code.", i: Code2 },
            { n: "04", t: "Test", d: "We ensure quality through rigorous testing.", i: CheckCircle2 },
            { n: "05", t: "Deploy", d: "We deliver and support your success.", i: Cloud },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="icon-tile mx-auto"><s.i className="size-6" /></div>
              <div className="mt-4 font-bold">{s.n}. {s.t}</div>
              <p className="text-xs text-muted-foreground mt-2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="panel p-8 md:p-12 grid md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-8 items-center">
        <div className="flex items-center gap-5">
          <div className="icon-tile !size-16 !rounded-2xl"><Mail className="size-7" /></div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Get in touch</p>
            <h3 className="text-xl md:text-2xl font-bold mt-1">Let's Start a Conversation</h3>
          </div>
        </div>
        <ContactStripItem icon={<Phone className="size-5" />} label="Call Us" value="+1 (604) 401-2800" />
        <ContactStripItem icon={<Mail className="size-5" />} label="Email Us" value="info@ardentsoftsol.com" />
        <ContactStripItem icon={<MapPin className="size-5" />} label="Our Location" value="15464 96 Ave, Surrey, BC" />
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
        <p className="text-sm font-semibold text-primary">{label}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
