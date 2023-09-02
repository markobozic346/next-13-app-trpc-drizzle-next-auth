import { users } from "@/db/schema";
import { protectedAdminProcedure, router } from "@/server/trpc";

export const userRouter = router({
  getAllUsers: protectedAdminProcedure.query(async ({ ctx }) => {
    return await ctx.db.select().from(users);
  }),
});
