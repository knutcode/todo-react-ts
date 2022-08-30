import { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

// Form component to add todo-items to the list using value of input

// - uses the addTodo function passed as a prop.
// - sets text as state with the value of an empty string ("")
// - text-input uses the state as its value
// - onChange, state changes to the value of input field - setText(e.target.value)

// - when button is clicked, adds new item to the 'todos' state in App.tsx which re-renders list with
//   ^ new todoItem included.

// - sets the value of state back to empty string with setText("") - (resets input field and state)

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText("");
        }}
      >
        Add Todo
      </button>
    </form>
  );
};
