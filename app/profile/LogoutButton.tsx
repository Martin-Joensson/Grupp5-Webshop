
"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/customer/Button";
import User from "@/design/assets/user.svg";

export default function LogoutButton()
{
  return <Button variant="secondary" icon={<User />} iconPosition="right" className="self-center" onClick={() => signOut()} > Log out </Button>
}