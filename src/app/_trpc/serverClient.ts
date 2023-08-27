import { appRouter } from "@/server/routers";
import { createContext } from "@/server/trpc";

export const serverClient = appRouter.createCaller(createContext());
