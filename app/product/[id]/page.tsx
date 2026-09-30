import { ImageGallery } from "@/components/ImageGallery";
import Link from "next/link";

export default function ProductDetailsPage() {
  const imageArray = [
    {
      src: "https://placehold.co/1200x1200?text=Image+1",
      alt: "Placeholder image 1",
    },
    {
      src: "https://placehold.co/1200x1200?text=Image+2",
      alt: "Placeholder image 2",
    },
    {
      src: "https://placehold.co/1200x1200?text=Image+3",
      alt: "Placeholder image 3",
    },
    {
      src: "https://placehold.co/1200x1200?text=Image+4",
      alt: "Placeholder image 4",
    },
    {
      src: "https://placehold.co/1200x1200?text=Image+5",
      alt: "Placeholder image 5",
    },
  ];
    
  return (
    <div>
      <h1 className="text-3xl"> Product details page </h1>

      <ImageGallery images={imageArray} />

      {/* Temporary link below */}
      <br />
      <Link href="/" className="underline">
        {" "}
        Back to home page{" "}
      </Link>
    </div>
  );
}
