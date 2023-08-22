import PropTypes from "prop-types";
import { styled } from "styled-components";
import { FaTrash } from "react-icons/fa6";
import { useTodo } from "../../context/Todo";

const TaskWrapper = styled.div`
  width: 93%;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  margin: 0 auto;
  border-radius: 15px;
  align-items: center;
  justify-content: flex-start;

  & + & {
    margin-top: 30px;
  }

  &.completed {
    text-decoration: line-through;
    color: #ccc;
  }

  input {
    width: 15px;
    height: 15px;
    margin-right: 20px;
  }

  svg {
    margin-left: auto;
    color: #e23838;
    font-size: 20px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      color: #cf2121;
    }
  }

  @media (max-width: 664px) {
    width: 100%;
  }
`;

export const Task = ({ taskItem }) => {
  const { handleRemoveTask, handleCompleteTask } = useTodo();

  return (
    <TaskWrapper className={taskItem.completed ? "completed" : ""}>
      <input
        type="checkbox"
        onChange={() => handleCompleteTask(taskItem.id)}
        checked={taskItem.completed}
      ></input>
      {taskItem.name}
      <FaTrash onClick={() => handleRemoveTask(taskItem.id)}></FaTrash>
    </TaskWrapper>
  );
};

Task.propTypes = {
  taskItem: PropTypes.object
};
