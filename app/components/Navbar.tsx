"use client";

import { useState } from "react";
import Link from "next/link";
import CartCount from "./customer/cart/CartCount";

import User from "@/design/assets/user.svg";
import Line from "@/design/assets/line.svg";

import AccountLink from "./customer/AccountLink";

const navItems = [
  { label: "shop", href: "/" },
  { label: "story", href: "/story" },
  // { label: "account", href: "/profile" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-soft bg-light">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-accent text-primary"
          aria-label="Home"
        >
          NAGARE
        </Link>

        {/* Desktop navigation */}
        <div className="hidden font-heading text-secondary items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
          <div className="text-sm font-medium transition-opacity hover:opacity-60">
            <AccountLink />
          </div>
          <CartCount />
          {/* Placeholder image */}
          <Link
            href="/cart"
            className="text-sm font-medium transition-opacity hover:opacity-60"
            aria-label="Link to cart page"
          >
            <User className="text-brand-golden ml-2 h-15 w-15 overflow-hidden" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col  items-center justify-center  md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Line
            className={`transition-all text-primary duration-300 ${
              isOpen ? "translate-x-0 translate-y-3.25 rotate-45" : ""
            }`}
          />

          <Line
            className={` transition-all duration-300 text-secondary ${
              isOpen ? "scale-y-0 opacity-0" : ""
            }`}
          />

          <Line
            className={`transition-all duration-300 text-accent ${
              isOpen ? "translate-x-0 -translate-y-3.25 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden font-heading text-secondary border-t border-soft transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col text-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-soft py-4 "
              >
                {item.label}
              </Link>
            ))}
            <div className="border-b border-soft py-4">
              <CartCount />
            </div>

            {/* Image in mobile drawer */}
            <div className="border-b border-soft py-4 text-lg">
              <AccountLink />
            </div>
            <Link
              href="/cart"
              className="text-sm py-4 flex gap-4 items-center font-medium transition-opacity hover:opacity-60"
            >
              <User className="text-brand-golden h-15 w-15 overflow-hidden" />
              <span className="text-sm">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
