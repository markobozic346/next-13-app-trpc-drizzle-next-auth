import { Todo } from "@/lib/types";
import TodoCheckbox from "./TodoCheckbox";

type Props = {
  todos: Todo[];
};
const TodoList = ({ todos }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>text</td>
          <td>completed</td>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>
              <TodoCheckbox todo={todo} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoList;
