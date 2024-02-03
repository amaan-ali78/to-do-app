import TodoList from "./TodoList";
import style from "./lists.module.css"
export default function Lists({todos,setTodos}) {
 const sortTodos=todos.slice().sort((a,b)=>Number(a.status)-Number(b.status));
  return (
    <div className={style.list}>
      {sortTodos.map((items) => (
        <TodoList key={items.name} item={items} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
