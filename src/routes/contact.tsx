import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Users, ShieldCheck, Phone, Mail, MapPin, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import contactImg from "@/assets/contact-envelope.png";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ardent Softsol" },
      { name: "description", content: "Reach Ardent Softsol in Surrey, BC. Call +1 (604) 401-2800 or email info@ardentsoftsol.com to start your project." },
      { property: "og:title", content: "Let's Build Something Great Together" },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "How quickly will I get a response?", a: "We typically respond to all inquiries within 24 business hours, often much sooner." },
  { q: "Do you offer free consultations?", a: "Yes — we offer a free 30-minute consultation to discuss your project and explore how we can help." },
  { q: "What types of projects do you work on?", a: "We build custom mobile apps, full-stack web platforms, QA suites, and provide vetted engineering talent for teams of every size." },
  { q: "How do I start a project with you?", a: "Send us a message via the form, email, or phone. We'll set up a discovery call and share a tailored proposal within a few days." },
];

function Contact() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col gap-10 pb-8">
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Build Something"
        highlight="Great Together"
        description="Have a project in mind or need expert advice? We'd love to hear from you. Reach out to us and our team will get back to you shortly."
        image={contactImg}
        imageAlt="Contact and support illustration"
      >
        <div className="grid sm:grid-cols-3 gap-5 w-full">
          {[
            { icon: Clock, t: "Quick Response", d: "We typically respond within 24 hours." },
            { icon: Users, t: "Expert Support", d: "Our team is here to help you succeed." },
            { icon: ShieldCheck, t: "Confidential", d: "Your information is safe with us." },
          ].map((p, idx) => (
            <div key={p.t} className={`flex gap-3 reveal reveal-delay-${(idx % 3) + 1}`}>
              <div className="icon-tile shrink-0"><p.icon className="size-5" /></div>
              <div>
                <h4 className="font-semibold text-sm font-poppins">{p.t}</h4>
                <p className="text-xs text-muted-foreground mt-1 font-inter">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="panel p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
        <ContactCard icon={<Phone className="size-5" />} title="Call Us" lines={["+1 (604) 401-2800", "Mon – Fri, 9:00 AM – 6:00 PM PST"]} />
        <ContactCard icon={<Mail className="size-5" />} title="Email Us" lines={["info@ardentsoftsol.com", "We reply within 24 hours"]} />
        <ContactCard icon={<MapPin className="size-5" />} title="Our Location" lines={["15464 96 Ave, Surrey,", "BC V3R1G5, Canada"]} />
        <ContactCard icon={<Calendar className="size-5" />} title="Schedule a Meeting" lines={["Book a free consultation", "with our experts."]} />
      </section>

      <section className="panel p-8 md:p-12 grid lg:grid-cols-2 gap-12 reveal">
        <div>
          <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Send Us a Message</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-8 grid sm:grid-cols-2 gap-4"
          >
            <Input label="First Name" />
            <Input label="Last Name" />
            <Input label="Email Address" type="email" className="sm:col-span-2" />
            <Input label="Phone Number" />
            <Input label="Company Name" />
            <Input label="Subject" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium font-poppins">How can we help you?</label>
              <textarea id="message" rows={5} className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary font-inter" />
            </div>
            <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3.5 font-semibold w-fit hover:opacity-90 transition btn-premium-hover font-poppins">
              {submitted ? "Message Sent ✓" : <>Send Message <ArrowRight className="size-4" /></>}
            </button>
          </form>
        </div>

        <div>
          <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Find Us</h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-border h-[340px]">
            <iframe
              title="Ardent Softsol Location"
              src="https://www.google.com/maps?q=15464+96+Ave+Surrey+BC&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="mt-4 panel p-5 bg-primary-soft/40">
            <p className="text-sm font-medium font-poppins">We're located in the heart of Surrey, BC, Canada.</p>
            <p className="text-sm text-muted-foreground mt-1 font-inter">Easy to reach and always ready to meet you!</p>
          </div>
        </div>
      </section>

      <section className="panel p-8 md:p-12 grid md:grid-cols-[1fr_1.2fr] gap-10 reveal">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">What to include</p>
          <h2 className="font-display-premium text-2xl md:text-3xl mt-4 text-slide-up">Project Details That Help Us Move Faster</h2>
          <p className="text-muted-foreground mt-5 leading-relaxed font-inter">
            The more context we have, the quicker we can prepare a meaningful proposal and timeline.
          </p>
        </div>
        <ul className="accent-list space-y-4 text-sm font-semibold font-poppins">
          {[
            "Business goals and success metrics",
            "Current tech stack or system constraints",
            "Target timeline and release milestones",
            "Preferred engagement model and budget range",
            "Key stakeholders and decision owners",
          ].map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      </section>

      <section className="panel p-8 md:p-12 reveal">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "1. Discovery call", d: "We learn your goals, users, and constraints." },
            { t: "2. Proposal", d: "You receive scope, timeline, and investment options." },
            { t: "3. Kickoff", d: "We align teams, tools, and delivery milestones." },
          ].map((s, idx) => (
            <div key={s.t} className={`content-card p-6 reveal reveal-delay-${(idx % 3) + 1}`}>
              <h3 className="font-semibold font-poppins">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-inter">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal">
        <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Frequently Asked Questions</h2>
        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="panel">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold font-poppins"
              >
                {f.q}
                <ChevronDown className={`size-5 transition ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed font-inter">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="icon-tile shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-primary font-poppins">{title}</h3>
        {lines.map((l) => <p key={l} className="text-sm text-muted-foreground font-inter">{l}</p>)}
      </div>
    </div>
  );
}

function Input({ label, type = "text", className = "" }: { label: string; type?: string; className?: string }) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium font-poppins">{label}</label>
      <input id={id} type={type} className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary font-inter" />
    </div>
  );
}
