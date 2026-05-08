import type { IconName } from "./icons";

export type Feature = {
  icon: IconName;
  title: string;
  summary: string;
  details: string[];
};

export type ScreenAnalysis = {
  icon: IconName;
  screen: string;
  purpose: string;
  layout: string;
  actions: string[];
};

export type Role = {
  name: string;
  responsibility: string;
  access: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type MarketingCard = {
  icon: IconName;
  title: string;
  copy: string;
};

export const features: Feature[] = [
  {
    icon: "receipt",
    title: "Fast Counter Billing",
    summary: "Create bills quickly with product search, barcode scanning, cart control, discounts, and payment selection.",
    details: ["CameraX + ML Kit barcode detection", "Rupee and percent discount modes", "Cash, UPI QR, and Credit checkout"]
  },
  {
    icon: "inventory",
    title: "Inventory Management",
    summary: "Track product stock, selling price, cost price, barcode, and category from one admin screen.",
    details: ["Stock reduces automatically after sale", "Cost price supports profit analysis", "Low-stock products are highlighted"]
  },
  {
    icon: "khata",
    title: "Digital Khata Ledger",
    summary: "Manage customer credit professionally by linking dues, payments, and balances to mobile numbers.",
    details: ["Credit bills create ledger entries", "Share statements and payment receipts", "Track credit, paid amount, and balance"]
  },
  {
    icon: "store",
    title: "Multi-Shop Workspaces",
    summary: "Run multiple shops or branches from one account while keeping each store's data separate.",
    details: ["Switch between shop workspaces", "Set a default store for faster login", "Accept invitations to join stores"]
  },
  {
    icon: "admin",
    title: "Owner Reports",
    summary: "Give the owner a clear view of sales, profit, stock, staff activity, and customer credit.",
    details: ["Daily and monthly sales reports", "Gross profit from cost price data", "Low-stock and staff activity insights"]
  },
  {
    icon: "sync",
    title: "Offline-First Sync",
    summary: "Use the app locally at the counter and sync important shop data with Firebase when internet is available.",
    details: ["SQLite local persistence for speed", "Firebase sync for shared shop data", "Manual backup and restore tools"]
  },
  {
    icon: "barcode",
    title: "Role-Based Access",
    summary: "Protect owner controls while allowing staff to complete daily counter work.",
    details: ["Admin controls settings and reports", "Staff can focus on billing", "Team invitations support shared stores"]
  },
  {
    icon: "search",
    title: "Quick Search",
    summary: "Find products, customers, and bills faster during daily operations.",
    details: ["Search by barcode, name, or category", "Customer lookup by mobile number", "Recent bill history for follow-up"]
  }
];

export const benefits: MarketingCard[] = [
  { icon: "cash", title: "Faster Billing", copy: "Reduce counter delays by using search, barcode scan, ready cart controls, and one-tap checkout actions." },
  { icon: "inventory", title: "Cleaner Stock", copy: "Keep product quantity, price, category, barcode, and cost price in one structured inventory system." },
  { icon: "khata", title: "Professional Credit Handling", copy: "Move from handwritten dues to a searchable customer ledger with payment history and shareable statements." },
  { icon: "admin", title: "Owner-Level Clarity", copy: "Understand sales, profit, low-stock items, staff activity, and credit balance without manual calculation." }
];

export const audiences: MarketingCard[] = [
  { icon: "store", title: "General Stores", copy: "Daily billing, mixed product inventory, regular customers, and quick counter checkout." },
  { icon: "barcode", title: "Grocery and Retail Counters", copy: "Barcode-led billing, stock updates, low-stock tracking, UPI payment, and invoice sharing." },
  { icon: "customer", title: "Shops With Customer Credit", copy: "Khata management, payment collection records, reminders, receipts, and balance visibility." }
];

export const screens: ScreenAnalysis[] = [
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

export const roles: Role[] = [
  { name: "Admin (Owner)", responsibility: "Full system control and ownership.", access: ["Inventory Edit & Profit Reports", "Staff Invitation & Role Mgmt", "Database Backup & Store Config"] },
  { name: "Manager", responsibility: "Shop floor management.", access: ["Full Billing Workflow", "Basic Inventory Updates", "Customer Khata Access"] },
  { name: "Staff", responsibility: "Counter sales.", access: ["Product Search & Billing", "Limited Sale History", "No Admin or Stock Control"] }
];

export const faqs: Faq[] = [
  { question: "Who is VyaparSetu made for?", answer: "VyaparSetu is made for small and medium shops that need billing, inventory, customer credit, reports, staff access, and simple cloud sync from one Android app." },
  { question: "Can the app work without internet?", answer: "Yes. The app uses local SQLite storage for daily operations. Firebase sync is used when internet is available." },
  { question: "Can the owner track profit?", answer: "Yes. When cost price is added to products, admin reports can show gross profit along with sales and revenue." },
  { question: "Can invoices be shared with customers?", answer: "Yes. The app generates PDF invoices for sales and can share them through WhatsApp or the Android share sheet." }
];
