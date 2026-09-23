
import type { Metadata } from "next";
import Banner from "@/components/Banner";



export const metadata: Metadata = {
  title: "Webshop - Admin",
  description: "Admin side of webshop",
};

export default function AdminLayout( { children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Banner />
        {children}
    </>
  );
}