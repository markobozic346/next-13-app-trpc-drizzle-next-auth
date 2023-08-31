"use client";

import { Session } from "next-auth";
import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  session: Session | null;
};

export default function AuthProvider({
  children,
  session,
}: PropsWithChildren<Props>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
