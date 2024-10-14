import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todosReducer.todos);
  console.log(todos);

  if (!todos || !Array.isArray(todos)) {
    return <div>No todos available.</div>;
  }

  return (
    <div className="container">
      {todos.map((todo, i) => (
        <TodoItem title={todo.title} id={todo.id} key={i} />
      ))}
    </div>
  );
};

export default TodoList;
