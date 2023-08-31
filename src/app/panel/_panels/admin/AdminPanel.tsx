"use client";

import TodoList from "@/app/_components/todo/TodoList";
import { trpc } from "@/app/_trpc/client";

function AdminPanel() {
  const { data } = trpc.todo.getAllUsersTodos.useQuery();

  if (!data) return null;

  return <TodoList todos={data} />;
}

export default AdminPanel;
