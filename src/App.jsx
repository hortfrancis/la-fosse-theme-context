import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts";
import { Button } from "./components";

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <div className="card">
          <h2 className="card-heading">Biscuits Today</h2>
          <p>Your Daily Biscuits News!</p>
        </div>
        <Button />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
