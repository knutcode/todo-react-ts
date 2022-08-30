import { useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

//A static todo-list - just to add some content on page-load
//uses global type "Todo" from types.d.ts (string, boolean)
const initialTodos: Todo[] = [
  {
    text: "hello world",
    complete: true,
  },
  {
    text: "take out trash",
    complete: false,
  },
];

const App = () => {
  // toggleTodo
  // - Sets state using the static todo-list
  // - Function to toggle "complete" in selected todoItem

  // - maps over the todo-list ('todos') and checks if each todoItem matches the ': Todo' type
  //   ^ if it matches, uses the object spread operator and sets the value of complete to the opposite
  //     of it's current value (true -> false, false -> true) for each todoItem and adds it to "newTodos"

  // - sets the state of 'todos' to use the value of newTodos

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodoItem: Todo) => {
    const newTodos = todos.map((todoItem) => {
      if (todoItem === selectedTodoItem) {
        return {
          ...todoItem,
          complete: !todoItem.complete,
        };
      }
      return todoItem;
    });
    setTodos(newTodos);
  };

  // addTodo!
  // - uses the global type AddToDo, only accepts (text: string)
  // - sets a 'text: string' parameter (in this case, value from input field in child component 'AddTodoForm')

  // - sets values to the new todoItem, and sets the state of todos to include the new todoItem using the
  //   ^ array spread operator [...]

  const addTodo: AddTodo = (text: string) => {
    const newTodoItem = { text, complete: false };
    setTodos([...todos, newTodoItem]);
  };

  // Props etc.
  // Passes the state 'todos' (array of objects) and toggleTodo function to the 'TodoList' component as props
  // Passes the addTodo function to the 'AddTodoForm' component as a prop

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
