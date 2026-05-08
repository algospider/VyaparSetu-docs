import { PageHero } from "../components/PageHero";
import { faqs } from "../data/content";
import { Icon } from "../data/icons";

export function Technology() {
  return (
    <>
      <PageHero eyebrow="Technology" title="Local-first Android architecture with cloud sync.">
        VyaparSetu is built to stay fast during counter work while keeping store data ready for sync and backup.
      </PageHero>
      <section className="section trust-section">
        <div className="section-heading center">
          <p className="eyebrow">Reliable Stack</p>
          <h2>Modern Android Architecture</h2>
        </div>
        <div className="trust-grid">
          <article><Icon name="store" /><h3>Local SQLite</h3><p>High-performance local storage ensures the app is always fast, with or without data.</p></article>
          <article><Icon name="sync" /><h3>Firebase Realtime</h3><p>Cloud backbone for multi-user sync, staff invites, and secure data backups.</p></article>
          <article><Icon name="barcode" /><h3>CameraX + ML Kit</h3><p>Google's latest computer vision APIs for reliable barcode scanning on any device.</p></article>
          <article><Icon name="settings" /><h3>Jetpack Compose</h3><p>Modern declarative UI for a smooth, high-frame-rate user experience.</p></article>
        </div>
      </section>
      <section className="section">
        <div className="section-heading center">
          <p className="eyebrow">Questions</p>
          <h2>Technical and buyer questions</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
