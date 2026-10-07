"use client";

import { FormEvent, useState } from "react";
import { registerUser } from "../actions/auth";
import { Button } from "@/components/customer/Button";
import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await registerUser(name, email, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    }
  }

  return (
    <main className="max-w-270 mx-auto my-27">
      <h1 className="font-heading my-4">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          className="border px-4 py-2 rounded border-secondary"
          name="name"
          type="text"
          placeholder="Name"
          required
        />

        <input
          className="border px-4 py-2 rounded border-secondary"
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <input
          className="border px-4 py-2 rounded border-secondary"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <Button className="my-4" type="submit">
          Register
        </Button>

        {error && <p>{error}</p>}
      </form>
      <Link
        href="/login"
        className=" text-primary underline"
        aria-label="Register Account"
      >
       Already have an account? Login
      </Link>
    </main>
  );
}
