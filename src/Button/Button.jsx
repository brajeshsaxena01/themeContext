import { useContext } from "react";
import { ThemeContext } from "../ContextApi/ThemeContext";
import style from "./Button.module.css";

export const Button = ({ text }) => {
  const context = useContext(ThemeContext);
  console.log(context);

  const [theme, toggletheme] = useContext(ThemeContext);
  return (
    <button
      onClick={toggletheme}
      className={theme === "light" ? style.lightButton : style.darkButton}
    >
      {text}
    </button>
  );
};
