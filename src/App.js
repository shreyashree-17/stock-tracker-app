import { ThemeProvider, createTheme } from "@mui/material";
import Dashboard from "./components/Dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [themeLight, setThemeType] = useState(false);
  const theme = createTheme({
    palette: {
      mode: themeLight ? "light" : "dark",
      primary: {
        main: themeLight ? "#FFFFFF" : "#151718"
      }
    },
  });
  function handleThemeChange() {
    setThemeType(!themeLight);
  }
  return (
    <ThemeProvider theme={theme}>
      <Dashboard handleThemeChange={handleThemeChange} />
    </ThemeProvider>
  );
}

export default App;
