import React from "react";
import "./App.css";
import { ThemeProvider } from "./contexts";
import { Button } from "./components";
import { useTheme } from "./contexts";

const string = "duck";

function App() {
  const { theme, toggleTheme } = useTheme();

  // const theme = "blob";
  const blob = "yes";
  console.log(blob);

  // const toggle = document.getElementById("toggle");

  // toggle.addEventListener("change", (e) => {
  //   document.body.classList.toggle("dark", e.target.checked);
  // });

  return (
    <React.StrictMode>
      <ThemeProvider>
        <div className={`${theme} ${blob}`}>
          theme: {theme}
          <Button />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
