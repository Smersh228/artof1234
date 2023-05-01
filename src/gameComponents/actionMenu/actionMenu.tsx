import { useState, FC } from "react";
import style from "./actionMenu.module.css";
import commandGoImg from "../../img/taskGo.png";
import fire from "../../img/tank_fire.png";
import def from "../../img/defense.png";
import hardF from "../../img/fire_fast.png";
interface IActionMenu {
  visible: string;
  setAction?: any;
  setActiveTank: any;
}
export const ActionMenu: FC<IActionMenu> = ({
  visible = "none",
  setAction,
  setActiveTank,
}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  // setAction('')
  return (
    <div style={{ display: visible }} className={style.menu}>
      <div onClick={() => setAction("move")} className={style.menu_item}>
        <img src={commandGoImg} alt="go" />
      </div>
      <div onClick={() => setAction("fire")} className={style.menu_item}>
        <img src={fire} alt="fire" />
      </div>
      <div onClick={() => setAction("defend")} className={style.menu_item}>
        <img src={def} alt="deff" />
      </div>
      <div onClick={() => setAction("fire_hard")} className={style.menu_item}>
        <img src={hardF} alt="hard_fire" />
      </div>
      {/* <div onClick={() => setActiveTank(0)} className={style.menu_item}>
        Выйти
      </div> */}
    </div>
  );
};
