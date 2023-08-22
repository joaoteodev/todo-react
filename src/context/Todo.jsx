import { createContext, useState, useContext } from "react";
import { PropTypes } from "prop-types";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  const [taskInput, setTaskInput] = useState("");
  const [taskID, setTaskId] = useState(0);

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      return;
    }

    const newTask = {
      id: taskID,
      name: taskInput,
      completed: false
    };

    setTaskId(oldValue => oldValue + 1);
    console.log(taskID);

    setTaskList([...taskList, newTask]);
    setTaskInput("");
  };

  const handleCompleteTask = taskCompleted => {
    setTaskList(
      taskList.map(task => {
        if (task.id === taskCompleted) {
          return {
            ...task,
            completed: !task.completed
          };
        }
      })
    );
  };

  const handleRemoveTask = taskDeleteID => {
    console.log("delete", taskDeleteID);
    const newTaskList = taskList.filter(task => task.id !== taskDeleteID);
    setTaskList(newTaskList);
  };

  return (
    <TodoContext.Provider
      value={{
        taskList,
        setTaskList,
        task,
        setTask,
        taskInput,
        setTaskInput,
        handleAddTask,
        handleRemoveTask,
        handleCompleteTask
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.element
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
  const context = useContext(TodoContext);
  const {
    taskList,
    setTaskList,
    task,
    setTask,
    taskInput,
    setTaskInput,
    handleAddTask,
    handleRemoveTask,
    handleCompleteTask
  } = context;

  return {
    taskList,
    setTaskList,
    task,
    setTask,
    taskInput,
    setTaskInput,
    handleAddTask,
    handleRemoveTask,
    handleCompleteTask
  };
};
