import React from "react";
// import { useRef } from "react";
import { useState } from "react";
import TaskList from "./TaskList";
import NewTask from "./NewTask";
import Edit from "./Edit";

import {
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Divider,
} from "@mui/material";

import { pink } from "@mui/material/colors";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const input = useRef();
  let [items, setItems] = useState([
    { id: 1, subject: "Bread", done: false },
    { id: 2, subject: "Butter", done: true },
    { id: 3, subject: "Egg", done: true },
  ]);

  const add = (subject) => {
    setItems([{ id: items.length + 1, subject, done: false }, ...items]);
  };

  // const add = (subject) => {
  //   try {
  //     if (subject.trim() === "") {
  //       throw new Error("Task subject cannot be empty");
  //     }

  //     setItems([{ id: items.length + 1, subject, done: false }, ...items]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const remove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggle = (id) => {
    const result = items.map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    });

    setItems(result);
  };

  const clear = () => {
    setItems(items.filter((item) => item.done));
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: pink[500] }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button onClick={clear} color="inherit">
              Clear
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth="sm" sx={{ mt: 4 }}>
                <NewTask add={add} />

                <TaskList
                  items={items.filter((item) => !item.done)}
                  remove={remove}
                  toggle={toggle}
                />

                <TaskList
                  items={items.filter((item) => item.done)}
                  remove={remove}
                  toggle={toggle}
                />
              </Container>
            }
          />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
