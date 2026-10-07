"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function AccountLink() {
  const { data: session } = useSession();

  const href = session ? "/profile" : "/login";
  const label = session ? "account" : "login";

  return (
    <Link
      href={href}
      className="text-sm font-medium transition-opacity hover:opacity-60"
    >
      {label}
    </Link>
  );
}
