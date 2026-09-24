
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";


export default function CartPage()
{
    return(
        <main className="max-w-7xl w-full mx-auto">

            <section aria-label="Cart summary" className="mx-auto">
                <div className="text-cyan-950 text-5xl font-black text-center my-8">
                    <p> Total: € 471 </p>
                    <p> Subtotal: € 471 </p>
                </div>

                <div className="flex gap-4 justify-center my-8">
                    <button type="button" className="text-white bg-yellow-600 p-2 rounded-md"> Back </button>
                    <button type="button" className="text-white bg-yellow-600 p-2 rounded-md"> Checkout </button>
                </div>
            </section>

            <section aria-labelledby="cart-list-heading">
                <h2 id="cart-list-heading" className="text-cyan-950 text-3xl font-black text-center my-4"> My cart </h2>

                <div className="flex flex-col gap-6">
                    <CartItem />
                    <CartItem />
                </div>
            </section>

        </main>
    );
}



function CartItem() // { product }:{ product: Product }
{
    return(
        <article className="flex justify-between gap-4 bg-white p-4 w-full" >
            <Image src="/file.svg" alt="" width={300} height={300} 
                className="max-w-24" />
            <h3> Product title </h3>

            <div>
                <label htmlFor="quantity-input"> Quantity (minimum 1) </label>
                <input type="number" id="quantity-input" name="quantity" min="1" defaultValue="2" />
            </div>

            <div>
                <p> Per product: €9.99 </p>
                <p> For all products: €19.98 </p>
            </div>
        </article>
    );
}