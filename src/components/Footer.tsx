import { Icon } from "../data/icons";
import { AppLogo } from "./AppLogo";

export function Footer() {
  return (
    <footer>
      <div className="brand">
        <AppLogo />
        <span>
          <strong>Vymora</strong>
          <small>© 2026 Algospider</small>
        </span>
      </div>
      <div className="footer-links">
        <a href="https://github.com/algospider/Vymora" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Icon name="github" />
        </a>
        <a href="mailto:mohanrajauria@gmail.com" aria-label="Email">
          <Icon name="mail" />
        </a>
      </div>
    </footer>
  );
}
