
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
const productIds = [126, 145, 42, 11, 99];
const staticProducts: ProductWithIncludes[] = [];

for (const id of productIds)
{
    const product = await getProduct(id);

    if (product) {
        staticProducts.push(product);
    }
}


const user1: StaticUser = {
    id: 1,
    userName: "Kalle",
    favorites: [ staticProducts[0], staticProducts[2] ],
    purchaseHistory: [
        {
            id: 1,
            date: "2026-9-24",
            priceWhenBought: 5999, //in cents, not full euros
            product: staticProducts[1]
        }, {
            id: 2,
            date: "2026-9-24",
            priceWhenBought: 1114, //in cents, not full euros
            product: staticProducts[4]
        }, {
            id: 3,
            date: "2026-9-24",
            priceWhenBought: 147, //in cents, not full euros
            product: staticProducts[3]
        },
    ]
}


// Tailwind styling variables
const sectionStyling: string = "min-w-96";
const borderStyling: string = "border border-gray-300 rounded-2xl";
const listStyling: string = "flex flex-wrap gap-4";


// Page with your account. If not logged in, user is redirected to login page. Account page path: `/account`
export default async function MyAccountPage()
{
    const session = await getServerSession(authOptions);

      if (!session) {
        redirect("/login");
      }

    const user: StaticUser = user1;
    const {name: userName, email: userEmail, role: userRole, image: accountImg} = session.user;

    return(
        <main aria-label="My account page" className="flex flex-wrap gap-6   max-w-7xl mx-auto px-6 mb-8">

            {/* Section with info about the users account */}
            <section aria-labelledby="my-account-heading" className={`${sectionStyling} xl:text-center`}>
                <h1 aria-level={2} id="my-account-heading" className="h2 text-brand-darkblue"> My account </h1>

                <div className={`${borderStyling} w-max mx-0 px-12 pb-5 pt-3 xl:mx-auto`} >
                    <h3 aria-label={`Account name: ${userName}`} className="h3 text-secondary text-center"> {userName} </h3>

                    <p aria-label={`Account email:`} className="text-secondary"> {userEmail} </p>

                    {/* Shows ADMIN tag and link to admin page if user is an admin */}
                    {
                        userRole == "ADMIN" &&
                        <span className="block mx-auto text-lg text-accent font-bold" aria-label="Logged in as an admin"> {userRole} </span>
                    } {
                        userRole == "ADMIN" &&
                        <Link href="/admin" className="text-md font-medium text-secondary underline  transition-opacity hover:opacity-60" > Go to admin page </Link>
                    }

                    <Image src={accountImg || "/file.svg"} alt="User profile picture" width={150} height={150} className="mx-auto my-6" />

                    <LogoutButton />
                </div>
            </section>


            {/* Section with the users saved favorite products */}
            <section aria-labelledby="favorites-heading" className={sectionStyling}>
                <h2 id="favorites-heading" className="h2 text-primary"> Favorites </h2>

                <ul className={listStyling} >
                {   user.favorites && user.favorites.map( (favProduct) => (
                        <li className={`${borderStyling}`} key={favProduct.id} aria-labelledby={`fav-prod-title-${favProduct.id}`} >
                            <FavProductCard product={favProduct} />
                        </li>
                    ) )
                }
                </ul>
            </section>


            {/* Section with the users purchase history */}
            <section aria-labelledby="purchase-history-heading" className={sectionStyling}>
                <h2 id="purchase-history-heading" className="h2 text-primary"> Purchase history </h2>

                <ol className={listStyling} >
                {
                    user.purchaseHistory && user.purchaseHistory.map( (prevPurchase) => (
                        <li className={`${borderStyling}`} key={prevPurchase.id} aria-labelledby={`prev-purchase-title-${prevPurchase.product.id}`} >
                            <PrevPurchaseCard purchase={prevPurchase} />
                        </li>
                    ) )
                }
                </ol>
            </section>
        </main>
    );
}



const cardStyling: string = "grid gap-2 glass p-2 rounded-2xl max-w-96";


// A productcard variant for the users favorite product.
function FavProductCard( {product}: {product: ProductWithIncludes} )
{
    const { id, title, category, price, thumbnail } = product;


    return(
        <article className={cardStyling} aria-labelledby={`fav-prod-title-${id}`}>
            <Image src={thumbnail} alt="" width={300} height={300} className="justify-self-center" />

            <Link href={`/product/${id}`} className="hover:underline hover:text-primary" aria-label="Go to product details page">
                <h3 id={`fav-prod-title-${id}`} className="h3 truncate"> {title} </h3>
            </Link>

            <p aria-label={`Category: ${category.name}`} className="text-s text-secondary"> {category?.name} </p>

            <div className="flex justify-between items-center">
                <p aria-label={`Price: ${toEurosString(price)}`} className="font-heading text-xl text-price"> {toEurosString(price)} </p>

                <Button variant="tertiary" iconPosition="right"  icon={<Heart/>}>
                    Unfavorite
                </Button>
            </div>
        </article>
    );
}


// A productcard variant for the users previous purchases in their purchase history.
function PrevPurchaseCard( {purchase}: {purchase: Purchase} )
{
    const { id, title, category, thumbnail } = purchase.product;

    return(
        <article className={cardStyling} aria-labelledby={`prev-purchase-title-${id}`} >
            <Image src={thumbnail} alt="" width={300} height={300} className="justify-self-center" />

            <Link href={`/product/${id}`} className="hover:underline hover:text-primary" aria-label="Go to product details page">
                <h3 id={`prev-purchase-title-${id}`} className="h3 truncate" > {title} </h3>
            </Link>

            <p aria-label={`Category: ${category.name}`} className="text-s text-secondary"> {category?.name} </p>

            <div className="flex justify-between">
                <p className="font-heading text-xl text-price"> {`Paid: ${toEurosString(purchase.priceWhenBought)}`} </p>
                <p className="font-heading text-xl text-primary" aria-label={`Purchased: ${purchase.date}`} > {purchase.date} </p>
            </div>
        </article>
    );
}