import { router } from "../trpc";
import { todoRouter } from "./todo/todoRouter";
import { userRouter } from "./user/userRouter";

export const appRouter = router({
  user: userRouter,
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
