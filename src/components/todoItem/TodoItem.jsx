import Styles from "./TodoItem.module.css";

export default function TodoItem({ todo, onToggle, onDelete }) {
    return (

        <li className={Styles.todoItem}>

            <div className={Styles.content}>
                <input
                    className={Styles.checkbox}
                    type="checkbox"
                    checked={todo.completa}
                    onChange={() => onToggle(todo.id)}
                    id={`todo-${todo.id}`}
                />

                <label
                    htmlFor={`todo-${todo.id}`}
                    className={`${Styles.text} ${todo.completa ? Styles.feito : ""}`}
                >
                    {todo.texto}
                </label>
            </div>

            <button
                className={Styles.btnDelete}
                onClick={() => {
                    if (confirm("Tem certeza que deseja excluir")) {
                        onDelete(todo.id);
                    }
                }}
            >
                Excluir
            </button>

        </li>

    )

}