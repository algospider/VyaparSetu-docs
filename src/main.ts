import "./styles.css";

type IconName =
  | "receipt"
  | "inventory"
  | "khata"
  | "history"
  | "admin"
  | "barcode"
  | "cash"
  | "customer"
  | "qr"
  | "settings"
  | "store"
  | "sync"
  | "search"
  | "mail"
  | "help"
  | "github";

type Feature = {
  icon: IconName;
  title: string;
  summary: string;
  details: string[];
};

type ScreenAnalysis = {
  icon: IconName;
  screen: string;
  purpose: string;
  layout: string;
  actions: string[];
};

type Role = {
  name: string;
  responsibility: string;
  access: string[];
};

type Faq = {
  question: string;
  answer: string;
};

const iconPaths: Record<IconName, string> = {
  receipt:
    "M18,17H6v-2h12v2zM18,13H6v-2h12v2zM18,9H6V7h12v2zM3,22l1.5,-1.5L6,22l1.5,-1.5L9,22l1.5,-1.5L12,22l1.5,-1.5L15,22l1.5,-1.5L18,22l1.5,-1.5L21,22V2l-1.5,1.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2L4.5,3.5L3,2v20z",
  inventory:
    "M20,6h-4V4c0,-1.1 -0.9,-2 -2,-2h-4C8.9,2 8,2.9 8,4v2H4C2.9,6 2,6.9 2,8v10c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V8C22,6.9 21.1,6 20,6zM10,4h4v2h-4V4zM20,18H4V8h16V18zM12,10c-1.1,0 -2,0.9 -2,2s0.9,2 2,2s2,-0.9 2,-2S13.1,10 12,10z",
  khata:
    "M4,3h14c1.1,0 2,0.9 2,2v14c0,1.1 -0.9,2 -2,2H4c-1.1,0 -2,-0.9 -2,-2V5c0,-1.1 0.9,-2 2,-2zM6,7v2h10V7H6zM6,11v2h10v-2H6zM6,15v2h7v-2H6z",
  history:
    "M13,3c-4.4,0 -8,3.6 -8,8H2.5l3.2,3.2L9,11H6.5c0,-3.6 2.9,-6.5 6.5,-6.5s6.5,2.9 6.5,6.5s-2.9,6.5 -6.5,6.5c-1.8,0 -3.4,-0.7 -4.6,-1.9L7.3,16.7C8.8,18.1 10.8,19 13,19c4.4,0 8,-3.6 8,-8S17.4,3 13,3zM12,7v5l4,2l0.8,-1.3l-3.3,-1.9V7H12z",
  admin:
    "M12,12c2.2,0 4,-1.8 4,-4s-1.8,-4 -4,-4s-4,1.8 -4,4s1.8,4 4,4zM4,20c0,-3.3 3.6,-6 8,-6s8,2.7 8,6v1H4v-1zM18,6h2v2h2v2h-2v2h-2v-2h-2V8h2V6z",
  barcode:
    "M3,5h2v14H3V5zM7,5h1v14H7V5zM10,5h2v14h-2V5zM14,5h1v14h-1V5zM17,5h4v14h-4V5z",
  cash:
    "M3,6h18v12H3V6zM5,8v8h14V8H5zM12,9c1.7,0 3,1.3 3,3s-1.3,3 -3,3s-3,-1.3 -3,-3s1.3,-3 3,-3zM6,10c1.1,0 2,-0.9 2,-2H6v2zM18,14c-1.1,0 -2,0.9 -2,2h2v-2z",
  customer:
    "M12,12c2.2,0 4,-1.8 4,-4s-1.8,-4 -4,-4s-4,1.8 -4,4s1.8,4 4,4zM4,20c0,-3.3 3.6,-6 8,-6s8,2.7 8,6v1H4v-1z",
  qr:
    "M3,3h8v8H3V3zM5,5v4h4V5H5zM13,3h8v8h-8V3zM15,5v4h4V5h-4zM3,13h8v8H3v-8zM5,15v4h4v-4H5zM14,14h2v2h-2v-2zM17,14h4v2h-4v-2zM14,17h2v4h-2v-4zM17,19h2v2h-2v-2zM20,17h1v4h-1v-4z",
  settings:
    "M19.4,13.5c0.1,-0.5 0.1,-1 0.1,-1.5s0,-1 -0.1,-1.5l2,-1.5l-2,-3.5l-2.4,1c-0.8,-0.6 -1.5,-1 -2.5,-1.3L14.2,2h-4l-0.4,3.2c-0.9,0.3 -1.7,0.7 -2.5,1.3l-2.4,-1l-2,3.5l2,1.5C4.8,11 4.8,11.5 4.8,12s0,1 0.1,1.5l-2,1.5l2,3.5l2.4,-1c0.8,0.6 1.5,1 2.5,1.3l0.4,3.2h4l0.4,-3.2c0.9,-0.3 1.7,-0.7 2.5,-1.3l2.4,1l2,-3.5l-2.1,-1.5zM12.2,15.5c-1.9,0 -3.5,-1.6 -3.5,-3.5s1.6,-3.5 3.5,-3.5s3.5,1.6 3.5,3.5s-1.6,3.5 -3.5,3.5z",
  store:
    "M4,4h16l1,5v2h-1v9H4v-9H3V9l1,-5zM6,12v6h4v-6H6zM12,12v6h6v-6h-6zM5,6l-0.4,3h14.8L19,6H5z",
  sync:
    "M12,4c2.2,0 4.2,0.9 5.7,2.3L15,9h7V2l-2.9,2.9C17.3,3.1 14.8,2 12,2C7.7,2 4.1,4.7 2.7,8.5l1.9,0.7C5.7,6.1 8.6,4 12,4zM12,20c-2.2,0 -4.2,-0.9 -5.7,-2.3L9,15H2v7l2.9,-2.9C6.7,20.9 9.2,22 12,22c4.3,0 7.9,-2.7 9.3,-6.5l-1.9,-0.7C18.3,17.9 15.4,20 12,20z",
  search:
    "M9.5,3C5.9,3 3,5.9 3,9.5S5.9,16 9.5,16c1.6,0 3.1,-0.6 4.2,-1.5L19.2,20L20.5,18.7L15,13.2c0.9,-1.1 1.5,-2.6 1.5,-4.2C16,5.9 13.1,3 9.5,3zM9.5,5C12,5 14,7 14,9.5S12,14 9.5,14S5,12 5,9.5S7,5 9.5,5z",
  mail:
    "M20,4H4C2.9,4 2,4.9 2,6v12c0,1.1 0.9,2 2,2h16c1.1,0 2,-0.9 2,-2V6C22,4.9 21.1,4 20,4zM20,18H4V8l8,5l8,-5V18zM12,11L4,6h16L12,11z",
  help:
    "M11,18h2v-2h-2V18zM12,2C6.48,2 2,6.48 2,12s4.48,10 10,10s10,-4.48 10,-10S17.52,2 12,2zM12,20c-4.41,0 -8,-3.59 -8,-8s3.59,-8 8,-8s8,3.59 8,8S16.41,20 12,20zM12.5,7H11c-1.78,0 -3,1.38 -3,3h2c0,-0.62 0.44,-1 1,-1s1,0.44 1,1c0,1 -1.5,1.5 -1.5,3h2c0,-1.33 1.5,-1.88 1.5,-3C14,8.38 13.12,7 12.5,7z",
  github:
    "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
};

const features: Feature[] = [
  {
    icon: "receipt",
    title: "Smart Billing",
    summary: "High-speed counter billing with instant product search, barcode scanning, and flexible discounts.",
    details: ["CameraX + ML Kit for instant barcode detection", "Rupee (₹) or Percent (%) discount modes", "Cash, UPI (Dynamic QR), and Credit modes"]
  },
  {
    icon: "inventory",
    title: "Real-time Inventory",
    summary: "Track stock levels, cost prices, and categories. Get notified when stock is running low.",
    details: ["Automated stock reduction after every sale", "Cost-price tracking for profit analysis", "Low-stock visual alerts and owner dashboard metrics"]
  },
  {
    icon: "khata",
    title: "Digital Khata",
    summary: "Integrated customer ledger. Link credit sales directly to mobile numbers for accurate tracking.",
    details: ["Automatic ledger entry for credit bills", "WhatsApp statement and payment receipt sharing", "Quick payment collection and balance tracking"]
  },
  {
    icon: "store",
    title: "Multi-Shop Workspaces",
    summary: "Manage multiple businesses or branches from a single account without data mixing.",
    details: ["Isolated SQLite databases for each shop", "Set default store for auto-login", "Accept invites to join existing shops"]
  },
  {
    icon: "admin",
    title: "Owner Insights",
    summary: "Deep dive into your business performance with automated daily and monthly reports.",
    details: ["Gross profit calculation based on cost prices", "Staff performance tracking (bill count & revenue)", "Top selling categories and inventory analysis"]
  },
  {
    icon: "sync",
    title: "Offline-First Sync",
    summary: "Works perfectly without internet. Data syncs automatically to Firebase Cloud when online.",
    details: ["Local SQLite persistence for zero lag", "Real-time sync across multi-user devices", "Manual SQLite .db backup and restore"]
  },
  {
    icon: "barcode",
    title: "Role-Based Access",
    summary: "Secure your data. Invite staff with specific permissions to limit access to sensitive info.",
    details: ["Admin: Full control over stock & reports", "Staff: Restricted to counter billing only", "Secure invitation system via email"]
  },
  {
    icon: "search",
    title: "Global Search",
    summary: "Find anything instantly. Optimized search for products, customers, and bill history.",
    details: ["Search products by barcode, name, or category", "Customer lookup by phone or name", "Bill history search by customer or ID"]
  }
];

const screens: ScreenAnalysis[] = [
  {
    icon: "store",
    screen: "Main Dashboard",
    purpose: "Snapshot of daily business health for the owner and team.",
    layout: "Store name & role header, real-time sync chip, Today's Sales/Bills metric tiles, and quick action cards.",
    actions: ["One-tap to Billing/Khata", "Switch Shop Workspace", "Check Sync Status"]
  },
  {
    icon: "receipt",
    screen: "Billing Counter",
    purpose: "Optimized for speed during peak shop hours.",
    layout: "Search/Scanner bar, Category filters, Item catalog with stock count, and a collapsible Cart sheet.",
    actions: ["Scan/Add product", "Apply Discount Mode", "Generate Dynamic UPI QR"]
  },
  {
    icon: "khata",
    screen: "Khata Ledger",
    purpose: "Clear view of outstanding dues and customer history.",
    layout: "Credit/Paid/Balance summary, Searchable customer list, and expandable payment history cards.",
    actions: ["Record Payment", "Share WhatsApp Reminder", "View Statement"]
  },
  {
    icon: "admin",
    screen: "Admin Tools",
    purpose: "Owner-only command center for business control.",
    layout: "Tabbed interface: Overview (Profit/Staff), Inventory, Team (Invites), and System (Backup).",
    actions: ["Review Gross Profit", "Invite Staff Member", "Manual Cloud Sync"]
  }
];

const roles: Role[] = [
  {
    name: "Admin (Owner)",
    responsibility: "Full system control and ownership.",
    access: ["Inventory Edit & Profit Reports", "Staff Invitation & Role Mgmt", "Database Backup & Store Config"]
  },
  {
    name: "Manager",
    responsibility: "Shop floor management.",
    access: ["Full Billing Workflow", "Basic Inventory Updates", "Customer Khata Access"]
  },
  {
    name: "Staff",
    responsibility: "Counter sales.",
    access: ["Product Search & Billing", "Limited Sale History", "No Admin or Stock Control"]
  }
];

const faqs: Faq[] = [
  {
    question: "How does the Offline Mode work?",
    answer: "VyaparSetu stores all data in a local SQLite database on your phone. You can create bills and add stock without internet. Once connected, it uses Firebase to sync everything to the cloud automatically."
  },
  {
    question: "Can I track my business profit?",
    answer: "Yes. By adding 'Cost Price' to your products in the inventory screen, the Admin dashboard automatically calculates Gross Profit for daily and monthly sales."
  },
  {
    question: "How do I share bills with customers?",
    answer: "After checkout, the app generates a professional PDF invoice which you can share directly via WhatsApp, SMS, or any other sharing app."
  },
  {
    question: "Is my data isolated for different shops?",
    answer: "Absolutely. Each shop workspace has its own unique ID and local database file. Data from Shop A will never show up in Shop B."
  }
];

function svgIcon(name: IconName, className = "icon"): string {
  return `
    <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="${iconPaths[name]}"></path>
    </svg>
  `;
}

function launcherLogo(): string {
  return `
    <svg class="app-logo" viewBox="0 0 108 108" aria-hidden="true" focusable="false">
      <path fill="#0F8A5F" d="M0,0h108v108h-108z"></path>
      <path fill="#14A976" d="M0,0h108v56h-108z"></path>
      <path fill="#0B6F58" d="M0,78 C25,62 45,64 66,74 C84,83 96,82 108,72 L108,108 L0,108z"></path>
      <path fill="#FFFFFF" d="M54,18 C74,18 90,34 90,54 C90,74 74,90 54,90 C34,90 18,74 18,54 C18,34 34,18 54,18z"></path>
      <path fill="#0F8A5F" d="M54,25 C70,25 83,38 83,54 C83,70 70,83 54,83 C38,83 25,70 25,54 C25,38 38,25 54,25z"></path>
      <path fill="#FFFFFF" d="M30,43 L39,43 L48,62 L70,35 L80,35 L50,73 L45,73z"></path>
      <path fill="#B7F3D6" d="M29,72 L79,72 L79,78 L29,78z"></path>
      <path fill="#FFFFFF" d="M27,32 L81,32 L81,40 L72,40 L72,39 L36,39 L36,40 L27,40z"></path>
    </svg>
  `;
}

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root was not found");
}

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="VyaparSetu presentation home">
      ${launcherLogo()}
      <span>
        <strong>VyaparSetu</strong>
        <small>Shop management app</small>
      </span>
    </a>
    <nav aria-label="Presentation navigation">
      <a href="#overview">Overview</a>
      <a href="#features">Features</a>
      <a href="#screens">Screens</a>
      <a href="#workflow">Workflow</a>
      <a href="#faq">FAQ</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Professional Business OS</p>
        <h1>Smart Android app for Billing, Inventory, and Digital Khata.</h1>
        <p class="hero-text">
          VyaparSetu transforms your shop counter into a digital powerhouse. 
          Manage multiple shops, track real-time stock, send WhatsApp reminders for dues, 
          and get clear profit insights — all while working perfectly offline.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#features">${svgIcon("receipt", "button-icon")} Real Features</a>
          <a class="button secondary" href="https://github.com/algospider/VyaparSetu" target="_blank">${svgIcon("github", "button-icon")} Source Code</a>
        </div>
        <div class="hero-stats" aria-label="App highlights">
          <span><b>Hybrid</b>SQLite + Firebase</span>
          <span><b>Local</b>First Sync</span>
          <span><b>PDF</b>Invoices</span>
        </div>
      </div>

      <div class="showcase" aria-label="VyaparSetu app preview">
        <div class="phone-shell">
          <div class="phone-top">
            ${launcherLogo()}
            <div>
              <strong>Shop Dashboard</strong>
              <small>Synced - Admin</small>
            </div>
          </div>
          <div class="metric-row">
            <span><b>42</b>Today bills</span>
            <span><b>Rs 18.4k</b>Today sales</span>
          </div>
          <div class="quick-grid">
            <span>${svgIcon("receipt")}Billing</span>
            <span>${svgIcon("khata")}Khata</span>
            <span>${svgIcon("history")}History</span>
            <span>${svgIcon("admin")}Admin</span>
          </div>
          <div class="bill-preview">
            <div>
              <small>Current cart</small>
              <strong>5 items - Rs 860</strong>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </section>

    <section id="overview" class="section problem-section">
      <div class="section-heading center">
        <p class="eyebrow">Real World Utility</p>
        <h2>Built for the reality of modern retail.</h2>
        <p>
          VyaparSetu is not a generic ERP. It's a localized tool built using the architecture of 
          clinic management but optimized for the speed and chaos of a general store counter.
        </p>
      </div>
      <div class="problem-grid">
        <article><span>01</span><h3>Internet Lag?</h3><p>Never. Our local-first SQLite architecture ensures zero-delay billing even when offline.</p></article>
        <article><span>02</span><h3>Profit Leakage?</h3><p>Track every rupee. Link cost prices to products to see your true daily margins.</p></article>
        <article><span>03</span><h3>Bad Debts?</h3><p>Manage credit professionally. Send clear ledger statements directly to customer WhatsApp.</p></article>
        <article><span>04</span><h3>Multi-User?</h3><p>Invite staff securely. Assign roles like 'Staff' to handle billing without seeing your profit data.</p></article>
      </div>
    </section>

    <section class="solution-band">
      <div>
        <p class="eyebrow">Core Engine</p>
        <h2>Optimized for Android using industry-standard tech.</h2>
      </div>
      <div class="solution-points">
        <span>${svgIcon("barcode")} ML Kit</span>
        <span>${svgIcon("sync")} Firebase</span>
        <span>${svgIcon("store")} SQLite</span>
        <span>${svgIcon("receipt")} Compose</span>
      </div>
    </section>

    <section id="features" class="section">
      <div class="section-heading">
        <p class="eyebrow">Actual App Capabilities</p>
        <h2>Production-ready modules</h2>
        <p>
          No fluff. These modules are fully implemented in the current codebase using 
          Kotlin, Jetpack Compose, and Firebase.
        </p>
      </div>
      <div class="feature-grid">
        ${features
          .map(
            (feature) => `
              <article class="feature-card">
                <div class="feature-icon">${svgIcon(feature.icon)}</div>
                <h3>${feature.title}</h3>
                <p>${feature.summary}</p>
                <ul>
                  ${feature.details.map((detail) => `<li>${detail}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section id="screens" class="section screens-section">
      <div class="section-heading center">
        <p class="eyebrow">Interface Design</p>
        <h2>Practical. Clean. Fast.</h2>
        <p>
          Every pixel is designed to reduce the time it takes to move from 'Scanning' to 'Payment Received'.
        </p>
      </div>
      <div class="screen-grid">
        ${screens
          .map(
            (screen) => `
              <article class="screen-card">
                <div class="screen-title">
                  <span>${svgIcon(screen.icon)}</span>
                  <div>
                    <h3>${screen.screen}</h3>
                    <p>${screen.purpose}</p>
                  </div>
                </div>
                <div class="layout-note">
                  <strong>Component Focus</strong>
                  <p>${screen.layout}</p>
                </div>
                <ul>
                  ${screen.actions.map((action) => `<li>${action}</li>`).join("")}
                </ul>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section id="workflow" class="section workflow-section">
      <div class="section-heading center">
        <p class="eyebrow">Staff Operations</p>
        <h2>Standard checkout journey</h2>
      </div>
      <div class="workflow">
        <article><b>1</b>${svgIcon("barcode")}<h3>Scan Item</h3><p>Use ML Kit camera or search for instant cart addition.</p></article>
        <article><b>2</b>${svgIcon("receipt")}<h3>Set Terms</h3><p>Apply discounts and choose from Cash, UPI, or Credit.</p></article>
        <article><b>3</b>${svgIcon("customer")}<h3>Link Phone</h3><p>Phone number creates/updates the customer Khata account.</p></article>
        <article><b>4</b>${svgIcon("qr")}<h3>Collect</h3><p>Show dynamic UPI QR or generate a professional PDF invoice.</p></article>
        <article><b>5</b>${svgIcon("sync")}<h3>Auto-Sync</h3><p>Records update locally and push to owner's dashboard in real-time.</p></article>
      </div>
    </section>

    <section id="architecture" class="section trust-section">
      <div class="section-heading center">
        <p class="eyebrow">Reliable Stack</p>
        <h2>Modern Android Architecture</h2>
      </div>
      <div class="trust-grid">
        <article>${svgIcon("store")}<h3>Local SQLite</h3><p>High-performance local storage ensures the app is always fast, with or without data.</p></article>
        <article>${svgIcon("sync")}<h3>Firebase Realtime</h3><p>Cloud backbone for multi-user sync, staff invites, and secure data backups.</p></article>
        <article>${svgIcon("barcode")}<h3>CameraX + ML Kit</h3><p>Google's latest computer vision APIs for reliable barcode scanning on any device.</p></article>
        <article>${svgIcon("settings")}<h3>Jetpack Compose</h3><p>Modern declarative UI for a smooth, high-frame-rate user experience.</p></article>
      </div>
    </section>

    <section id="faq" class="section">
      <div class="section-heading center">
        <p class="eyebrow">Support</p>
        <h2>Frequently Asked Questions</h2>
        <p>Common questions about using and deploying VyaparSetu.</p>
      </div>
      <div class="faq-list">
        ${faqs
          .map(
            (faq) => `
              <details>
                <summary>${faq.question}</summary>
                <p>${faq.answer}</p>
              </details>
            `
          )
          .join("")}
      </div>
    </section>

    <section id="contact" class="section workflow-section">
      <div class="section-heading center">
        <p class="eyebrow">Connect</p>
        <h2>Get in touch</h2>
        <p>Have questions or want to contribute to the project?</p>
      </div>
      <div class="deploy-grid">
        <article>
          <div class="feature-icon">${svgIcon("mail")}</div>
          <h3>Email Us</h3>
          <p>For support or business inquiries, reach out to our team.</p>
          <a href="mailto:mohanrajauria@gmail.com" class="button secondary">mohanrajauria@gmail.com</a>
        </article>
        <article>
          <div class="feature-icon">${svgIcon("github")}</div>
          <h3>Open Source</h3>
          <p>VyaparSetu is open source. Check the code, report bugs, or contribute.</p>
          <a href="https://github.com/algospider/VyaparSetu" target="_blank" class="button secondary">GitHub Repository</a>
        </article>
        <article>
          <div class="feature-icon">${svgIcon("help")}</div>
          <h3>Documentation</h3>
          <p>Read our full guide on how to map your shop data to VyaparSetu.</p>
          <a href="#overview" class="button secondary">View Overview</a>
        </article>
      </div>
    </section>
  </main>

  <footer>
    <div class="brand">
      ${launcherLogo()}
      <span>
        <strong>VyaparSetu</strong>
        <small>© 2026 Algospider</small>
      </span>
    </div>
    <div class="site-header nav">
      <a href="https://github.com/algospider/VyaparSetu" target="_blank" aria-label="GitHub">
        ${svgIcon("github")}
      </a>
      <a href="mailto:mohanrajauria@gmail.com" aria-label="Email">
        ${svgIcon("mail")}
      </a>
    </div>
  </footer>
`;
