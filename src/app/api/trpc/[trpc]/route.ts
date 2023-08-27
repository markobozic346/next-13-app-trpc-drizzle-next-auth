import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { db } from "@/db";
import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import { appRouter } from "@/server/routers";

const handler = async (req: Request) => {
  const session = await getServerSession(authOptions);

  return fetchRequestHandler({
    req,
    router: appRouter,
    endpoint: "/api/trpc",
    createContext: () => ({ db, session }),
  });
};

export { handler as GET, handler as POST };
