import { TRPCError } from "@trpc/server";

import { middleware } from "../trpc";

export const isAuth = middleware(({ next, ctx }) => {
  if (!ctx.session?.user.email) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
  }

  return next({
    ctx,
  });
});
