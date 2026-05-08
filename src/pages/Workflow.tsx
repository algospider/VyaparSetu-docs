import { RoleCard } from "../components/Cards";
import { PageHero } from "../components/PageHero";
import { roles } from "../data/content";
import { Icon } from "../data/icons";

export function Workflow() {
  return (
    <>
      <PageHero eyebrow="Workflow" title="From product scan to saved sale in a few steps.">
        The app is organized around the checkout path that a counter staff member follows every day.
      </PageHero>
      <section className="section workflow-section">
        <div className="section-heading center">
          <p className="eyebrow">Sales Journey</p>
          <h2>Standard checkout flow</h2>
        </div>
        <div className="workflow">
          <article><b>1</b><Icon name="barcode" /><h3>Scan Item</h3><p>Use ML Kit camera or search for instant cart addition.</p></article>
          <article><b>2</b><Icon name="receipt" /><h3>Set Terms</h3><p>Apply discounts and choose from Cash, UPI, or Credit.</p></article>
          <article><b>3</b><Icon name="customer" /><h3>Link Phone</h3><p>Phone number creates or updates the customer Khata account.</p></article>
          <article><b>4</b><Icon name="qr" /><h3>Collect</h3><p>Show dynamic UPI QR or generate a professional PDF invoice.</p></article>
          <article><b>5</b><Icon name="sync" /><h3>Auto-Sync</h3><p>Records update locally and push to owner's dashboard in real-time.</p></article>
        </div>
      </section>
      <section className="section roles-section">
        <div className="section-heading">
          <p className="eyebrow">Team Access</p>
          <h2>Built for owners, managers, and counter staff</h2>
        </div>
        <div className="roles-grid">
          {roles.map((role) => (
            <RoleCard key={role.name} role={role} />
          ))}
        </div>
      </section>
    </>
  );
}
