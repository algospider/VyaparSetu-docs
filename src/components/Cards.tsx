import type { Feature, MarketingCard, Role, ScreenAnalysis } from "../data/content";
import { Icon } from "../data/icons";

export function MarketingCardView({ item }: { item: MarketingCard }) {
  return (
    <article>
      <div className="feature-icon">
        <Icon name={item.icon} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.copy}</p>
    </article>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="feature-card">
      <div className="feature-icon">
        <Icon name={feature.icon} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.summary}</p>
      <ul>
        {feature.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  );
}

export function ScreenCard({ screen }: { screen: ScreenAnalysis }) {
  return (
    <article className="screen-card">
      <div className="screen-title">
        <span>
          <Icon name={screen.icon} />
        </span>
        <div>
          <h3>{screen.screen}</h3>
          <p>{screen.purpose}</p>
        </div>
      </div>
      <div className="layout-note">
        <strong>Component Focus</strong>
        <p>{screen.layout}</p>
      </div>
      <ul>
        {screen.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
    </article>
  );
}

export function RoleCard({ role }: { role: Role }) {
  return (
    <article>
      <h3>{role.name}</h3>
      <strong>{role.responsibility}</strong>
      <ul>
        {role.access.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
