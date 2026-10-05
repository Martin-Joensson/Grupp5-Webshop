import { getServerSession } from "next-auth";
import { authOptions } from "@/../auth";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Profile</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
