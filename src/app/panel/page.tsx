import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";

import UserPanel from "./_panels/user/UserPanel";
import AdminPanel from "./_panels/admin/AdminPanel";

import { signInServer } from "@/utils/signInServer";

export default async function Panel() {
  const session = await getServerSession(authOptions);

  if (!session) {
    await signInServer({ redirectPath: "/panel" });
  }

  if (session?.user.role === "ADMIN") {
    return <AdminPanel />;
  }

  return <UserPanel />;
}
