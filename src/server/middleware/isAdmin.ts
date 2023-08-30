import { TRPCError } from "@trpc/server";

import { middleware } from "../trpc";

export const isAdmin = middleware(({ next, ctx }) => {
  if (ctx.session?.user.role !== "ADMIN") {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
  }
  return next({
    ctx,
  });
});
