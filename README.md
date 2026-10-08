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
<!-- Maybe too much duplication with Technologies below. Previously I have used this section to be a bit more detailed and lift out specific elements, and then kept the technologies as a simple list. -->


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
| Technology     | Used for                           |
| -------------- | ---------------------------------- |
| Next.js        | User interface & Server Components |
| TypeScript     | Type safety                        |
| Tailwind       | Styling                            |
| Neon           | PostgreSQL Database                |
| NextAuth       | Authentication                     |
| Prisma         | ORM                                |
| Zod            | Data validation                    |
| Zustand        | Styling                            |

## Project Status

## :open_file_folder: Project structure
Putting the whole `app` tree here so we can see what we are working with. There are some unused pages to remove and maybe other changes. Then once that is done we can generate another tree and trim off the less relevant branches.
I think we should also probably include `auth.ts` and `prisma/schema.prima`. Anything else that should be here from outside of `app`?
```
.
├── README.md
└── app
    ├── account
    │   └── page.tsx
    ├── actions
    │   └── auth.ts
    ├── actions.ts
    ├── admin
    │   ├── add-product
    │   │   └── page.tsx
    │   ├── edit-product
    │   │   └── [productid]
    │   │       └── page.tsx
    │   ├── layout.tsx
    │   └── page.tsx
    ├── api
    │   └── auth
    │       └── [...nextauth]
    │           └── route.ts
    ├── cart
    │   └── page.tsx
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
    ├── db-test
    │   └── page.tsx
    ├── db.ts
    ├── design
    │   ├── assets
    │   │   ├── arrow.svg
    │   │   ├── heart.svg
    │   │   ├── line.svg
    │   │   ├── splash1.svg
    │   │   ├── splash2.svg
    │   │   ├── splash3.svg
    │   │   ├── swoop.svg
    │   │   └── user.svg
    │   └── page.tsx
    ├── generated
    │   └── prisma
    │       ├── browser.ts
    │       ├── client.ts
    │       ├── commonInputTypes.ts
    │       ├── enums.ts
    │       ├── internal
    │       │   ├── class.ts
    │       │   ├── prismaNamespaceBrowser.ts
    │       │   └── prismaNamespace.ts
    │       ├── models
    │       │   ├── Account.ts
    │       │   ├── Category.ts
    │       │   ├── Product.ts
    │       │   ├── Review.ts
    │       │   ├── Session.ts
    │       │   ├── User.ts
    │       │   └── VerificationToken.ts
    │       └── models.ts
    ├── generate-icon.tsx
    ├── globals.css
    ├── icon.png
    ├── layout.tsx
    ├── lib
    │   ├── api.ts
    │   └── utils.ts
    ├── login
    │   └── page.tsx
    ├── not-found.tsx
    ├── page.tsx
    ├── product
    │   └── [id]
    │       └── page.tsx
    ├── profile
    │   ├── LogoutButton.tsx
    │   └── page.tsx
    ├── register
    │   └── page.tsx
    ├── store
    │   └── cartStore.ts
    ├── types
    │   └── next-auth.d.ts
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
