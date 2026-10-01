import { Button } from "@/components/customer/Button";
import { ImageGallery } from "@/components/customer/ImageGallery";
import Image from "next/image";
import { getProducts } from "@/lib/api";
import Link from "next/link";
import NotFound from "@/not-found";

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  const productId = Number(id);

  const productsResponse = await getProducts({
    limit: 1,
    filter: {
      id: productId,
    },
    expand: ["category"],
  });

  const product = productsResponse.products[0];

  if (!product) {
    return <NotFound />;
  }

  const imageArray = [
    {
      src: product.images,
      alt: product.title,
    },
  ];

  // const imageArray = [
  //   {
  //     src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  //     alt: "Placeholder product image 1",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  //     alt: "Placeholder product image 2",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  //     alt: "Placeholder product image 3",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  //     alt: "Placeholder product image 4",
  //   },
  //   {
  //     src: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561",
  //     alt: "Placeholder product image 5",
  //   },
  // ];

  const galleryImages = product.images.map((src) => ({
    src,
    alt: product.title,
  }));
  console.log("product page: ", product);

  return (
    <div className="bg-[url('/assets/splash3.svg')] bg-cover">
      <h1 className="text-3xl"> Product details page </h1>
      <div className="max-w-270 flex mx-auto flex-col md:flex-row gap-4 mb-20 md:my-40 p-4 justify-between">
        {/* left panel */}
        <div className="md:w-2/3">
          <ImageGallery images={galleryImages} />
        </div>

        {/* Right panel */}
        <div className="flex flex-1 flex-col justify-between items-end text-right">
          <div>
            <h2>{product.title}</h2>
            <p className="text-secondary">{product.category?.name}</p>
          </div>
          <p className="font-heading text-6xl">€{product.price}</p>
          <p className="max-w-[50ch]">
            {product.description}
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
          <p>{product.description}</p>
          <p>Height: {product.height}</p>
          <p>Width: {product.width}</p>
          <p>Depth: {product.depth}</p>
          <p>Availability: {product.availabilityStatus}</p>
          {/* <p>Discount percentage: {product.discountPercentage}% off</p> */}

          <p>Reviews: {product.reviews?.toString()}</p>
        </div>

        {/* Temporary link below */}
        <Link href="/" className="underline">
          Back to home page
        </Link>
      </div>
    </div>
  );
}
