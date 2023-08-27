"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </main>
  );
}
