import MyTodos from "../shared/MyTodos";
import PanelHeader from "../shared/PanelHeader";
import { serverClient } from "@/app/_trpc/serverClient";

async function UserPanel() {
  const trpcServer = await serverClient();
  const todos = await trpcServer.todo.getUserTodos();

  return (
    <>
      <PanelHeader />

      <h2 className="mb-4 mt-16 text-xl">My todos:</h2>
      <MyTodos prefetchedTodos={todos} />
    </>
  );
}

export default UserPanel;
