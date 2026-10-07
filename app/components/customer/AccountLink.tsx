"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import User from "@/design/assets/user.svg";

export default function AccountLink() {
  const { data: session, status } = useSession();

  if (status === "loading") {
      return "loading...";
  }

  return (
    <Link
      href={session ? "/profile" : "/login"}
      className="text-sm font-medium transition-opacity hover:opacity-60"
    >
      
      {session ? "account" : "login"}
    </Link>
  );
}
