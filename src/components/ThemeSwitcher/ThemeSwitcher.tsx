import { usePokemonContext } from "../../context/PokemonContext";
import "./ThemeSwitcher.css"
const themesArray = ["light", "dark"]

const ThemeSwitcher = () => {
  const { theme, setTheme } = usePokemonContext()

const switchTheme = () => {
  const nextTheme = themesArray[(themesArray.indexOf(theme) + 1) % themesArray.length];
    setTheme(nextTheme);
}

  return (
    <div>
      <button className="switcher-button" onClick={switchTheme}>       
      <img src="/images/mode-icon.png" alt="Mode icon" /></button>
    </div>
  );
};
export default ThemeSwitcher;