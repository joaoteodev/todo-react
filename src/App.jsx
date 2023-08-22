import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/Todo";

export function App() {
  return (
    <>
      <TodoProvider>
        <>
          <Header />
          <TodoList />
        </>
      </TodoProvider>
    </>
  );
}
