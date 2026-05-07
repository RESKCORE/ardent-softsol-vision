import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "./services.mobile";
import { TestingIllustration } from "@/assets/illustrations";

export const Route = createFileRoute("/services/testing")({
  head: () => ({
    meta: [
      { title: "Software Testing — Ardent Softsol" },
      { name: "description", content: "Manual, automation, performance, mobile, web, and API testing services to ensure software reliability." },
      { property: "og:title", content: "Software Testing & QA" },
    ],
  }),
  component: () => (
    <ServiceDetail
      eyebrow="Software Testing"
      title="Quality You Can"
      highlight="Ship With Confidence"
      intro="A dedicated QA practice ensuring software reliability. We catch issues early to reduce development cost and accelerate time-to-market."
      illustration={<TestingIllustration className="w-full max-w-sm" />}
      sections={[
        { title: "Performance Testing", body: "Load, stress, scalability, and endurance testing to validate behavior under real-world conditions." },
        { title: "Automation Testing", body: "Robust automation suites with Selenium, Cypress, Playwright, and Appium integrated into your CI/CD." },
        { title: "API & Mobile Testing", body: "End-to-end coverage across REST/GraphQL APIs, native mobile flows, and responsive web experiences." },
      ]}
      deliverables={[
        "QA strategy and risk-based test plan",
        "Automated regression suite and reports",
        "Performance baseline and tuning guidance",
        "Security and API validation checks",
        "Release readiness sign-off",
      ]}
      tech={[
        "Selenium, Cypress, Playwright",
        "Appium, BrowserStack",
        "JMeter, k6, Lighthouse",
        "Postman, Newman, REST Assured",
      ]}
      outcomes={[
        { title: "Faster releases", body: "Automated pipelines that reduce manual QA time." },
        { title: "Lower defect risk", body: "Consistent regression coverage across critical flows." },
        { title: "Performance confidence", body: "Benchmarked load behavior before launch." },
      ]}
      process={[
        { t: "Plan", d: "Define test strategy aligned to risk and goals." },
        { t: "Design", d: "Build test cases, data, and environments." },
        { t: "Execute", d: "Run manual and automated suites with reporting." },
        { t: "Improve", d: "Triage, retest, and harden the release pipeline." },
      ]}
    />
  ),
});
