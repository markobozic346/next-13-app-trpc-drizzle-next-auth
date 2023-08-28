import { eq } from "drizzle-orm";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import DiscordProvider from "next-auth/providers/discord";
import { DefaultSession, NextAuthOptions } from "next-auth";

import { db } from "@/db";
import { users } from "@/db/schema";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: "USER" | "ADMIN";
    } & DefaultSession["user"];
  }
  interface User {
    id: string;
    role?: "USER" | "ADMIN";
  }
}

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
    }),
  ],

  callbacks: {
    async session({ session, user }) {
      // This is a workaround for adding the role to the session
      const dbUsers = await db
        .selectDistinct()
        .from(users)
        .where(eq(users.id, user.id));

      if (session.user) {
        session.user.id = user.id;
        session.user.role = dbUsers[0].role || "USER";
      }

      return session;
    },
  },
};
