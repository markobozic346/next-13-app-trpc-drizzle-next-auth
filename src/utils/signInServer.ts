import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

type SignInServerType = {
  redirectPath?: string;
};

const signInPath = "/api/auth/signin";

// TODO: use env variable
const appPath = "http://localhost:3000";

export async function signInServer({ redirectPath = "" }: SignInServerType) {
  const session = await getServerSession(authOptions);

  if (session) return;

  const callbackUrl = `${appPath}${redirectPath}`;

  redirect(`${signInPath}?callbackUrl=${callbackUrl}`);
}
