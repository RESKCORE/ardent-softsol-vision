import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "./services.mobile";
import { FullStackIllustration } from "@/assets/illustrations";

export const Route = createFileRoute("/services/full-stack")({
  head: () => ({
    meta: [
      { title: "Full-Stack Development — Ardent Softsol" },
      { name: "description", content: "End-to-end web application development covering frontend, backend, database, and DevOps." },
      { name: "keywords", content: "full-stack development, web application development, React development, Node.js, frontend backend, cloud development, DevOps" },
      { property: "og:title", content: "Full-Stack Development Services" },
      { property: "og:description", content: "End-to-end full-stack web development services by Ardent Softsol — frontend, backend, database, and cloud." },
      { property: "og:url", content: "/services/full-stack" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Full-Stack Development"
      title="Web Platforms Built"
      highlight="To Scale"
      intro="A comprehensive offering covering the entire web application lifecycle — from pixel-perfect frontends to resilient backends and automated cloud delivery."
      illustration={<FullStackIllustration className="w-full max-w-sm" />}
      sections={[
        { title: "Frontend", body: "HTML5, CSS3, JavaScript with React, Angular, and Vue.js — accessible, fast, and beautifully crafted." },
        { title: "Backend", body: "Node.js, Python, Ruby on Rails, and PHP. We design clean RESTful APIs and event-driven services." },
        { title: "Database", body: "MySQL, PostgreSQL, MongoDB, and Firebase — modeled for performance and long-term maintainability." },
        { title: "DevOps", body: "Infrastructure provisioning, automated deployments, and real-time monitoring on AWS, GCP, and Azure." },
      ]}
      deliverables={[
        "Discovery workshops and technical roadmap",
        "Design system and component library",
        "API integrations and data pipelines",
        "Cloud infrastructure and deployment scripts",
        "Post-launch optimization plan",
      ]}
      tech={[
        "React, Angular, Vue",
        "Node.js, Python, Ruby on Rails, PHP",
        "PostgreSQL, MySQL, MongoDB",
        "AWS, GCP, Azure, Docker",
      ]}
      outcomes={[
        { title: "Scalable architecture", body: "Designed for growth with modular services and clear data models." },
        { title: "Operational efficiency", body: "Automation that reduces manual work and accelerates delivery." },
        { title: "Reliable uptime", body: "Monitoring and performance tuning built into the release process." },
      ]}
      process={[
        { t: "Discover", d: "Workshops, scope, and architecture decisions." },
        { t: "Design", d: "UI/UX, API contracts, and data modeling." },
        { t: "Build", d: "Continuous delivery with weekly milestones." },
        { t: "Operate", d: "Observability, scaling, and ongoing improvements." },
      ]}
    />
  ),
});
