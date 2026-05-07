import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { to: "/services/mobile", label: "Mobile Development" },
  { to: "/services/full-stack", label: "Full-Stack Development" },
  { to: "/services/testing", label: "Software Testing" },
  { to: "/services/staffing", label: "Staffing Services" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-2xl font-extrabold text-primary tracking-tight">ardent</span>
          <span className="text-[11px] font-semibold text-primary/70 tracking-[0.3em] -mt-0.5">softsol</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <div
            className="relative"
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary transition">
              Services <ChevronDown className="size-4" />
            </button>
            {svcOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-card border border-border rounded-2xl shadow-xl p-2 w-64">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-4 py-2.5 rounded-xl hover:bg-primary-soft hover:text-primary transition text-sm"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-sm"
          >
            Contact us
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
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
      className="hover:text-primary transition relative py-1"
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
