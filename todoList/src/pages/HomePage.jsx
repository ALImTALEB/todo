import AddTodoForm from "../components/AddTodoForm";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";

function HomePage() {
  return (
    <div className="container bg-white p-4 mt-5 flex gap-5 flex-col items-center">
      <h1 className="text-3xl">My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TodoCounter />
    </div>
  );
}

export default HomePage;
