import { useRef } from "react";
import {
  OutlinedInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { green } from "@mui/material/colors";

export default function NewTask({ add }) {
  const input = useRef();

  return (
    <form
      style={{ padding: "10px", margin: "10px" }}
      onSubmit={(e) => {
        e.preventDefault();

        let subject = input.current.value;
        if (!subject) return false;

        add(subject);

        input.current.value = "";
        input.current.focus();
      }}
    >
      <InputLabel
        style={{ padding: "2px", margin: "2px" }}
        htmlFor="task-input"
      >
        Enter a task:
      </InputLabel>
      <OutlinedInput
        color="secondary"
        fullWidth
        placeholder="Enter task"
        inputRef={input}
        endAdornment={
          <InputAdornment position="end">
            <IconButton type="submit">
              <AddIcon sx={{ color: green[500] }} />
            </IconButton>
          </InputAdornment>
        }
      ></OutlinedInput>
    </form>
  );
}
