import { Link } from "react-router-dom";

import style from "./navBar.module.css"

export const NavBar = () => {
  return (
    <div className={style.navBar}>
      <Link to="/">
        <div className={style.navBar_item}>Главное меню</div>
      </Link>
      <Link to="/info">
        <div className={style.navBar_item}>Играть</div>
      </Link>
      <div className={style.main_text}>Art Of Victory</div>
    </div>
    
  );
};
