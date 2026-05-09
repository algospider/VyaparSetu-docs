import billingPreviewUrl from "../assets/billing_preview.png";

export function PhonePreview() {
  return (
    <div className="showcase" aria-label="Vyomra app preview">
      <div className="real-phone-shell">
        <img src={billingPreviewUrl} alt="Vyomra billing screen showing product search, cart, and checkout workflow" />
      </div>
    </div>
  );
}
