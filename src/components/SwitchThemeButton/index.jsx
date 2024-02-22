import { useTheme } from "../../contexts/index";

export default function Button() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`${theme}`}>
      theme: {theme}
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
