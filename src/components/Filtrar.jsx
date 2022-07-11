import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function Filtrar({ funcFiltar }) {
  const filtrar = (value) => {
    console.log(`value => ${value}`);
    funcFiltar(value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Filtrar
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          onChange={(e) => filtrar(e.target.value)}
        >
          <option value={10}>Não Concluidos</option>
          <option value={20}>Concluidos</option>
          <option value={30}>Todos</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
