import {
  Box,
  Icon,
  ListItemText,
  ListItem,
  IconButton,
  List,
} from "@mui/material";

import {
  Undo as UndoIcon,
  Check as CheckIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { pink, green } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function TaskList({ items, remove, toggle }) {
  return (
    <Box>
      {items.map((item) => {
        return (
          <List key={item.id}>
            <ListItem>
              <IconButton onClick={() => toggle(item.id)}>
                {item.done ? (
                  <UndoIcon />
                ) : (
                  <CheckIcon sx={{ color: green[500] }} />
                )}
              </IconButton>
              <ListItemText
                sx={{
                  ml: 3,
                  color: item.done ? "grey" : "black",
                }}
              >
                {" "}
                {item.subject}
              </ListItemText>
              <Link></Link>
              <IconButton onClick={() => remove(item.id)}>
                <DeleteIcon sx={{ color: pink[500] }} />
              </IconButton>
            </ListItem>
          </List>
        );
      })}
    </Box>
  );
}
