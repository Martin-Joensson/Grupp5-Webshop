
import Link from "next/link";
import { Button } from "./components/Button";


export default function HomePage()
{
    return (
      <div>
        <p className="bg-brand-offwhite text-brand-lightblue font-accent text-2xl">
          Nagare
        </p>
        <h1 className="text-3xl font-accent"> Webshop Home page </h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <div className="bg-brand-almostblack text-brand-offwhite">Color</div>
        <div className="bg-brand-golden text-brand-offwhite">Color</div>
        <div className="bg-brand-darkblue text-brand-offwhite">Color</div>
        <div className="bg-brand-lightblue text-brand-offwhite">Color</div>
        <div className="bg-brand-sand text-brand-offwhite">Color</div>
        <div className="bg-brand-offwhite text-brand-almostblack">Color</div>
        <div className="bg-brand-red text-brand-offwhite">Color</div>
        <div className="bg-brand-almostblack text-brand-offwhite">Color</div>

            <Button variant="primary">Click me</Button>

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