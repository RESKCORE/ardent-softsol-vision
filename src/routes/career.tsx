import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Users, TrendingUp, Heart, Lightbulb, UserPlus, Gift, MapPin, Briefcase, Code2, Smartphone, ShieldCheck, Cloud, ArrowRight, Search, X, Check } from "lucide-react";
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

function ResumeForm({ jobTitle, onSuccess }: { jobTitle?: string; onSuccess?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [statusKind, setStatusKind] = useState<"error" | "success">("success");

  const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];

  function handleFile(f: File | null) {
    if (!f) { setResumeFile(null); return; }
    if (f.size > MAX_BYTES) {
      setStatusKind("error");
      setStatus("File too large — max 5 MB.");
      setResumeFile(null);
      return;
    }
    if (!allowedTypes.includes(f.type)) {
      setStatusKind("error");
      setStatus("Unsupported file type. Please use PDF or DOC/DOCX.");
      setResumeFile(null);
      return;
    }
    setStatus(null);
    setResumeFile(f);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!resumeFile) {
      setStatusKind("error");
      setStatus("Please attach your resume.");
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("message", message);
      fd.append("jobTitle", jobTitle ?? "General Application");
      fd.append("resume", resumeFile, resumeFile.name);

      const res = await fetch("/api/send-resume", { method: "POST", body: fd });
      const json = await res.json();

      if (!res.ok) {
        setStatusKind("error");
        setStatus(json?.error ?? "Failed to send. Please try again.");
      } else {
        setStatusKind("success");
        setStatus("Resume sent — we'll be in touch soon!");
        setName("");
        setEmail("");
        setMessage("");
        setResumeFile(null);
        onSuccess?.();
      }
    } catch {
      setStatusKind("error");
      setStatus("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="resume-name" className="sr-only">Your name</label>
          <input
            id="resume-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="resume-email" className="sr-only">Your email</label>
          <input
            id="resume-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="resume-file" className="text-sm font-medium">
          Resume <span className="text-muted-foreground font-normal">(PDF or DOC/DOCX, max 5 MB)</span>
        </label>
        <input
          id="resume-file"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          className="mt-1.5 w-full text-sm file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-soft file:text-primary hover:file:opacity-80 cursor-pointer"
        />
        {resumeFile && (
          <p className="mt-1 text-xs text-primary font-medium">
            ✓ {resumeFile.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="resume-message" className="sr-only">Brief note</label>
        <textarea
          id="resume-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Brief note (optional)"
          rows={3}
          className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {submitting ? "Sending…" : <><ArrowRight className="size-4" /> Send Resume</>}
        </button>
        {status && (
          <p className={`text-sm ${statusKind === "error" ? "text-destructive" : "text-green-600"}`}>
            {status}
          </p>
        )}
      </div>
    </form>
  );
}

const jobs = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    team: "Development Team",
    exp: "3-5 Years",
    loc: "Surrey, BC (Hybrid)",
    type: "Full-time",
    desc: "We are looking for a skilled Full Stack Developer to build scalable web applications and work with modern technologies.",
    fullDesc: "Join our development team and contribute to cutting-edge web applications that serve thousands of users. You'll work with modern frameworks, collaborate with designers and product managers, and have the opportunity to lead technical decisions.",
    responsibilities: [
      "Design and develop scalable full-stack web applications",
      "Collaborate with cross-functional teams to define project requirements",
      "Write clean, maintainable code with comprehensive testing",
      "Participate in code reviews and mentor junior developers",
      "Contribute to technical documentation and best practices",
    ],
    requirements: [
      "3-5 years of professional full-stack development experience",
      "Strong expertise in React, Node.js, and modern JavaScript",
      "Experience with databases (PostgreSQL, MongoDB) and REST APIs",
      "Solid understanding of web security and performance optimization",
      "Excellent communication and problem-solving skills",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health and wellness benefits",
      "Professional development and training budget",
      "Flexible work arrangements and remote options",
      "Collaborative and inclusive team environment",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Developer",
    team: "Development Team",
    exp: "2-4 Years",
    loc: "Surrey, BC (Hybrid)",
    type: "Full-time",
    desc: "Join our mobile team to develop high-quality Android and iOS applications that deliver exceptional user experiences.",
    fullDesc: "Build beautiful, performant mobile applications that users love. Work on both native and cross-platform projects, learn from experienced engineers, and see your code impact thousands of users daily.",
    responsibilities: [
      "Develop high-quality mobile applications for iOS and Android",
      "Optimize app performance and ensure smooth user experiences",
      "Implement pixel-perfect UI designs and animations",
      "Collaborate with backend teams to integrate APIs",
      "Participate in app store submission and release processes",
    ],
    requirements: [
      "2-4 years of professional mobile development experience",
      "Proficiency in Swift, Kotlin, or cross-platform frameworks",
      "Strong understanding of mobile UI/UX principles",
      "Experience with Git version control and CI/CD pipelines",
      "Portfolio of published apps in app stores",
    ],
    benefits: [
      "Latest development tools and devices",
      "Mentorship from senior mobile architects",
      "Opportunities to attend mobile development conferences",
      "Flexible hybrid work schedule",
      "Competitive compensation package",
    ],
  },
  {
    icon: ShieldCheck,
    title: "QA Automation Engineer",
    team: "QA Team",
    exp: "2-4 Years",
    loc: "Surrey, BC (Hybrid)",
    type: "Full-time",
    desc: "Ensure the quality and reliability of our products by designing and implementing automated test frameworks.",
    fullDesc: "Join our QA team to ensure product excellence through comprehensive testing strategies. You'll design automation frameworks, collaborate with development teams, and help improve our overall product quality.",
    responsibilities: [
      "Design and implement automated test frameworks",
      "Develop comprehensive test cases and test scenarios",
      "Execute functional, regression, and performance testing",
      "Identify and document software defects and issues",
      "Collaborate with developers to improve testability",
    ],
    requirements: [
      "2-4 years of QA automation experience",
      "Expertise in testing tools like Cypress, Playwright, or Selenium",
      "Strong understanding of testing methodologies and best practices",
      "Proficiency in JavaScript or Python for test automation",
      "Experience with CI/CD integration and test reporting",
    ],
    benefits: [
      "Access to cutting-edge testing tools",
      "QA training and certification programs",
      "Collaborative and quality-focused culture",
      "Flexible remote work options",
      "Competitive salary and benefits",
    ],
  },
  {
    icon: Cloud,
    title: "DevOps Engineer",
    team: "DevOps Team",
    exp: "3-5 Years",
    loc: "Surrey, BC (Hybrid)",
    type: "Full-time",
    desc: "Help us build and maintain scalable infrastructure and streamline deployment pipelines on cloud platforms.",
    fullDesc: "Architect and maintain the infrastructure that powers our applications. Work with cloud platforms, containerization, and modern DevOps practices to ensure reliability and performance.",
    responsibilities: [
      "Design and implement CI/CD pipelines and automation",
      "Manage cloud infrastructure on AWS, GCP, or Azure",
      "Containerize applications using Docker and Kubernetes",
      "Monitor system performance and implement optimization",
      "Implement security best practices and disaster recovery",
    ],
    requirements: [
      "3-5 years of DevOps or infrastructure engineering experience",
      "Expertise in cloud platforms (AWS, GCP, or Azure)",
      "Strong knowledge of containerization and orchestration",
      "Scripting skills in Bash, Python, or Go",
      "Experience with monitoring and logging tools",
    ],
    benefits: [
      "Access to latest cloud technologies",
      "DevOps training and certification support",
      "Opportunity to work on scalable infrastructure",
      "Remote-first culture with flexibility",
      "Competitive compensation and benefits",
    ],
  },
];

function Career() {
  const [q, setQ] = useState("");
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);
  const [showResumeForm, setShowResumeForm] = useState(false);
  const filtered = jobs.filter((j) => j.title.toLowerCase().includes(q.toLowerCase()) || j.team.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="flex flex-col gap-10 pb-8">
      <PageHero
        eyebrow="Career With Us"
        title="Build Your Career."
        highlight="Shape the Future."
        description="Join Ardent Softsol and be part of a team that values innovation, collaboration, and growth. Let's build extraordinary solutions together."
        image={careerImg}
        imageAlt="Career growth and teamwork illustration"
      >
        <div className="grid sm:grid-cols-3 gap-5 w-full">
          {[
            { icon: Users, t: "Great People", d: "Work with passionate and skilled professionals." },
            { icon: TrendingUp, t: "Grow Together", d: "Continuous learning and career development." },
            { icon: Heart, t: "Work-Life Balance", d: "We care for your well-being and personal time." },
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

      {/* Why work */}
      <section className="grid md:grid-cols-[1fr_2fr] gap-10 py-6 reveal">
        <div>
          <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Why Work With Us</h2>
          <p className="text-muted-foreground mt-6 leading-relaxed font-inter">
            We foster a culture of trust, transparency, and teamwork where you can do your best work and make a meaningful impact.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Lightbulb, t: "Innovative Projects", d: "Work on challenging projects that solve real-world problems." },
            { icon: TrendingUp, t: "Career Growth", d: "Opportunities to learn, upskill and advance." },
            { icon: UserPlus, t: "Inclusive Culture", d: "A supportive environment that values diversity." },
            { icon: Gift, t: "Competitive Benefits", d: "Health insurance, paid time off and more." },
          ].map((f, idx) => (
            <div key={f.t} className={`text-center reveal reveal-delay-${(idx % 4) + 1}`}>
              <div className="icon-tile mx-auto"><f.icon className="size-6" /></div>
              <h3 className="font-semibold mt-4 font-poppins">{f.t}</h3>
              <p className="text-sm text-muted-foreground mt-2 font-inter">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Jobs */}
      <section className="panel p-10 md:p-12 reveal">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase font-poppins">Hiring process</p>
            <h2 className="font-display-premium text-2xl md:text-3xl mt-4 text-slide-up">Clear Steps, Fast Feedback</h2>
            <p className="text-muted-foreground mt-6 leading-relaxed font-inter">
              We keep the process efficient and respectful of your time, with transparent communication at every stage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Intro call with our talent team",
              "Technical assessment or portfolio review",
              "Team interview and culture alignment",
              "Offer discussion and onboarding plan",
            ].map((s, idx) => (
              <div key={s} className={`content-card p-5 text-sm font-semibold font-poppins reveal reveal-delay-${(idx % 4) + 1}`}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal">
        <h2 className="font-display-premium text-2xl md:text-3xl underline-accent text-slide-up">Open Job Opportunities</h2>

        <div className="mt-8 panel p-5 grid md:grid-cols-[2fr_1fr_1fr_auto] gap-3 items-center reveal bg-gradient-to-r from-primary-soft/40 via-surface to-surface border border-primary/10">
          <div className="relative">
            <Search className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by job title or team"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary font-inter"
            />
          </div>
          {["All Departments", "All Locations"].map((p) => (
            <select key={p} className="px-4 py-3 rounded-xl bg-background border border-border text-sm font-inter focus:outline-none focus:ring-2 focus:ring-primary">
              <option>{p}</option>
            </select>
          ))}
          <button onClick={() => setQ("")} className="text-primary text-sm font-semibold px-4 py-2 hover:bg-primary-soft rounded-lg transition nav-item-hover font-poppins">Clear</button>
        </div>

        <div className="mt-8 flex flex-col gap-5">
          {filtered.map((j, idx) => (
            <div key={j.title} className={`panel p-7 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start md:items-center reveal reveal-delay-${(idx % 4) + 1} hover:shadow-xl transition-all border border-border/40 hover:border-primary/20 group`}>
              <div className="icon-tile !size-16 group-hover:scale-110 transition-transform"><j.icon className="size-7" /></div>
              <div className="space-y-3">
                <div>
                  <h3 className="font-display-premium text-2xl font-poppins">{j.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 font-inter">{j.team}</p>
                </div>
                <p className="text-base text-foreground leading-relaxed font-inter">{j.desc}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-soft text-primary rounded-full text-xs font-semibold font-poppins">
                    <Briefcase className="size-3.5" /> {j.exp}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-semibold font-inter">
                    <MapPin className="size-3.5" /> {j.loc}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-semibold font-inter">
                    <Code2 className="size-3.5" /> {j.type}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(j)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition btn-premium-hover font-poppins whitespace-nowrap"
              >
                View Details <ArrowRight className="size-4" />
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground font-inter">No roles match your search.</p>
              <p className="text-sm text-muted-foreground mt-2 font-inter">Try adjusting your filters or check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <section className="panel p-8 md:p-12 reveal">
        <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
          <div className="icon-tile !size-16 !rounded-2xl"><UserPlus className="size-7" /></div>
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase font-poppins">Don't see the right role?</p>
            <h3 className="font-display-premium text-2xl md:text-3xl mt-2 text-slide-up">We're Always Looking for Talent</h3>
            <p className="text-muted-foreground mt-2 font-inter">Send us your resume and tell us how you can contribute to our team. We'd love to hear from you!</p>
          </div>
          <button
            onClick={() => setShowResumeForm((s) => !s)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition btn-premium-hover font-poppins whitespace-nowrap"
          >
            {showResumeForm ? "Cancel" : <><ArrowRight className="size-4" /> Send Your Resume</>}
          </button>
        </div>
        {showResumeForm && (
          <div className="mt-8 border-t border-border pt-8 max-w-2xl">
            <ResumeForm onSuccess={() => setShowResumeForm(false)} />
          </div>
        )}
      </section>

      {selectedJob && <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
}

function JobDetailsModal({ job, onClose }: { job: (typeof jobs)[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-background rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border/40 shadow-2xl animate-in fade-in duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-b from-background to-background/80 backdrop-blur-md p-6 md:p-8 border-b border-border/20 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="icon-tile !size-14"><job.icon className="size-6" /></div>
            <div>
              <h2 className="font-display-premium text-2xl md:text-3xl">{job.title}</h2>
              <p className="text-sm text-muted-foreground font-inter mt-1">{job.team}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-surface transition"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Quick Info */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="panel p-5 text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-poppins">Experience</p>
              <p className="text-lg font-bold text-primary mt-2 font-poppins">{job.exp}</p>
            </div>
            <div className="panel p-5 text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-poppins">Location</p>
              <p className="text-base font-semibold mt-2 font-poppins">{job.loc}</p>
            </div>
            <div className="panel p-5 text-center">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-poppins">Employment</p>
              <p className="text-base font-semibold text-primary mt-2 font-poppins">{job.type}</p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="font-display-premium text-xl mb-3">About This Role</h3>
            <p className="text-muted-foreground leading-relaxed font-inter">{job.fullDesc}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="font-display-premium text-xl mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 items-start">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-inter">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="font-display-premium text-xl mb-4">What We're Looking For</h3>
            <ul className="space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex gap-3 items-start">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-inter">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-display-premium text-xl mb-4">Why Join Us</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {job.benefits.map((b) => (
                <div key={b} className="content-card p-4 flex gap-3 items-start">
                  <Check className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-inter">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-soft/30 border border-primary/20 rounded-2xl p-6 md:p-8">
            <h4 className="font-display-premium text-xl mb-2">Ready to Apply?</h4>
            <p className="text-muted-foreground font-inter mb-5">
              Send us your resume and a brief note about why you're interested in this role. We'll be in touch within 24 hours!
            </p>
            <div className="w-full max-w-lg">
              <ResumeForm jobTitle={job.title} onSuccess={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
