import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name : "" , status : false});

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({name:"",status:false});
  }
  return (
    <>
      <form className={style.formBody} onSubmit={handleSubmit}>
        <div className={style.containers}>
          {" "}
          <input
            className={style.inp}
            placeholder="Enter Task here"
            onChange={(e) => setTodo({...todo,name : e.target.value})}
            value={todo.name}
          />
          <button className={style.btn} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
