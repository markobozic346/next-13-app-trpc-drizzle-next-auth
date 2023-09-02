"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Signed in as {session.user.email} {session.user.role} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </main>
  );
}
