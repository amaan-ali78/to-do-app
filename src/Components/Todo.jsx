import { useState } from "react";
import Form from "./Form";
import Lists from "./Lists";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const done = todos.filter((todo)=>todo.status).length;
  const total = todos.length;
  return (
    <div>
     <Form todos={todos} setTodos={setTodos}/>
     <Lists todos={todos} setTodos={setTodos}/>
     <Footer done={done} total={total}/>
    </div>
  );
}
