"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/customer/Button";
import Link from "next/link";
import Background from "@/design/assets/splash3.svg";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

  }

  return (
    <main aria-label="Login page" className="max-w-270 mx-auto my-27">
      <Background className="fixed -z-10 -inset-1 top-[20%] text-soft/40 rotate-140 " aria-hidden="true" />

      <h1 className="font-heading my-4">Login</h1>

      <form aria-label="Login" onSubmit={handleSubmit} className="flex flex-col gap-2">

        <label htmlFor="email-input" className="sr-only"> Email address </label>
        <input
          id="email-input"
          className=" glass border px-4 py-2 rounded border-secondary"
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <label htmlFor="password-input" className="sr-only"> Account password </label>
        <input
          id="password-input"
          className="glass border px-4 py-2 rounded border-secondary"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <Button className="my-4" type="submit">
          Login
        </Button>

        {error && <p>{error}</p>}
      </form>

      <Link
        href="/register"
        className=" text-primary underline"
        aria-label="Register Account"
      >
        Register account
      </Link>
    </main>
  );
}
