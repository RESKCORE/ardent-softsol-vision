import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "./services.mobile";
import { StaffingIllustration } from "@/assets/illustrations";

export const Route = createFileRoute("/services/staffing")({
  head: () => ({
    meta: [
      { title: "Staffing Services — Ardent Softsol" },
      { name: "description", content: "Staff augmentation that extends your internal team with the top 1% of vetted engineering talent." },
      { property: "og:title", content: "Staffing & Staff Augmentation" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Staffing Services"
      title="Extend Your Team With"
      highlight="The Top 1% of Talent"
      intro="A B2B service for extending internal teams. Skip recruitment delays, integrate seamlessly into existing workflows, and build healthy, high-performing teams."
      illustration={<StaffingIllustration className="w-full max-w-sm" />}
      sections={[
        { title: "Vetted Talent", body: "Engineers, designers, and QA specialists rigorously evaluated for skills, communication, and culture fit." },
        { title: "Seamless Integration", body: "Our talent works inside your tools, processes, and rituals — no friction, no overhead." },
        { title: "Flexible Engagement", body: "Scale up or down by sprint, quarter, or initiative with transparent billing and clear ownership." },
      ]}
      deliverables={[
        "Role definition and success criteria",
        "Curated shortlist within days",
        "Technical and communication assessment",
        "Onboarding and ramp-up plan",
        "Ongoing performance check-ins",
      ]}
      tech={[
        "Jira, Linear, Azure DevOps",
        "GitHub, GitLab, Bitbucket",
        "Slack, Teams, Notion",
        "CI/CD and code review workflows",
      ]}
      outcomes={[
        { title: "Faster hiring", body: "Skip long recruitment cycles with pre-vetted candidates." },
        { title: "Team continuity", body: "Integrated contributors who follow your rituals and standards." },
        { title: "Flexible scaling", body: "Adjust capacity without long-term overhead." },
      ]}
      process={[
        { t: "Brief", d: "We learn the role, stack, and team dynamics." },
        { t: "Match", d: "Shortlist of pre-vetted candidates within days." },
        { t: "Onboard", d: "Smooth handover into your workflows and tooling." },
        { t: "Support", d: "Ongoing performance check-ins and replacements if ever needed." },
      ]}
    />
  ),
});
