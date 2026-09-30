import { ImageGallery } from "@/components/ImageGallery";
import Link from "next/link";

export default function ProductDetailsPage() {
  const imageArray = [
    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      alt: "Placeholder product image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      alt: "Placeholder product image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      alt: "Placeholder product image 3",
    },
    {
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      alt: "Placeholder product image 4",
    },
    {
      src: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561",
      alt: "Placeholder product image 5",
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
