"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { trpc } from "@/app/_trpc/client";

const formSchema = z.object({
  text: z
    .string()
    .min(2, "Todo text has to be at least 2 characters")
    .max(50, "Todo text can't be longer than 50 characters"),
});

type TodoFormType = z.infer<typeof formSchema>;

const TodoForm = () => {
  const { toast } = useToast();
  const utils = trpc.useContext();

  const form = useForm<TodoFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const { mutate } = trpc.todo.createTodo.useMutation({
    onSettled: () => {
      utils.todo.getUserTodos.invalidate();
    },
  });

  const createTodo = (payload: TodoFormType) => {
    mutate(payload, {
      onSuccess: () => {
        toast({
          variant: "default",
          title: "Success!",
          description: "Todo added successfully",
        });
        form.resetField("text");
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error!",
          description: "Opps something went wrong",
        });
      },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(createTodo)}
        className="flex gap-2 space-y-8"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>To be done:</FormLabel>
              <FormControl>
                <Input placeholder="make a bed..." {...field} />
              </FormControl>
              <FormDescription>Describe your todo</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add todo</Button>
      </form>
    </Form>
  );
};

export default TodoForm;
