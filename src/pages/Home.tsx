import { MarketingCardView } from "../components/Cards";
import { PhonePreview } from "../components/PhonePreview";
import { benefits } from "../data/content";
import { Icon } from "../data/icons";

export function Home() {
  return (
    <>
      <section className="compact-hero">
        <div className="hero-copy">
          <p className="eyebrow">Marketing Presentation</p>
          <h1>One Android app for shop billing, inventory, khata, and reports.</h1>
          <p className="hero-text">
            Vymora helps small and medium shop owners manage daily counter work with speed,
            control, and clear business visibility.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#/features">
              <Icon name="receipt" className="button-icon" /> Explore Features
            </a>
            <a className="button secondary" href="#/contact">
              <Icon name="mail" className="button-icon" /> Request Demo
            </a>
          </div>
          <div className="hero-stats" aria-label="App highlights">
            <span><b>Fast</b>Counter billing</span>
            <span><b>Digital</b>Khata ledger</span>
            <span><b>Owner</b>Reports & sync</span>
          </div>
        </div>
        <PhonePreview />
      </section>

      <section className="mini-section">
        <div className="section-heading">
          <p className="eyebrow">Problem</p>
          <h2>Most shops still run on disconnected records.</h2>
        </div>
        <div className="objective-grid">
          <article><span>01</span><h3>Billing is slow</h3><p>Manual item lookup and handwritten invoices delay the counter.</p></article>
          <article><span>02</span><h3>Stock is unclear</h3><p>Sales and restocking are not always connected to inventory records.</p></article>
          <article><span>03</span><h3>Khata is risky</h3><p>Customer dues in notebooks are hard to search, share, and verify.</p></article>
          <article><span>04</span><h3>Reports are weak</h3><p>Owners need clear sales, profit, stock, and staff visibility.</p></article>
        </div>
      </section>

      <section className="mini-section white-section">
        <div className="split-intro">
          <div>
            <p className="eyebrow">Objective</p>
            <h2>Make daily retail work simple, fast, and measurable.</h2>
          </div>
          <p>
            Vymora brings billing, inventory, khata, reports, staff access, invoices, and sync
            into a mobile-first workflow that shop teams can use every day.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <MarketingCardView key={benefit.title} item={benefit} />
          ))}
        </div>
      </section>

      <section className="page-links">
        <a href="#/features"><Icon name="receipt" /> Features</a>
        <a href="#/screens"><Icon name="store" /> App Screens</a>
        <a href="#/workflow"><Icon name="cash" /> Workflow</a>
        <a href="#/technology"><Icon name="settings" /> Technology</a>
      </section>
    </>
  );
}
