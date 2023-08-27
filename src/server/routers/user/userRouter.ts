import { users } from "@/db/schema";
import { protectedProcedure, router } from "@/server/trpc";

export const userRouter = router({
  getAllUsers: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(users);
  }),
});
