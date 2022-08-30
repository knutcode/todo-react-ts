interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

// ^ makes sure props passed use the correct types (Todo & ToggleTodo are both global types from types.d.ts)

// TodoListItem!
// - accepts the passed props 'todo'(state) and 'toggleTodo'(function) from App.tsx/TodoList.tsx
// - returns an li every time <TodoListItem /> is called

// - if the todo.complete value is true, sets the text in the li to be striked through
//   ^ and sets the checkbox input to be checked

// - onChange (if toggled on/off), runs the toggleTodo function from App.tsx/TodoList.tsx
//   ^ which flips the todo.complete value (true -> false, false -> true etc..)

// - sets the <li> text to the value of todo.text (state updated in TodoList)

export const TodoListItem: React.FC<Props> = (props) => {
  const { todo, toggleTodo } = props;
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? "line-through" : undefined }}>
        <input
          type={"checkbox"}
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo);
          }}
        />
        {todo.text}
      </label>
    </li>
  );
};
