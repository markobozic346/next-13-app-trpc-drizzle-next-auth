import { getServerSession } from "next-auth";
import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";

import { db } from "@/db";
import { authOptions } from "./auth";

export const createContext = async () => {
  const session = await getServerSession(authOptions);

  return {
    db,
    session,
  };
};

type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;

// middlewares
export const isAuth = middleware(({ next, ctx }) => {
  if (!ctx.session?.user.email) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
  }

  return next({
    ctx,
  });
});

export const isAdmin = middleware(({ next, ctx }) => {
  if (ctx.session?.user.role !== "ADMIN") {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
  }
  return next({
    ctx,
  });
});

//procedures
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuth);
export const protectedAdminProcedure = t.procedure.use(isAdmin);
