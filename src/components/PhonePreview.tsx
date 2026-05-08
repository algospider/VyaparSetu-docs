import billingPreviewUrl from "../assets/billing_preview.png";

export function PhonePreview() {
  return (
    <div className="showcase" aria-label="VyaparSetu app preview">
      <div className="real-phone-shell">
        <img src={billingPreviewUrl} alt="VyaparSetu billing screen showing product search, cart, and checkout workflow" />
      </div>
    </div>
  );
}
