import styled from "styled-components";
import { Container } from "../Container";
import { useTodo } from "../../context/Todo";

const HeaderWrapper = styled.header`
  width: 100%;
  background: #7159c1;
  text-align: center;
  color: #fff;
  padding: 50px 0 0px;
  position: relative;

  h1 {
    margin: 0;
  }

  .inputWrapper {
    position: relative;
    bottom: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px 50px;
    margin-top: 40px;
    flex-wrap: wrap;
  }
`;

const Input = styled.input`
  padding: 8px 20px;
  width: 60%;
  height: 60px;
  border-radius: 10px;
  border: 2px solid #461fa1;
  outline: none;
  transition: border 0.3s ease-in-out;
  font-size: 16px;
  min-width: 300px;

  &:focus {
    border: 2px solid #2e136d;
  }

  @media (max-width: 664px) {
    width: 100%;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  height: 60px;
  width: 200px;
  font-size: 16px;
  border: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  background: #fff;
  color: #5326bd;
  border: 2px solid #5326bd;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: #461fa1;
    border-color: #2e136d;
    color: #fff;
    /* color: #5326bd;
    background: #fff; */
  }

  &:active {
    transform: scale(1.03);
  }

  @media (max-width: 664px) {
    width: 100%;
  }
`;

export const Header = () => {
  const { taskInput, setTaskInput, handleAddTask } = useTodo();

  return (
    <HeaderWrapper>
      <Container>
        <h1>Todo List</h1>
        <div className="inputWrapper">
          <Input
            type="text"
            placeholder="Add new task..."
            onChange={e => {
              setTaskInput(e.target.value);
            }}
            value={taskInput}
          />
          <Button onClick={handleAddTask}>Add</Button>
        </div>
      </Container>
    </HeaderWrapper>
  );
};
