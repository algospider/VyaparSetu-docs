import { PageHero } from "../components/PageHero";
import { Icon } from "../data/icons";

export function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Use this website as a simple product pitch.">
        Start with the home page, then open detail pages only when the viewer wants more information.
      </PageHero>
      <section className="section workflow-section">
        <div className="section-heading center">
          <p className="eyebrow">Next Step</p>
          <h2>Present VyaparSetu to shop owners with confidence</h2>
          <p>Use this page as a marketing presentation, demo guide, and product overview.</p>
        </div>
        <div className="deploy-grid">
          <article>
            <div className="feature-icon"><Icon name="mail" /></div>
            <h3>Request a Demo</h3>
            <p>Contact the team for product explanation, setup discussion, or business inquiry.</p>
            <a href="mailto:mohanrajauria@gmail.com?subject=VyaparSetu%20Demo%20Request" className="button secondary">Email for Demo</a>
          </article>
          <article>
            <div className="feature-icon"><Icon name="github" /></div>
            <h3>View Project</h3>
            <p>Review the Android app source, technical structure, and implementation details.</p>
            <a href="https://github.com/algospider/VyaparSetu" target="_blank" rel="noreferrer" className="button secondary">GitHub Repository</a>
          </article>
          <article>
            <div className="feature-icon"><Icon name="help" /></div>
            <h3>Use as Presentation</h3>
            <p>Open this page during a meeting to explain problem, benefits, modules, and workflow.</p>
            <a href="#/" className="button secondary">Start Presentation</a>
          </article>
        </div>
      </section>
    </>
  );
}
