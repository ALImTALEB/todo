import { useSelector } from "react-redux";

const TodoCounter = () => {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <div>
      <p className="text-lg">Total Items: {todos.length}</p>
    </div>
  );
};

export default TodoCounter;
