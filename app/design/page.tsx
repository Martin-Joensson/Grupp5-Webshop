import Link from "next/link";
import { Button } from "@/components/customer/Button";
import Swoop from "./assets/swoop.svg";
import User from "./assets/user.svg";
import Splash1 from "./assets/splash1.svg";
import Splash2 from "./assets/splash2.svg";
import Splash3 from "./assets/splash3.svg";
import Line from "./assets/line.svg";
import Arrow from "./assets/arrow.svg";
import Heart from "./assets/heart.svg";

export default function Design() {
  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto w-full">
      <p className="sticky top-0 bg-brand-offwhite text-brand-lightblue font-accent text-2xl p-3 border-b-2 border-brand-sand">
        Nagare
      </p>

      {/*  Headings */}

      <div className="headings">
        <p className="text-xl font-semibold">Headings:</p>
        <h1 className="h1">Heading 1</h1>
        <h2 className="h2">Heading 2</h2>
        <h3 className="h3">Heading 3</h3>
        <h4 className="h4">Heading 4</h4>
      </div>

      {/* Accent text
          For example giant price in cart.
          */}
      <div className="flex flex-col gap-4">
        <h2 className="h2">Fonts:</h2>
        <div className="font-accent">
          <p>accent/Notable</p>
          <p className="text-3xl text-price">€123 Sample text</p>
          <p className="text-2xl text-secondary"> €123 Sample text</p>
        </div>
        <div className="font-heading">
          <p>heading/Chonburi</p>
          <p className="text-3xl text-price">€123 Sample text</p>
          <p className="text-2xl text-secondary">€123 Sample text</p>
        </div>
        <div className="font-sans">
          <p>sans/Jost</p>
          <p className="text-3xl text-price">€123 Sample text</p>
          <p className="text-2xl text-secondary">€123 Sample text</p>
        </div>
      </div>

      {/* Colors */}
      <div className="text-xl">
        Colors:
        <div className="colors grid grid-cols-4 h-40 text-center">
          <div className="bg-brand-almostblack text-brand-offwhite">
            almostblack/dark
          </div>
          <div className="bg-brand-offwhite text-brand-almostblack">
            offwhite/light
          </div>
          <div className="bg-brand-golden text-brand-offwhite">
            brand-golden/accent
          </div>
          <div className="bg-brand-darkblue text-brand-offwhite">
            brand-darkblue/primary
          </div>
          <div className="bg-brand-lightblue text-brand-offwhite">
            brand-lightblue/secondary
          </div>
          <div className="bg-brand-red text-brand-offwhite">
            brand-red/tertiary
          </div>

          <div className="bg-brand-sand text-brand-almostblack">
            brand-sand/soft
          </div>
        </div>
      </div>

      {/* Icons
          Imported as components using SVGR, se this page on how to use them: https://react-svgr.com/docs/next/ */}
      <section>
        <h2 className="h2">Iconography</h2>
        <div className="grid grid-cols-2 gap-2 place-items-center">
          <Swoop className="text-brand-red w-60 h-60" />
          <User className="text-brand-golden w-60 h-60" />
          <Line className="text-brand-lightblue w-60 h-60" />
          <Splash1 className="text-brand-sand w-60 h-60" />
          <Splash2 className="text-brand-sand w-60 h-60" />
          <Splash3 className="text-brand-sand w-60 h-60" />
          <Arrow className="text-brand-almostblack w-60 h-60" />
          <Heart className="text-brand-red w-60 h-60" />
        </div>
      </section>

      <Button variant="primary" size="lg">
        Primary Button
      </Button>
      <Button variant="secondary">Secondary Button</Button>
      <div className="grid gap-2">
        <Link href="/product/id" className="underline">
          Go to product details page
        </Link>
        <Link href="/cart" className="underline">
          Go to Cart page
        </Link>
        <Link href="/admin" className="underline">
          Go to Admin page
        </Link>
      </div>
    </div>
  );
}
