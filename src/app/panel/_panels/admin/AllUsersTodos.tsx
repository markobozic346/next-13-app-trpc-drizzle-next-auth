"use client";

import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";
import DeleteTodo from "@/app/_components/todo/DeleteTodo";
import UserAvatar from "@/app/_components/user/UserAvatar";
import TodoCheckbox from "@/app/_components/todo/TodoCheckbox";

import { trpc } from "@/app/_trpc/client";
import { TodoWithUser } from "@/lib/types";

type Props = {
  prefetchedTodos: TodoWithUser[];
};

const AllUsersTodos = ({ prefetchedTodos }: Props) => {
  const { data } = trpc.todo.getAllUsersTodos.useQuery();

  return (
    <Table>
      <TableCaption>A list of users todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">ID</TableHead>
          <TableHead>Text</TableHead>
          <TableHead>User</TableHead>
          <TableHead className="text-center">Completed</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((todo) => (
          <TableRow className="h-14" key={todo.id}>
            <TableCell className="text-center">{todo.id}</TableCell>
            <TableCell>{todo.text}</TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <UserAvatar user={todo.user} />
                {todo.user?.name}
              </div>
            </TableCell>
            <TableCell className="text-center">
              <TodoCheckbox
                todoId={todo.id}
                isComplete={Boolean(todo.isComplete)}
              />
            </TableCell>
            <TableCell>
              <DeleteTodo todoId={todo.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsersTodos;
