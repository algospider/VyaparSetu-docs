import { FeatureCard, MarketingCardView } from "../components/Cards";
import { PageHero } from "../components/PageHero";
import { audiences, features } from "../data/content";

export function Features() {
  return (
    <>
      <PageHero eyebrow="Product Features" title="Everything the shop needs for daily operations.">
        These modules are based on the actual Android project and current app capabilities.
      </PageHero>
      <section className="section">
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </section>
      <section className="section audience-section">
        <div className="section-heading">
          <p className="eyebrow">Target Users</p>
          <h2>Best suited for practical retail teams</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <MarketingCardView key={audience.title} item={audience} />
          ))}
        </div>
      </section>
    </>
  );
}
