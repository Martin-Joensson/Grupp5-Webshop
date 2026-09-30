import { Button } from "@/components/Button";
import { ImageGallery } from "@/components/ImageGallery";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsPage() {
  const imageArray = [
    {
      src: "https://placehold.co/600x300",
      alt: "Product front view",
    },
    {
      src: "https://placehold.co/200x200",
      alt: "Product side view",
    },
    {
      src: "https://placehold.co/300x200",
      alt: "Product back view",
    },
    {
      src: "https://placehold.co/400x200",
      alt: "Product detail",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl"> Product details page </h1>
      <div className="max-w-270 flex mx-auto flex-col md:flex-row gap-4 mb-20 md:my-40 p-4 justify-between">
        {/* left panel */}
        <div className="md:w-2/3">
          <ImageGallery images={imageArray} />
        </div>

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

      <div className="relative h-20">
        {/* Banner background */}
        <div className="absolute inset-y-0 left-0 w-3/4 bg-primary rounded-tr-[8rem] rounded-br-lg" />

        {/* Content aligned with the rest of the page */}
        <div className="relative max-w-270 mx-auto p-4 h-full flex items-center">
          <p className="text-light font-heading text-2xl">More information</p>
        </div>

        <div className="max-w-270 mx-auto p-4 flex flex-col gap-10">
          <p>Long description</p>
          <p>Reviews</p>
        </div>

        {/* Temporary link below */}
        <Link href="/" className="underline">
          Back to home page
        </Link>
      </div>
    </div>
  );
}
