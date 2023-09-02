import { AppRouter } from "@/server/routers/root";
import { inferRouterOutputs } from "@trpc/server";

export type Todo = inferRouterOutputs<AppRouter>["todo"]["getUserTodos"][0];
export type TodoWithUser =
  inferRouterOutputs<AppRouter>["todo"]["getAllUsersTodos"][0];
