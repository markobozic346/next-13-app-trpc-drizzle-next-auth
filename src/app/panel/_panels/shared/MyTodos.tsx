"use client";

import TodoForm from "@/app/_components/todo/TodoForm";
import TodoList from "@/app/_components/todo/TodoList";
import { trpc } from "@/app/_trpc/client";
import { Todo } from "@/lib/types";
import { Separator } from "@radix-ui/react-separator";

type Props = {
  prefetchedTodos: Todo[];
};
const MyTodos = ({ prefetchedTodos }: Props) => {
  const { data } = trpc.todo.getUserTodos.useQuery(undefined, {
    initialData: prefetchedTodos,
  });

  return (
    <>
      <TodoForm />
      <Separator className="mt-8" />
      <TodoList todos={data} />
    </>
  );
};

export default MyTodos;
