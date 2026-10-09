<img
  src="./app/icon.png"
  alt="Screenshot av applikationen"
  width="60"
/>

# Webshop
A webshop. This was a group project for the frontend education with Lexicon. It builds upon the previous group project [here](https://github.com/Martin-Joensson/projekt-agila-metoder-webshop).

---

## :star: Features
- Browse, filter and search products
- Persistent shopping cart
- Register customer account
- Login with admin account to gain access to admin page

## :eye: Demo
<!-- Link to deployment -->

## :camera: Screenshots
<!-- Maybe remove this section if we have a deployed demo? -->
![]()
Caption

---

## :wheel: Under the hood
<!-- Currently too much duplication with Technologies below. Previously I have used this section to be a bit more detailed and lift out specific elements, and then kept the technologies as a simple list. May make more sense to remove this section. -->
- Persistent shopping cart with Zustand
- Authentication with NextAuth
- Data storage with Neon PostgreSQL database + Prisma ORM
- Data validation with Zod


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
<!-- I think either simplify this to a simple bullet list e.g.
- Next.js
- React
- Typescript
- Tailwind
- Neon
- NextAuth
- Prisma
- Zod
- Zustand

or remove Under the hood section above.
-->
| Technology     | Used for                           |
| -------------- | ---------------------------------- |
| Next.js        | User interface & Server Components |
| React          |                                    |
| TypeScript     | Type safety                        |
| Tailwind       | Styling                            |
| Neon           | PostgreSQL Database                |
| NextAuth       | Authentication                     |
| Prisma         | ORM                                |
| Zod            | Data validation                    |
| Zustand        | Shopping Cart                      |

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
- [ ] $$$

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
    ├── actions
    │   └── auth.ts
    ├── actions.ts
    ├── api / auth / [...nextauth] / route.ts
    │
    ├── components
    │   ├── admin
    │   │   ├── Banner.tsx
    │   │   ├── ConfirmSubmitButton.tsx
    │   │   ├── FilterCard.tsx
    │   │   ├── Modal.tsx
    │   │   ├── Pagination.tsx
    │   │   ├── ProductCard.tsx
    │   │   ├── ProductForm.tsx
    │   │   ├── ProductList.tsx
    │   │   ├── SearchBar.tsx
    │   │   └── Search.tsx
    │   ├── customer
    │   │   ├── AccountLink.tsx
    │   │   ├── AddToCartButton.tsx
    │   │   ├── Button.tsx
    │   │   ├── cart
    │   │   │   ├── CartCount.tsx
    │   │   │   └── CartItem.tsx
    │   │   ├── FilterSection.tsx
    │   │   ├── ImageGallery.tsx
    │   │   ├── LimitDropDown.tsx
    │   │   ├── Pagination.tsx
    │   │   └── products
    │   │       ├── ProductCard.tsx
    │   │       └── ProductList.tsx
    │   ├── Navbar.tsx
    │   └── Providers.tsx
    │
    ├── lib
    │   ├── api.ts
    │   └── utils.ts
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
