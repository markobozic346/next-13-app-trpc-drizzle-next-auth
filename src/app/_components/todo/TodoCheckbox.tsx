"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

import { trpc } from "@/app/_trpc/client";

type Props = {
  todoId: number;
  isComplete: boolean;
};

const TodoCheckbox = ({ todoId, isComplete }: Props) => {
  const { toast } = useToast();
  const utils = trpc.useContext();

  const { mutate } = trpc.todo.updateTodo.useMutation({
    onSettled: () => {
      utils.todo.getUserTodos.invalidate();
      utils.todo.getAllUsersTodos.invalidate();
    },
  });

  const handleTodoUpdate = () => {
    const payload = {
      id: todoId,
      isComplete: !isComplete,
    };

    mutate(payload, {
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Success",
          description: "Todo updated!",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong updating todo",
        });
      },
    });
  };

  return <Checkbox checked={isComplete} onCheckedChange={handleTodoUpdate} />;
};

export default TodoCheckbox;
