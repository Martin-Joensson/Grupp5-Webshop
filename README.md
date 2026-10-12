<img
  src="./app/icon.png"
  alt="Screenshot av applikationen"
  width="60"
/>

# Nagare Webshop
The customer facing side of a webshop, building upon a previous group project [here](https://github.com/Martin-Joensson/projekt-agila-metoder-webshop), which developed the admin side.



## :star: Features
- Browse, filter and search products
- View detailed product information
- Add and remove items from shopping cart
- Register customer account
- Login with admin account to gain access to admin page

## :eye: Demo
Link to deployment

<!--
## :camera: Screenshots
![]()
Caption

---
-->

## :wheel: Under the hood
<!-- Currently too much duplication with Technologies below. Previously I have used this section to be a bit more detailed and lift out specific elements, and then kept the technologies as a simple list. May make more sense to remove this section. -->
- Persistent shopping cart with Zustand
- Authentication with NextAuth
- Data storage with Neon PostgreSQL database + Prisma ORM
- Data validation with Zod
- Filtering and pagination with url state management.


## :arrow_down_small: Installation
To view the webshop page, clone the repo, install dependencies and run a local development server.
```bash
git clone git@github.com:Martin-Joensson/Grupp5-Webshop.git
cd Grupp5-Webshop
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## :sewing_needle: Technologies
- Next.js
- React
- TypeScript
- Tailwind
- Neon
- NextAuth
- Prisma
- Zod
- Zustand

## :white_check_mark: Project progress
<!-- TODO: add more here put in sensible order -->
- [x] Data migration from JSON server to database
- [x] Login as admin required to access admin page
- [x] Customer can search, filter and sort products in product catalog
- [x] Customer can view detailed information about a product
- [x] Customer can add and remove products from their cart
- [ ] Admin can apply discounts to products
- [ ] Customer can review products
- [ ] Customer can add products to favourites

## :open_file_folder: Project structure
```
.
├── README.md
├── auth.ts
├── prisma/schema.prisma
│
└── app
    ├── layout.tsx
    ├── not-found.tsx
    │
    ├── page.tsx
    ├── account / page.tsx
    ├── cart / page.tsx
    ├── login / page.tsx
    ├── product / [id] / page.tsx
    ├── profile
    │   ├── page.tsx
    │   └── LogoutButton.tsx
    ├── register / page.tsx
    │
    ├── admin
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── add-product / page.tsx
    │   └── edit-product / [productid] / page.tsx
    │
    ├── components
    │   ├── admin / ... 
    │   ├── customer / ...
    │   ├── Navbar.tsx
    │   └── Providers.tsx
    │
    ├── actions
    │   └── auth.ts
    ├── actions.ts
    ├── api / auth / [...nextauth] / route.ts
    │
    ├── lib
    │   ├── api.ts
    │   └── utils.ts
    │
    ├── store / cartStore.ts
    ├── types / next-auth.d.ts
    ├── types.ts
    └── utils
        ├── updateFilter.ts
        └── useSession.tsx
```

## :bust_in_silhouette: Authors
- Gabriel Gaglianone ([@Amuga](https://github.com/Amuga))
- Martin Jönsson ([@Martin-Joensson](https://github.com/Martin-Joensson))
- Wilmer Kindstedt ([@wilkin-2005](https://github.com/wilkin-2005))
- Josefin Wall ([@josiefinis](https://github.com/josiefinis))
