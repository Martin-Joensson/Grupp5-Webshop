import Link from "next/link";
import Image from "next/image";

import { ProductWithIncludes } from "@/types";
import { getProduct } from "@/lib/api";
import { toEurosString } from "@/lib/utils";

import Heart from "@/design/assets/heart.svg";
import Background from "@/design/assets/splash3.svg";
import Background2 from "@/design/assets/splash1.svg";
import { Button } from "@/components/customer/Button";
import LogoutButton from "@/profile/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import { redirect } from "next/navigation";
import ProductCard from "@/components/customer/products/ProductCard";

interface StaticUser {
  id: number;
  userName: string;
  profilePic?: string;
  favorites?: ProductWithIncludes[];
  purchaseHistory?: Purchase[];
}
// Purchase interface to be used in purchase history.
interface Purchase {
  id: number;
  date: string;
  priceWhenBought: number;
  product: ProductWithIncludes;
}

// Temporary and static product data.
const ids = [126, 145, 42, 11, 99];
const productsInCart: ProductWithIncludes[] = [];

for (const id of ids) {
  const product = await getProduct(id);

  if (product) {
    productsInCart.push(product);
  }
}

const user1: StaticUser = {
  id: 1,
  userName: "Kalle",
  favorites: [productsInCart[0], productsInCart[2]],
  purchaseHistory: [
    {
      id: 1,
      date: "2026-9-24",
      priceWhenBought: 5999, //in cents, not full euros
      product: productsInCart[1],
    },
    {
      id: 2,
      date: "2026-9-24",
      priceWhenBought: 1114, //in cents, not full euros
      product: productsInCart[4],
    },
    {
      id: 3,
      date: "2026-9-24",
      priceWhenBought: 147, //in cents, not full euros
      product: productsInCart[3],
    },
  ],
};

// Page with your account. If not logged in, user is redirected to login page. Account page path: `/account`
export default async function MyAccountPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user: StaticUser = user1;

  const placeHolder = `https://api.dicebear.com/10.x/thumbs/svg?bodyProbability=100&shapeColor=c79844,556d92,541413&scale=0.99&backgroundColor=c79844,313d55,556d92,10151a,f2f1eb&seed=${session.user.name}`;

  return (
    <main className="flex flex-wrap gap-6 justify-between  max-w-7xl mx-auto py-6 px-4">
      <Background2 className="fixed -z-10  top-[-10%] right-0 text-soft/40 rotate-130 w-270" />
      <Background className="fixed -z-10  top-[70%] right-0 text-soft/40 rotate-10 w-400" />
      {/* Section with info about the users account */}
      <section
        aria-labelledby="my-account-heading"
        className="max-w-70 text-center mx-auto"
      >
        <h1 id="my-account-heading" className="h2 text-brand-darkblue">
          My account
        </h1>

        <div className="">
          <h2 className="font-heading font-bold text-5xl text-secondary">
            {session.user.name}
          </h2>
          <p className="text-secondary"> {session.user.email} </p>
          {
            // Shows ADMIN tag if user is an admin
            session.user.role == "ADMIN" && (
              <span
                className="block mx-auto text-lg text-accent font-bold"
                aria-label="Logged in as an admin"
              >
                {session.user.role}
              </span>
            )
          }
          {session.user.role == "ADMIN" && (
            <Link
              href="/admin"
              className="text-md font-medium text-secondary underline  transition-opacity hover:opacity-60"
            >
              Go to admin page
            </Link>
          )}
          <Image
            src={session.user.image || placeHolder}
            alt="User profile picture"
            width={200}
            height={200}
            unoptimized
            className="mx-auto my-6 border border-secondary rounded-xl"
          />
          <LogoutButton />
        </div>
      </section>

      {/* Section with the users saved favorite products */}
      <section aria-labelledby="favorites-heading" className="mb-40 mx-auto">
        <h2 id="favorites-heading" className="h2 text-primary">
          Favorites
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 center">
          {user.favorites &&
            user.favorites.map((favProduct) => (
              <li className="flex flex-col gap-4 max-w-80" key={favProduct.id}>
                {/* <FavProductCard product={favProduct} /> */}
                <ProductCard
                  id={favProduct.id}
                  title={favProduct.title}
                  thumbnail={favProduct.thumbnail}
                  category={favProduct.category}
                  description={favProduct.description}
                  price={favProduct.price}
                />
                <Button
                  variant="tertiary"
                  iconPosition="right"
                  fullWidth
                  icon={<Heart />}
                >
                  Unfavorite
                </Button>
              </li>
            ))}
        </ul>
      </section>

      {/* Section with the users purchase history */}
      <section
        aria-labelledby="purchase-history-heading"
        className="mb-40 mx-auto"
      >
        <h2 id="purchase-history-heading" className="h2 text-primary">
          Purchase history
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 center">
          {user.purchaseHistory &&
            user.purchaseHistory.map((prevPurchase) => (
              <li className="max-w-80" key={prevPurchase.id}>
                {/* <PrevPurchaseCard purchase={prevPurchase} />
                    {console.log(prevPurchase)} */}
                <ProductCard
                  id={prevPurchase.product.id}
                  title={prevPurchase.product.title}
                  thumbnail={prevPurchase.product.thumbnail}
                  category={prevPurchase.product.category}
                  description={prevPurchase.product.description}
                  price={prevPurchase.product.price}
                  datePurchased={prevPurchase.date}
                  purchasedPrice={prevPurchase.priceWhenBought}
                />
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}

// const cardStyling: string = "grid gap-2 glass p-2 rounded-2xl max-w-96";

// A productcard variant for the users favorite product.
// function FavProductCard({ product }: { product: ProductWithIncludes }) {
//   const { id, title, description, category, price, thumbnail } = product;

//   return (
//     <article className={cardStyling} aria-labelledby={`fav-prod-title-${id}`}>
//       <Image
//         src={thumbnail}
//         alt=""
//         width={300}
//         height={300}
//         className="justify-self-center"
//       />

//       <Link
//         href={`/product/${id}`}
//         className="hover:underline hover:text-primary"
//       >
//         <h3 id={`fav-prod-title-${id}`} className="h3">
//           {title}
//         </h3>
//       </Link>

//       <p className="text-s text-secondary"> {category?.name} </p>
//       <p className="line-clamp-3 text-s leading-4 text-primary">
//         {description}
//       </p>

//       <div className="flex justify-between items-center">
//         <p className="font-heading text-xl text-price">
//           {toEurosString(price)}
//         </p>

//         <Button variant="tertiary" iconPosition="right" icon={<Heart />}>
//           Unfavorite
//         </Button>
//       </div>
//     </article>
//   );
// }

// A productcard variant for the users previous purchases in their purchase history.
// function PrevPurchaseCard({ purchase }: { purchase: Purchase }) {
//   const { id, title, description, category, thumbnail } = purchase.product;

//   return (
//     <article
//       className={cardStyling}
//       aria-labelledby={`prev-purchase-title-${id}`}
//     >
//       <Image
//         src={thumbnail}
//         alt=""
//         width={300}
//         height={300}
//         className="justify-self-center"
//       />

//       <Link
//         href={`/product/${id}`}
//         className="hover:underline hover:text-primary"
//       >
//         <h3 id={`prev-purchase-title-${id}`} className="h3">
//           {" "}
//           {title}{" "}
//         </h3>
//       </Link>

//       <p className="text-s text-secondary"> {category?.name} </p>
//       <p className="line-clamp-3 text-s leading-4 text-primary">
//         {" "}
//         {description}{" "}
//       </p>

//       <div className="flex justify-between">
//         <p className="font-heading text-xl text-price">
//           {" "}
//           Paid: {toEurosString(purchase.priceWhenBought)}{" "}
//         </p>
//         <p className="font-heading text-xl text-primary"> {purchase.date} </p>
//       </div>
//     </article>
//   );
// }
