import style from "./todolist.module.css";
export default function TodoList({ item, todos, setTodos }) {
  function handleDel(item) {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, status: !todo.status } : todo
      )
    );
  }
  const clsName = item.status ? style.completed : " ";
  return (
    <div className={style.container}>
      <div className={style.item}>
        <span className={clsName} onClick={() => handleClick(item.name)}>
          {" "}
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDel(item)} className={style.del}>
            x
          </button>
        </span>{" "}
        <hr className={style.line} />{" "}
      </div>
    </div>
  );
}
