"use client";

import { useState } from "react";
import Link from "next/link";

import User from "@/assets/user.svg";

const navItems = [
  { label: "shop", href: "/shop" },
  { label: "story", href: "/story" },
  { label: "account", href: "/account" },
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

          {/* Placeholder image */}
          <Link
            href="/user"
            className="text-sm font-medium transition-opacity hover:opacity-60"
          >
            <User className="text-brand-golden ml-2 h-10 w-10 overflow-hidden" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`h-px w-6 bg-primary transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-secondary transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-accent transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
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
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-soft py-4 text-lg"
              >
                {item.label}
              </Link>
            ))}

            {/* Image in mobile drawer */}
            <div className="flex items-center gap-4 py-4">
              <Link
                href="/user"
                className="text-sm font-medium transition-opacity hover:opacity-60"
              >
                <User className="text-brand-golden ml-2 h-10 w-10 overflow-hidden" />
              </Link>

              <span className="text-sm">Profile</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
