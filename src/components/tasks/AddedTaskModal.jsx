import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddedTaskModal = ({ setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    reset();
    dispatch(addTask(data));
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 mt-3">
        <label htmlFor="title">Title</label>
        <input
          className="w-full rounded-md bg-gray-300 border-none"
          id="title"
          defaultValue="test"
          {...register("title")}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="w-full rounded-md bg-gray-300 border-none"
          name=""
          id="description"
          cols="2"
          rows="2"
          {...register("description", { required: true })}
        ></textarea>
        <div>
          <label htmlFor="deadline">Deadline</label>
          <input
            className="w-full rounded-md bg-gray-300 border-none"
            id="deadline"
            type="date"
            {...register("deadline", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority</label>
          <input
            className="w-full rounded-md bg-gray-300 border-none"
            name="priority"
            id="priority"
            {...register("priority", { required: true })}
          />
        </div>
        <div>
          <label htmlFor="assignTo">Assign To</label>

          <select
            className="w-full rounded-md bg-gray-300 border-none"
            id="assignTo"
            {...register("assignTo", { required: true })}
          >
            <option value="eren">Eren</option>
            <option value="mikasa">Mikasa</option>
            <option value="armin">Armin</option>
            <option value="historia">Historia</option>
            <option value="jean">Jean</option>
            <option value="levi">Levi</option>
            <option value="erwin">Erwin</option>
            <option value="annie">Annie</option>
          </select>
        </div>
        <div className="text-white flex items-center gap-5">
          <button type="submit" className="btn bg-primary">
            Submit
          </button>
          <button onClick={() => onCancel()} className="btn bg-red-600">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddedTaskModal;
