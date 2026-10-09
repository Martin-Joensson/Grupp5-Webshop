"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function AccountLink() {
  const { data: session } = useSession();

  const href = session ? "/account" : "/login";
  const label = session ? "account" : "login";

  return (
    <Link
      href={href}
    >
      {label}
    </Link>
  );
}
