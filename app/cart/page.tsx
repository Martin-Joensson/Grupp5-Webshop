
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";


export default function CartPage()
{
    // Temporary and static product data.
    const product1: Product = {
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
    };

    const product2: Product = {
        id: 145,
        title: "Cricket Wicket",
        description: "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket...",
        categoryId: 15,
        price: 29.99,
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
        price: 0.99,
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

    // Array with products in the cart.
    const productsInCart: Product[] = [ product1, product2, product3 ];


    return(
        <>
            <header className="bg-zinc-300 h-18">
                <h1 className=" text-3xl mbs-3 my-auto ms-8"> Nagare temp header </h1>
            </header>

            <main className="max-w-7xl w-full mx-auto">

                {/* Summary of the cart with total and subtotal pricing and buttons for going to checkout or back to product catalog. */}
                <section aria-label="Cart summary" className="mx-auto">
                    <div className="text-5xl text-cyan-950 font-black text-center my-8">
                        <p> Total: € 471 </p>
                        <p> Subtotal: € 471 </p>
                    </div>

                    <div className="flex gap-4 justify-center my-8">
                        <Link href="/" className="text-white bg-yellow-600 p-2 rounded-md"> Back </Link>
                        <button type="button" className="text-white bg-yellow-600 p-2 rounded-md"> Checkout </button>
                    </div>
                </section>

                {/* Creates a list-item with an CartItem for each product in the shopping cart. */}
                <section aria-labelledby="cart-list-heading">
                    <h2 id="cart-list-heading" className="text-cyan-950 text-3xl font-black text-center my-4"> My cart </h2>

                    <ul className="flex flex-col gap-6">
                        { productsInCart.map( (cartProduct) => (
                                <li key={cartProduct.id}>
                                    <CartItem product={cartProduct} />
                                </li>
                            ))
                        }
                    </ul>
                </section>

            </main>
        </>
    );
}


// A component for products in the cart to be placed in a <li> in the <ul> that makes up the shopping cart.
function CartItem( { product }:{ product: Product } )
{
    const quantity: number = 2;

    return(
        <article className="bg-white p-4 w-full flex gap-4 justify-between" >

            {/* Image and title of product */}
            <div className="flex items-center gap-4 w-72">
                <Image src={product.thumbnail} alt="" width={300} height={300} className="max-w-20 border" />
                <h3 className="text-cyan-950 font-black text-center"> {product.title} </h3>
            </div>

            {/* The products discount */}
            <div className="flex items-center">
                <p>{product.discountPercentage}% off</p>
            </div>

            <div className="flex gap-10 items-center">
                {/* Quantity input field */}
                <div className="grid">
                    <label htmlFor={`quantity-${product.id}`} className="block text-center mbs-auto mbe-2" >
                        Quantity (minimum 1)
                    </label>
                    <input type="number" id={`quantity-${product.id}`} name="quantity" min="1" defaultValue={quantity}
                        className="block border p-2" />
                </div>

                {/* Pricing per product and total for all of this product */}
                <div>
                    <p> Per product: €{product.price} </p>
                    <p> For all products: €{product.price * quantity} </p>
                </div>

                {/* Remove from cart button */}
                <button type="button" className="bg-black text-white p-4 h-10 w-10 rounded-xl flex items-center"> x </button>
            </div>

        </article>
    );
}