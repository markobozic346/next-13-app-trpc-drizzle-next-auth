"use client";

import { PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

type Props = {
  session: any;
};

export default function AuthProvider({
  children,
  session,
}: PropsWithChildren<Props>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
