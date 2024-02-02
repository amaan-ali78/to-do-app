import TodoList from "./TodoList";
export default function Lists({todos}) {
  return (
    <>
      {todos.map((items) => (
        <TodoList key={items} item={items} />
      ))}
    </>
  );
}
