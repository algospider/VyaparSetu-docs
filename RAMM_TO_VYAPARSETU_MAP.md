# Ramm to VyaparSetu Build Map

This project treats `Ramm` as the source product architecture and adapts it from clinic management to general-store management.

## Ramm Source Model

- `base/BaseActivity`: shared theme, permission, constants, and role keys.
- `ui/auth`: permission gate and login/session start.
- `ui/main`: dashboard, role-aware cards, workspace switch, sync trigger.
- `ui/patient/BuyMedicineActivity`: billing cart, discount, payment mode, QR, barcode scan, stock reduction.
- `ui/admin`: admin-only inventory, staff invites, categories, reports, backup.
- `ui/settings`: admin-editable global settings; non-admins see restricted fields.
- `data/local`: SQLite schema and cursor mapping.
- `data/repository`: local-first repositories that call Firebase sync after writes.
- `data/remote`: Firebase Auth, workspace, data sync, global settings, signals.
- `util`: barcode scanner, QR, PDF/share, file, session, security helpers.

## VyaparSetu Mapping

- Patient -> Customer
- Visit -> Sale
- Medicine -> Product
- Clinic -> Store
- Doctor/Staff/Manager/Admin -> Staff/Manager/Admin shop roles
- Pharmacy billing -> Counter billing
- Medicine inventory -> Product stock
- Clinic settings -> Store settings
- Clinic reports -> Sales history and analytics

## Current VyaparSetu Structure

- `MainActivity.kt`: app entry, permission/login gate, Ramm-style home navigation, and shared header.
- `core/model`: product, customer, sale, cart item, stats, sales reports.
- `core/local/StoreDatabase.kt`: local SQLite store database.
- `core/repository/BillingRepository.kt`: local-first billing and inventory operations.
- `core/remote/StoreFirebaseSync.kt`: Firebase hooks for products, customers, sales, settings, staff invites.
- `core/auth`: Firebase Auth session setup, workspace switching, and invitation accept flow.
- `core/session`: role session and admin-controlled store settings.
- `core/barcode/FastBarcodeScanner.kt`: CameraX + ML Kit scanner based on Ramm scanner behavior.
- `core/backup`: local database backup and restore.
- `core/share`: invoice text sharing through FileProvider.
- `core/signals`: store staff signal send/fetch workflow.
- `ui/screens`: permission, login, home, billing, inventory, history, admin tools, settings, role, workspace, and signal screens.
- `ui/components`: shared stats cards, product rows, cart rows, scanner panel, QR dialog, restricted notice.

## Access Rules Ported from Ramm

- Admin can manage inventory, settings, staff invites, sync, and full history.
- Manager and Staff can create bills.
- Non-admin users can inspect synced settings/products but cannot edit admin-controlled fields.
- Repository methods enforce the same restrictions as the UI.

## Still To Build For Full Ramm Parity

- PDF invoice rendering. VyaparSetu currently shares a clean text invoice.
- Realtime signal listener and notification service. VyaparSetu currently has a send/fetch signal screen.
- Production Firebase Database security rules and validation for shared stores.
- Safer database migration path before release. Current schema reset behavior is acceptable only for early development.
