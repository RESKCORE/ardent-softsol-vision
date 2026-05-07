import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, TrendingUp, Heart, Lightbulb, UserPlus, Gift, MapPin, Briefcase, Code2, Smartphone, ShieldCheck, Cloud, ArrowRight, Search } from "lucide-react";
import careerImg from "@/assets/career-briefcase.png";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: "Career — Ardent Softsol" },
      { name: "description", content: "Join Ardent Softsol and shape the future. Browse open roles in development, mobile, QA, and DevOps from our Surrey, BC office." },
      { property: "og:title", content: "Build Your Career at Ardent Softsol" },
    ],
  }),
  component: Career,
});

const jobs = [
  { icon: Code2, title: "Full Stack Developer", team: "Development Team", exp: "3-5 Years", loc: "Surrey, BC (Hybrid)", type: "Full-time", desc: "We are looking for a skilled Full Stack Developer to build scalable web applications and work with modern technologies." },
  { icon: Smartphone, title: "Mobile App Developer", team: "Development Team", exp: "2-4 Years", loc: "Surrey, BC (Hybrid)", type: "Full-time", desc: "Join our mobile team to develop high-quality Android and iOS applications that deliver exceptional user experiences." },
  { icon: ShieldCheck, title: "QA Automation Engineer", team: "QA Team", exp: "2-4 Years", loc: "Surrey, BC (Hybrid)", type: "Full-time", desc: "Ensure the quality and reliability of our products by designing and implementing automated test frameworks." },
  { icon: Cloud, title: "DevOps Engineer", team: "DevOps Team", exp: "3-5 Years", loc: "Surrey, BC (Hybrid)", type: "Full-time", desc: "Help us build and maintain scalable infrastructure and streamline deployment pipelines on cloud platforms." },
];

function Career() {
  const [q, setQ] = useState("");
  const filtered = jobs.filter((j) => j.title.toLowerCase().includes(q.toLowerCase()) || j.team.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex flex-col gap-10 pb-8">
      <PageHero
        eyebrow="Career With Us"
        title="Build Your Career."
        highlight="Shape the Future."
        description="Join Ardent Softsol and be part of a team that values innovation, collaboration, and growth. Let's build extraordinary solutions together."
        image={careerImg}
      >
        <div className="grid sm:grid-cols-3 gap-5 w-full">
          {[
            { icon: Users, t: "Great People", d: "Work with passionate and skilled professionals." },
            { icon: TrendingUp, t: "Grow Together", d: "Continuous learning and career development." },
            { icon: Heart, t: "Work-Life Balance", d: "We care for your well-being and personal time." },
          ].map((p) => (
            <div key={p.t} className="flex gap-3">
              <div className="icon-tile shrink-0"><p.icon className="size-5" /></div>
              <div>
                <h4 className="font-semibold text-sm">{p.t}</h4>
                <p className="text-xs text-muted-foreground mt-1">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Why work */}
      <section className="grid md:grid-cols-[1fr_2fr] gap-10 py-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold underline-accent">Why Work With Us</h2>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            We foster a culture of trust, transparency, and teamwork where you can do your best work and make a meaningful impact.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, t: "Innovative Projects", d: "Work on challenging projects that solve real-world problems." },
            { icon: TrendingUp, t: "Career Growth", d: "Opportunities to learn, upskill and advance." },
            { icon: UserPlus, t: "Inclusive Culture", d: "A supportive environment that values diversity." },
            { icon: Gift, t: "Competitive Benefits", d: "Health insurance, paid time off and more." },
          ].map((f) => (
            <div key={f.t} className="text-center">
              <div className="icon-tile mx-auto"><f.icon className="size-6" /></div>
              <h3 className="font-semibold mt-4">{f.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold underline-accent">Open Job Opportunities</h2>

        <div className="mt-8 panel p-4 grid md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-3 items-center">
          <div className="relative">
            <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by job title or keyword"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          {["All Departments", "All Locations", "Experience Level"].map((p) => (
            <select key={p} className="px-4 py-3 rounded-xl bg-background border border-border text-sm">
              <option>{p}</option>
            </select>
          ))}
          <button onClick={() => setQ("")} className="text-primary text-sm font-semibold px-3">Clear All</button>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {filtered.map((j) => (
            <div key={j.title} className="panel p-6 grid md:grid-cols-[auto_1fr_auto] gap-5 items-center">
              <div className="icon-tile !size-14"><j.icon className="size-6" /></div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-lg">{j.title}</h3>
                  <span className="text-xs bg-primary-soft text-primary px-2.5 py-1 rounded-full font-semibold">{j.exp}</span>
                  <span className="text-xs flex items-center gap-1 text-muted-foreground"><MapPin className="size-3.5" /> {j.loc}</span>
                  <span className="text-xs flex items-center gap-1 text-muted-foreground"><Briefcase className="size-3.5" /> {j.type}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{j.team}</p>
                <p className="text-sm mt-2 max-w-2xl">{j.desc}</p>
              </div>
              <button className="border-2 border-primary text-primary rounded-full px-5 py-2 text-sm font-semibold hover:bg-primary-soft transition">
                View Details
              </button>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No roles match your search.</p>}
        </div>
      </section>

      <section className="panel p-8 md:p-12 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
        <div className="icon-tile !size-16 !rounded-2xl"><UserPlus className="size-7" /></div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Don't see the right role?</p>
          <h3 className="text-2xl font-bold mt-2">We're Always Looking for Talent</h3>
          <p className="text-muted-foreground mt-2">Send us your resume and tell us how you can contribute to our team. We'd love to hear from you!</p>
        </div>
        <a href="mailto:info@ardentsoftsol.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition">
          Send Your Resume <ArrowRight className="size-4" />
        </a>
      </section>
    </div>
  );
}
