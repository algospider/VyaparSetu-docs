type PageHeroProps = {
  eyebrow: string;
  title: string;
  children: string;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  );
}
