import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data.todo);
    dispatch(
      addTodo({
        title: data.todo,
      })
    );
    reset();
  };

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-gray-700 font-bold flex-1">
        First Name
        <input
          {...register("todo", { required: "This field is required" })} // Add validation rule
          className="
                border rounded w-full py-1 px-2 font-normal
                "
          placeholder="Enter a task"
        />
        {errors.todo && (
          <span className="text-red-500 text-sm">{errors.todo.message}</span>
        )}
      </label>

      <button
        type="submit"
        className="bg-blue-600 p-4 rounded text-white  font-bold hover:bg-blue-500 text-md"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
