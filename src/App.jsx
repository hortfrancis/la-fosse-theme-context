import "./App.css";
import { ThemeProvider } from "./contexts";
import { switchThemeButton } from "./components";

export default function App() {
  return (
    <div className="App">
      "In App.jsx"
      <switchThemeButton />
    </div>
  );

  // return (
  //   <ThemeProvider>
  //     <main>
  //       <switchThemeButton />
  //       'In App.jsx'
  //     </main>
  //   </ThemeProvider>
  // );
}
