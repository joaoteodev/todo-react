import { createContext, useState, useEffect, useContext } from "react";
import { PropTypes } from "prop-types";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  const [taskInput, setTaskInput] = useState("");
  const [taskID, setTaskId] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("taskList")) {
      const localTasks = JSON.parse(localStorage.taskList).filter(
        task => !!task
      );
      localStorage.setItem("taskList", JSON.stringify(localTasks));

      setTaskList(JSON.parse(localStorage.getItem("taskList")));
      setTaskId(Math.ceil(localStorage.getItem("taskID")) + 1);
    }
  }, []);

  const handleAddTask = () => {
    if (!taskInput.trim()) {
      return;
    }

    const newTask = {
      id: taskID,
      name: taskInput,
      completed: false
    };

    const newTaskListAdded = [...taskList, newTask];

    setTaskList(newTaskListAdded);
    setTaskInput("");

    localStorage.setItem("taskID", taskID);
    localStorage.setItem("taskList", JSON.stringify(newTaskListAdded));

    setTaskId(oldValue => oldValue + 1);
  };

  const handleCompleteTask = taskCompleted => {
    const completedTaskList = taskList.map(task => {
      task.id === taskCompleted
        ? {
            ...task,
            completed: !task.completed
          }
        : task;
    });

    setTaskList(completedTaskList);
    localStorage.setItem("taskList", JSON.stringify(completedTaskList));
  };

  const handleRemoveTask = taskDeleteID => {
    const newTaskList = taskList.filter(task => task.id !== taskDeleteID);
    setTaskList(newTaskList);

    localStorage.setItem("taskList", JSON.stringify(newTaskList));
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
