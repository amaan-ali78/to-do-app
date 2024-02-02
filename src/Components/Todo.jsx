import { useState } from "react";
import Form from "./Form";
import Lists from "./Lists";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  
  return (
    <div>
     <Form todos={todos} setTodos={setTodos}/>
     <Lists todos={todos}/>
    </div>
  );
}
