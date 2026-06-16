import { createFileRoute } from "@tanstack/react-router";
import { Eye, Flag, Gem, CheckCircle2, Code2, Smartphone, Cloud, Pencil, ShieldCheck, Headphones } from "lucide-react";
import aboutImg from "@/assets/about-target.png";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ardent Softsol" },
      { name: "description", content: "Learn how Ardent Softsol partners with businesses to build scalable, secure, and innovative digital products from our Surrey, BC headquarters." },
      { name: "keywords", content: "about Ardent Softsol, software company Surrey BC, custom software development firm, software consulting Canada" },
      { property: "og:title", content: "About Ardent Softsol" },
      { property: "og:description", content: "We innovate code solutions — a client-first software firm building technology that drives real business impact." },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: About,
});

const culturePrinciples = [
  {
    title: "Client-first partnership",
    body: "We work as an extension of your team, aligning on goals, timelines, and success metrics from day one.",
  },
  {
    title: "Outcome-driven execution",
    body: "Every sprint focuses on measurable impact, not just outputs, with clear reporting and review cycles.",
  },
  {
    title: "Quality by design",
    body: "Security, accessibility, and performance are built into every layer of our delivery process.",
  },
];

const locations = [
  "15464 96 Ave, Surrey, BC V3R1G5, Canada",
  "Unit 1, 10318 Whalley Blvd, Surrey, BC",
];

function About() {
  return (
    <div className="flex flex-col gap-10 pb-8">
      <PageHero
        eyebrow="About Us"
        title="Building Technology"
        highlight="That Drives Real Impact"
        description="Ardent Softsol is a software development and consulting firm committed to delivering scalable, secure, and innovative digital solutions. We combine deep technical expertise with a client-first approach to help businesses transform ideas into powerful software products."
        image={aboutImg}
        imageAlt="Ardent Softsol team planning a solution"
      >
        <ul className="space-y-3">
          {["Client-focused approach", "Agile and transparent processes", "High-quality and scalable solutions", "Long-term partnership and support"].map((i) => (
            <li key={i} className="flex items-center gap-3 text-foreground font-medium font-poppins">
              <CheckCircle2 className="size-5 text-primary" /> {i}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Mission */}
      <section className="grid md:grid-cols-[1fr_1.2fr] gap-10 py-8 reveal">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">Our Mission</p>
          <h2 className="font-display-premium text-2xl md:text-3xl mt-3 leading-tight text-slide-up">Empowering Businesses Through Innovation</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed self-end font-inter">
          Our mission is to provide scalable solutions that transform businesses. We strive to maintain
          the highest standard of excellence in quality through innovation, teamwork, and transparency —
          building lasting partnerships with every client we serve.
        </p>
      </section>

      <section className="panel p-10 grid md:grid-cols-3 gap-8 reveal">
        {[
          { icon: Eye, t: "Our Vision", d: "To be a global leader in providing the highest level of IT solutions and services to clients across industries." },
          { icon: Flag, t: "Our Mission", d: "To deliver innovative, reliable, and cost-effective technology solutions that drive business growth." },
          { icon: Gem, t: "Our Values", d: "Integrity, innovation, accountability, and collaboration are the core values that guide everything we do." },
        ].map((v, idx) => (
          <div key={v.t} className={`reveal reveal-delay-${(idx % 3) + 1}`}>
            <div className="icon-tile"><v.icon className="size-6" /></div>
            <h3 className="font-semibold text-lg mt-5 font-poppins">{v.t}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-inter">{v.d}</p>
          </div>
        ))}
      </section>

      {/* Numbers */}
      <section className="py-6 reveal">
        <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Our Journey in Numbers</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "200+", l: "Businesses Served", d: "We have helped businesses of all sizes accelerate growth." },
            { n: "230+", l: "Projects Completed", d: "Successful projects delivered across diverse industries." },
            { n: "98%", l: "Client Satisfaction", d: "Our clients trust us for quality and long-term partnership." },
            { n: "7+", l: "Years of Experience", d: "A decade of delivering innovation and excellence." },
          ].map((s, idx) => (
            <div key={s.l} className={`text-scale-in reveal reveal-delay-${(idx % 4) + 1}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary font-display-light">{s.n}</div>
              <div className="mt-2 font-semibold font-poppins">{s.l}</div>
              <p className="text-sm text-muted-foreground mt-2 font-inter">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-6 reveal">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">What we do best</p>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 mt-3">
          <h2 className="font-display-premium text-2xl md:text-3xl leading-tight text-slide-up">Expertise Across Technologies</h2>
          <p className="text-muted-foreground leading-relaxed self-end font-inter">
            We work with a wide range of technologies and modern tools to build robust, future-ready,
            and high-performing applications tailored to your business needs.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Code2, t: "Web Development", d: "Modern, responsive, and scalable web applications using the latest frameworks and technologies." },
            { icon: Smartphone, t: "Mobile App Development", d: "High-performance mobile apps for Android and iOS that deliver seamless user experiences." },
            { icon: Cloud, t: "Cloud & DevOps", d: "Streamlined deployment, automation, and cloud solutions to accelerate your business operations." },
            { icon: Pencil, t: "UI/UX Design", d: "User-centered designs that are intuitive, engaging, and aligned with your business goals." },
            { icon: ShieldCheck, t: "Software Testing", d: "Comprehensive testing services to ensure performance, security, and reliability." },
            { icon: Headphones, t: "Maintenance & Support", d: "Ongoing support and maintenance to keep your applications secure and running smoothly." },
          ].map((e, idx) => (
            <div key={e.t} className={`panel p-7 hover:shadow-lg transition reveal reveal-delay-${(idx % 3) + 1}`}>
              <div className="icon-tile"><e.icon className="size-6" /></div>
              <h3 className="font-semibold mt-5 font-poppins">{e.t}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-inter">{e.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel p-10 md:p-12 grid md:grid-cols-[1.1fr_1fr] gap-10 reveal">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">How we work</p>
          <h2 className="font-display-premium text-2xl md:text-3xl mt-4 text-slide-up">A Culture Built for Delivery</h2>
          <p className="text-muted-foreground mt-5 leading-relaxed font-inter">
            Our leadership team combines engineering depth with a consultative mindset. We prioritize clarity, ownership,
            and empathy to build long-term partnerships and high-performing teams.
          </p>
        </div>
        <div className="space-y-4">
          {culturePrinciples.map((c) => (
            <div key={c.title} className="content-card p-5">
              <h3 className="font-semibold text-lg font-poppins">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inter">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 reveal">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Our Locations</h2>
            <p className="text-muted-foreground mt-6 leading-relaxed font-inter">
              We are headquartered in Surrey, British Columbia with a growing presence across North America and global
              delivery partnerships.
            </p>
          </div>
          <ul className="accent-list space-y-4 text-sm font-semibold font-poppins">
            {locations.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
