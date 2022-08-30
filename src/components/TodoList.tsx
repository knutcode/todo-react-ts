import { TodoListItem } from "./TodoListitem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

// ^ props passed from App.tsx -> TodoList.tsc, assigned types from types.d.ts

// TodoList!
// - uses the 'todos' and 'toggleTodo' props from App.tsx

// - maps over the 'todos' array from App.tsx and returns a <TodoListItem> component
//   ^ for each object in the todos array including its values, 'text' and 'complete'
//    ^ this renders the list.

// - passes the 'todo' prop to TodoListItem.tsx so each different <TodoListItem> component
//   ^ can render its own unique values.
//   + further passes the toggleTodo prop from App.tsx into todoListItem.tsx
export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};
