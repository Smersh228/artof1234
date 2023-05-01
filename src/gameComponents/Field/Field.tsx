import React, { useState, useMemo, useEffect } from "react";
import img from "../../img/field3.png";
import style from "./Field.module.css";
import { dataField, mockActions, mockTanks, sections } from "../../mockData/mockData";
import { UniversalTank } from "../Tanks/Tanks";
import { ICell, IDataField, ITank } from "../../types/types";
import { calcActiveCell } from "../../logicGame/calcCells";
import { ActionMenu } from "../actionMenu/actionMenu";
import {
  changeCoordinates,
  respawnCoordinates,
} from "../../logicGame/changeCoordinates";
import { fireFunc } from "../../logicGame/fireLogic";
import { MovesCount } from "../movesCount/movesCount";

interface coordinates {
  top: number;
  left: number;
  active?: boolean;
  col: number;
  row: number;
  type: number;
}
interface cell {
  row: number;
  col: number;
  type: number;
}
interface ICanGo {
  radius: number;
  cells: cell[];
}

export const Field = () => {
  const [tanks, setTanks] = useState<ITank[]>(mockTanks);

  const [activeTeam, setActiveTeam] = useState(1);
  const [activeTank, setActiveTank] = useState<number>(100); // проброс id танка
  const [attackedTank, setAttackedTank] = useState<number[]>(); // проброс id танка

  const [actionCommand, setActionCommand] = useState("");

  // const [activeMenu, setActiveMenu] = useState<number>()

  const [activeZoneGo, setActiveZoneGo] = useState<ICanGo[] | undefined>();

  const [countStep, setCountStep] = useState<number>(1);

  useEffect(() => {
    const respawnTanks = mockTanks.map((tank) => {
      tank.coordinates = respawnCoordinates(
        tank.coordinates.row,
        tank.coordinates.col
      );

      return tank;
    });
    setTanks(respawnTanks);
  }, []);

  const clickCell = (
    cell: ICell,
    col: IDataField,
    e: any,
    radius: number = 1
  ) => {
    if (e.target.className !== style.cell_active) return;

    let _newDataActiveTank = tanks?.find((tank) => tank.id === activeTank);

    console.log("move");

    if (_newDataActiveTank && tanks) {
      if (_newDataActiveTank.actions.move - radius < 0) {
        alert(
          "ты не можешь походить на эту клетку так как не хватает очков движения"
        );
        return;
      }
      _newDataActiveTank.actions.move =
        _newDataActiveTank.actions.move - radius;
      _newDataActiveTank.coordinates = changeCoordinates({
        cell: cell,
        col: col,
      });
      const _newDataTanks = tanks.map((tank) =>
        tank.id === activeTank ? _newDataActiveTank : tank
      ); // cool
      // @ts-ignore
      setTanks(_newDataTanks);

      setActionCommand(" ");
    }
    setActiveTank(0);
    setActiveZoneGo(undefined);
  };
  const brokeCommand = () => {
    setActiveZoneGo(undefined);
    setAttackedTank([]);
  };
  //Понимание комманд при нажатии в меню
  useMemo(() => {
    console.log("useMemo" + actionCommand);

    setAttackedTank([0]);
    const _dataTank =
      tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
    setActiveZoneGo(undefined);
    if (actionCommand === mockActions.move) {
      //@ts-ignore
      if (_dataTank.actions.move <= 0) {
        alert("у этого юнита нету ходов");
        // setActionCommand(" ")
        return;
      }

      const { row, col, type }: any = _dataTank.coordinates;
      setActiveZoneGo(calcActiveCell(row, col, type, 1)); //_dataTank.actions.move
    }
    if (
      actionCommand === mockActions.fire ||
      actionCommand === mockActions.fire_hard
    ) {
      if (_dataTank.actions.fire.ammunition < 1) {
        alert("патроны на минусе");
        setActionCommand(" ");
        return;
      }
      const { row, col, type }: any = _dataTank?.coordinates;

      const activeZone = calcActiveCell(row, col, type, 3);
      let _coordinateAllTanks: {
        row: number;
        col: number;
        team: number;
        id: number;
      }[] = [];
      tanks.map((tank) =>
        _coordinateAllTanks.push({
          row: tank.coordinates.row,
          col: tank.coordinates.col,
          team: tank.team,
          id: tank.id,
        })
      );
      let truthTanksAttacked: {
        row: number;
        col: number;
        team: number;
        id: number;
      }[] = [];

      const onCellForFire = activeZone.map((radius) => {
        let unitsCells = radius.cells.filter((cell) => {
          // const _coordinates = { row: cell.row, col: cell.col }
          truthTanksAttacked.push(
            ..._coordinateAllTanks.filter(
              (coord) =>
                coord.col === cell.col &&
                coord.row === cell.row &&
                activeTeam !== coord.team
            )
          );

          const _returnedBooleanCell = _coordinateAllTanks.filter(
            (coord) =>
              coord.col === cell.col &&
              coord.row === cell.row &&
              activeTeam !== coord.team
          );
          return _returnedBooleanCell.length > 0;
        });
        // console.log(test3);
        radius.cells = unitsCells;
        return radius;
      }); // нужно truthTanksAttacked.push
      setAttackedTank(truthTanksAttacked.map((coord) => coord.id));
    }
    if (actionCommand === mockActions.defend) {
      const _newDataActiveTank =
        tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
        if(_newDataActiveTank.actions.move !== _newDataActiveTank.afterStepData.move){
alert('если походил то ты не можешь идти в защиту. либо сваливай либо обороняйся воин')
return
        }
      if (
        _newDataActiveTank.actions.defend ===
        _newDataActiveTank.afterStepData.defend + 1
      ) {
        alert("не имеет смысла идти в защиту. у тебя максималка");
        return;
      }
     

      // _newDataActiveTank.afterStepData.defend = countStep;
      // _newDataActiveTank.actions.defend = _newDataActiveTank.actions.defend + 3;
      // _newDataActiveTank.actions.fire.ammunition = 0;
      _newDataActiveTank.actions.move = 0;
      _newDataActiveTank.actions.defend += 1;
      console.log("deff");
    }
    // setActionCommand(" ");
  }, [actionCommand]);

  const findAttackedTank = (tankId: number) => {
    const _truthId = attackedTank?.find((num) => tankId === num);

    return _truthId;
  };
  const clickFire = (tankProps: ITank) => {
    let _newDataActiveTank =
      tanks.find((tank) => tank.id === activeTank) || tanks[activeTank - 1];
    console.log("fire");
    const _newDataForTanksActiveAttacked = fireFunc(
      _newDataActiveTank,
      tankProps,
      actionCommand
    );
    const _newDataTanks = tanks.map((tank) => {
      return tank.id === activeTank
        ? //@ts-ignore
          _newDataForTanksActiveAttacked[0]
        : tank.id === tankProps.id
        ? //@ts-ignore
          _newDataForTanksActiveAttacked[1]
        : tank;
    });
    //@ts-ignore
    setTanks(_newDataTanks);
    setAttackedTank([0]);
    setActiveTank(0);
    setActionCommand(" ");
  };
  const openMenu = (tank: ITank) => {
    setActiveZoneGo(undefined);
    setAttackedTank([0]);
    setActionCommand(" ");
    if (tank.team !== activeTeam) return;
    // && tank.team !== activeTeam
    if (activeTank === tank.id) {
      setActiveTank(0);
      // alert("читаури запрещены");
    } else {
      setActiveTank(tank.id);
    }
  };
  const nextStep = () => {
    setActiveZoneGo(undefined);
    setAttackedTank([0]);
    setActionCommand(" ");
    setActiveTank(0);
  };

  return (
    <div className={style.field}>
      <div className={style.blockChoicePLayer}>
        <div
          onClick={() => setActiveTank(0)}
          className={style.blockChoicePLayer_item}
        >
         
        </div>
        <MovesCount
          onClickAdd={nextStep}
          setActiveTeam={setActiveTeam}
          activeTeam={activeTeam}
          setDataTanks={setTanks}
          dataTank={tanks}
          count={countStep}
          setCount={setCountStep}
        />
        <div
          onClick={() => brokeCommand()}
          className={style.blockChoicePLayer_item}
        >
          
        </div>
      </div>

      <div className={style.field_fight}>
        {tanks?.map((tank) => {
          if (tank.count <= 0) return;
          return (
            <div
              style={{
                position: "absolute",
                top: `${tank.coordinates.top}%`,
                left: `${tank.coordinates.left}%`,
              }}
              key={tank.id}
            >
              <UniversalTank
                // key={tank.id}
                onClick={() => openMenu(tank)}
                dataTank={tank}
                activeTeam={activeTeam}
                setActiveTank={setActiveTank}
                setAction={setActionCommand}
                activeTank={activeTank}
                stilisation={{
                  top: `${tank.coordinates.top}%`,
                  left: `${tank.coordinates.left}%`,
                }}
                activeMenu={tank.activeTank}
              />
              <ActionMenu
                setActiveTank={setActiveTank}
                setAction={setActionCommand}
                visible={activeTank === tank.id ? "flex" : "none"}
              />
              <div
                onClick={() => clickFire(tank)}
                style={{
                  top: `${tank.coordinates.top}%`,
                  left: `${tank.coordinates.left}%`,
                  // zIndex:"1"
                }}
                className={findAttackedTank(tank.id) ? style.activeFire : " "}
              ></div>
            </div>
          );
        })}

        {dataField.map((col, index) => {
          return (
            <div
              key={index}
              style={{
                transform: `translate(${col.kef * -19}%, ${
                  (col.type - 1) * 6
                }%)`,
              }}
              className={style.col}
            >
              {col.sections.map((cell) => {
                const activeSell = activeZoneGo?.find((radius) =>
                  radius.cells.find(
                    (item) => item.col === cell.col && item.row === cell.row
                  )
                );

                return (
                  <div
                    key={cell.id}
                    style={{ position: "relative" }}
                    className={style.cell}
                    onClick={(e) => clickCell(cell, col, e, cell.kef || 0.5)}
                  >
                    <div
                      className={
                        activeSell ? style.cell_active : style.cell_disActive
                      }
                    ></div>
                    <img className={style.img1} src={cell.img || img} alt="" />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        zIndex: "5",
                      }}
                    >
                      
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={style.list__tanks}>
        <ol>
          {tanks?.map((tank) => (
            <li key={tank.team}>
              team - {tank.team} , tank - {tank.id}
              <ul>
                <li>название танка - {tank.name}</li>
                <li>движения - {tank.actions.move}</li>
                <li>боеприпасы - {tank.actions.fire.ammunition}</li>
                <li>защита - {tank.actions.defend}</li>
                <li>экипаж - {tank.count}</li>
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
