import { AppRouter } from "@/server/routers/root";
import { inferRouterOutputs } from "@trpc/server";

export type Todo = inferRouterOutputs<AppRouter>["todo"]["getUserTodos"][0];
