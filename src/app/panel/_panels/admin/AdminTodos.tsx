"use client";

import { Todo } from "@/lib/types";
import { trpc } from "@/app/_trpc/client";
import TodoList from "@/app/_components/todo/TodoList";

type Props = {
  initialTodos: Todo[];
};
const AdminTodos = ({ initialTodos }: Props) => {
  const { data } = trpc.todo.getAllUsersTodos.useQuery(undefined, {
    initialData: initialTodos,
  });
  return <TodoList todos={data} />;
};

export default AdminTodos;
