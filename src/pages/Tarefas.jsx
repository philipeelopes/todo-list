import { useState, useEffect } from "react";
import TodoList from "../components/todoList/TodoList";
import { useNavigate } from "react-router-dom";
import BotaoExcluirTudo from "../components/botaoExcluirTudo/BotaoExcluirTudo";


import Styles from "./Tarefas.module.css"
import BotaoAdicionar from "../components/botaoAdicionar/BotaoAdicionar";


export default function Tarefas() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState(() => {
    // Carrega tarefas salvas no navegador
    const salva = localStorage.getItem("todos");
    return salva ? JSON.parse(salva) : [];
  });

  // Salva as tarefas sempre que mudarem
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  function alterarTarefa(id) {
    const atualizado = todos.map((t) =>
      t.id === id ? { ...t, completa: !t.completa } : t
    ); //altera o status da tarefa
    setTodos(atualizado);
  }

  function deletarTarefa(id) {
    const filtrado = todos.filter((t) => t.id !== id);
    setTodos(filtrado); //remove a tarefa com o id correspondente
  };

  function limparTudo() {
    setTodos([]); //remove todas as tarefas
  }



  return (
    <div className="container">

      {/* ÁREA QUE VAI PARA O PDF */}
      <div className="listaPDF">
        <TodoList
          todos={todos}
          onDelete={deletarTarefa}
          onToggle={alterarTarefa}
        />
      </div>

      <BotaoExcluirTudo
        onClear={limparTudo}
        disabled={todos.length === 0}
      />



      <button className={Styles.buttonPdf} onClick={() => window.print()}
        disabled={todos.length === 0}


      >
        Baixar lista em PDF
      </button>

      <BotaoAdicionar
        texto="Criar nova tarefa"
        variante="criar"
        onClick={() => navigate("/nova-tarefa")}
      />







    </div>


  );





}