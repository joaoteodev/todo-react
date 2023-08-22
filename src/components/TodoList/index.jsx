// import { useTodo } from "../../context/Todo";
import { styled } from "styled-components";
import { Container } from "../Container";
import { Task } from "../Task";
import { useTodo } from "../../context/Todo";

const TodoListWrapper = styled.div`
  padding-top: 100px;
`;

export const TodoList = () => {
  const { taskList } = useTodo();

  return (
    <TodoListWrapper>
      <Container>
        {taskList.map(taskItem => {
          return <Task key={taskItem.id} taskItem={taskItem} />;
        })}
      </Container>
    </TodoListWrapper>
  );
};
