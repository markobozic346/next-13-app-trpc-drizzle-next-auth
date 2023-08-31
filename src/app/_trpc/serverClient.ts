import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server/routers/root";
import { createContext } from "@/server/trpc";

export const serverClient = async () =>
  appRouter.createCaller(await createContext());
