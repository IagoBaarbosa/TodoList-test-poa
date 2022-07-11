import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({
  todo,
  deletarItem,
  editTodo,
  marcarCheckbox,
}) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  React.useEffect(() => {
    console.log("aqui 1");
    console.log(todo);
  }, [todo]);

  return (
    <>
      <EditTodoDialog
        editTodo={editTodo}
        open={openDialog}
        dialogHandler={dialogHandler}
        todo={todo}
      />
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deletarItem(todo.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                tabIndex={-1}
                value={todo.done}
                checked={todo.done}
                onChange={() => marcarCheckbox(todo.id, !todo.done)}
              />
            </ListItemIcon>
            <ListItemText
              primary={todo.text}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
