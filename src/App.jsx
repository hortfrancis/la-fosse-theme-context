import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts";
import { Button } from "./components";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <Button />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
