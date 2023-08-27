import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  testRouter: publicProcedure.query(async () => {
    return [1, 2, 3, 4, 5];
  }),
});

export type AppRouter = typeof appRouter;
