import "./App.css";
import { ThemeProvider } from "./contexts";
import { switchThemeButton } from "./components";

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <switchThemeButton />
      </main>
    </ThemeProvider>
  );
}
