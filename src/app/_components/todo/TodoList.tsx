import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";
import DeleteTodo from "./DeleteTodo";
import TodoCheckbox from "./TodoCheckbox";

import { Todo } from "@/lib/types";

type Props = {
  todos: Todo[];
};
const TodoList = ({ todos }: Props) => {
  return (
    <Table>
      <TableCaption>A list of your todos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">ID</TableHead>
          <TableHead>Text</TableHead>
          <TableHead className="text-center">Completed</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos?.map((todo) => (
          <TableRow className="h-14" key={todo.id}>
            <TableCell className="text-center">{todo.id}</TableCell>
            <TableCell>{todo.text}</TableCell>
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

export default TodoList;
