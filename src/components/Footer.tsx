import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-extrabold text-primary">ardent</span>
            <span className="text-[11px] font-semibold text-primary/70 tracking-[0.3em] -mt-0.5">softsol</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
            A software development and consulting firm providing customized software development,
            Mobile Application Development, Full-Stack Development and Quality Assurance services.
          </p>
        </div>

        <FooterCol title="Discover" links={[
          { to: "/about", label: "About us" },
          { to: "/services", label: "Expertise" },
          { to: "/services/full-stack", label: "Technologies" },
          { to: "/about", label: "Clients" },
        ]} />

        <FooterCol title="Services" links={[
          { to: "/services/mobile", label: "Mobile App Development" },
          { to: "/services/full-stack", label: "Full Stack Development" },
          { to: "/services/testing", label: "Software Testing" },
          { to: "/services/staffing", label: "DevOps & Deployment" },
        ]} />

        <div>
          <h4 className="text-base font-semibold mb-5">Get in touch</h4>
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
          <div className="flex items-center gap-3 mt-5">
            <Social><Linkedin className="size-4" /></Social>
            <Social><Facebook className="size-4" /></Social>
            <Social><Instagram className="size-4" /></Social>
            <Social><span className="font-bold text-sm">𝕏</span></Social>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ardent Softsol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-base font-semibold mb-5">{title}</h4>
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

function Social({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" className="size-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition">
      {children}
    </a>
  );
}
