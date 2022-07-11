import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Filtrar from "../components/Filtrar";
import Form from "../components/Form";
import TodoItem from "../components/TodoItem";

// memoriaTarefas foi feito para quando fazer a filtragem ele nao exclui o que estava visualizado
export default function Home() {
  const [memoriaTarefas, setMemoriaTarefas] = useState([]);
  const [listaTarefas, setListaTarefas] = useState(memoriaTarefas);

  const adicionarTarefas = (task) => {
    setMemoriaTarefas([...memoriaTarefas, task]);
    setListaTarefas([...memoriaTarefas, task]);
  };

  // Filtragem pelo ID para deletar se for diferente
  const deletarItem = (id) => {
    let filtrar = memoriaTarefas.filter((todo) => todo.id !== id);
    setMemoriaTarefas(filtrar);
    setListaTarefas(filtrar);
  };

  // Aqui eu travei, tive que recorrer ao tio google
  const editTodo = (id, editedText) => {
    let todosArray = memoriaTarefas;

    for (let i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = editedText;
      }
    }

    setMemoriaTarefas(todosArray);
    setListaTarefas(todosArray);
  };

  const marcarCheckbox = (id, value) => {
    console.log(`id => ${id}`);
    console.log(`value => ${value}`);

    let todosArray = memoriaTarefas;

    for (let i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].done = value;
      }
    }

    console.log(todosArray);

    setMemoriaTarefas(todosArray);
  };

  const funcFiltar = (value) => {
    console.log(`aqui 1 ${value}`);
    let todosArray = [];
    if (value === "20") {
      todosArray = memoriaTarefas.filter((tarefa) => tarefa.done);
    } else if (value === "10") {
      todosArray = memoriaTarefas.filter((tarefa) => !tarefa.done);
    } else if (value === "30") {
      todosArray = memoriaTarefas;
    }

    setListaTarefas(todosArray);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "1em" }}>
      <div style={{ marginBottom: "5em" }}>
        <Filtrar funcFiltar={funcFiltar} />
      </div>

      <Form adicionarTarefas={adicionarTarefas} />
      <List sx={{ marginTop: "1em" }}>
        {listaTarefas.map((task) => (
          <div key={task.id} style={{ marginTop: "1em" }}>
            <TodoItem
              editTodo={editTodo}
              todo={task}
              deletarItem={deletarItem}
              marcarCheckbox={marcarCheckbox}
            />
          </div>
        ))}
      </List>
    </Container>
  );
}
