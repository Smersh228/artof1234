import { NavBar } from "../navBar/navBar";
import style from "./header.module.css"

export const Header = () => {
  return (
    <header className={style.header}>
      <NavBar />
    </header>
  );
};
