# LITE.SHOP — React Workshop 1

A work-in-progress React recreation of the storefront in the reference `index.html`, using Vite, TypeScript, Tailwind CSS and Lucide icons.

## Getting started

Use Node.js 20.19 or later on the 20.x line, or Node.js 22.12 or later.

```bash
cd app
npm ci
npm run dev
```

Open the local address printed by Vite. The reference design is the `index.html` in the repository root.

## Components and props

- `App` holds the sample product data and combines the page components.
- `Header` displays the shop name, navigation, search field and icons.
- `FilterSidebar` displays the category, price and availability controls and the sale panel.
- `ProductCard` receives a typed `product` prop from `App` and displays its image, category, name, rating, prices, badge and availability. The `soldOut` value controls the card's appearance and disables its action.
- `Pagination` displays the reference page navigation.
- `Newsletter` displays the newsletter section and its unavailable sign-up form.
- `Footer` displays the brand, social icons and grouped links.

Passing product data as props lets the same card display different products without repeating its layout. `App` creates a card for each item in the product array.

## Current scope

The page includes the header, filter panel, six reference products, pagination, newsletter section and footer. The controls and links are visual placeholders: searching, filtering, sorting, navigation, cart and favorites do not yet perform actions. Pagination and newsletter sign-up are unavailable. Product images are loaded from Unsplash as in the reference.

## Checks

From the `app` directory:

```bash
npm test
npm run lint
npm run build
```
