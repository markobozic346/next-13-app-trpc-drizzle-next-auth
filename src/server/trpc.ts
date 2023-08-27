import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";
import { getServerSession } from "next-auth";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

import { db } from "@/db";
import { authOptions } from "./auth";
import { TRPCClientError } from "@trpc/client";
import { isAuth } from "./middlewares/isAuth";

export const createContext = async (opts?: CreateNextContextOptions) => {
  if (!opts?.req || !opts?.res) {
    return { db, session: null };
  }

  const session = await getServerSession(opts?.req, opts?.res, authOptions);

  return {
    db,
    session,
  };
};

type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;

export const protectedProcedure = t.procedure.use(isAuth);
export const publicProcedure = t.procedure;
