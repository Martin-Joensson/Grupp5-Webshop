
import Link from "next/link";


export default function CartPage()
{
    return(
        <div>
            <h1 className="text-3xl"> Cart page </h1>

            {/* Temporary link below */}
            <br/>
            <Link href="/" className="underline"> Back to home page </Link>
        </div>
    );
}