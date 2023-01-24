import { TaskItem } from "../item";
import "./styles.scss";

//TODO: integrate with endpoint
const TaskList = () => {
  return (
    <div className="task-list">
    {/* {data?.map((task)), index) => ( */}
      <TaskItem />
    {/* ))} */}
    {/* {!data?.length && <div>No Tasks</div>} */}
  </div>
  );
};

export default TaskList;
