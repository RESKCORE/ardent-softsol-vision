import { Mail, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CtaBanner({
  eyebrow = "Let's work together",
  title = "Have a Project in Mind?",
  body = "Let's collaborate to turn your ideas into impactful digital solutions.",
}: { eyebrow?: string; title?: string; body?: string }) {
  return (
    <section className="panel p-8 md:p-12 flex flex-col md:grid md:grid-cols-[auto_1fr_auto] gap-8 items-start md:items-center relative overflow-hidden reveal">
      <div className="dot-pattern absolute left-0 bottom-0 w-32 h-20 opacity-60" />
      <div className="icon-tile !size-16 !rounded-2xl">
        <Mail className="size-7" />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase font-poppins">{eyebrow}</p>
        <h3 className="font-display-premium text-2xl md:text-3xl mt-2 text-slide-up">{title}</h3>
        <p className="text-muted-foreground mt-2 max-w-md font-inter">{body}</p>
      </div>
      <div className="flex flex-col items-start md:items-end gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold hover:opacity-90 transition btn-premium-hover"
        >
          Contact us today <ArrowRight className="size-4" />
        </Link>
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all nav-item-hover">
          Explore our services <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
