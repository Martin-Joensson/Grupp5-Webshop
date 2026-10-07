
import Link from "next/link";
import Image from "next/image";

import { Product} from "@/types";
import { toEurosString } from "@/lib/utils";

import User from "@/design/assets/user.svg";
import Heart from "@/design/assets/heart.svg";
import { Button } from "@/components/customer/Button";



interface StaticUser {
    id: number;
    userName: string;
    profilePic?: string;
    favorites?: Product[];
    purchaseHistory?: Purchase[];
}
// Purchase interface to be used in purchase history.
interface Purchase {
    id: number;
    date: string;
    priceWhenBought: number;
    product: Product;
}

// Temporary and static product data.
const product1: Product = {
    id: 126,
    title: "Oppo F19 Pro Plus",
    description: "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities...",
    categoryId: 14,
    category: {
        id: 14,
        name: "Smartphones",
        slug: "smartphones",
        image: "https://placehold.co/600x400"
    },
    price: 39999,
    discountPercentage: 18.64,
    meta: {
        createdAt: "2025-04-30T09:41:02.054Z",
        updatedAt: "2025-04-30T09:41:02.054Z"
    },
    images: [
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/1.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/2.webp",
        "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/3.webp"
    ],
    thumbnail: "https://cdn.dummyjson.com/product-images/smartphones/oppo-a57/thumbnail.webp"
};

const product2: Product = {
    id: 145,
    title: "Cricket Wicket",
    description: "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket...",
    categoryId: 15,
    category: {
        id: 15,
        name: "Sports Accessories",
        slug: "sports-accessories",
        image: "https://placehold.co/600x400"
    },
    price: 2999,
    discountPercentage: 16.93,
    meta: {
        createdAt: "2025-04-30T09:41:02.054Z",
        updatedAt: "2025-04-30T09:41:02.054Z"
    },
    images: [
        "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp"
    ],
    thumbnail: "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/thumbnail.webp"
};

const product3: Product = {
    id: 42,
    title: "Water",
    description: "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
    categoryId: 4,
    category: {
        id: 4,
        name: "Groceries",
        slug: "groceries",
        image: "https://placehold.co/600x400"
    },
    price: 99,
    discountPercentage: 14.92,
    meta: {
        createdAt: "2025-04-30T09:41:02.053Z",
        updatedAt: "2025-04-30T09:41:02.053Z"
    },
    images: [
        "https://cdn.dummyjson.com/product-images/groceries/water/1.webp"
    ],
    thumbnail: "https://cdn.dummyjson.com/product-images/groceries/water/thumbnail.webp"
};


const user1: StaticUser = {
    id: 1,
    userName: "Kalle",
    // profilePic: "",
    favorites: [ product1, product3 ],
    purchaseHistory: [
        {
            id: 1,
            date: "2026-9-24",
            priceWhenBought: 5999, //in cents, not full euros
            product: product2
        }
    ]
}


// Tailwind styling variables
const sectionStyling: string = "min-w-96";
const cardStyling: string = "border border-gray-300 rounded-2xl";


export default function MyAccountPage()
{
    const user: StaticUser = user1;

    return(
        <main className="grid grid-cols-3 gap-6   max-w-7xl mx-auto px-6">

            {/* Section with info about the users account */}
            <section aria-labelledby="my-account-heading" className={`${sectionStyling} text-center`}>
                <h1 id="my-account-heading" className="h2 text-brand-darkblue"> My account </h1>

                <div >
                    <h3 className="h3 text-secondary text-center"> {user.userName} </h3>

                    <Image src={user.profilePic || "/file.svg"} alt="" width={150} height={150} className="mx-auto my-6" />

                    <Button variant="secondary" icon={<User />} iconPosition="right" className="self-center"> Log out </Button>
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
function FavProductCard( {product}: {product: Product} )
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
                {/* <button className="bg-tertiary text-white" > Unfavorite </button> */}
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