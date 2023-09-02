import MyTodos from "../shared/MyTodos";
import AllUsersTodos from "./AllUsersTodos";

import { serverClient } from "@/app/_trpc/serverClient";

async function AdminPanel() {
  const trpcClient = await serverClient();

  const myTodos = await trpcClient.todo.getUserTodos();

  const userTodos = await trpcClient.todo.getAllUsersTodos();

  return (
    <>
      <h1 className="mb-8 text-2xl">Welcome admin!</h1>

      <h2 className="mb-4 mt-16 text-xl">My todos:</h2>
      <MyTodos prefetchedTodos={myTodos} />

      <h2 className="mb-4 mt-16 text-xl">Users todos:</h2>
      <AllUsersTodos prefetchedTodos={userTodos} />
    </>
  );
}

export default AdminPanel;
