
import Link from "next/link";


export default function ProductDetailsPage()
{
    return(
        <div>
            <h1 className="text-3xl"> Product details page </h1>

            {/* Temporary link below */}
            <br/>
            <Link href="/" className="underline"> Back to home page </Link>
        </div>
    );
}