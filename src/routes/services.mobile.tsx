import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/CtaBanner";
import { MobileIllustration } from "@/assets/illustrations";

export const Route = createFileRoute("/services/mobile")({
  head: () => ({
    meta: [
      { title: "Mobile Development — Ardent Softsol" },
      { name: "description", content: "Native Android, iOS, and cross-platform mobile development using Kotlin, Swift, React Native, Flutter and more." },
      { property: "og:title", content: "Mobile Development Services" },
    ],
  }),
  component: Mobile,
});

function Mobile() {
  return <ServiceDetail
    eyebrow="Mobile Development"
    title="Apps That People"
    highlight="Love To Use"
    intro="We build performant native and cross-platform mobile applications focused on smooth experiences, reliable architecture, and measurable business value."
    illustration={<MobileIllustration className="w-full max-w-sm" />}
    sections={[
      {
        title: "Android Development",
        body: "Modern Android apps built with Kotlin and Java on the latest Android SDK, optimized for performance, battery and Material Design.",
      },
      {
        title: "iOS Development",
        body: "Polished iOS experiences in Swift and Objective-C with a strong focus on security, accessibility, and Apple Human Interface Guidelines.",
      },
      {
        title: "Cross-Platform",
        body: "Ship faster across iOS and Android with React Native, Flutter, Xamarin or Ionic — one codebase, native-feeling apps.",
      },
    ]}
    deliverables={[
      "Product discovery workshop and roadmap",
      "UX flows, wireframes, and UI design",
      "Secure architecture and API integration",
      "App Store and Google Play release support",
      "Post-launch monitoring and iteration plan",
    ]}
    tech={[
      "Kotlin, Java, Swift, Objective-C",
      "React Native, Flutter, Xamarin, Ionic",
      "Firebase, GraphQL, REST APIs",
      "Appium, Fastlane, CI/CD automation",
    ]}
    outcomes={[
      { title: "Faster releases", body: "Streamlined delivery with weekly demos and QA checkpoints." },
      { title: "Stable performance", body: "Optimized for device, network, and battery constraints." },
      { title: "Higher retention", body: "UX-focused builds that keep users engaged and satisfied." },
    ]}
    process={[
      { t: "Define", d: "Articulate the problem and target outcomes." },
      { t: "Design", d: "Software architecture, UX flows, and visual design." },
      { t: "Develop", d: "Iterative implementation with weekly demos." },
      { t: "Test", d: "Defect identification, fixing, and release engineering." },
    ]}
  />;
}

export function ServiceDetail({
  eyebrow, title, highlight, intro, sections, deliverables, tech, outcomes, process, illustration,
}: {
  eyebrow: string; title: string; highlight: string; intro: string;
  sections: { title: string; body: string }[];
  deliverables?: string[];
  tech?: string[];
  outcomes?: { title: string; body: string }[];
  process: { t: string; d: string }[];
  illustration?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10 pb-8">
      <section className="panel p-10 md:p-14 relative overflow-hidden reveal">
        <div className="dot-pattern absolute right-10 top-10 w-32 h-24 opacity-60" />
        <div className="dot-pattern absolute left-10 bottom-10 w-24 h-16 opacity-40" />
        <div className={`relative z-10 grid gap-10 items-center ${illustration ? "md:grid-cols-2" : ""}`}>
          <div>
            <span className="pill font-poppins">{eyebrow}</span>
            <h1 className="font-display-premium text-3xl md:text-4xl lg:text-5xl mt-6 max-w-3xl leading-tight text-slide-up">
              {title} <span className="text-primary highlight-gradient">{highlight}</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed font-inter">{intro}</p>
          </div>
          {illustration && (
            <div className="hidden md:flex justify-end items-center text-foreground">
              {illustration}
            </div>
          )}
        </div>
      </section>

      <section className={`grid gap-6 reveal ${sections.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
        {sections.map((s, idx) => (
          <div key={s.title} className={`panel p-7 reveal reveal-delay-${(idx % (sections.length > 3 ? 4 : 3)) + 1}`}>
            <h3 className="font-bold text-lg font-poppins">{s.title}</h3>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed font-inter">{s.body}</p>
          </div>
        ))}
      </section>

      {(deliverables || tech) && (
        <section className="panel p-10 md:p-12 grid md:grid-cols-[1.1fr_1fr] gap-10 reveal">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">What you receive</p>
            <h2 className="font-display-premium text-2xl md:text-3xl mt-4 text-slide-up">Deliverables and Stack</h2>
            <p className="text-muted-foreground mt-5 leading-relaxed font-inter">
              We focus on clarity and readiness, so every engagement ends with clean documentation, working software,
              and a roadmap for the next phase.
            </p>
          </div>
          <div className="space-y-6">
            {deliverables && (
              <ul className="accent-list space-y-3 text-sm font-semibold font-poppins">
                {deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
            )}
            {tech && (
              <div className="grid sm:grid-cols-2 gap-4">
                {tech.map((t, idx) => (
                  <div key={t} className={`content-card p-4 text-sm font-semibold font-poppins reveal reveal-delay-${(idx % 4) + 1}`}>
                    {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {outcomes && (
        <section className="py-6 reveal">
          <h2 className="font-display-premium text-3xl md:text-4xl underline-accent text-slide-up">Expected Outcomes</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((o, idx) => (
              <div key={o.title} className={`panel p-6 reveal reveal-delay-${(idx % 3) + 1}`}>
                <h3 className="font-semibold font-poppins">{o.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inter">{o.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="py-6 reveal">
        <h2 className="font-display-premium text-3xl md:text-4xl underline-accent text-slide-up">Our Process</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.t} className={`panel p-6 reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="text-primary font-bold text-sm">0{i + 1}</div>
              <h3 className="font-semibold mt-2 font-poppins">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 font-inter">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
