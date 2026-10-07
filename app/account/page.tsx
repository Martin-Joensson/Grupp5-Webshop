
import Link from "next/link";
import Image from "next/image";

import { ProductWithIncludes } from "@/types";
import { getProduct } from "@/lib/api";
import { toEurosString } from "@/lib/utils";

import Heart from "@/design/assets/heart.svg";
import { Button } from "@/components/customer/Button";
import LogoutButton from "@/profile/LogoutButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";
import { redirect } from "next/navigation";



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
const ids = [126, 145, 42];
const productsInCart: ProductWithIncludes[] = [];

for (const id of ids)
{
    const product = await getProduct(id);

    if (product) {
        productsInCart.push(product);
    }
}


const user1: StaticUser = {
    id: 1,
    userName: "Kalle",
    favorites: [ productsInCart[0], productsInCart[2] ],
    purchaseHistory: [
        {
            id: 1,
            date: "2026-9-24",
            priceWhenBought: 5999, //in cents, not full euros
            product: productsInCart[1]
        }
    ]
}


// Tailwind styling variables
const sectionStyling: string = "min-w-96";
const cardStyling: string = "border border-gray-300 rounded-2xl";


// Page with your account. If not logged in, user is redirected to login page. Account page path: `/account`
export default async function MyAccountPage()
{
    const session = await getServerSession(authOptions);
    
      if (!session) {
        redirect("/login");
      }

    const user: StaticUser = user1;

    return(
        <main className="grid grid-cols-3 gap-6   max-w-7xl mx-auto px-6">

            {/* Section with info about the users account */}
            <section aria-labelledby="my-account-heading" className={`${sectionStyling} text-center`}>
                <h1 id="my-account-heading" className="h2 text-brand-darkblue"> My account </h1>

                <div className={`${cardStyling} w-max mx-auto px-12 pb-5 pt-3`} >
                    <h3 className="h3 text-secondary text-center"> {session.user.name} </h3>

                    <p className="text-secondary"> {session.user.email} </p>

                    {   // Shows ADMIN tag if user is an admin
                        session.user.role == "ADMIN" &&
                        <p className="mx-auto text-lg text-accent font-bold"> {session.user.role} </p>
                    } {
                        session.user.role == "ADMIN" &&
                        <Link href="/admin" className="text-md font-medium text-secondary underline  transition-opacity hover:opacity-60" > Go to admin page </Link>
                    }

                    <Image src={session.user.image || "/file.svg"} alt="User profile image" width={150} height={150} className="mx-auto my-6" />

                    <LogoutButton />
                </div>
            </section>


            {/* Section with the users saved favorite products */}
            <section aria-labelledby="favorites-heading" className={sectionStyling}>
                <h2 id="favorites-heading" className="h2 text-primary"> Favorites </h2>

                <ul className="grid gap-4">
                {   user.favorites && user.favorites.map( (favProduct) => (
                        <li className={`${cardStyling}`} key={favProduct.id}>
                            <FavProductCard product={favProduct} />
                        </li>
                    ) )
                }
                </ul>
            </section>


            {/* Section with the users purchase history */}
            <section aria-labelledby="purchase-history-heading" className={sectionStyling}>
                <h2 id="purchase-history-heading" className="h2 text-primary"> Purchase history </h2>

                <ol>
                {
                    user.purchaseHistory && user.purchaseHistory.map( (prevPurchase) => (
                        <li className={`${cardStyling}`} key={prevPurchase.id} >
                            <PrevPurchaseCard purchase={prevPurchase} />
                        </li>
                    ) )
                }
                </ol>
            </section>
        </main>
    );
}


// A productcard variant for the users favorite product.
function FavProductCard( {product}: {product: ProductWithIncludes} )
{
    const { id, title, description, category, price, thumbnail } = product;


    return(
        <article className="grid gap-2 glass p-2 rounded-2xl" aria-labelledby={`fav-prod-title-${id}`}>
            <Image src={thumbnail} alt="" width={300} height={300} className="justify-self-center" />

            <Link href={`/product/${id}`} className="hover:underline hover:text-primary">
                <h3 id={`fav-prod-title-${id}`} className="h3"> {title} </h3>
            </Link>

            <p className="text-s text-secondary"> {category?.name} </p>
            <p className="line-clamp-3 text-s leading-4 text-primary"> {description} </p>

            <div className="flex justify-between items-center">
                <p className="font-heading text-xl text-price"> {toEurosString(price)} </p>

                <Button variant="tertiary" iconPosition="right"  icon={<Heart/>}>
                    Unfavorite
                </Button>
            </div>
        </article>
    );
}


// A productcard variant for the users previus purchases in their purchase history.
function PrevPurchaseCard( {purchase}: {purchase: Purchase} )
{
    const { id, title, description, category, thumbnail } = purchase.product;

    return(
        <article className="grid gap-2 glass p-2 rounded-2xl" aria-labelledby={`prev-purchase-title-${id}`} >
            <Image src={thumbnail} alt="" width={300} height={300} className="justify-self-center" />

            <Link href={`/product/${id}`} className="hover:underline hover:text-primary">
                <h3 id={`prev-purchase-title-${id}`} className="h3" > {title} </h3>
            </Link>

            <p className="text-s text-secondary"> {category?.name} </p>
            <p className="line-clamp-3 text-s leading-4 text-primary"> {description} </p>

            <div className="flex justify-between">
                <p className="font-heading text-xl text-price"> Paid: {toEurosString(purchase.priceWhenBought)} </p>
                <p className="font-heading text-xl text-primary"> {purchase.date} </p>
            </div>
        </article>
    );
}