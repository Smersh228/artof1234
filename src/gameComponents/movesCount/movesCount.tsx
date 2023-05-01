import { FC, useState } from "react";
import style from "./movescount.module.css";
import { ITank } from "../../types/types";

interface IMoveCount {
  setActiveTeam: any;
  activeTeam: number;
  setDataTanks:any
  dataTank:ITank[];
  count:number;
  setCount:any
  onClickAdd:() => void
}

export const MovesCount: FC<IMoveCount> = ({ setActiveTeam, activeTeam, setDataTanks, dataTank, count, setCount,onClickAdd }) => {
  // const [count, setCount] = useState(1);


const onClick = () => {
  onClickAdd()
    if(activeTeam === 1) {
        setActiveTeam(2)
    } else {
        setActiveTeam(1)
        setCount(count+1)
       const newDataTanks = dataTank.map((tank) => {
            tank.actions.move = tank.afterStepData.move
            tank.actions.defend = tank.actions.defend >= tank.afterStepData.defend ? tank.actions.defend : tank.actions.defend+1
            tank.activeTank = true
            return tank
        })
        setDataTanks(newDataTanks)
    }
}
  return (
    <div className={style.block}>
      <div className={style.activeTeam}>ход команды номер {activeTeam}</div>
      <div className={style.count}>ход номер : {count}</div>
      <div onClick={onClick} className={style.nextTeam}>Следующий ход</div>
    </div>
  );
};
