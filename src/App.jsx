import React from "react";
import "./App.css";

import { Button } from "./components";
import { useTheme } from "./contexts";

const string = "duck";

function App() {
  const { theme, toggleTheme } = useTheme();

  console.log(theme)

  return (


        <div className={`App theme--${theme}`}>
        {/* <div className={`App theme--dark`}> */}
          theme: {theme}

          <div className="card">
            <h2>My heading</h2>
            <p>My parrot-graph</p>
          </div>


          <Button />
        </div>


  );
}

export default App;
