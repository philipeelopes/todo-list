import Styles from "./TodoForm.module.css";
import BotaoAdicionar from "../botaoAdicionar/BotaoAdicionar";


import { useState } from "react";

export default function TodoForm( {onAdd}){
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim() === "") return;

        onAdd(text);
        setText("");
    };

    return(
        <form className={Styles.todoForm} onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Digite uma tarefa..."
            value={text}
            onChange={(e) => setText(e.target.value)} 
            />
        <BotaoAdicionar
        texto="Adicionar"
        type="submit"
        />
           
        </form>

    );
}