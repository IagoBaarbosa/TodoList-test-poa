import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ adicionarTarefas }) {
  // Tudo que ele for pegando o que foi escrito vai taca no SetTexto
  const [texto, setTexto] = useState(null);

  // State para ter o ID e vai se iniciar em 0
  const [id, setId] = useState(0);
  // criarItem vai pegar o ID
  const criarItem = (text) => {
    const itemObj = { text: text, id: id };
    setId(id + 1);
    adicionarTarefas(itemObj);
    setTexto("");
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div>
        <h2 style={{ display: "flex", justifyContent: "center" }}>
          Lista de Tarefas
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setTexto(e.target.value)}
          value={texto}
          fullWidth
        />
        <Button variant="text" onClick={() => criarItem(texto)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}
