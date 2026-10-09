import { Button } from "@/components/customer/Button";
import { ImageGallery } from "@/components/customer/ImageGallery";
import { getProduct } from "@/lib/api";
import Link from "next/link";
import NotFound from "@/not-found";
import { AddToCartButton } from "@/components/customer/AddToCartButton";
import type { Metadata } from "next";
import { toEurosString } from "@/lib/utils";

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

  const galleryImages = product.images.map((src) => ({
    src,
    alt: product.title,
  }));

  return (
    <main aria-labelledby="product-details-heading" className="bg-[url('/assets/splash3.svg')] bg-cover">
      <section aria-label="General product information" className="max-w-270 flex mx-auto flex-col md:flex-row gap-4 mb-20 md:my-40 p-4 justify-between">
        {/* left panel */}
        <div aria-label="Product image gallery" className="md:w-2/3">
          <ImageGallery images={galleryImages} />
        </div>

        {/* Right panel */}
        <div aria-label="General information" className="flex flex-1 flex-col justify-between items-end text-right">
          <div>
            <h1 id="product-details-heading" className="h2 text-primary self-center">{product.title}</h1>
            <p aria-label="Product category" className="text-secondary">{product.category?.name}</p>
          </div>
          <span className="block font-heading text-6xl">
            {toEurosString(product.price)}
          </span>
          <p className="max-w-[50ch]">{product.description}</p>
          <div className="button-cluster flex gap-4 justify-end">
            <Button variant="tertiary" iconPosition="right" aria-label="Add to favorites">
              Favorite
            </Button>
            <AddToCartButton
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.price}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="more-info-heading" className="relative h-20">
        {/* Banner background */}
        <div className="absolute inset-y-0 left-0 w-3/4 bg-primary rounded-tr-[8rem] rounded-br-lg" />

        {/* Content aligned with the rest of the page */}
        <div className="relative max-w-270 mx-auto p-4 h-full flex items-center">
          <h2 id="more-info-heading" className="text-light font-heading text-2xl">More information</h2>
        </div>

        <div className="max-w-270 mx-auto p-4 mt-10 flex flex-col gap-6">
          <p>{product.description}</p>

          <div aria-label="Product dimensions and stock availability" className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-secondary" aria-hidden >Height</h3>
              <p aria-label="Height">{product.height}</p>
            </div>

            <div>
              <h3 className="text-secondary" aria-hidden >Width</h3>
              <p aria-label="Width">{product.width}</p>
            </div>

            <div>
              <h3 className="text-secondary" aria-hidden >Depth</h3>
              <p aria-label="Depth">{product.depth}</p>
            </div>

            <div>
              <h3 className="text-secondary" aria-hidden >Availability</h3>
              <p aria-label="Stock availability">{product.availabilityStatus}</p>
            </div>
          </div>

          <div aria-labelledby="reviews-heading">
            <h3 id="reviews-heading" className="text-secondary">Reviews</h3>
            {product.reviews.map((review) => (
              <div aria-label={`Review by ${review.reviewerName}`} key={review.id}>
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
      </section>

      {/* <MoreInformationDrawer
        description={product.description}
        height={product.height}
        width={product.width}
        depth={product.depth}
        availabilityStatus={product.availabilityStatus}
        reviews={product.reviews}
      /> */}
    </main>
  );
}
