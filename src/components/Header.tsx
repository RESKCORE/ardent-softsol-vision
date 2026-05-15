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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border/30">
      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .desktop-contact { display: none !important; }
        }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-contact { display: inline-block !important; }
        }
      `}</style>
      <div className="relative">
        {/* absolute left logo */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <Link to="/" className="flex items-center transition-transform hover:scale-105">
            <img src={logo} alt="Ardent Softsol" className="h-9 w-auto" />
          </Link>
        </div>

        {/* absolute right contact (desktop only) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <Link
            to="/contact"
            className="desktop-contact inline-flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            style={{ minHeight: 40 }}
          >
            Contact
          </Link>
        </div>

        {/* centered nav container */}
        <div className="mx-auto max-w-[1200px] w-full flex items-center justify-center px-6 py-3">
          <nav className="desktop-nav flex items-center gap-8 text-sm font-medium justify-center">
            <NavLink to="/">Home</NavLink>
            <div className="px-1">
              <DropdownNavigation navItems={navItems} />
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
          </nav>

          {/* Mobile hamburger placed on the right inside the centered container for small screens */}
          <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30">
            <button
              className="p-2 rounded-full hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
      <div className="lg:hidden mt-3 rounded-3xl bg-white/95 backdrop-blur-xl border border-border/50">
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
