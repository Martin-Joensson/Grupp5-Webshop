import { getServerSession } from "next-auth";
import { authOptions } from "@/../auth";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <main>
          <h1>Profile</h1>
          <LogoutButton />

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
