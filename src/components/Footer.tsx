import { Link } from "@tanstack/react-router";
import { Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 px-4 pb-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card/60 backdrop-blur-xl border border-border/40 px-8 lg:px-12 py-12">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={logo} alt="Ardent Softsol" className="h-8 w-auto" />
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A software development and consulting firm delivering customized mobile,
              full-stack, and quality assurance solutions.
            </p>
            <a
              href="https://www.linkedin.com/company/ardent-softsol"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center size-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-4" />
            </a>
          </div>

          <FooterCol title="Discover" links={[
            { to: "/about", label: "About us" },
            { to: "/services", label: "Services" },
            { to: "/career", label: "Career" },
            { to: "/contact", label: "Contact" },
          ]} />

          <FooterCol title="Services" links={[
            { to: "/services/mobile", label: "Mobile Development" },
            { to: "/services/full-stack", label: "Full-Stack Development" },
            { to: "/services/testing", label: "Software Testing" },
            { to: "/services/staffing", label: "Staffing Services" },
          ]} />

          <div>
            <h4 className="text-sm font-semibold mb-4">Get in touch</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+16044012800" className="flex items-center gap-3 hover:text-primary">
                <Phone className="size-4 text-primary" /> +1 (604) 401-2800
              </a>
              <a href="mailto:info@ardentsoftsol.com" className="flex items-center gap-3 hover:text-primary">
                <Mail className="size-4 text-primary" /> info@ardentsoftsol.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                <span>15464 96 Ave, Surrey,<br />BC V3R1G5, Canada</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/40 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ardent Softsol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="hover:text-primary transition">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
