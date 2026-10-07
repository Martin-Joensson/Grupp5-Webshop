"use client";

import { FormEvent, useState } from "react";
import { registerUser } from "../actions/auth";

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
    <main>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" required />

        <input name="email" type="email" placeholder="Email" required />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">Register</button>

        {error && <p>{error}</p>}
      </form>
    </main>
  );
}
