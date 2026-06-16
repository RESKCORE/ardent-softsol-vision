import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, Rocket, Headphones, Code2, Smartphone, Users } from "lucide-react";
import servicesImg from "@/assets/services-browser.png";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Ardent Softsol" },
      { name: "description", content: "End-to-end software services: mobile apps, full-stack web, software testing, and staff augmentation tailored to your business goals." },
      { name: "keywords", content: "software development services, mobile app development, full-stack development, software testing services, IT staff augmentation, custom software solutions Canada" },
      { property: "og:title", content: "Solutions That Drive Your Business Forward" },
      { property: "og:description", content: "Explore Ardent Softsol's full range of software services: mobile, full-stack, QA testing, and staff augmentation." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
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

const deliverySteps = [
  {
    title: "Discovery and alignment",
    body: "We run workshops to align on goals, risks, and the technical roadmap before implementation.",
  },
  {
    title: "Design and architecture",
    body: "UX flows, system design, and security considerations are defined to reduce rework later.",
  },
  {
    title: "Build and validate",
    body: "Agile sprints with demos, QA, and stakeholder reviews keep delivery on track.",
  },
  {
    title: "Launch and scale",
    body: "We support deployment, monitoring, and optimization after release.",
  },
];

const techStack = [
  "React, Angular, Vue",
  "Node.js, Python, Ruby on Rails",
  "Kotlin, Swift, Flutter",
  "PostgreSQL, MySQL, MongoDB",
  "AWS, GCP, Azure",
  "Cypress, Playwright, Appium",
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
        imageAlt="Software services overview illustration"
      />

      <section className="panel p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
        {features.map((f, idx) => (
          <div key={f.t} className={`flex gap-4 reveal reveal-delay-${(idx % 4) + 1}`}>
            <div className="icon-tile shrink-0"><f.icon className="size-6" /></div>
            <div>
              <h3 className="font-semibold font-poppins">{f.t}</h3>
              <p className="text-sm text-muted-foreground mt-1 font-inter">{f.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="reveal">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Our Core Services</h2>
          <p className="text-muted-foreground mt-6 font-inter">
            From idea to deployment, we offer end-to-end solutions tailored to your unique business needs.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {coreServices.map((s, idx) => (
            <div key={s.title} className={`panel p-7 flex flex-col hover:shadow-xl transition reveal reveal-delay-${(idx % 2) + 1}`}>
              <div className="icon-tile"><s.icon className="size-6" /></div>
              <h3 className="text-xl font-bold mt-5 font-poppins">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed font-inter">{s.desc}</p>
              <ul className="mt-5 space-y-2.5 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 font-inter">
                    <span className="size-4 rounded-full bg-primary-soft text-primary inline-flex items-center justify-center">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <Link to={s.to} className="mt-6 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all nav-item-hover">
                Learn more <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="panel p-10 md:p-12 reveal">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">Our delivery model</p>
            <h2 className="font-display-premium text-2xl md:text-3xl mt-4 text-slide-up">Structured. Transparent. Reliable.</h2>
            <p className="text-muted-foreground mt-6 leading-relaxed font-inter">
              Every engagement follows a proven delivery system designed to reduce risk, improve quality, and provide
              clear visibility across stakeholders.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {deliverySteps.map((s, idx) => (
              <div key={s.title} className={`content-card p-6 reveal reveal-delay-${(idx % 4) + 1}`}>
                <h3 className="font-semibold font-poppins">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inter">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 reveal">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Technology We Use</h2>
            <p className="text-muted-foreground mt-6 leading-relaxed font-inter">
              We select modern, proven technologies that align with your security, scalability, and maintenance goals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {techStack.map((t, idx) => (
              <div key={t} className={`content-card p-4 text-sm font-semibold font-poppins reveal reveal-delay-${(idx % 4) + 1}`}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner eyebrow="Let's build something great" />
    </div>
  );
}
