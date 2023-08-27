import { isAuth } from "./middlewares/isAuth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import DiscordProvider from "next-auth/providers/discord";
import { DefaultSession, NextAuthOptions } from "next-auth";

import { db } from "@/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      console.log("session", session, user);
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  adapter: DrizzleAdapter(db),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
  ],
};
