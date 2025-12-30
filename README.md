# Looking Good — Starter UI

This adds initial folder structure and base components for the Looking Good menswear storefront built with React + Vite + Tailwind.

Files created:

- src/components/layout: Navbar, Footer, Sidebar
- src/components/ui: Button, Card, Input
- src/components/features/shop: ProductGrid, ProductFilter, CartDrawer
- src/pages: Home, Shop, ProductDetail, Checkout
- src/hooks: useCart
- src/context: CartContext
- src/styles: tailwind.css

Next steps:

- Install dependencies and run locally (see commands below)
- Wire Tailwind config using the included `tailwind.config.cjs` and `postcss.config.cjs`

Custom Fonts

- Fonts placed in `src/assets/fonts` are auto-registered in `src/styles/tailwind.css` via `@font-face`.
- Available Tailwind font utilities: `font-display` (Casko Luxury), `font-elegant` (Orange Avenue), `font-condensed` (Ruby Ring), `font-body` (Rooster), and `font-brand` (Briqusion).
- Use in JSX: `<h1 className="font-display">Heading</h1>`

Local setup & run

1. Install dependencies:

   npm install

2. Start dev server:

   npm run dev

3. Visit http://localhost:5173 in your browser
