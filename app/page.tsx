
import Link from "next/link";


export default function HomePage()
{
    return(
        <div>
            <h1 className="text-3xl"> Webshop Home page </h1>

            {/* Temporary links below */}
            <br/>
            <Link href="/product/id" className="underline"> Go to product details page </Link>
            <br/>
            <Link href="/cart" className="underline"> Go to Cart page </Link>
            <br/>
            <Link href="/admin" className="underline"> Go to Admin page </Link>
        </div>
    );
}