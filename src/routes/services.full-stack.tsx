import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "./services.mobile";

export const Route = createFileRoute("/services/full-stack")({
  head: () => ({
    meta: [
      { title: "Full-Stack Development — Ardent Softsol" },
      { name: "description", content: "End-to-end web application development covering frontend, backend, database, and DevOps." },
      { property: "og:title", content: "Full-Stack Development Services" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Full-Stack Development"
      title="Web Platforms Built"
      highlight="To Scale"
      intro="A comprehensive offering covering the entire web application lifecycle — from pixel-perfect frontends to resilient backends and automated cloud delivery."
      sections={[
        { title: "Frontend", body: "HTML5, CSS3, JavaScript with React, Angular, and Vue.js — accessible, fast, and beautifully crafted." },
        { title: "Backend", body: "Node.js, Python, Ruby on Rails, and PHP. We design clean RESTful APIs and event-driven services." },
        { title: "Database", body: "MySQL, PostgreSQL, MongoDB, and Firebase — modeled for performance and long-term maintainability." },
        { title: "DevOps", body: "Infrastructure provisioning, automated deployments, and real-time monitoring on AWS, GCP, and Azure." },
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
