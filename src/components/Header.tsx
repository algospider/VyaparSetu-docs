import { AppLogo } from "./AppLogo";

const navItems = [
  ["#/", "Home"],
  ["#/features", "Features"],
  ["#/screens", "App Screens"],
  ["#/workflow", "Workflow"],
  ["#/technology", "Technology"],
  ["#/contact", "Contact"]
] as const;

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Vyomra presentation home">
        <AppLogo />
        <span>
          <strong>Vyomra</strong>
          <small>Shop management app</small>
        </span>
      </a>
      <nav aria-label="Presentation navigation">
        {navItems.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
