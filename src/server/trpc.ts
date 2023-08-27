import { initTRPC } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

import { db } from "@/db";

export const createContext = (opts?: CreateNextContextOptions) => {
  return {
    db,
  };
};

const t = initTRPC.context<typeof createContext>().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
