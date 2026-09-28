import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage() {
  return (
    <div>
      <h1 className="text-3xl"> Product details page </h1>
      <div className="flex flex-col md:flex-row items-stretch gap-4 mb-20 p-4 justify-between">
        <Image
          className="object-fit shrink max-w-200 max-h-200"
          src="https://placehold.co/600x400"
          width="600"
          height="400"
          alt=""
          unoptimized
        />
        {/* Right panel */}
        <div className="flex flex-1 flex-col justify-between items-end text-right">
          <div>
            <h2>Product Name</h2>
            <p className="text-secondary">Category</p>
          </div>
          <p className="font-heading text-6xl">€ 123</p>
          <p className="max-w-[50ch]">
            Short description: The Essence Mascara Lash Princess is a popular
            mascara known for its volumizing and lengthening effects. Achieve
            dramatic lashes with this long-lasting and cruelty-free formula.
          </p>
          <div className="button-cluster flex gap-4 justify-end">
            <Button variant="tertiary" iconPosition="right">
              Favorite
            </Button>
            <Button variant="primary" iconPosition="right">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div>
        {/* banner */}
        <div className="w-1/2 bg-primary rounded-tr-[8rem] rounded-br-lg h-20 flex  p-4 items-center text-center text-light font-heading text-2xl">
          <p>More information</p>
        </div>
        <div className="p-4 flex flex-col gap-10">
          <p>Long description</p>
          <p>Reviews</p>
        </div>
      </div>

      {/* Temporary link below */}
      <Link href="/" className="underline">
        Back to home page
      </Link>
    </div>
  );
}
