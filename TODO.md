# TODO

## Bugs

- [ ] Color/size selection in `ProductDetails` isn't captured — `ProductOptions` renders but selected values are never stored or passed to `CartItem` on add
- [ ] `addToCart` in `CartProvider` always appends a new entry — adding the same product twice creates duplicates instead of incrementing quantity
- [ ] Cart total doesn't consistently format decimals (some places use `.toFixed(2)`, others don't)

## Features

- [ ] **Checkout flow** — no checkout route, form, or order submission exists yet
- [ ] **Order confirmation page** — post-checkout screen
- [ ] **Cart persistence** — cart resets on page refresh; wire up `localStorage`
- [ ] **Account section** — `/account`, `/account/orders`, `/account/settings` routes are planned but not built
- [ ] **Order history** — list of past orders under account

## Code Quality

- [ ] `src/lib/useCart.ts` is empty — implement or remove
- [ ] Remove `muiCard` boolean toggle in `ProductCard.tsx` and delete the dead non-MUI code path
- [ ] Clean up leftover `console.log` / `console.info` calls in `CatalogProvider`, `Home`
- [ ] Remove placeholder comments (`// thing`, `// hello`, stray `//`)
- [ ] Purge large commented-out blocks in `App.tsx`, `FilterOptions.tsx`, `Home.tsx`, `Products.tsx`, `SideNav.tsx`

## Improvements

- [ ] Responsiveness — layout needs mobile/tablet breakpoints
- [ ] Accessibility — audit for keyboard nav, focus management, ARIA labels
- [ ] Add tests
- [ ] Add CI/CD
