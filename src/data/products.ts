export interface Product {
  id: string;
  name: string;
  price: number | null;
  category: string;
  description: string;
  badge?: string;
  colors: string[];
  emoji: string;
  comingSoon?: boolean;
}

export const products: Product[] = [
  // ── Display Stands ──────────────────────────────
  {
    id: "mini-tin-stand-set",
    name: "Mini Tin Stand Set of 8 + Add-on Base",
    price: 900,
    category: "Display Stands",
    description: "Set of 8 mini tin stands plus an add-on base, so your mini tin collection stays organized and on display.",
    badge: "Best Seller",
    colors: ["#E8392A", "#1A1F3A", "#FFD700", "#F8F8FF"],
    emoji: "🗂️",
  },
  {
    id: "universal-slab-stand",
    name: "Universal Slab Stand",
    price: 275,
    category: "Display Stands",
    description: "A versatile stand built to display any graded slab upright on your shelf or desk.",
    colors: ["#1A1F3A", "#C8CDD8", "#FFD700"],
    emoji: "🏆",
  },
  {
    id: "psa-stand",
    name: "PSA Stand",
    price: 100,
    category: "Display Stands",
    description: "A compact stand sized specifically for PSA-graded slabs.",
    colors: ["#C8CDD8", "#1A1F3A"],
    emoji: "🎖️",
  },

  // ── ETB Display Case ────────────────────────────
  {
    id: "etb-case-skeleton",
    name: "ETB Display Case Skeleton",
    price: 650,
    category: "ETB Display Case",
    description: "The frame-only skeleton case for displaying your Elite Trainer Box — acrylic sold separately.",
    colors: ["#1A1F3A", "#C8CDD8"],
    emoji: "📦",
  },
  {
    id: "etb-case-no-acrylic",
    name: "ETB Display Case w/o Acrylic",
    price: 1700,
    category: "ETB Display Case",
    description: "Full-build ETB display case without the acrylic front panel.",
    colors: ["#1A1F3A", "#E8392A", "#C8CDD8"],
    emoji: "🗃️",
  },
  {
    id: "etb-case-with-acrylic",
    name: "ETB Display Case with Acrylic",
    price: 2000,
    category: "ETB Display Case",
    description: "The complete ETB display case with a crystal-clear acrylic front for full protection and visibility.",
    badge: "Popular",
    colors: ["#1A1F3A", "#FFD700", "#C8CDD8"],
    emoji: "✨",
  },

  // ── Graded Slab Bumpers ──────────────────────────
  {
    id: "psa-slab-bumper",
    name: "PSA Slab Bumper",
    price: 100,
    category: "Graded Slab Bumpers",
    description: "Corner bumper protector designed to fit PSA graded slabs perfectly.",
    colors: ["#E8392A", "#1A1F3A", "#FFD700", "#C8CDD8"],
    emoji: "🛡️",
  },
  {
    id: "cgc-slab-bumper",
    name: "CGC Slab Bumper",
    price: 100,
    category: "Graded Slab Bumpers",
    description: "Corner bumper protector designed to fit CGC graded slabs perfectly.",
    colors: ["#1A1F3A", "#E8392A", "#FFD700", "#C8CDD8"],
    emoji: "🛡️",
  },

  // ── Mailers ──────────────────────────────────────
  {
    id: "penny-sleeve-mailer-5",
    name: "Penny Sleeve Mailer (Holds 5)",
    price: null,
    category: "Mailers",
    description: "Compact mailer built to safely ship up to 5 penny-sleeved cards.",
    colors: ["#8890A8"],
    emoji: "✉️",
    comingSoon: true,
  },
  {
    id: "top-loader-mailer-2",
    name: "Top Loader Mailer (Holds 2)",
    price: 300,
    category: "Mailers",
    description: "Sturdy mailer that securely fits 2 top-loaded cards for safe shipping.",
    colors: ["#1A1F3A", "#C8CDD8", "#FFD700"],
    emoji: "📬",
  },
  {
    id: "top-loader-mailer-4",
    name: "Top Loader Mailer (Holds 4)",
    price: 425,
    category: "Mailers",
    description: "Sturdy mailer that securely fits 4 top-loaded cards for safe shipping.",
    colors: ["#1A1F3A", "#C8CDD8", "#FFD700"],
    emoji: "📬",
  },
  {
    id: "graded-slab-mailer",
    name: "Graded Slab Mailer",
    price: 500,
    category: "Mailers",
    description: "Heavy-duty mailer purpose-built to ship graded slabs without a scratch.",
    colors: ["#1A1F3A", "#E8392A", "#C8CDD8"],
    emoji: "📦",
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));