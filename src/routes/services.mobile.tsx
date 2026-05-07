import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";

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
    process={[
      { t: "Define", d: "Articulate the problem and target outcomes." },
      { t: "Design", d: "Software architecture, UX flows, and visual design." },
      { t: "Develop", d: "Iterative implementation with weekly demos." },
      { t: "Test", d: "Defect identification, fixing, and release engineering." },
    ]}
  />;
}

export function ServiceDetail({
  eyebrow, title, highlight, intro, sections, process,
}: {
  eyebrow: string; title: string; highlight: string; intro: string;
  sections: { title: string; body: string }[];
  process: { t: string; d: string }[];
}) {
  return (
    <div className="flex flex-col gap-10 pb-8">
      <section className="panel p-10 md:p-14 relative overflow-hidden">
        <div className="dot-pattern absolute right-10 top-10 w-32 h-24 opacity-60" />
        <span className="pill">{eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-6 max-w-3xl leading-tight">
          {title} <span className="text-primary">{highlight}</span>
        </h1>
        <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">{intro}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {sections.map((s) => (
          <div key={s.title} className="panel p-7">
            <h3 className="font-bold text-lg">{s.title}</h3>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>

      <section className="py-6">
        <h2 className="text-3xl md:text-4xl font-bold underline-accent">Our Process</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.t} className="panel p-6">
              <div className="text-primary font-bold text-sm">0{i + 1}</div>
              <h3 className="font-semibold mt-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
