import billingPreviewUrl from "../assets/billing_preview.png";

export function PhonePreview() {
  return (
    <div className="showcase" aria-label="Vymora app preview">
      <div className="real-phone-shell">
        <img src={billingPreviewUrl} alt="Vymora billing screen showing product search, cart, and checkout workflow" />
      </div>
    </div>
  );
}
