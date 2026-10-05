
import Image from "next/image";
import Arrow from "@/design/assets/arrow.svg";
import { Button } from "@/components/customer/Button";
import { PrismaProduct, Product } from "@/types";
import ProductCard from "@/components/customer/products/ProductCard";


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


const user1: StaticUser = {
    id: 1,
    userName: "Kalle",
    // profilePic: "",
    favorites: [
        {   // Favorite product 1
            id: 126,
            title: "Oppo F19 Pro Plus",
            description: "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities...",
            categoryId: 14,
            price: 399.99,
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
        }
    ]
}



export default function MyAccountPage()
{
    const user: StaticUser = user1;

    // Tailwind styling variables
    const sectionStyling: string = "min-w-96 border";

    return(
        <main className="flex flex-1 flex-row gap-4
                        max-w-7xl mx-auto px-6">

            <section aria-labelledby="my-account-heading" className={sectionStyling}>
                <h1 id="my-account-heading" className="h2 text-primary self-center"> My account </h1>

                <h3 className="h3"> {user.userName} </h3>

                <Image src={user.profilePic || "/file.svg"} alt="" width={150} height={150} />

                <Button variant="secondary" icon={<Arrow />} iconPosition="right"> Log out </Button>
            </section>

            <section aria-labelledby="favorites-heading" className={sectionStyling}>
                <h2 id="favorites-heading" className="h2 text-primary self-center"> Favorites </h2>

                <ul>
                {   user.favorites && user.favorites.map( (favProduct) => (
                        <li key={favProduct.id} aria-label={favProduct.title} >
                            <ProductCard {...favProduct} />
                        </li>
                    ) )
                }
                </ul>
            </section>

            <section aria-labelledby="purchase-history-heading" className={sectionStyling}>
                <h2 id="purchase-history-heading" className="h2 text-primary self-center"> Purchase history </h2>
            </section>
        </main>
    );
}