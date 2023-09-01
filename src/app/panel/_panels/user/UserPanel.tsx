import { serverClient } from "@/app/_trpc/serverClient";
import UserTodos from "./UserTodos";

async function UserPanel() {
  const trpcServer = await serverClient();
  const todos = await trpcServer.todo.getUserTodos();

  return <UserTodos initialTodos={todos} />;
}

export default UserPanel;
