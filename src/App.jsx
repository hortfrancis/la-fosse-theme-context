import "./App.css";
import { ThemeProvider } from "./contexts";
import { switchThemeButton } from "./contexts";

export default function App() {
  return (
    <ThemeProvider>
      <main>
        <switchThemeButton />
      </main>
    </ThemeProvider>
  );
}
