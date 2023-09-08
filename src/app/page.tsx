"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import UserAvatar from "./_components/user/UserAvatar";

export default function Home() {
  const { data: session } = useSession();

  const router = useRouter();

  if (session) {
    const btnText = session.user.role == "ADMIN" ? "Admin panel" : "User panel";
    return (
      <main className="flex flex-col min-h-screen items-center p-24">
        <div className="flex w-80 flex-col items-center gap-4 p-4 border rounded-md">
          <UserAvatar className="w-12 h-12" user={session.user} />

          <p>Signed in as {session.user.name}</p>
          <p>Role: {session.user.role} </p>

          <p className="flex gap-4 items-center">
            <Link href={"/panel"}>
              <Button>{btnText}</Button>
            </Link>
          </p>

          <Button variant="outline" onClick={() => signOut()}>
            Sign out
          </Button>
        </div>
      </main>
    );
  }
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <div className="flex w-80 flex-col items-center gap-4 p-4 border rounded-md">
        Not signed in <br />
        <Button onClick={() => signIn()}>Sign in</Button>
      </div>
    </main>
  );
}
