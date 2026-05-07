import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, Rocket, Headphones, Code2, Smartphone, Users } from "lucide-react";
import servicesImg from "@/assets/services-browser.png";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ardent Softsol" },
      { name: "description", content: "End-to-end software services: mobile apps, full-stack web, software testing, and staff augmentation tailored to your business goals." },
      { property: "og:title", content: "Solutions That Drive Your Business Forward" },
    ],
  }),
  component: Services,
});

const features = [
  { icon: Award, t: "Expert Team", d: "Skilled professionals with deep industry expertise." },
  { icon: ShieldCheck, t: "Quality Assured", d: "Industry-standard processes to ensure top-notch quality." },
  { icon: Rocket, t: "Timely Delivery", d: "Agile approach ensures on-time project delivery." },
  { icon: Headphones, t: "Ongoing Support", d: "Reliable maintenance and support whenever you need." },
];

const coreServices = [
  {
    icon: Smartphone,
    to: "/services/mobile",
    title: "Mobile Development",
    desc: "We build high-performance mobile applications for Android and iOS that deliver seamless user experiences and measurable business value.",
    items: ["Native Android Development", "iOS Development", "Cross-Platform Development", "UI/UX Design", "App Maintenance & Support"],
  },
  {
    icon: Code2,
    to: "/services/full-stack",
    title: "Software Development",
    desc: "We develop scalable, secure, and robust software solutions that streamline operations and accelerate growth.",
    items: ["Custom Web Application Development", "Enterprise Software Solutions", "Full-Stack Development", "API Development & Integration", "Legacy System Modernization"],
  },
  {
    icon: ShieldCheck,
    to: "/services/testing",
    title: "Software Testing",
    desc: "We ensure the functionality, performance, and security of your applications through our comprehensive testing services.",
    items: ["Manual Testing", "Automation Testing", "Performance Testing", "Security Testing", "QA Consulting"],
  },
  {
    icon: Users,
    to: "/services/staffing",
    title: "Staffing Services",
    desc: "Extend your internal team with the top 1% of vetted engineering, design, and QA talent — integrated seamlessly into your workflows.",
    items: ["Staff Augmentation", "Dedicated Teams", "Vetted Engineers", "Flexible Engagement", "Onboarding Support"],
  },
];

function Services() {
  return (
    <div className="flex flex-col gap-10 pb-8">
      <PageHero
        eyebrow="Our Services"
        title="Solutions That Drive Your"
        highlight="Business Forward"
        description="We design, build, and deliver high-quality digital solutions that help businesses innovate, scale, and stay ahead in a competitive world."
        image={servicesImg}
      />

      <section className="panel p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.t} className="flex gap-4">
            <div className="icon-tile shrink-0"><f.icon className="size-6" /></div>
            <div>
              <h3 className="font-semibold">{f.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold underline-accent">Our Core Services</h2>
          <p className="text-muted-foreground mt-6">
            From idea to deployment, we offer end-to-end solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((s) => (
            <div key={s.title} className="panel p-7 flex flex-col hover:shadow-xl transition">
              <div className="icon-tile"><s.icon className="size-6" /></div>
              <h3 className="text-xl font-bold mt-5">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="size-4 rounded-full bg-primary-soft text-primary inline-flex items-center justify-center">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <Link to={s.to} className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner eyebrow="Let's build something great" />
    </div>
  );
}
