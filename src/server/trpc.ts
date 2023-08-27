import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

import { db } from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export const createContext = async (opts?: CreateNextContextOptions) => {
  if (!opts?.req || !opts?.res) {
    return db;
  }

  const session = await getServerSession(opts?.req, opts?.res, authOptions);
  return {
    db,
    session,
  };
};

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
