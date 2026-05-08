import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Smartphone, Code2, ShieldCheck, Users } from "lucide-react";
import logo from "@/assets/logo.png";
import { DropdownNavigation } from "./ui/dropdown-navigation";

const services = [
  { to: "/services/mobile", label: "Mobile Development" },
  { to: "/services/full-stack", label: "Full-Stack Development" },
  { to: "/services/testing", label: "Software Testing" },
  { to: "/services/staffing", label: "Staffing Services" },
];

const navItems = [
  {
    id: 1,
    label: "Services",
    subMenus: [
      {
        title: "Services",
        items: [
          {
            label: "Mobile Development",
            description: "Native iOS, Android & cross-platform apps",
            icon: Smartphone,
            link: "/services/mobile",
          },
          {
            label: "Full-Stack Development",
            description: "Scalable web platforms from frontend to cloud",
            icon: Code2,
            link: "/services/full-stack",
          },
          {
            label: "Software Testing",
            description: "End-to-end QA — manual, automation, performance",
            icon: ShieldCheck,
            link: "/services/testing",
          },
          {
            label: "Staffing Services",
            description: "Top 1% engineering talent for your team",
            icon: Users,
            link: "/services/staffing",
          },
        ],
      },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-6 pt-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-transform hover:scale-105">
          <img src={logo} alt="Ardent Softsol" className="h-7 w-auto" />
        </Link>

        {/* Desktop nav — transparent, links only */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <div className="px-1">
            <DropdownNavigation navItems={navItems} />
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mt-3 rounded-3xl bg-background/95 backdrop-blur-xl border border-border/50 shadow-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            <MobileLink to="/" onClick={() => setOpen(false)}>Home</MobileLink>
            <details className="group">
              <summary className="flex items-center justify-between py-2.5 cursor-pointer list-none text-sm font-medium">
                Services <ChevronDown className="size-4 group-open:rotate-180 transition" />
              </summary>
              <div className="pl-4 flex flex-col">
                {services.map((s) => (
                  <MobileLink key={s.to} to={s.to} onClick={() => setOpen(false)}>{s.label}</MobileLink>
                ))}
              </div>
            </details>
            <MobileLink to="/about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink to="/career" onClick={() => setOpen(false)}>Career</MobileLink>
            <MobileLink to="/contact" onClick={() => setOpen(false)}>Contact us</MobileLink>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="nav-item-hover hover:text-primary transition relative py-1 px-1.5"
      activeProps={{ className: "text-primary font-semibold" }}
      activeOptions={{ exact: to === "/" }}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="py-2.5 text-sm font-medium hover:text-primary"
    >
      {children}
    </Link>
  );
}
