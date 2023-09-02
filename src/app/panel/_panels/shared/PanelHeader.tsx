import Link from "next/link";
import { getServerSession } from "next-auth";

import { authOptions } from "@/server/auth";
import { Button } from "@/components/ui/button";

const PanelHeader = async () => {
  const session = await getServerSession(authOptions);

  const headerText = session?.user.role == "ADMIN" ? "Admin" : "User";

  return (
    <div className="flex justify-between">
      <h1 className="mb-8 text-2xl">Welcome {headerText}!</h1>

      <Link href={"/"}>
        <Button variant="outline">Go back</Button>
      </Link>
    </div>
  );
};

export default PanelHeader;
