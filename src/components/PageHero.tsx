export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="panel relative overflow-hidden p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
      <div className="dot-pattern absolute right-8 top-8 w-32 h-24 opacity-60" />
      <div className="dot-pattern absolute left-10 bottom-10 w-24 h-16 opacity-60" />
      <div className="relative z-10">
        <span className="pill">{eyebrow}</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-[1.05]">
          {title}{" "}
          {highlight && <span className="text-primary">{highlight}</span>}
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mt-6 max-w-lg leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
      <div className="relative flex justify-center md:justify-end">
        <img src={image} alt="" className="w-full max-w-md h-auto" loading="eager" />
      </div>
    </section>
  );
}
