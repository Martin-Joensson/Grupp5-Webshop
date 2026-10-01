import { Button } from "@/components/customer/Button";
import { ImageGallery } from "@/components/customer/ImageGallery";
import { getProduct } from "@/lib/api";
import Link from "next/link";
import NotFound from "@/not-found";
import type { Metadata } from "next";
import { MoreInformationDrawer } from "@/components/customer/products/MoreInformationDrawer";

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: ProductDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const productId = Number(id);
  const product = await getProduct(productId);

  return {
    title: product?.title ?? "Product not found",
  };
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { id } = await params;
  const productId = Number(id);

  const product = await getProduct(productId);

  if (!product) {
    return <NotFound />;
  }

  const imageArray = [
    {
      src: product.images,
      alt: product.title,
    },
  ];

  const galleryImages = product.images.map((src) => ({
    src,
    alt: product.title,
  }));
  console.log("product page: ", product);

  return (
    <div className="bg-[url('/assets/splash3.svg')] bg-cover">
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
          <p className="max-w-[50ch]">{product.description}</p>
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

        <div className="max-w-270 mx-auto p-4 mt-10 flex flex-col gap-6">
          <p>{product.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-secondary">Height</p>
              <p>{product.height}</p>
            </div>

            <div>
              <p className="text-secondary">Width</p>
              <p>{product.width}</p>
            </div>

            <div>
              <p className="text-secondary">Depth</p>
              <p>{product.depth}</p>
            </div>

            <div>
              <p className="text-secondary">Availability</p>
              <p>{product.availabilityStatus}</p>
            </div>
          </div>

          <div>
            <p className="text-secondary">Reviews</p>
            {product.reviews.map((review) => (
              <div key={review.id}>
                <p>{review.rating}</p>
                <p>{review.comment}</p>
                <p>{review.reviewerName}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Temporary link below */}
        <Link href="/" className="underline">
          Back to home page
        </Link>
      </div>

      {/* <MoreInformationDrawer
        description={product.description}
        height={product.height}
        width={product.width}
        depth={product.depth}
        availabilityStatus={product.availabilityStatus}
        reviews={product.reviews}
      /> */}
    </div>
  );
}
