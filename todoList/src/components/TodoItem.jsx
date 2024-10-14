import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/todoSlice";
// eslint-disable-next-line react/prop-types
const TodoItem = ({ title, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div className="flex justify-between px-2 border-2 items-center">
      <p> {title} </p>
      <button onClick={handleDeleteClick} className="bg-red-600 p-2 rounded-sm">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
