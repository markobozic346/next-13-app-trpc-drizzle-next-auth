import AdminTodos from "./AdminTodos";
import { serverClient } from "@/app/_trpc/serverClient";

async function AdminPanel() {
  const trpcClient = await serverClient();

  const todos = await trpcClient.todo.getAllUsersTodos();

  return <AdminTodos initialTodos={todos} />;
}

export default AdminPanel;
