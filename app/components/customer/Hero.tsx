import Image from "next/image";
import hero from "@/design/assets/hero.jpeg";
import { Button } from "./Button";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-160 w-full">
      <Image
        src={hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-dark/30" />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-end px-6 md:px-16">
        <div className="flex max-w-2xl flex-col items-end gap-6 text-right text-light ">
          <p className="text-3xl sm:text-4xl font-heading md:text-6xl">
            Thoughtful flow
          </p>
          <p className="text-2xl sm:text-3xl font-heading md:text-4xl">for a calmer home</p>

          <div className="flex flex-wrap justify-end gap-4">
            <Link href="/story">
              <Button size="lg" variant="outline">
                About us
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="tertiary">
                Explore NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
