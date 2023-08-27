import { publicProcedure, router } from "../trpc";
import { userRouter } from "./user/userRouter";

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
