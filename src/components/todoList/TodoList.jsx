import Styles from "./TodoList.module.css";



import TodoItem from "../todoItem/TodoItem";
import { p } from "framer-motion/client";

export default function TodoList({ todos, onToggle, onDelete, onAdd }) {
    return(
     <div className={Styles.todoList}>

  <ul className={Styles.listaScroll}>
    
    {todos.length === 0 && (
      <h1 className={Styles.vazio}>
        Nenhuma tarefa adicionada
        <p className={Styles.tarefa}>
          Comece criando sua primeira tarefa para organizar seu dia.
        </p>
      </h1>
    )}

    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
        onAdd={onAdd}
      />
    ))}
  </ul>
</div>
    );
}