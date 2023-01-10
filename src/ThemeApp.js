import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const ModelContext = createContext();

export default function ThemeApp({ childern }) {
  const [mode, setMode] = useState("dark");
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark"
        ? {
            text: { fade: "#888", light: "#fff" },
          }
        : {
            text: { fade: "#888", light: "#888" },
          }),
    },
  });

  return (
    <ModelContext.Provider value={changeMode}>
      <ThemeProvider theme={theme}>{childern}</ThemeProvider>
    </ModelContext.Provider>
  );
}
