"use client";
import React from "react";

import { Todo } from "@/lib/types";
import { trpc } from "@/app/_trpc/client";

type Props = {
  todo: Todo;
};

const TodoCheckbox = ({ todo }: Props) => {
  const { mutate } = trpc.todo.updateTodo.useMutation();

  const handleTodoUpdate = () => {
    mutate({
      id: todo.id,
      isComplete: !todo.isComplete,
    });
  };

  return (
    <input
      type="checkbox"
      checked={Boolean(todo.isComplete)}
      onChange={handleTodoUpdate}
    />
  );
};

export default TodoCheckbox;
