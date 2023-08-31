"use client";
import TodoList from "@/app/_components/todo/TodoList";
import { trpc } from "@/app/_trpc/client";
import { Todo } from "@/lib/types";
import React from "react";

type Props = {
  initialTodos: Todo[];
};

const UserTodos = ({ initialTodos }: Props) => {
  const { data } = trpc.todo.getUserTodos.useQuery(undefined, {
    initialData: initialTodos,
  });

  if (!data) return null;
  return <TodoList todos={data} />;
};

export default UserTodos;
