import { dataField, mockActions } from "../mockData/mockData";
import { ITank } from "../types/types";

interface IFireFunc {
  num: number;
}

const randomNumber = function () {
  return Math.floor(Math.random() * 6);
};

export const fireFunc = (
  activeTank: ITank,
  attackedTank: ITank,
  actionCommand: string
) => {
  if (
    actionCommand === mockActions.fire_hard &&
    activeTank.actions.fire.ammunition < 3
  ) {
    alert(
      "не хватает патронов для огня на подавление. используй обычную стрельбу"
    );
    return;
  }
  if (!activeTank.activeTank) {
    alert('ты уже стрелял друг');
    return;
  }
    let cellDefend
    const _findCell = dataField.filter((col) => {

        const trueCell = col.sections.find(cell => cell.col === attackedTank.coordinates.col && cell.row === attackedTank.coordinates.row)
        if (trueCell) {
            cellDefend = trueCell.baseDefend?.tanks
            //тут поиск по типу юнита (танк или парниша)
        }
    })
    console.log(cellDefend);
  let arrayRandom: number[] = [];
  let hits = 0;
  //@ts-ignore
  const intensityActiveTank = activeTank.actions.fire.intensity[attackedTank.type][activeTank.count - 1];
  let kefIntensity;
  if (activeTank.actions.move !== 2) {
    kefIntensity = intensityActiveTank / 1.5;
  } else if (actionCommand === mockActions.fire_hard) {
    kefIntensity = intensityActiveTank * 1.5;
  } else {
    kefIntensity = intensityActiveTank;
  }

  for (let i = 0; i < kefIntensity; i++) {
    const newNumber = randomNumber();
    const truth = activeTank.actions.fire.precision.find(
      (num: number) => num === newNumber
    );

    if (truth) {
      hits = hits + 1;
    }
    arrayRandom.push(newNumber);
  }
  

  let _newDataForActiveTank = { ...activeTank };
  let _newDataForAttackedTank = { ...attackedTank };
  _newDataForActiveTank.activeTank = false
  _newDataForActiveTank.actions.fire.ammunition =
    actionCommand === mockActions.fire_hard
      ? activeTank.actions.fire.ammunition - 3
      : activeTank.actions.fire.ammunition - 1;
  ;

console.log(hits);
   
    if (cellDefend) {
        hits = hits - cellDefend
    }
  console.log(hits);
  for (let i = 0; i < hits; i++) {
    if (_newDataForAttackedTank.actions.defend !== 0 || _newDataForAttackedTank.actions.defend < 0) {
      _newDataForAttackedTank.actions.defend = attackedTank.actions.defend - 1;
    }  else {
      _newDataForAttackedTank.count = _newDataForAttackedTank.count - 1
    }

  }
  return [_newDataForActiveTank, _newDataForAttackedTank];
};

//на подавление 1.5(интенсивность)(3 снаряда) на хооду(0.5)(после хода)

// deff +1у каждого но не больше изначального
