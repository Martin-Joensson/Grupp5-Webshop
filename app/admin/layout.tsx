
import type { Metadata } from "next";
import Banner from "@/components/admin/Banner";

import { getServerSession } from "next-auth";
import { authOptions } from "@/../auth";
import { redirect } from "next/navigation";


export const metadata: Metadata = {
  title: "Webshop - Admin",
  description: "Admin side of webshop",
};

export default async function AdminLayout( { children, }: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);

  if (!session) {
      redirect("/login");
    }
  
    if (session.user.role !== "ADMIN") {
      redirect("/");
    }

  return (
    <>
        <Banner />
        {children}
    </>
  );
}