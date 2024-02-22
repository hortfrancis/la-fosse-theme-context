import { useTheme } from "../../contexts/index";

export default function Button() {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle theme</button>;
}
